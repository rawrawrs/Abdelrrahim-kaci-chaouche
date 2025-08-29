import React from 'react';

const ContactSection = () => {
  return (
    <section className="bg-background text-foreground py-20 px-6 md:px-8" id="contact">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-sm text-muted-foreground font-inter uppercase tracking-wider">
              [ Contact ]
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-inter font-light mb-6">
            Get in Touch
          </h2>
        </div>

        {/* Simple Contact Section */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-inter font-light mb-6">Reach Out</h3>
                <p className="text-muted-foreground mb-6">
                  I'm always open to discussing research, ideas, or potential collaborations.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Email</h4>
                    <p className="font-medium">abdelrahim.kacich@gmail.com</p>
                  </div>
                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Location</h4>
                    <p className="font-medium">Worldwide</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-inter font-light mb-6">Connect</h3>
                <div className="space-y-4">
                  <a href="https://www.youtube.com/@AbderrahimKaciChaouche" target="_blank" rel="noopener noreferrer" className="block p-4 border border-border hover:border-foreground transition-colors duration-300">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">YouTube</span>
                      <span>→</span>
                    </div>
                  </a>
                  <a href="https://www.linkedin.com/in/abdel-rahim-kaci-chaouche-ai/" target="_blank" rel="noopener noreferrer" className="block p-4 border border-border hover:border-foreground transition-colors duration-300">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">LinkedIn</span>
                      <span>→</span>
                    </div>
                  </a>
                  <a href="https://x.com/AbderrahimKc" target="_blank" rel="noopener noreferrer" className="block p-4 border border-border hover:border-foreground transition-colors duration-300">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Twitter</span>
                      <span>→</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
