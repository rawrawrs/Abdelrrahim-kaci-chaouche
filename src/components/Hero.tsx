
import React from 'react';

const Hero = () => {
  return (
    <main className="min-h-screen flex flex-col justify-center px-6 md:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="space-y-16 md:space-y-24 mt-20">
          <section className="animate-fade-in">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-inter font-normal leading-tight">
              Abderrahim kaci Chaouche
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-inter mt-4">
              Establish a collaboration
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Hero;
