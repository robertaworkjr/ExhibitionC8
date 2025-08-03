
import Navigation from "@/components/Navigation";
import AdHeader from "@/components/AdHeader";
import AdFooter from "@/components/AdFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Clock, Phone, Camera } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [signupForm, setSignupForm] = useState({
    name: "",
    birthPlace: "",
    aboutYou: "",
    l8Experience: ""
  });

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto URL with form data
    const subject = "Capturethe8 - Photography/Scan Signup";
    const body = `Name: ${signupForm.name}

Where were you born: ${signupForm.birthPlace}

About you: ${signupForm.aboutYou}

Nature of your time in L8: ${signupForm.l8Experience}`;
    
    const mailtoUrl = `mailto:digitalimmersivecic@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoUrl;
    
    // Show success toast
    toast({
      title: "Email client opened",
      description: "Please send the email to complete your signup.",
    });
    
    // Reset form
    setSignupForm({
      name: "",
      birthPlace: "",
      aboutYou: "",
      l8Experience: ""
    });
  };

  const handleSignupChange = (field: string, value: string) => {
    setSignupForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Add top padding to account for fixed navigation */}
      <div className="pt-16">
        {/* Header Ad */}
        <div className="px-6 py-4">
          <AdHeader />
        </div>

        {/* Header */}
        <section className="py-20 px-6 bg-gradient-hero">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get in touch with the Capturethe8 team for inquiries, bookings, or more information about the exhibition.
            </p>
          </div>
        </section>

        {/* Photography Signup Section */}
        <section className="py-20 px-6 bg-card/30">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-card/50 border-border">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Camera className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h2 className="text-3xl font-semibold mb-4 text-foreground">Sign Up to be Photographed or Scanned</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Be part of the Capturethe8 exhibition by sharing your story and connection to L8. 
                    Fill out the form below to participate in our digital art project.
                  </p>
                </div>
                
                <form onSubmit={handleSignupSubmit} className="space-y-6 max-w-2xl mx-auto">
                  <div>
                    <Label htmlFor="signup-name">Name</Label>
                    <Input 
                      id="signup-name" 
                      placeholder="Your full name" 
                      className="mt-1"
                      value={signupForm.name}
                      onChange={(e) => handleSignupChange("name", e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="birth-place">Where were you born?</Label>
                    <Input 
                      id="birth-place" 
                      placeholder="City, Country" 
                      className="mt-1"
                      value={signupForm.birthPlace}
                      onChange={(e) => handleSignupChange("birthPlace", e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="about-you">About you</Label>
                    <Textarea 
                      id="about-you" 
                      placeholder="Tell us about yourself, your background, interests..." 
                      rows={4}
                      className="mt-1"
                      value={signupForm.aboutYou}
                      onChange={(e) => handleSignupChange("aboutYou", e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="l8-experience">Nature of your time in L8</Label>
                    <Textarea 
                      id="l8-experience" 
                      placeholder="Describe your connection to L8, your experiences, memories, or relationship with the area..." 
                      rows={4}
                      className="mt-1"
                      value={signupForm.l8Experience}
                      onChange={(e) => handleSignupChange("l8Experience", e.target.value)}
                      required
                    />
                  </div>
                  
                  <Button size="lg" className="w-full bg-gradient-accent hover:shadow-glow">
                    Submit to be Photographed/Scanned
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="bg-card/50 border-border">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold mb-6 text-foreground">Send us a message</h2>
                  <form className="space-y-6">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your name" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="What's this about?" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us more..." 
                        rows={5}
                        className="mt-1"
                      />
                    </div>
                    <Button size="lg" className="w-full bg-gradient-primary hover:shadow-glow">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Details */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-6 text-foreground">Get in touch</h2>
                  <p className="text-muted-foreground mb-8">
                    We'd love to hear from you. Whether you're interested in visiting, 
                    collaborating, or learning more about our digital art process, 
                    don't hesitate to reach out.
                  </p>
                </div>

                <div className="space-y-6">
                  <Card className="bg-card/30 border-border hover:shadow-elegant transition-all duration-500">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                          <Mail className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Email</h3>
                          <p className="text-muted-foreground">digitalimmersivecic@gmail.com</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-card/30 border-border hover:shadow-accent transition-all duration-500">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center">
                          <MapPin className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Location</h3>
                          <p className="text-muted-foreground">St Georges Hall<br />Historic City Center</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-card/30 border-border hover:shadow-primary transition-all duration-500">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                          <Clock className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Exhibition Hours</h3>
                          <p className="text-muted-foreground">Daily viewing available<br />One month exhibition</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
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

export default Contact;
