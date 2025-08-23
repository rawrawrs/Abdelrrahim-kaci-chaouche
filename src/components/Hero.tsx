
import React from 'react';
import TextDecodeAnimation from './TextDecodeAnimation';

const Hero = () => {
  return (
    <main className="min-h-screen flex flex-col justify-center px-6 md:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="space-y-16 md:space-y-24 mt-20">
          <section className="animate-fade-in">
            <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-inter">
              <TextDecodeAnimation 
                text="Source code" 
                delay={0}
                className="text-sm uppercase tracking-wider text-muted-foreground font-inter"
              />
            </h2>
            <div className="w-8 h-px bg-foreground mb-8"></div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-inter font-normal leading-tight">
              <TextDecodeAnimation 
                text="My name is Abdel Rahim kaci Chaouche, Founder, Thinker." 
                delay={500}
                className="text-3xl md:text-5xl lg:text-6xl font-inter font-normal leading-tight"
              />
            </h1>
          </section>

          <section className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-inter">
              <TextDecodeAnimation 
                text="Story" 
                delay={1000}
                className="text-sm uppercase tracking-wider text-muted-foreground font-inter"
              />
            </h2>
            <div className="w-8 h-px bg-foreground mb-8"></div>
            <p className="text-lg md:text-xl text-muted-foreground font-inter">
              <TextDecodeAnimation 
                text="Soon" 
                delay={1500}
                className="text-lg md:text-xl text-muted-foreground font-inter"
              />
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Hero;
