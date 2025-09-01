// Logo configuration for consistent management across the application

export interface LogoConfig {
  id: string;
  alt: string;
  lightSrc: string; // Logo for light backgrounds
  darkSrc: string;  // Logo for dark backgrounds
  priority?: number; // Display order (lower numbers first)
  aspectRatio?: 'square' | 'landscape' | 'portrait'; // Logo aspect ratio for better sizing
  backgroundColor?: string; // Optional background color for better visibility
}

export const logoConfig: LogoConfig[] = [
  {
    id: "culture",
    alt: "Culture Liverpool",
    lightSrc: "/Culturelogo_blk.png",
    darkSrc: "/Culturelogo_wht.png",
    priority: 1,
    aspectRatio: 'landscape'
  },
  {
    id: "cl-logo",
    alt: "Culture Liverpool Brand",
    lightSrc: "/CLLogo.png",
    darkSrc: "/CLLogo.png",
    priority: 2,
    aspectRatio: 'square'
  },
  {
    id: "lcc",
    alt: "Liverpool City Council",
    lightSrc: "/LCC logo 2023 Landscp BLACK.png",
    darkSrc: "/LCC logo 2023 Landscp WHITE.png",
    priority: 3,
    aspectRatio: 'landscape'
  },
  {
    id: "uk-gov",
    alt: "Funded by the UK Government",
    lightSrc: "/funded-by-the-uk.jpg",
    darkSrc: "/Funded by UK Gov-stacked-white.png",
    priority: 4,
    aspectRatio: 'landscape'
  },
  {
    id: "ukspf",
    alt: "UK Shared Prosperity Fund",
    lightSrc: "/UKSPF Black Mono.jpg",
    darkSrc: "/UKSPF Black Mono.jpg", // Same for both
    priority: 5,
    aspectRatio: 'landscape'
  },
  {
    id: "grant",
    alt: "Grant Funded",
    lightSrc: "/grant_png_black.png",
    darkSrc: "/grant_png_black.png", // Same for both as it works on both backgrounds
    priority: 6,
    aspectRatio: 'square'
  }
];

// Helper function to get logos for specific background type
export const getLogosForBackground = (isLightBackground: boolean = true) => {
  return logoConfig
    .sort((a, b) => (a.priority || 0) - (b.priority || 0))
    .map(logo => ({
      id: logo.id,
      alt: logo.alt,
      src: isLightBackground ? logo.lightSrc : logo.darkSrc,
      aspectRatio: logo.aspectRatio || 'landscape',
      backgroundColor: logo.backgroundColor
    }));
};

// Helper function to get logo sizing classes based on aspect ratio
export const getLogoSizeClasses = (aspectRatio: string = 'landscape') => {
  switch (aspectRatio) {
    case 'square':
      return 'w-16 h-16';
    case 'portrait':
      return 'w-12 h-16';
    case 'landscape':
    default:
      return 'w-20 h-12';
  }
};
