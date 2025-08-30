import React from "react";
import Navigation from "@/components/Navigation";
import AdHeader from "@/components/AdHeader";
import AdFooter from "@/components/AdFooter";
import { getLogosForBackground } from "@/config/logos";

const About = () => {
  const logos = getLogosForBackground(true); // Get logos for light background

  return (
  <div className="min-h-screen bg-background">
    <Navigation />
    <div className="pt-16">
      <div className="px-6 py-4">
        <AdHeader />
      </div>
      <section className="py-20 px-6 bg-gradient-hero">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
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

      {/* Support and Funding Section */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          {/* Section Header with Divider */}
          <div className="mb-16 text-center">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8"></div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Support & Funding
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              This exhibition has been made possible through the generous support and collaboration of our funding partners, community organizations, and the individuals whose stories we celebrate.
            </p>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
          </div>

          {/* Funding Partners */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center flex items-center justify-center gap-3">
              <div className="w-1 h-8 bg-primary rounded-full"></div>
              Our Funding Partners
              <div className="w-1 h-8 bg-primary rounded-full"></div>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Liverpool City Council */}
              <div className="bg-card/80 border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="mb-4">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 p-2 shadow-sm border border-border/20">
                    <img 
                      src={logos.find(logo => logo.id === 'lcc')?.src || "/placeholder.svg"}
                      alt="Liverpool City Council"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">Liverpool City Council</h4>
                  <p className="text-sm text-muted-foreground">
                    Local government support for community arts, heritage preservation, and cultural development in Liverpool.
                  </p>
                </div>
              </div>

              {/* UK Government */}
              <div className="bg-card/80 border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="mb-4">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 p-2 shadow-sm border border-border/20">
                    <img 
                      src={logos.find(logo => logo.id === 'uk-gov')?.src || "/placeholder.svg"}
                      alt="Funded by the UK Government"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">UK Government</h4>
                  <p className="text-sm text-muted-foreground">
                    Supporting community heritage projects and digital innovation through government cultural funding initiatives.
                  </p>
                </div>
              </div>

              {/* UK Shared Prosperity Fund */}
              <div className="bg-card/80 border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="mb-4">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 p-2 shadow-sm border border-border/20">
                    <img 
                      src={logos.find(logo => logo.id === 'ukspf')?.src || "/placeholder.svg"}
                      alt="UK Shared Prosperity Fund"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">UK Shared Prosperity Fund</h4>
                  <p className="text-sm text-muted-foreground">
                    Investing in local priorities and supporting community-led initiatives across the UK.
                  </p>
                </div>
              </div>

              {/* Culture Liverpool */}
              <div className="bg-card/80 border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="mb-4">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 p-2 shadow-sm border border-border/20">
                    <img 
                      src={logos.find(logo => logo.id === 'culture')?.src || "/placeholder.svg"}
                      alt="Culture Liverpool"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">Culture Liverpool</h4>
                  <p className="text-sm text-muted-foreground">
                    Primary funding partner supporting Liverpool's cultural initiatives and community arts programs.
                  </p>
                </div>
              </div>

              {/* Grant Funded */}
              <div className="bg-card/80 border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="mb-4">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 p-2 shadow-sm border border-border/20">
                    <img 
                      src={logos.find(logo => logo.id === 'grant')?.src || "/placeholder.svg"}
                      alt="Grant Funded"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">Grant Funded</h4>
                  <p className="text-sm text-muted-foreground">
                    Supporting innovative cultural projects through strategic grant funding and community investment.
                  </p>
                </div>
              </div>

              {/* Community Partners */}
              <div className="bg-card/80 border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="mb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-border/20">
                    <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">Community Partners</h4>
                  <p className="text-sm text-muted-foreground">
                    Local organizations and community groups supporting heritage preservation and cultural storytelling.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Heritage Theme & Community Support */}
          <div className="mb-16">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-12"></div>
            
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center flex items-center justify-center gap-3">
              <div className="w-1 h-8 bg-primary rounded-full"></div>
              Heritage & Community Support
              <div className="w-1 h-8 bg-primary rounded-full"></div>
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Community Voices */}
              <div className="bg-gradient-to-br from-muted/30 to-muted/50 rounded-xl p-8 border border-border/50">
                <h4 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                  <div className="w-3 h-6 bg-primary rounded-full"></div>
                  Community Voices
                </h4>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  This exhibition exists because of the generous participation and support of the individuals and families whose stories we tell. Each portrait represents not just an individual, but a community's shared heritage and collective memory.
                </p>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Family members and descendants who shared personal stories and photographs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Community historians and cultural preservationists</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Local organizations documenting Liverpool's diverse heritage</span>
                  </li>
                </ul>
              </div>

              {/* Heritage Preservation */}
              <div className="bg-gradient-to-br from-muted/30 to-muted/50 rounded-xl p-8 border border-border/50">
                <h4 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                  <div className="w-3 h-6 bg-accent rounded-full"></div>
                  Heritage Preservation
                </h4>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our heritage theme celebrates Liverpool's rich multicultural history, focusing on the significant contributions of Black and diverse communities to the city's cultural fabric and social development.
                </p>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>Documenting stories of resilience, achievement, and community building</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>Preserving cultural narratives for future generations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>Celebrating the ongoing legacy of Liverpool's diverse communities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Acknowledgment Statement */}
          <div className="text-center bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-xl p-8 border border-border/30">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-6"></div>
            <h4 className="text-xl font-semibold text-foreground mb-4">Our Sincere Gratitude</h4>
            <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We extend our deepest appreciation to all our funding partners, community supporters, and the families and individuals who have entrusted us with their stories. This exhibition stands as a testament to the power of collaboration, cultural preservation, and the importance of honoring our shared heritage. Together, we celebrate not just individual achievements, but the collective strength and resilience of Liverpool's diverse communities.
            </p>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mt-6"></div>
          </div>
        </div>
      </section>

      <div className="px-6 py-4">
        <AdFooter />
      </div>
    </div>
  </div>
  );
};

export default About;
