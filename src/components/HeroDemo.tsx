import { Hero } from "@/components/ui/animated-hero";

interface HeroDemoProps {
  onBookVisit?: () => void;
}

function HeroDemo({ onBookVisit }: HeroDemoProps) {
  return (
    <div className="block">
      <Hero onBookVisit={onBookVisit} />
    </div>
  );
}

export { HeroDemo };
