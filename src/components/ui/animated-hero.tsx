import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface HeroProps {
  className?: string;
  onBookVisit?: () => void;
}

const Hero: React.FC<HeroProps> = ({ className = "", onBookVisit }) => {
  const navigate = useNavigate();

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
    <section className={`relative py-20 px-6 bg-gradient-hero overflow-hidden ${className}`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-accent/5 rounded-full blur-2xl animate-bounce delay-500"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => {
          // Create variation using predefined positions and delays
          const positions = [
            'top-[10%] left-[15%]', 'top-[25%] left-[70%]', 'top-[60%] left-[30%]', 'top-[80%] left-[85%]',
            'top-[35%] left-[10%]', 'top-[50%] left-[90%]', 'top-[20%] left-[45%]', 'top-[75%] left-[55%]',
            'top-[15%] left-[80%]', 'top-[45%] left-[20%]', 'top-[70%] left-[75%]', 'top-[90%] left-[40%]',
            'top-[30%] left-[60%]', 'top-[55%] left-[5%]', 'top-[85%] left-[95%]', 'top-[40%] left-[35%]',
            'top-[65%] left-[65%]', 'top-[95%] left-[25%]', 'top-[5%] left-[50%]', 'top-[25%] left-[15%]'
          ];
          const delays = ['delay-0', 'delay-100', 'delay-200', 'delay-300', 'delay-500'];
          
          return (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-primary/20 rounded-full animate-float ${positions[i]} ${delays[i % delays.length]}`}
            />
          );
        })}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Animated Title */}
        <div className="mb-6 overflow-hidden">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground animate-slide-up">
            <span className="inline-block animate-fade-in-up delay-100">Capture</span>{" "}
            <span className="inline-block animate-fade-in-up delay-200">the</span>{" "}
            <span className="inline-block animate-fade-in-up delay-300 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Essence
            </span>{" "}
            <span className="inline-block animate-fade-in-up delay-400">of</span>{" "}
            <span className="inline-block animate-fade-in-up delay-500">the</span>{" "}
            <span className="inline-block animate-fade-in-up delay-600 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Eighth
            </span>
          </h1>
        </div>

        {/* Animated Subtitle */}
        <div className="mb-8 overflow-hidden">
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-700 leading-relaxed">
            A digital art exhibition that brings the spirit of Liverpool 8 to life through immersive experiences, 
            celebrating heritage, community, and the power of storytelling through cutting-edge 3D technology.
          </p>
        </div>

        {/* Animated Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-1000">
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

        {/* Animated Stats or Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up delay-1200">
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <div className="w-8 h-8 bg-primary rounded-full animate-pulse"></div>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">11+</h3>
            <p className="text-muted-foreground">Digital Portraits</p>
          </div>
          
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
              <div className="w-8 h-8 bg-accent rounded-full animate-pulse delay-300"></div>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">3D</h3>
            <p className="text-muted-foreground">Immersive Experience</p>
          </div>
          
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <div className="w-8 h-8 bg-primary rounded-full animate-pulse delay-500"></div>
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
