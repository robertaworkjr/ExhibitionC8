import React from 'react';

const AdHeader = () => {
  return (
    <div className="logos-container py-4">
      <div className="flex items-center justify-center gap-6">
        <img
          src="/BHMlogo.png"
          alt="Black History Month 2025"
          className="logo-img-single h-12"
          loading="lazy"
        />
        <img
          src="/LogoHeadFoot.png"
          alt="Exhibition Partners and Sponsors"
          className="logo-img-single"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default AdHeader;
