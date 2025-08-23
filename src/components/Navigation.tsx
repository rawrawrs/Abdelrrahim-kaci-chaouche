
import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Background that changes based on scroll */}
      <div className={`absolute inset-0 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white opacity-100' 
          : 'bg-transparent opacity-0'
      }`}></div>
      
      <div className="relative z-10 p-6 md:p-8">
        <div className="max-w-7xl mx-auto flex justify-between items-start">
          <div className="space-y-1">
            <div className="flex items-center gap-4">
              <h1 className="text-lg md:text-xl font-libre-baskerville font-normal tracking-wide transition-colors duration-500 text-foreground">
                Abderrahim kaci Chaouche
              </h1>
            </div>
          </div>
          
          <div className="flex gap-8 text-sm md:text-base">
            <a 
              href="#archive" 
              className="font-libre-baskerville font-normal hover:text-primary transition-colors duration-300 story-link text-foreground"
            >
              Archive
            </a>
            <a 
              href="#contact" 
              className="font-libre-baskerville font-normal hover:text-primary transition-colors duration-300 story-link text-foreground"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
