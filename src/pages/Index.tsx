
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import InteractiveUniverseSection from '../components/InteractiveUniverseSection';
import DiscoverSection from '../components/DiscoverSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-foreground">
      {/* Construction Banner */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-yellow-400 text-black text-center py-1 text-xs font-mono uppercase tracking-wider">
        Website Under Construction
      </div>
      
      {/* Add top padding to account for the banner */}
      <div className="pt-6">
        <Navigation />
        <Hero />
        <InteractiveUniverseSection />
        <DiscoverSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
