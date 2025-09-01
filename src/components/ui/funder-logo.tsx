import React from 'react';

interface FunderLogoProps {
  src: string;
  alt: string;
  aspectRatio?: 'square' | 'landscape' | 'portrait';
  className?: string;
  fallbackSrc?: string;
}

export const FunderLogo: React.FC<FunderLogoProps> = ({ 
  src, 
  alt, 
  aspectRatio = 'landscape',
  className = '',
  fallbackSrc = '/placeholder.svg'
}) => {
  const [imageSrc, setImageSrc] = React.useState(src);

  const handleImageError = () => {
    setImageSrc(fallbackSrc);
  };

  const getContainerClasses = () => {
    const baseClasses = 'bg-white rounded-xl flex items-center justify-center mx-auto mb-4 p-3 shadow-sm border border-border/20 overflow-hidden';
    
    switch (aspectRatio) {
      case 'square':
        return `w-20 h-20 ${baseClasses}`;
      case 'portrait':
        return `w-16 h-24 ${baseClasses}`;
      case 'landscape':
      default:
        return `w-24 h-20 ${baseClasses}`;
    }
  };

  return (
    <div className={getContainerClasses()}>
      <img 
        src={imageSrc}
        alt={alt}
        className={`max-w-full max-h-full object-contain transition-opacity duration-200 funder-logo-img ${className}`}
        loading="lazy"
        onError={handleImageError}
      />
    </div>
  );
};

export default FunderLogo;
