
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import InteractiveUniverseSection from '../components/InteractiveUniverseSection';
import DiscoverSection from '../components/DiscoverSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Helmet>
        <title>Abdel Rahim kaci Chaouche - Founder, Thinker</title>
        <meta name="description" content="Personal website of Abdel Rahim kaci Chaouche - Founder and Thinker. Explore innovative research in artificial intelligence, including Syntrons and TRAFP-ODC." />
        <meta name="keywords" content="Abdel Rahim kaci Chaouche, artificial intelligence, machine learning, Syntrons, TRAFP-ODC, neuroscience, cognitive architecture" />
        <meta property="og:title" content="Abdel Rahim kaci Chaouche - Founder, Thinker" />
        <meta property="og:description" content="Personal website of Abdel Rahim kaci Chaouche - Founder and Thinker. Explore innovative research in artificial intelligence, including Syntrons and TRAFP-ODC." />
        <meta property="og:url" content="https://abdelrahim.com/" />
        <meta name="twitter:title" content="Abdel Rahim kaci Chaouche - Founder, Thinker" />
        <meta name="twitter:description" content="Personal website of Abdel Rahim kaci Chaouche - Founder and Thinker. Explore innovative research in artificial intelligence, including Syntrons and TRAFP-ODC." />
        <link rel="canonical" href="https://abdelrahim.com/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Abdel Rahim kaci Chaouche",
            "url": "https://abdelrahim.com/",
            "jobTitle": "Founder, Thinker",
            "description": "Abdel Rahim kaci Chaouche is a founder and thinker specializing in artificial intelligence research, including Syntrons and TRAFP-ODC.",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://abdelrahim.com/"
            }
          })}
        </script>
      </Helmet>
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
        
        {/* Other Work Section */}
        <div className="max-w-3xl mx-auto mt-16 px-6 md:px-8 pb-20">
          <h2 className="text-2xl font-bold mb-6">Other Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a href="/syntrons" className="block group">
              <div className="flex flex-col sm:flex-row items-center bg-muted/30 rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow border border-muted cursor-pointer">
                
                <div className="flex-1 p-6 text-left">
                  <div className="text-xl font-semibold mb-2 group-hover:underline">Syntrons</div>
                  <div className="text-muted-foreground mb-1 text-sm font-mono uppercase tracking-wider">The ASI Shift</div>
                  <div className="text-base md:text-lg font-inter leading-relaxed">
                    From Weights to Syntrons: A revolutionary departure from traditional weight-based neural architectures
                  </div>
                </div>
              </div>
            </a>
            
            <a href="/trafp-odc" className="block group">
              <div className="flex flex-col sm:flex-row items-center bg-muted/30 rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow border border-muted cursor-pointer">
                
                <div className="flex-1 p-6 text-left">
                  <div className="text-xl font-semibold mb-2 group-hover:underline">TRAFTP-ODC</div>
                  <div className="text-muted-foreground mb-1 text-sm font-mono uppercase tracking-wider">Training-Free Pipeline</div>
                  <div className="text-base md:text-lg font-inter leading-relaxed">
                    Training-Free Pipeline for Real-Time Object Detection and Classification
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
