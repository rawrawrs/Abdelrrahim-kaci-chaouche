
import React, { useEffect, useRef } from 'react';

interface BinaryNumber {
  x: number;
  y: number;
  value: string;
  speed: number;
  opacity: number;
  angle: number;
  radius: number;
  centerX: number;
  centerY: number;
}

const BinaryBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const binaryNumbers = useRef<BinaryNumber[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createBinaryNumbers = () => {
      binaryNumbers.current = [];
      const count = Math.floor((window.innerWidth * window.innerHeight) / 15000);
      
      for (let i = 0; i < count; i++) {
        const centerX = Math.random() * canvas.width;
        const centerY = Math.random() * canvas.height;
        const radius = 50 + Math.random() * 150;
        const angle = Math.random() * Math.PI * 2;
        
        binaryNumbers.current.push({
          x: centerX + Math.cos(angle) * radius,
          y: centerY + Math.sin(angle) * radius,
          value: Math.random() > 0.5 ? '1' : '0',
          speed: 0.002 + Math.random() * 0.005,
          opacity: 0.05 + Math.random() * 0.15,
          angle,
          radius,
          centerX,
          centerY,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#888888';
      ctx.font = '14px monospace';
      
      binaryNumbers.current.forEach((num) => {
        // Update circular motion
        num.angle += num.speed;
        num.x = num.centerX + Math.cos(num.angle) * num.radius;
        num.y = num.centerY + Math.sin(num.angle) * num.radius;
        
        // Randomly change the binary value
        if (Math.random() < 0.001) {
          num.value = Math.random() > 0.5 ? '1' : '0';
        }
        
        // Fade effect
        num.opacity = 0.05 + Math.sin(Date.now() * 0.001 + num.angle) * 0.1;
        
        ctx.globalAlpha = num.opacity;
        ctx.fillText(num.value, num.x, num.y);
      });
      
      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createBinaryNumbers();
    animate();

    const handleResize = () => {
      resizeCanvas();
      createBinaryNumbers();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-30"
      style={{ zIndex: 1 }}
    />
  );
};

export default BinaryBackground;
