
import React, { useState, useEffect } from 'react';
import { Upload } from 'lucide-react';

const ObjectDetectionDemo = () => {
  const [stage, setStage] = useState(0); // 0: upload, 1: processing, 2: result
  const [isDragOver, setIsDragOver] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setStage((prev) => {
        if (prev === 2) {
          // Reset after showing result for 3 seconds
          setTimeout(() => setStage(0), 3000);
          return 2;
        }
        return prev + 1;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (stage === 0) {
      // Simulate drag over effect
      const dragTimeout = setTimeout(() => {
        setIsDragOver(true);
        setTimeout(() => setIsDragOver(false), 500);
      }, 1000);
      return () => clearTimeout(dragTimeout);
    }
  }, [stage]);

  return (
    <div className="max-w-2xl mx-auto mt-16 p-8 border border-muted rounded-lg bg-background">
      <h3 className="text-xl font-libre-baskerville mb-6 text-center">Live Demo</h3>
      
      <div className="relative aspect-video bg-muted/20 rounded-lg overflow-hidden">
        {/* Upload Stage */}
        {stage === 0 && (
          <div className={`h-full flex flex-col items-center justify-center transition-all duration-300 ${isDragOver ? 'bg-primary/10 border-primary' : ''}`}>
            <div className="relative">
              <Upload className={`w-16 h-16 text-muted-foreground transition-all duration-300 ${isDragOver ? 'text-primary scale-110' : ''}`} />
              {isDragOver && (
                <div className="absolute -top-8 -left-8 w-32 h-32 border-2 border-dashed border-primary rounded-lg animate-pulse" />
              )}
            </div>
            <p className="mt-4 text-muted-foreground font-inter">Drop an image here</p>
            {isDragOver && (
              <div className="absolute top-4 left-4 w-16 h-16 bg-blue-500 rounded opacity-80 animate-bounce">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop" 
                  alt="Sample image" 
                  className="w-full h-full object-cover rounded"
                />
              </div>
            )}
          </div>
        )}

        {/* Processing Stage */}
        {stage === 1 && (
          <div className="h-full flex flex-col items-center justify-center bg-primary/5">
            <div className="relative w-32 h-32 mb-4">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop" 
                alt="Processing image" 
                className="w-full h-full object-cover rounded"
              />
              <div className="absolute inset-0 bg-primary/20 rounded animate-pulse" />
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
            </div>
            <p className="mt-2 text-primary font-inter">Processing...</p>
          </div>
        )}

        {/* Result Stage */}
        {stage === 2 && (
          <div className="h-full flex items-center justify-center bg-green-50">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop" 
                alt="Detected objects" 
                className="w-48 h-48 object-cover rounded"
              />
              {/* Bounding boxes */}
              <div className="absolute top-8 left-8 w-16 h-16 border-2 border-green-500 bg-green-500/10 rounded animate-pulse">
                <div className="absolute -top-6 left-0 bg-green-500 text-white text-xs px-2 py-1 rounded">
                  Circuit (98%)
                </div>
              </div>
              <div className="absolute top-20 right-12 w-20 h-12 border-2 border-blue-500 bg-blue-500/10 rounded animate-pulse">
                <div className="absolute -top-6 left-0 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                  Chip (95%)
                </div>
              </div>
              <div className="absolute bottom-8 left-16 w-12 h-12 border-2 border-orange-500 bg-orange-500/10 rounded animate-pulse">
                <div className="absolute -top-6 left-0 bg-orange-500 text-white text-xs px-2 py-1 rounded">
                  Resistor (92%)
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className="mt-4 text-center">
        <div className="flex justify-center space-x-2">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                stage === index ? 'bg-primary' : 'bg-muted'
              }`}
            />
          ))}
        </div>
        <p className="mt-2 text-sm text-muted-foreground font-inter">
          {stage === 0 && "1. Upload Image"}
          {stage === 1 && "2. AI Processing"}
          {stage === 2 && "3. Object Detection Results"}
        </p>
      </div>
    </div>
  );
};

export default ObjectDetectionDemo;
