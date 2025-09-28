import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Users, Building2, Palette } from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,119,198,0.05),transparent_50%)] pointer-events-none"></div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <header className="pt-8 pb-4 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center animate-glow">
                <Sparkles className="w-6 h-6 text-primary-foreground" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Capture the 8
              </h1>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center px-6 py-12">
          <div className="max-w-4xl mx-auto text-center space-y-12">

            {/* Welcome Message */}
            <div className="space-y-6 animate-fade-in-up">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm font-medium">
                Black History Month 2025
              </Badge>
              <h2 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
                Welcome to
                <br />
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                  Liverpool 8
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Discover the stories, faces, and heritage of Liverpool's vibrant multicultural community through innovative digital art and immersive 3D experiences.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid md:grid-cols-3 gap-6 animate-fade-in-up delay-200">
              <Card className="bg-card/50 border-primary/20 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Community Stories</h3>
                  <p className="text-sm text-muted-foreground">Oral histories and personal narratives from L8 residents</p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-accent/20 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Building2 className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">3D Portraits</h3>
                  <p className="text-sm text-muted-foreground">Interactive digital memorials and sculptures</p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-primary/20 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Palette className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Digital Heritage</h3>
                  <p className="text-sm text-muted-foreground">Preserving cultural legacy through technology</p>
                </CardContent>
              </Card>
            </div>

            {/* Enter Button */}
            <div className="animate-fade-in-up delay-400">
              <Link to="/home">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground px-12 py-6 text-lg font-semibold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group"
                >
                  Enter Exhibition
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </main>

        {/* Footer with Partners */}
        <footer className="pb-8 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-6">
              <div className="border-t border-border/50 pt-6">
                <p className="text-sm text-muted-foreground mb-4">Supported by</p>
                <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
                  <div className="text-sm font-medium text-foreground">Culture Liverpool</div>
                  <div className="w-px h-4 bg-border"></div>
                  <div className="text-sm font-medium text-foreground">Arts Council England</div>
                  <div className="w-px h-4 bg-border"></div>
                  <div className="text-sm font-medium text-foreground">Liverpool Foundation for the Arts</div>
                  <div className="w-px h-4 bg-border"></div>
                  <div className="text-sm font-medium text-foreground">UK Shared Prosperity Fund</div>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  In partnership with Liverpool City Council and community organizations
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Landing;
