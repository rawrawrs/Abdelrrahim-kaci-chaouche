
import React, { useState, useRef, useEffect } from 'react';

const InteractiveUniverseSection = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [autoRotation, setAutoRotation] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const lastMousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setAutoRotation(prev => prev + 0.5);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    lastMousePosition.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    const deltaX = e.clientX - lastMousePosition.current.x;
    const deltaY = e.clientY - lastMousePosition.current.y;

    setRotation(prev => ({
      x: prev.x + deltaY * 0.5,
      y: prev.y + deltaX * 0.5
    }));

    lastMousePosition.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const generateStarsAndCubes = () => {
    const elements = [];
    
    // Generate radiating lines with cubes
    for (let i = 0; i < 60; i++) {
      const angle = (i * 6) * (Math.PI / 180);
      const length = 800;
      const x2 = 960 + Math.cos(angle) * length;
      const y2 = 540 + Math.sin(angle) * length;
      
      // Cube position along the line
      const cubeDistance = 200 + (i % 3) * 150;
      const cubeX = 960 + Math.cos(angle) * cubeDistance;
      const cubeY = 540 + Math.sin(angle) * cubeDistance;
      
      elements.push(
        <g key={`line-${i}`}>
          <line
            x1="960"
            y1="540"
            x2={x2}
            y2={y2}
            stroke="black"
            strokeWidth="0.5"
            opacity="0.1"
          />
          <rect
            x={cubeX - 2}
            y={cubeY - 2}
            width="4"
            height="4"
            fill="black"
            opacity="0.3"
            transform={`rotate(${rotation.y * 0.5 + autoRotation * 0.3} ${cubeX} ${cubeY})`}
          />
        </g>
      );
    }

    // Stars with auto-rotation
    for (let i = 0; i < 100; i++) {
      const x = Math.random() * 1920;
      const y = Math.random() * 1080;
      const size = Math.random() * 2 + 0.5;
      
      elements.push(
        <circle
          key={`star-${i}`}
          cx={x}
          cy={y}
          r={size}
          fill="black"
          opacity={Math.random() * 0.2 + 0.05}
          transform={`rotate(${rotation.x * 0.3 + rotation.y * 0.2 + autoRotation * 0.1} ${x} ${y})`}
        />
      );
    }

    return elements;
  };

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen bg-white text-black flex items-center justify-center relative overflow-hidden cursor-grab active:cursor-grabbing"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Interactive background */}
      <div className="absolute inset-0">
        <svg 
          className="w-full h-full" 
          viewBox="0 0 1920 1080" 
          preserveAspectRatio="xMidYMid slice"
          style={{
            transform: `rotate3d(1, 0, 0, ${rotation.x * 0.1}deg) rotate3d(0, 1, 0, ${rotation.y * 0.1}deg)`
          }}
        >
          {generateStarsAndCubes()}
          
          {/* Emphasized lines */}
          {Array.from({ length: 12 }, (_, i) => {
            const angle = (i * 30) * (Math.PI / 180);
            const length = 1200;
            const x2 = 960 + Math.cos(angle) * length;
            const y2 = 540 + Math.sin(angle) * length;
            
            // Cube on emphasized lines
            const cubeX = 960 + Math.cos(angle) * 300;
            const cubeY = 540 + Math.sin(angle) * 300;
            
            return (
              <g key={`emphasized-${i}`}>
                <line
                  x1="960"
                  y1="540"
                  x2={x2}
                  y2={y2}
                  stroke="black"
                  strokeWidth="1"
                  opacity="0.15"
                />
                <rect
                  x={cubeX - 3}
                  y={cubeY - 3}
                  width="6"
                  height="6"
                  fill="black"
                  opacity="0.4"
                  transform={`rotate(${rotation.y * 0.8 + autoRotation * 0.5} ${cubeX} ${cubeY})`}
                />
              </g>
            );
          })}
        </svg>
      </div>

      {/* Content with fade animation */}
      <div className={`relative z-10 text-center transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <h2 className="text-6xl md:text-8xl lg:text-9xl font-inter font-light mb-8">
          Understand
        </h2>
        <h3 className="text-4xl md:text-6xl lg:text-7xl font-inter font-light text-gray-600">
          The Universe
        </h3>
      </div>
    </section>
  );
};

export default InteractiveUniverseSection;
