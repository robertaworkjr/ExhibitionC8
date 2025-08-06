# Logo Management System - Implementation Summary

## Overview
Updated the exhibition website with a comprehensive logo management system that ensures consistent sizing, proper placement, and responsive design across all components.

## Key Improvements

### 1. **Centralized Configuration**
- Created `/src/config/logos.ts` with structured logo configuration
- Supports light and dark background variations
- Priority-based ordering system
- Type-safe with TypeScript interfaces

### 2. **Responsive CSS System**
- Enhanced `.logo-img` class with responsive breakpoints
- Consistent hover effects with subtle scaling and brightness
- Separate `.dialog-logos-container` for modal displays
- Mobile-first responsive design approach

### 3. **File Organization**
- Moved all logos to `/public/` folder for better performance
- Added new logos: CLLogo.png, UKSPF Black Mono.jpg, LCC Black variant
- Organized logos by background compatibility (light/dark variants)

### 4. **Component Updates**
- **AdHeader**: Uses light background logos with centralized config
- **AdFooter**: Uses dark background logos with centralized config  
- **Index Dialog**: Smaller logos optimized for modal display

## Logo Inventory

### Light Background Logos (Header/Dialog)
1. Liverpool City Council - LCC logo 2023 Landscp BLACK.png
2. Grant Funded - grant_png_black.png
3. UK Government - funded-by-the-uk.jpg
4. UK Shared Prosperity Fund - UKSPF Black Mono.jpg
5. Culture Liverpool - Culturelogo_blk.png

### Dark Background Logos (Footer)
1. Liverpool City Council - LCC logo 2023 Landscp WHITE.png
2. Grant Funded - grant_png_black.png (works on both)
3. UK Government - Funded by UK Gov-stacked-white.png
4. UK Shared Prosperity Fund - UKSPF Black Mono.jpg (works on both)
5. Culture Liverpool - Culturelogo_wht.png

## CSS Classes

### `.logo-img`
- Height: 3rem desktop, 2.5rem tablet, 2rem mobile
- Max-width: 8rem desktop, 6rem tablet, 4.5rem mobile
- Hover effects: 1.05x scale, brightness boost
- Smooth transitions for all interactions

### `.logos-container`
- Flexbox with center alignment
- Responsive gap: 2.5rem desktop, 1.5rem tablet, 1rem mobile
- Flexible wrapping for overflow

### `.dialog-logos-container`
- Smaller sizing for modal displays
- Height: 2rem desktop, 1.5rem mobile
- Tighter spacing for compact display

## Best Practices Implemented

1. **Performance**: 
   - Lazy loading with `loading="lazy"`
   - Optimized file formats (PNG/JPG)
   - Public folder serving for better caching

2. **Accessibility**:
   - Proper alt text for all logos
   - Semantic HTML structure
   - High contrast for visibility

3. **Maintainability**:
   - Single source of truth for logo configuration
   - Type-safe configuration with TypeScript
   - Reusable helper functions

4. **Responsive Design**:
   - Mobile-first approach
   - Progressive enhancement for larger screens
   - Flexible wrapping for various screen sizes

## Usage Examples

### Adding a New Logo
```typescript
// In /src/config/logos.ts
{
  id: "new-sponsor",
  alt: "New Sponsor Name",
  lightSrc: "/new-sponsor-dark.png",
  darkSrc: "/new-sponsor-light.png",
  priority: 6
}
```

### Using in Components
```typescript
import { getLogosForBackground } from '@/config/logos';

const logos = getLogosForBackground(true); // true for light bg, false for dark
```

## File Structure
```
public/
├── CLLogo.png
├── Culturelogo_blk.png
├── Culturelogo_wht.png
├── Funded by UK Gov-stacked-white.png
├── funded-by-the-uk.jpg
├── grant_png_black.png
├── LCC logo 2023 Landscp BLACK.png
├── LCC logo 2023 Landscp WHITE.png
└── UKSPF Black Mono.jpg

src/
├── config/
│   └── logos.ts
├── components/
│   ├── AdHeader.tsx
│   └── AdFooter.tsx
└── index.css (logo styles)
```

This system ensures consistent branding across the exhibition website while maintaining flexibility for future logo additions or modifications.
