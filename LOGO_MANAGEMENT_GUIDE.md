# Funder Logo Management System

## Overview

This document outlines the best practices and implementation details for managing funder logos in the "Capture the Essence of the Eighth" exhibition website.

## File Structure
```
src/
├── config/
│   └── logos.ts                 # Central logo configuration
├── components/
│   └── ui/
│       └── funder-logo.tsx      # Reusable logo component
├── pages/
│   └── About.tsx               # Main logo showcase page
└── components/
    └── AdFooter.tsx            # Footer with logos

public/
├── CLLogo.png                  # Culture Liverpool brand logo
├── Culturelogo_blk.png         # Culture Liverpool black logo
├── Culturelogo_wht.png         # Culture Liverpool white logo
├── funded-by-the-uk.jpg        # UK Government funding logo
├── Funded by UK Gov-stacked-white.png # UK Gov white variant
├── grant_png_black.png         # Grant funding logo
├── LCC logo 2023 Landscp BLACK.png # Liverpool City Council black
├── LCC logo 2023 Landscp WHITE.png # Liverpool City Council white
├── LogoHeadFoot.png            # Combined footer logo
└── UKSPF Black Mono.jpg        # UK Shared Prosperity Fund logo
```

## Configuration System

### Logo Configuration (`src/config/logos.ts`)
```typescript
export interface LogoConfig {
  id: string;                    // Unique identifier
  alt: string;                   // Accessibility description
  lightSrc: string;              // Logo for light backgrounds
  darkSrc: string;               // Logo for dark backgrounds
  priority?: number;             // Display order
  aspectRatio?: 'square' | 'landscape' | 'portrait';
}
```

### Current Configured Logos
1. **Liverpool City Council** - Local government support
2. **UK Government** - National funding support
3. **UK Shared Prosperity Fund** - Community investment
4. **Culture Liverpool** - Arts and culture partnership
5. **Grant Funded** - General grant funding
6. **Culture Liverpool Brand** - Additional branding

## Component Usage

### FunderLogo Component
```tsx
import FunderLogo from '@/components/ui/funder-logo';

<FunderLogo
  src="/path/to/logo.png"
  alt="Organization Name"
  aspectRatio="landscape"
/>
```

### Features:
- **Automatic fallback** to placeholder on error
- **Lazy loading** for performance
- **Responsive sizing** based on aspect ratio
- **Enhanced contrast** for better visibility
- **Smooth hover effects**

## Best Practices

### 1. Image Optimization
- **Format**: Use PNG for logos with transparency, JPG for photos
- **Size**: Optimize file sizes without quality loss
- **Dimensions**: Provide logos at 2x resolution for retina displays

### 2. Accessibility
- **Alt text**: Descriptive alternative text for all logos
- **Contrast**: Ensure sufficient contrast on all backgrounds
- **Focus states**: Keyboard navigation support

### 3. Responsive Design
- **Mobile-first**: Logos adapt to different screen sizes
- **Touch-friendly**: Adequate spacing for mobile interaction
- **Performance**: Lazy loading to improve page speed

### 4. Consistency
- **Uniform sizing**: Consistent logo container dimensions
- **Spacing**: Standard padding and margins
- **Alignment**: Centered alignment with proper grid layout

## Display Locations

### 1. About Page - Main Showcase
- **Layout**: 3-column responsive grid
- **Size**: 24x20 (w-24 h-20) containers
- **Style**: White rounded containers with shadows
- **Content**: Logo + title + description

### 2. Footer - Compact Display
- **Layout**: 6-column grid on desktop, 3 on tablet, 2 on mobile
- **Size**: 20x12 (w-20 h-12) containers
- **Style**: Reduced opacity with hover effects
- **Content**: Logo only with tooltip

### 3. Header (Future)
- **Layout**: Horizontal row
- **Size**: Small format for navigation area
- **Style**: Minimal with reduced opacity

## Implementation Examples

### Adding a New Logo
1. **Add image file** to `/public/` directory
2. **Update configuration** in `src/config/logos.ts`:
```typescript
{
  id: "new-partner",
  alt: "New Partner Organization",
  lightSrc: "/new-partner-logo.png",
  darkSrc: "/new-partner-logo-white.png",
  priority: 7,
  aspectRatio: 'landscape'
}
```
3. **Add description** in About.tsx `getPartnerDescription()` function

### Updating Existing Logo
1. **Replace image file** in `/public/` directory
2. **Update configuration** if filename changes
3. **Test on both light and dark backgrounds**

## Performance Considerations

### Loading Strategy
- **Lazy loading**: Images load when needed
- **Error handling**: Automatic fallback to placeholder
- **Caching**: Browser caching with proper headers

### Size Optimization
- **Compression**: Optimize images before upload
- **WebP support**: Consider WebP format for better compression
- **CDN**: Use Netlify's CDN for fast delivery

## Testing Checklist

### Visual Testing
- [ ] All logos display correctly on About page
- [ ] Footer logos show in proper grid
- [ ] Hover effects work smoothly
- [ ] Mobile responsive layout functions

### Accessibility Testing
- [ ] Screen reader announces alt text
- [ ] Keyboard navigation works
- [ ] Sufficient color contrast
- [ ] Images scale with browser zoom

### Performance Testing
- [ ] Page loads under 3 seconds
- [ ] Images lazy load properly
- [ ] No layout shift during loading
- [ ] Error states handle gracefully

## Troubleshooting

### Common Issues
1. **Logo not displaying**: Check file path and permissions
2. **Poor quality**: Ensure 2x resolution images
3. **Slow loading**: Optimize image file sizes
4. **Layout issues**: Verify container dimensions and aspect ratios

### Debug Steps
1. Check browser console for errors
2. Verify image URLs in network tab
3. Test with different browsers
4. Validate HTML structure
5. Check CSS styles in dev tools

## Future Enhancements

### Planned Features
- **Dark mode support**: Automatic logo switching
- **Animation effects**: Subtle entrance animations
- **Logo carousel**: Rotating display for many partners
- **Analytics tracking**: Monitor logo interaction
- **A/B testing**: Test different layouts and sizes

This system provides a robust, scalable, and accessible approach to managing funder logos across the exhibition website.
