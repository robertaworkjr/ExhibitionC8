import React from "react";
import Navigation from "@/components/Navigation";
import AdHeader from "@/components/AdHeader";
import AdFooter from "@/components/AdFooter";

const About = () => (
  <div className="min-h-screen bg-background">
    <Navigation />
    <div className="pt-16">
      <div className="px-6 py-4">
        <AdHeader />
      </div>
      <section className="py-20 px-6 bg-gradient-hero">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About the Exhibition
          </h1>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">What to Expect</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Our exhibition creates a space for reflection, dialogue, and understanding of the community's unique story, featuring a diverse range of digital artworks, from interactive installations to virtual reality experiences. Each piece tells a story of the community's rich cultural heritage and vibrant present.
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            Engage with art in a whole new way through our interactive digital installations that respond to your presence and invite exploration. Step into the world of the community with our immersive VR experiences that transport you through time and space within the community's history.
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            Explore the statistics and data surrounding the community through compelling 3D visuals that make complex information accessible and engaging. The exhibition showcases how digital technology can amplify community voices and preserve cultural narratives for future generations.
          </p>
        </div>
      </section>
      <div className="px-6 py-4">
        <AdFooter />
      </div>
    </div>
  </div>
);

export default About;
