import React from 'react';

interface FunderLogoProps {
  src: string;
  alt: string;
  aspectRatio?: 'square' | 'landscape' | 'portrait';
  className?: string;
  fallbackSrc?: string;
  size?: 'small' | 'medium' | 'large';
}

export const FunderLogo: React.FC<FunderLogoProps> = ({ 
  src, 
  alt, 
  aspectRatio = 'landscape',
  className = '',
  fallbackSrc = '/placeholder.svg',
  size = 'large'
}) => {
  const [imageSrc, setImageSrc] = React.useState(src);

  const handleImageError = () => {
    setImageSrc(fallbackSrc);
  };

  const getContainerClasses = () => {
    const baseClasses = 'bg-white rounded-xl flex items-center justify-center mx-auto mb-4 p-4 border border-border/20 overflow-hidden transition-all duration-300';
    const enhancedClasses = size === 'large' ? 'logo-container-large shadow-md' : 'shadow-sm';
    
    // Aspect ratio adjustments for larger sizes
    if (size === 'large') {
      switch (aspectRatio) {
        case 'square':
          return `w-28 h-28 ${baseClasses} ${enhancedClasses}`;
        case 'portrait':
          return `w-24 h-32 ${baseClasses} ${enhancedClasses}`;
        case 'landscape':
        default:
          return `w-36 h-28 ${baseClasses} ${enhancedClasses}`;
      }
    } else if (size === 'medium') {
      switch (aspectRatio) {
        case 'square':
          return `w-24 h-24 ${baseClasses} shadow-sm`;
        case 'portrait':
          return `w-20 h-28 ${baseClasses} shadow-sm`;
        case 'landscape':
        default:
          return `w-32 h-24 ${baseClasses} shadow-sm`;
      }
    } else {
      // small size (original)
      switch (aspectRatio) {
        case 'square':
          return `w-20 h-20 ${baseClasses} shadow-sm`;
        case 'portrait':
          return `w-16 h-24 ${baseClasses} shadow-sm`;
        case 'landscape':
        default:
          return `w-24 h-20 ${baseClasses} shadow-sm`;
      }
    }
  };

  return (
    <div className={getContainerClasses()}>
      <img 
        src={imageSrc}
        alt={alt}
        className={`max-w-full max-h-full object-contain transition-all duration-300 ${size === 'large' ? 'funder-logo-large' : 'funder-logo-img'} ${className}`}
        loading="lazy"
        onError={handleImageError}
      />
    </div>
  );
};

export default FunderLogo;
