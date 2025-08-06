import React from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import AdHeader from "@/components/AdHeader";
import AdFooter from "@/components/AdFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Printer, 
  Layers, 
  Users, 
  BookOpen, 
  Microscope,
  PaintBucket,
  Lightbulb,
  ArrowRight,
  Headphones,
  Info
} from "lucide-react";
import { GiCube } from "react-icons/gi";

const Research = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-16">
        {/* Header Ad */}
        <div className="px-6 py-4">
          <AdHeader />
        </div>

        {/* Hero Section */}
        <section className="py-20 px-6 bg-gradient-hero">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Research & Methodology
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Exploring the intersection of heritage preservation, digital innovation, and community storytelling through advanced 3D scanning and printing technologies.
            </p>
          </div>
        </section>

        {/* Heritage Context Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-semibold mb-6 text-foreground flex items-center justify-center gap-3">
                <Building2 className="h-8 w-8 text-primary" />
                Heritage & Cultural Context
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Card className="bg-card/50 border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-teal-500" />
                      Liverpool 8 Community Heritage
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Liverpool 8 (L8) represents a unique multicultural community with rich Caribbean, African, 
                      and Irish heritage. This exhibition preserves the stories and faces of community members 
                      who have shaped the area's identity over generations.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/50 border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-blue-500" />
                      Oral History Preservation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      The project combines traditional oral history collection with cutting-edge digital preservation 
                      techniques, ensuring community narratives are captured both in audio form and through 
                      physical 3D representations.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">Cultural Significance</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="text-xs">Legacy</Badge>
                    <span>Preserving the stories of pioneering community members and local heroes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="text-xs">Identity</Badge>
                    <span>Celebrating the multicultural fabric that defines Liverpool 8</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="text-xs">Memory</Badge>
                    <span>Creating lasting digital monuments to community resilience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="text-xs">Future</Badge>
                    <span>Inspiring next generations through accessible heritage technology</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 3D Scanning & Printing Process */}
        <section className="py-20 px-6 bg-card/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-semibold mb-6 text-foreground flex items-center justify-center gap-3">
                <Microscope className="h-8 w-8 text-primary" />
                3D Scanning & Printing Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our methodology combines state-of-the-art photogrammetry and structured light scanning 
                to create highly detailed digital representations.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-card/50 border-border hover:shadow-elegant transition-all duration-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Printer className="h-5 w-5 text-blue-500" />
                    Capture Process
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Photogrammetry</h4>
                    <p className="text-sm text-muted-foreground">
                      Multiple high-resolution photographs taken from various angles to create detailed 3D models
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Structured Light Scanning</h4>
                    <p className="text-sm text-muted-foreground">
                      Advanced scanning technology for precise geometric capture and texture mapping
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border hover:shadow-accent transition-all duration-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Layers className="h-5 w-5 text-teal-500" />
                    Processing Pipeline
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Mesh Generation</h4>
                    <p className="text-sm text-muted-foreground">
                      Converting point clouds into printable 3D meshes with optimized topology
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Quality Enhancement</h4>
                    <p className="text-sm text-muted-foreground">
                      Digital restoration and enhancement while preserving authentic characteristics
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border hover:shadow-primary transition-all duration-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PaintBucket className="h-5 w-5 text-primary" />
                    Physical Production
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">3D Printing</h4>
                    <p className="text-sm text-muted-foreground">
                      High-resolution FDM and resin printing for detailed physical manifestations
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Post-Processing</h4>
                    <p className="text-sm text-muted-foreground">
                      Careful finishing and treatment to enhance durability and presentation
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Materials & Technology */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-semibold mb-6 text-foreground flex items-center justify-center gap-3">
                <Layers className="h-8 w-8 text-primary" />
                Materials & Technology
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <Card className="bg-card/50 border-border">
                <CardHeader>
                  <CardTitle>3D Printing Materials</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-foreground">PLA (Polylactic Acid)</h4>
                      <p className="text-sm text-muted-foreground">
                        Biodegradable thermoplastic ideal for detailed prototypes and display pieces. 
                        Excellent surface finish with minimal environmental impact.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-teal-500 pl-4">
                      <h4 className="font-semibold text-foreground">Resin (UV-Cured)</h4>
                      <p className="text-sm text-muted-foreground">
                        High-resolution photopolymer for capturing fine facial details and textures. 
                        Enables sub-millimeter precision in facial features.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold text-foreground">PETG (Polyethylene Terephthalate Glycol)</h4>
                      <p className="text-sm text-muted-foreground">
                        Durable, chemical-resistant material for long-term exhibition display. 
                        Combines strength with optical clarity.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border">
                <CardHeader>
                  <CardTitle>Technology Stack</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground flex items-center gap-2">
                        <Microscope className="h-4 w-4" />
                        Hardware
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1 ml-6">
                        <li>• Structured light 3D scanners</li>
                        <li>• High-resolution DSLR cameras</li>
                        <li>• Professional lighting systems</li>
                        <li>• FDM and SLA 3D printers</li>
                      </ul>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground flex items-center gap-2">
                        <Lightbulb className="h-4 w-4" />
                        Software
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1 ml-6">
                        <li>• Agisoft Metashape (Photogrammetry)</li>
                        <li>• Blender (3D modeling & optimization)</li>
                        <li>• Meshmixer (Mesh repair & enhancement)</li>
                        <li>• Cura & PrusaSlicer (Print preparation)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Exhibition Context */}
        <section className="py-20 px-6 bg-gradient-hero">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-semibold mb-6 text-foreground">Exhibition Context & Impact</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                "Capture the Essence of the Eighth" represents a groundbreaking fusion of heritage preservation, 
                digital innovation, and community engagement, setting new standards for cultural documentation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground">Project Objectives</h3>
                <div className="space-y-4">
                  <Card className="bg-card/50 border-border">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-foreground mb-2">Digital Heritage Preservation</h4>
                      <p className="text-sm text-muted-foreground">
                        Creating permanent digital archives that can be accessed by future generations, 
                        ensuring community stories survive beyond physical limitations.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-card/50 border-border">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-foreground mb-2">Technological Innovation</h4>
                      <p className="text-sm text-muted-foreground">
                        Pioneering the use of accessible 3D scanning and printing technologies for 
                        community-led heritage projects and cultural documentation.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-card/50 border-border">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-foreground mb-2">Community Empowerment</h4>
                      <p className="text-sm text-muted-foreground">
                        Providing tools and platforms for community members to share their own stories 
                        and preserve their heritage in their own words.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground">Research Outcomes</h3>
                <div className="space-y-4">
                  <div className="bg-gradient-primary/10 rounded-lg p-6 border border-primary/20">
                    <h4 className="font-semibold text-foreground mb-3">Academic Contributions</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Methodologies for community-centered digital heritage</li>
                      <li>• Best practices for 3D scanning in community settings</li>
                      <li>• Guidelines for ethical digital preservation</li>
                      <li>• Technical specifications for heritage 3D printing</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-accent/10 rounded-lg p-6 border border-accent/20">
                    <h4 className="font-semibold text-foreground mb-3">Community Impact</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Enhanced cultural pride and identity</li>
                      <li>• Intergenerational knowledge transfer</li>
                      <li>• Increased digital literacy and engagement</li>
                      <li>• Template for replication in other communities</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Navigation Links */}
        <section className="py-12 px-6 bg-card/20">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-8 text-foreground">Explore More</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/gallery" className="group">
                <Button variant="outline" size="lg" className="hover:bg-primary hover:text-primary-foreground transition-all">
                  <Headphones className="h-5 w-5 mr-2" />
                  View Gallery
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/3d" className="group">
                <Button variant="outline" size="lg" className="hover:bg-teal-500 hover:text-white transition-all">
                  <GiCube className="h-5 w-5 mr-2" />
                  3D Objects
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/about" className="group">
                <Button variant="outline" size="lg" className="hover:bg-accent hover:text-accent-foreground transition-all">
                  <Info className="h-5 w-5 mr-2" />
                  About Exhibition
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer Ad */}
        <div className="px-6 py-4">
          <AdFooter />
        </div>
      </div>
    </div>
  );
};

export default Research;
