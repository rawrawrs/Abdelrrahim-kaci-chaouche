
import React, { useState, useEffect, useRef } from 'react';

const DiscoverSection = () => {
  const [visibleStudies, setVisibleStudies] = useState<number[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const lightRef = useRef<HTMLDivElement>(null);

  const studies = [
    "Quantum Mechanics and Consciousness",
    "The Nature of Time and Reality", 
    "Artificial Intelligence and Human Cognition",
    "Philosophy of Mind and Materiality",
    "Computational Theory of Everything",
    "Information Theory and Reality",
    "Emergence in Complex Systems",
    "The Hard Problem of Consciousness",
    "Quantum Information Processing",
    "Mathematical Foundations of Reality",
    "Cognitive Architecture Studies",
    "Neural Networks and Brain Function",
    "Philosophical Implications of AI",
    "Consciousness and Free Will",
    "The Observer Effect in Physics"
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate studies appearing one by one
          studies.forEach((_, index) => {
            setTimeout(() => {
              setVisibleStudies(prev => [...prev, index]);
            }, index * 150);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (lightRef.current) {
      const rect = lightRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePosition({ x, y });
    }
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setMousePosition({ x: 50, y: 50 });
  };

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen bg-white text-foreground py-20 px-6 md:px-8 relative overflow-hidden"
      id="discover"
    >
      {/* Light background */}
      <div className="absolute inset-0 bg-white z-0"></div>
      
      {/* Interactive light beam effect */}
      <div 
        ref={lightRef}
        className="absolute right-0 top-0 w-1/2 h-full z-10 cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Main light beam with water effect */}
        <div 
          className="absolute inset-0 transition-all duration-300 ease-out"
          style={{
            background: `radial-gradient(ellipse ${isHovering ? '600px 400px' : '800px 600px'} at ${mousePosition.x}% ${mousePosition.y}%, 
              rgba(0, 0, 0, ${isHovering ? '0.15' : '0.08'}) 0%, 
              rgba(0, 0, 0, ${isHovering ? '0.08' : '0.04'}) 30%, 
              rgba(0, 0, 0, ${isHovering ? '0.03' : '0.01'}) 60%, 
              transparent 100%)`,
            filter: isHovering ? 'blur(8px)' : 'blur(20px)',
            transform: isHovering ? `scale(1.1) rotate(${(mousePosition.x - 50) * 0.1}deg)` : 'scale(1) rotate(0deg)',
          }}
        />
        
        {/* Secondary ripple effect */}
        {isHovering && (
          <div 
            className="absolute inset-0 animate-pulse"
            style={{
              background: `radial-gradient(circle 300px at ${mousePosition.x}% ${mousePosition.y}%, 
                rgba(0, 0, 0, 0.1) 0%, 
                rgba(0, 0, 0, 0.05) 50%, 
                transparent 100%)`,
              filter: 'blur(15px)',
              transform: `scale(${1 + Math.sin(Date.now() * 0.005) * 0.1})`,
            }}
          />
        )}
        
        {/* Distortion waves */}
        {isHovering && (
          <>
            <div 
              className="absolute inset-0 opacity-60"
              style={{
                background: `conic-gradient(from ${mousePosition.x * 3.6}deg at ${mousePosition.x}% ${mousePosition.y}%, 
                  transparent 0deg, 
                  rgba(0, 0, 0, 0.05) 90deg, 
                  transparent 180deg, 
                  rgba(0, 0, 0, 0.03) 270deg, 
                  transparent 360deg)`,
                filter: 'blur(25px)',
                transform: `rotate(${Math.sin(Date.now() * 0.003) * 10}deg)`,
              }}
            />
          </>
        )}
      </div>
      
      <div className="max-w-4xl mx-auto relative z-20">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-sm text-muted-foreground font-inter uppercase tracking-wider">
              [ Some knowledge ]
            </span>
          </div>
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-inter font-light text-muted-foreground mb-6">
            Discover with
          </h2>
          <h3 className="text-6xl md:text-7xl lg:text-8xl font-inter font-light text-foreground">
            Abdel Rahim
          </h3>
        </div>

        <div className="space-y-4 mt-32">
          {studies.map((study, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ease-out ${
                visibleStudies.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${index * 50}ms`
              }}
            >
              <div className="flex items-center justify-between py-4 border-b border-border hover:border-muted-foreground transition-colors duration-300 cursor-pointer group">
                <h4 className="text-xl font-libre-baskerville font-normal text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                  {study}
                </h4>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground font-inter">
                    RESEARCH
                  </span>
                  <button className="px-6 py-2 border border-border text-foreground text-sm font-inter hover:bg-foreground hover:text-background transition-all duration-300">
                    READ
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
