import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface HeroProps {
  className?: string;
  onBookVisit?: () => void;
}

const Hero: React.FC<HeroProps> = ({ className = "", onBookVisit }) => {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Performance: Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Performance: Viewport-based animation activation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only trigger once for performance
        }
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleExploreGallery = () => {
    navigate('/gallery');
  };

  const handleBookVisit = () => {
    if (onBookVisit) {
      onBookVisit();
    } else {
      navigate('/contact');
    }
  };

  return (
    <section 
      ref={heroRef}
      className={`relative py-20 px-6 bg-gradient-hero overflow-hidden ${className} ${reducedMotion ? 'reduce-motion' : ''}`}
    >
      {/* Performance-optimized Background Elements - only animate when visible */}
      <div className="absolute inset-0 overflow-hidden will-change-transform">
        <div className={`absolute -top-10 -left-10 w-32 sm:w-64 h-32 sm:h-64 bg-primary/5 sm:bg-primary/10 rounded-full blur-2xl sm:blur-3xl will-change-transform ${
          isVisible && !reducedMotion ? 'animate-pulse-slow' : 'opacity-60'
        }`}></div>
        <div className={`absolute -bottom-10 -right-10 w-32 sm:w-64 h-32 sm:h-64 bg-accent/5 sm:bg-accent/10 rounded-full blur-2xl sm:blur-3xl will-change-transform ${
          isVisible && !reducedMotion ? 'animate-pulse-slow' : 'opacity-60'
        }`} style={isVisible && !reducedMotion ? {animationDelay: '2s'} : {}}></div>
        <div className={`absolute top-1/2 left-1/4 w-24 sm:w-32 h-24 sm:h-32 bg-primary/5 rounded-full blur-xl sm:blur-2xl will-change-transform ${
          isVisible && !reducedMotion ? 'animate-float-gentle' : 'opacity-40'
        }`}></div>
        <div className={`absolute top-1/3 right-1/4 w-32 sm:w-48 h-32 sm:h-48 bg-accent/5 rounded-full blur-xl sm:blur-2xl will-change-transform ${
          isVisible && !reducedMotion ? 'animate-float-gentle' : 'opacity-40'
        }`} style={isVisible && !reducedMotion ? {animationDelay: '1s'} : {}}></div>
      </div>

      {/* Mobile-optimized Floating Particles - only animate when visible */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none will-change-transform">
        {[...Array(6)].map((_, i) => {
          // Create variation using predefined positions and delays
          const positions = [
            'top-[20%] left-[25%]', 'top-[35%] left-[70%]', 'top-[60%] left-[30%]', 
            'top-[45%] left-[15%]', 'top-[25%] left-[55%]', 'top-[75%] left-[65%]'
          ];
          const delays = ['delay-0', 'delay-500', 'delay-1000'];
          
          return (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-primary/15 rounded-full will-change-transform ${positions[i]} ${
                isVisible && !reducedMotion ? `animate-float-optimized ${delays[i % delays.length]}` : 'opacity-30'
              }`}
            />
          );
        })}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Performance-controlled Animated Title */}
        <div className="mb-6 overflow-hidden">
          <h1 className={`text-4xl md:text-6xl font-bold text-foreground ${
            isVisible && !reducedMotion ? 'animate-slide-up' : ''
          }`}>
            <span className={`inline-block ${
              isVisible && !reducedMotion ? 'animate-fade-in-up delay-100' : ''
            }`}>Capture</span>{" "}
            <span className={`inline-block ${
              isVisible && !reducedMotion ? 'animate-fade-in-up delay-200' : ''
            }`}>the</span>{" "}
            <span className={`inline-block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent ${
              isVisible && !reducedMotion ? 'animate-fade-in-up delay-300' : ''
            }`}>
              Essence
            </span>{" "}
            <span className={`inline-block ${
              isVisible && !reducedMotion ? 'animate-fade-in-up delay-400' : ''
            }`}>of</span>{" "}
            <span className={`inline-block ${
              isVisible && !reducedMotion ? 'animate-fade-in-up delay-500' : ''
            }`}>the</span>{" "}
            <span className={`inline-block bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent ${
              isVisible && !reducedMotion ? 'animate-fade-in-up delay-600' : ''
            }`}>
              Eight
            </span>
          </h1>
        </div>

        {/* Performance-controlled Animated Subtitle */}
        <div className="mb-8 overflow-hidden">
          <p className={`text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed ${
            isVisible && !reducedMotion ? 'animate-fade-in-up delay-700' : ''
          }`}>
            A digital art exhibition that brings the spirit of Liverpool 8 to life through immersive experiences, 
            celebrating heritage, community, and the power of storytelling through cutting-edge 3D technology.
          </p>
        </div>

        {/* Performance-controlled Animated Call-to-Action Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center ${
          isVisible && !reducedMotion ? 'animate-fade-in-up delay-1000' : ''
        }`}>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group" 
            onClick={handleExploreGallery}
          >
            Explore the Gallery 
            <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300 hover:scale-105 group" 
            onClick={handleBookVisit}
          >
            Book Your Visit 
            <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Performance-controlled Animated Stats or Features */}
        <div className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 ${
          isVisible && !reducedMotion ? 'animate-fade-in-up delay-1200' : ''
        }`}>
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <div className={`w-8 h-8 bg-primary rounded-full ${
                isVisible && !reducedMotion ? 'animate-pulse-slow' : 'opacity-60'
              }`}></div>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">11+</h3>
            <p className="text-muted-foreground">Digital Portraits</p>
          </div>
          
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
              <div className={`w-8 h-8 bg-accent rounded-full ${
                isVisible && !reducedMotion ? 'animate-pulse-slow' : 'opacity-60'
              }`} style={isVisible && !reducedMotion ? {animationDelay: '300ms'} : {}}></div>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">3D</h3>
            <p className="text-muted-foreground">Immersive Experience</p>
          </div>
          
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <div className={`w-8 h-8 bg-primary rounded-full ${
                isVisible && !reducedMotion ? 'animate-pulse-slow' : 'opacity-60'
              }`} style={isVisible && !reducedMotion ? {animationDelay: '500ms'} : {}}></div>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">L8</h3>
            <p className="text-muted-foreground">Community Heritage</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero };
