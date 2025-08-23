
import React from 'react';

const UniverseSection = () => {
  return (
    <section className="min-h-screen bg-white text-black flex items-center justify-center relative overflow-hidden">
      {/* Radiating lines background */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="stars" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="30" r="1" fill="black" opacity="0.1"/>
              <circle cx="80" cy="80" r="1.5" fill="black" opacity="0.15"/>
              <circle cx="150" cy="50" r="1" fill="black" opacity="0.1"/>
              <circle cx="170" cy="120" r="1" fill="black" opacity="0.08"/>
              <circle cx="40" cy="160" r="1.5" fill="black" opacity="0.15"/>
            </pattern>
          </defs>
          
          {/* Background stars */}
          <rect width="100%" height="100%" fill="url(#stars)"/>
          
          {/* Radiating lines from center */}
          {Array.from({ length: 60 }, (_, i) => {
            const angle = (i * 6) * (Math.PI / 180);
            const length = 800;
            const x2 = 960 + Math.cos(angle) * length;
            const y2 = 540 + Math.sin(angle) * length;
            return (
              <line
                key={i}
                x1="960"
                y1="540"
                x2={x2}
                y2={y2}
                stroke="black"
                strokeWidth="0.5"
                opacity="0.1"
              />
            );
          })}
          
          {/* Additional longer lines for emphasis */}
          {Array.from({ length: 12 }, (_, i) => {
            const angle = (i * 30) * (Math.PI / 180);
            const length = 1200;
            const x2 = 960 + Math.cos(angle) * length;
            const y2 = 540 + Math.sin(angle) * length;
            return (
              <line
                key={`long-${i}`}
                x1="960"
                y1="540"
                x2={x2}
                y2={y2}
                stroke="black"
                strokeWidth="1"
                opacity="0.15"
              />
            );
          })}
        </svg>
      </div>

      {/* Floating squares */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }, (_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-black opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
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

export default UniverseSection;
