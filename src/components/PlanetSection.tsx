
import React from 'react';
import Globe3D from './Globe3D';

const PlanetSection = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Left Content */}
      <div>
        <div className="mb-8">
          <span className="text-sm text-muted-foreground font-mono uppercase tracking-wider">
            [ GLOBAL REACH ]
          </span>
        </div>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-inter font-light mb-8 leading-tight">
          Establish a strategic collaboration
          <br />
          <span className="text-primary">with Abdel Rahim</span>
        </h2>

        <p className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-lg">
          Available for remote collaboration worldwide. 
          Experience working across different time zones 
          and cultural contexts to deliver exceptional 
          results on complex projects.
        </p>
      </div>

      {/* Right Globe Visualization */}
      <div className="relative h-96 lg:h-[500px] flex items-center justify-center">
        <Globe3D />
      </div>
    </div>
  );
};

export default PlanetSection;
