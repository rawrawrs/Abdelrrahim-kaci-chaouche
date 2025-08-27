
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Helmet>
        <title>Abderrahim kaci Choauche - AI Researcher & Cognitive Architect</title>
        <meta name="description" content="Explore groundbreaking AI research by Abderrahim kaci Choauche. Discover Syntrons and TRAFP-ODC frameworks pushing the boundaries of artificial superintelligence and cognitive architecture." />
        <meta name="keywords" content="Abderrahim kaci Choauche, artificial intelligence, machine learning, Syntrons, TRAFP-ODC, neuroscience, cognitive architecture, ASI, artificial superintelligence, AI research" />
        <meta property="og:title" content="Abderrahim kaci Choauche - AI Researcher & Cognitive Architect" />
        <meta property="og:description" content="Explore groundbreaking AI research by Abderrahim kaci Choauche. Discover Syntrons and TRAFP-ODC frameworks pushing the boundaries of artificial superintelligence and cognitive architecture." />
        <meta property="og:url" content="https://abdelrahim.com/" />
        <meta name="twitter:title" content="Abderrahim kaci Choauche - AI Researcher & Cognitive Architect" />
        <meta name="twitter:description" content="Explore groundbreaking AI research by Abderrahim kaci Choauche. Discover Syntrons and TRAFP-ODC frameworks pushing the boundaries of artificial superintelligence and cognitive architecture." />
        <link rel="canonical" href="https://abdelrahim.com/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Abderrahim kaci Choauche",
            "url": "https://abdelrahim.com/",
            "description": "Abderrahim kaci Choauche is an AI researcher and cognitive architect specializing in artificial intelligence research, including Syntrons and TRAFP-ODC frameworks for artificial superintelligence.",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://abdelrahim.com/"
            },
            "jobTitle": "AI Researcher & Cognitive Architect",
            "knowsAbout": ["Artificial Intelligence", "Machine Learning", "Cognitive Architecture", "Artificial Superintelligence"],
            "sameAs": [
              "https://twitter.com/abdelrahim",
              "https://linkedin.com/in/abdelrahim",
              "https://github.com/abdelrahim"
            ]
          })}
        </script>
      </Helmet>
      <div className="pt-6">
        <Navigation />
        <Hero />
        
        {/* Previous Work Section */}
        <div className="max-w-3xl mx-auto mt-16 px-6 md:px-8">
          <h2 className="text-2xl font-bold mb-6">Previous Work</h2>
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
        
        {/* Get in Touch Section */}
        <div className="max-w-3xl mx-auto mt-16 px-6 md:px-8 pb-20">
          <ContactSection />
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
