// Logo configuration for consistent management across the application

export interface LogoConfig {
  id: string;
  alt: string;
  lightSrc: string; // Logo for light backgrounds
  darkSrc: string;  // Logo for dark backgrounds
  priority?: number; // Display order (lower numbers first)
}

export const logoConfig: LogoConfig[] = [
  {
    id: "lcc",
    alt: "Liverpool City Council",
    lightSrc: "/LCC logo 2023 Landscp BLACK.png",
    darkSrc: "/LCC logo 2023 Landscp WHITE.png",
    priority: 1
  },
  {
    id: "grant",
    alt: "Grant Funded",
    lightSrc: "/grant_png_black.png",
    darkSrc: "/grant_png_black.png", // Same for both as it works on both backgrounds
    priority: 2
  },
  {
    id: "uk-gov",
    alt: "Funded by the UK Government",
    lightSrc: "/funded-by-the-uk.jpg",
    darkSrc: "/Funded by UK Gov-stacked-white.png",
    priority: 3
  },
  {
    id: "ukspf",
    alt: "UK Shared Prosperity Fund",
    lightSrc: "/UKSPF Black Mono.jpg",
    darkSrc: "/UKSPF Black Mono.jpg", // Same for both
    priority: 4
  },
  {
    id: "culture",
    alt: "Culture Liverpool",
    lightSrc: "/Culturelogo_blk.png",
    darkSrc: "/Culturelogo_wht.png",
    priority: 5
  }
];

// Helper function to get logos for specific background type
export const getLogosForBackground = (isLightBackground: boolean = true) => {
  return logoConfig
    .sort((a, b) => (a.priority || 0) - (b.priority || 0))
    .map(logo => ({
      id: logo.id,
      alt: logo.alt,
      src: isLightBackground ? logo.lightSrc : logo.darkSrc
    }));
};
