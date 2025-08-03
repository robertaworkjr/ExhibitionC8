import Navigation from "@/components/Navigation";
import AdHeader from "@/components/AdHeader";
import AdFooter from "@/components/AdFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowRight, BarChart4, Camera, LayoutDashboard, MessageSquare, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Index = () => {
  const navigate = useNavigate();
  const [isBookingDialogOpen, setIsBookingDialogOpen] = useState(false);

  const handleExploreGallery = () => {
    navigate('/gallery');
  };

  const handleBookVisit = () => {
    setIsBookingDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Add top padding to account for fixed navigation */}
      <div className="pt-16">
        {/* Header Ad */}
        <div className="px-6 py-4">
          <AdHeader />
        </div>

        {/* Hero Section */}
        <section className="relative py-20 px-6 bg-gradient-hero overflow-hidden">
          <div className="max-w-4xl mx-auto text-center relative">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Capture the Essence of the Eighth
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A digital art exhibition that brings the spirit of the 8 to life through immersive experiences with archive and legacy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow" onClick={handleExploreGallery}>
                Explore the Gallery <ArrowRight className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" onClick={handleBookVisit}>
                Book Your Visit <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-foreground">About the Exhibition</h2>
              <p className="text-muted-foreground">
                "Capture the 8" is a unique digital art exhibition dedicated to exploring the historical and cultural impact of Liverpool 8 (L8). Through a blend of digital artistry and immersive technology, we aim to celebrate the vibrant community, its rich heritage, and its enduring legacy.
              </p>
              <p className="text-muted-foreground">
                Our exhibition creates a space for reflection, dialogue, and understanding of L8's unique story, featuring a diverse range of digital artworks, from interactive installations to virtual reality experiences.
              </p>
            </div>
            <Card className="bg-card/50 border-border">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-foreground">What to Expect</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Engaging digital art installations</li>
                  <li>Immersive VR experiences</li>
                  <li>Thought-provoking stories from the L8 community</li>
                  <li>A space for open dialogue and reflection</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6 bg-card/30">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-12 text-foreground">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-card/50 border-border hover:shadow-elegant transition-all duration-500">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                      <LayoutDashboard className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">Interactive Exhibits</h3>
                    <p className="text-muted-foreground">
                      Engage with art in a whole new way through our interactive digital installations.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border hover:shadow-accent transition-all duration-500">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center">
                      <Camera className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">Virtual Reality</h3>
                    <p className="text-muted-foreground">
                      Step into the world of the 8 with our immersive VR experiences.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border hover:shadow-primary transition-all duration-500">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                      <BarChart4 className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">3D Visualization</h3>
                    <p className="text-muted-foreground">
                      Explore the statistics and data surrounding the 8 through compelling 3D visuals.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-12 text-foreground">What People Are Saying</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-card/50 border-border">
                <CardContent className="p-8">
                  <MessageSquare className="h-6 w-6 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground mb-4">
                    "A powerful and moving exhibition that sheds light on an important part of Irish history."
                  </p>
                  <p className="font-semibold text-foreground">- A.I. Reviewer</p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border">
                <CardContent className="p-8">
                  <MessageSquare className="h-6 w-6 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground mb-4">
                    "An innovative and thought-provoking way to engage with the complexities of the Eighth Amendment."
                  </p>
                  <p className="font-semibold text-foreground">- Art Critic</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-hero">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Experience "Capturethe8" Today
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Book your visit now and immerse yourself in a digital art exhibition that brings history to life.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow" onClick={handleBookVisit}>
              Book Your Visit <ArrowRight className="ml-2" />
            </Button>
          </div>
        </section>

        {/* Footer Ad */}
        <div className="px-6 py-4">
          <AdFooter />
        </div>
      </div>

      {/* Booking Dialog */}
      <Dialog open={isBookingDialogOpen} onOpenChange={setIsBookingDialogOpen}>
        <DialogContent className="sm:max-w-[425px] bg-background border-border">
          <DialogHeader>
            <DialogTitle className="text-foreground text-center">Exhibition Dates</DialogTitle>
            <div className="flex items-center justify-center gap-4 py-2">
              <img src="/logos/LCC logo 2023 Landscp MASTER.jpg" alt="LCC Logo" className="h-8" />
              <img src="/logos/grant_jpeg_black.jpg" alt="Grant Logo" className="h-8" />
              <img src="/logos/funded-by-the-uk.jpg" alt="Funded by the UK" className="h-8" />
              <img src="/logos/Culturelogo_wht.png" alt="Culture Liverpool Logo" className="h-8" />
            </div>
          </DialogHeader>
          <DialogDescription className="text-muted-foreground text-center">
            "Capture the Essence of the Eighth" Digital Art Exhibition
          </DialogDescription>
          <div className="py-6">
            <div className="text-center space-y-4">
              <div className="bg-gradient-primary/10 rounded-lg p-6 border border-primary/20">
                <h3 className="text-2xl font-bold text-foreground mb-2">October 2025</h3>
                <p className="text-lg text-muted-foreground mb-4">
                  <strong>October 1st - October 31st, 2025</strong>
                </p>
                <p className="text-sm text-muted-foreground">
                  Experience the complete digital art exhibition featuring Charles Wooten, Jimi Jagne, Joanne Anderson, Leroy Cooper, and Margret Simey.
                </p>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><strong>Opening Hours:</strong> Daily 10:00 AM - 6:00 PM</p>
                <p><strong>Location:</strong> Digital Gallery Space</p>
                <p><strong>Admission:</strong> Free for all visitors</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Button onClick={() => setIsBookingDialogOpen(false)} className="bg-gradient-primary">
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
