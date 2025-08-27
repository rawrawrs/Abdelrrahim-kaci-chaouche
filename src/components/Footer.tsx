
import React from 'react';

const Footer = () => {
  return (
    <footer className="relative z-10 p-6 md:p-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-xs text-muted-foreground font-inter">
            © 2024 Abderrahim kaci Choauche
          </div>
          <div className="mt-2 md:mt-0">
            <a href="/sitemap.xml" className="text-xs text-muted-foreground font-inter hover:underline">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
