
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TrafpOdc = () => {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Helmet>
        <title>TRAFTP-ODC: Training-Free Pipeline for Object Detection and Classification - Abderrahim kaci Choauche</title>
        <meta name="description" content="Explore TRAFTP-ODC, a transformative leap in object detection that makes it possible to recognize objects without the need for training complex AI models. A fast, flexible, and user-friendly system that adapts to different visual tasks with ease." />
        <meta name="keywords" content="TRAFTP-ODC, object detection, classification, artificial intelligence, machine learning, training-free, Abderrahim kaci Choauche, computer vision" />
        <meta property="og:title" content="TRAFTP-ODC: Training-Free Pipeline for Object Detection and Classification - Abderrahim kaci Choauche" />
        <meta property="og:description" content="Explore TRAFTP-ODC, a transformative leap in object detection that makes it possible to recognize objects without the need for training complex AI models. A fast, flexible, and user-friendly system that adapts to different visual tasks with ease." />
        <meta property="og:url" content="https://abdelrahim.com/trafp-odc" />
        <meta name="twitter:title" content="TRAFTP-ODC: Training-Free Pipeline for Object Detection and Classification - Abderrahim kaci Choauche" />
        <meta name="twitter:description" content="Explore TRAFTP-ODC, a transformative leap in object detection that makes it possible to recognize objects without the need for training complex AI models. A fast, flexible, and user-friendly system that adapts to different visual tasks with ease." />
        <link rel="canonical" href="https://abdelrahim.com/trafp-odc" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "headline": "Training-Free Pipeline for Object Detection and Classification",
            "description": "Explore TRAFTP-ODC, a transformative leap in object detection that makes it possible to recognize objects without the need for training complex AI models. A fast, flexible, and user-friendly system that adapts to different visual tasks with ease.",
            "author": {
              "@type": "Person",
              "name": "Abderrahim kaci Choauche"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Abderrahim kaci Choauche",
              "logo": {
                "@type": "ImageObject",
                "url": "https://abdelrahim.com/images/white-thumbnail.svg"
              }
            },
            "datePublished": "2025-06-11",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://abdelrahim.com/trafp-odc"
            },
            "keywords": "TRAFTP-ODC, object detection, classification, artificial intelligence, machine learning, training-free"
          })}
        </script>
      </Helmet>
      <div className="pt-6">
        <Navigation />
        
        {/* Main Content */}
        <main className="min-h-screen flex items-center justify-center px-6 md:px-8 py-20">
          <div className="max-w-4xl mx-auto text-left space-y-8">
            {/* Date */}
            <div className="text-sm text-muted-foreground font-mono uppercase tracking-wider">
              JUNE 11, 2025
            </div>
            
            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-libre-baskerville font-normal leading-tight tracking-tight">
              Training-Free Pipeline for Object Detection and Classification
            </h1>
            
            {/* Main Content Text */}
            <div className="text-base md:text-lg font-inter leading-relaxed max-w-3xl space-y-6 pt-8">
              <p>
                I am thrilled to introduce a transformative leap in object detection with TRAFP-ODC. This new approach makes it possible to recognize objects without the need for training complex AI models. It works by analyzing images, identifying key regions, and understanding their structure intelligently. Advanced techniques are used behind the scenes to match visual elements with reference examples. The result is a fast, flexible, and user-friendly system that adapts to different visual tasks with ease.
              </p>
              
              <p>
                It opens the door to powerful visual understanding, without the usual barriers of data, time, or expertise. On this page, I share the full research paper, detailed methodology, and key insights to help you explore and understand this innovation.
              </p>
            </div>
            
            {/* Research Paper Button */}
            <div className="pt-8">
              <a 
                href="/pdfs/Trafp-odc.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors duration-300 font-inter"
              >
                View Research Paper
              </a>
            </div>

            {/* Value Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
              {/* Zero Training */}
              <div className="p-8 border border-muted bg-background space-y-6">
                <div className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
                  NO NEED TO TRAIN
                </div>
                <div className="space-y-2">
                  <div className="text-5xl md:text-6xl font-bold text-foreground">
                    Zero
                  </div>
                  <div className="text-lg text-muted-foreground">
                    Training
                  </div>
                </div>
              </div>

              {/* No Black Box */}
              <div className="p-8 border border-muted bg-background space-y-6">
                <div className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
                  FULL CONTROL AND UNDERSTANDING
                </div>
                <div className="space-y-2">
                  <div className="text-5xl md:text-6xl font-bold text-foreground">
                    No
                  </div>
                  <div className="text-lg text-muted-foreground">
                    Black box
                  </div>
                </div>
              </div>

              {/* 91%-99% Accuracy */}
              <div className="p-8 border border-muted bg-background space-y-6">
                <div className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
                  91 TO 99 PERCENT ACCURATE
                </div>
                <div className="space-y-2">
                  <div className="text-4xl md:text-5xl font-bold text-foreground">
                    91%-99%
                  </div>
                  <div className="text-lg text-muted-foreground">
                    Accuracy
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        
        {/* Other Work Section */}
        <div className="max-w-3xl mx-auto mt-16 px-6 md:px-8 pb-20">
          <h2 className="text-2xl font-bold mb-6">Other Work</h2>
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
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default TrafpOdc;
