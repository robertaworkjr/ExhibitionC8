# Overview

"Capture the Essence of the Eight" is a digital heritage exhibition dedicated to exploring the historical and cultural impact of Liverpool 8 (L8). The project combines 3D scanning technology, digital artistry, and community storytelling to preserve and showcase the stories of influential figures from this multicultural community. Built as a modern React web application, it features an interactive gallery of 3D portraits, audio narratives, research documentation, and booking functionality for exhibition visits.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The application is built using **React 18** with **TypeScript** for type safety and modern development practices. The frontend uses a component-based architecture with:

- **Routing**: React Router for client-side navigation between gallery, research, contact, and about pages
- **UI Components**: shadcn/ui component library built on Radix UI primitives for consistent, accessible design
- **Styling**: Tailwind CSS with custom design tokens for blue/teal brand theming
- **State Management**: React hooks and context for local state, with TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized production builds

## Content Management
The application follows a **file-based content management** approach:

- **3D Models**: Stored in `/public/3DObjects/` and `/src/3DObjects/` for USDZ/GLB files
- **Gallery Data**: Hardcoded configuration in React components with portrait metadata, descriptions, and audio URLs
- **Logo Configuration**: Centralized logo management system in `/src/config/logos.ts` supporting light/dark theme variants
- **Static Assets**: All images, audio files, and 3D models served from the public directory

## 3D Model Integration
The project implements **Google's model-viewer** web component for 3D model rendering:

- **AR Support**: USDZ format files for iOS/Android augmented reality viewing
- **Interactive Controls**: 360° rotation, zoom, auto-rotate, and camera reset functionality
- **File Handling**: Vite asset importing for optimized 3D model loading
- **Responsive Design**: Models adapt to different screen sizes with mobile-specific aspect ratios

## Design System
Built around a **blue and teal color scheme** reflecting Liverpool's maritime heritage:

- **CSS Variables**: HSL-based color system with light/dark theme support
- **Responsive Breakpoints**: Mobile-first design with tablet and desktop optimizations
- **Typography**: System font stack with clear hierarchy and accessibility considerations
- **Animations**: Subtle CSS animations and transitions for enhanced user experience

# External Dependencies

## Core Framework Dependencies
- **React 18**: Frontend framework with modern hooks and concurrent features
- **TypeScript**: Type safety and enhanced developer experience
- **React Router**: Client-side routing and navigation
- **Vite**: Build tool and development server with HMR support

## UI and Styling
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Radix UI**: Accessible component primitives (@radix-ui/react-*)
- **shadcn/ui**: Pre-built component library built on Radix
- **Lucide React**: Icon library for consistent iconography
- **class-variance-authority**: Utility for managing component variants

## 3D Model Support
- **Google Model Viewer**: Web component for 3D model rendering and AR support
- **Three.js**: 3D graphics library (included via model-viewer)
- **GLB/USDZ Support**: Industry-standard 3D model formats for web and AR

## Development Tools
- **ESLint**: Code linting with React and TypeScript rules
- **PostCSS**: CSS processing with Tailwind integration
- **React Hook Form**: Form handling and validation
- **TanStack Query**: Server state management and caching

## Audio and Media
- **HTML5 Audio**: Native browser audio playback for narrative content
- **Image Optimization**: Vite's built-in asset optimization for gallery images
- **Responsive Images**: Lazy loading and format optimization for performance

The application is designed for deployment on modern hosting platforms with static site generation capabilities, requiring no backend infrastructure beyond file serving.