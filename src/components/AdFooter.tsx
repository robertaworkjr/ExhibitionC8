import React from 'react';
import { getLogosForBackground } from '@/config/logos';

const AdFooter = () => {
  const logos = getLogosForBackground(true);

  return (
    <footer className="bg-card/50 border-t border-border py-6">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main combined logo for visual consistency */}
        <div className="text-center mb-6">
          <img
            src="/LogoHeadFoot.png"
            alt="Exhibition Partners and Sponsors"
            className="logo-img-single mx-auto"
            loading="lazy"
          />
        </div>
        
        {/* Individual logos for better accessibility and SEO */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center">
          {logos.map((logo) => (
            <div key={logo.id} className="flex items-center justify-center h-16 w-28">
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-w-full max-h-full object-contain opacity-75 hover:opacity-100 transition-opacity duration-200 funder-logo-img"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-4 text-xs text-muted-foreground">
          <p>Supported by our funding partners and community organizations</p>
        </div>
      </div>
    </footer>
  );
};

export default AdFooter;
