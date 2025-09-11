import { useState, useEffect } from "react";
import { Link, useLocation, NavLink } from "react-router-dom";
import { Menu, X, Home, Headphones, Mail, Info, Building2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { GiCube } from "react-icons/gi";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for navigation background
  useEffect(() => {
    // Initialize scroll state for users arriving mid-page
    const checkInitialScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    // Check initial scroll position
    checkInitialScroll();

    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { 
      path: "/", 
      icon: <Home className="h-5 w-5" />, 
      text: "Home",
      description: "Welcome to Liverpool's digital heritage"
    },
    { 
      path: "/gallery", 
      icon: <Headphones className="h-5 w-5" />, 
      text: "Gallery",
      description: "Audio narratives and stories"
    },
    { 
      path: "/research", 
      icon: <Building2 className="h-5 w-5" />, 
      text: "Research",
      description: "Historical documentation"
    },
    { 
      path: "/contact", 
      icon: <Mail className="h-5 w-5" />, 
      text: "Contact",
      description: "Get in touch with us"
    },
    { 
      path: "/about", 
      icon: <Info className="h-5 w-5" />, 
      text: "About",
      description: "Learn more about this project"
    },
  ];


  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-background/95 backdrop-blur-lg border-b border-border shadow-lg' 
        : 'bg-background/80 backdrop-blur-md border-b border-border/50 shadow-sm'
    }`} 
    style={{ height: 'var(--header-h)' }}>
      <div className="container-page">
        <div className="flex justify-between items-center" style={{ height: 'var(--header-h)' }}>
          {/* Modern Logo */}
          <Link 
            to="/" 
            className="group flex items-center gap-3 text-xl font-bold transition-all duration-300 hover:scale-105"
          >
            <div className="relative">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center animate-glow">
                <Sparkles className="w-4 h-4 text-primary-foreground" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-lg blur-lg opacity-30 group-hover:opacity-60 transition-opacity"></div>
            </div>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:from-accent group-hover:to-primary transition-all">
              Capturethe8
            </span>
          </Link>

          {/* Enhanced Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item, index) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `group relative flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 whitespace-nowrap animate-fade-in-up ${
                    isActive 
                      ? "text-primary-foreground bg-primary shadow-lg shadow-primary/30 scale-105" 
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50 hover:scale-105"
                  }`
                }
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {({ isActive }) => (
                  <>
                    <span className="transition-transform group-hover:scale-110">{item.icon}</span>
                    <span className="text-sm font-medium">{item.text}</span>
                    {isActive && (
                      <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg animate-glow"></div>
                    )}
                  </>
                )}
              </NavLink>
            ))}
            
            {/* 3D Objects Special Link */}
            <NavLink
              to="/3d"
              className={({ isActive }) =>
                `group relative flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 whitespace-nowrap ml-2 border-2 animate-fade-in-up ${
                  isActive 
                    ? "bg-gradient-to-r from-primary to-accent text-primary-foreground border-primary/30 shadow-xl shadow-primary/40 scale-110 animate-glow" 
                    : "border-primary/20 text-primary hover:bg-primary/10 hover:border-primary/40 hover:scale-105"
                }`
              }
              style={{ animationDelay: '500ms' }}
            >
              <GiCube className="transition-transform group-hover:scale-110 group-hover:rotate-12" />
              <span className="text-sm font-semibold">3D Objects</span>
              {location.pathname === '/3d' && (
                <Badge variant="secondary" className="ml-2 bg-primary-foreground/20 text-primary-foreground text-xs animate-pulse">
                  Active
                </Badge>
              )}
            </NavLink>
          </div>

          {/* Modern Mobile Sheet Trigger */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden relative overflow-hidden group hover:bg-primary/10 transition-all duration-300"
                aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              >
                <div className={`transition-all duration-300 ${isOpen ? 'rotate-90 scale-75' : 'rotate-0 scale-100'}`}>
                  {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </div>
                <div className="absolute inset-0 bg-primary/20 scale-0 group-hover:scale-100 rounded-lg transition-transform duration-300"></div>
              </Button>
            </SheetTrigger>
            
            {/* Modern Mobile Sheet Content */}
            <SheetContent side="right" className="w-80 glass-effect border-l border-border/50">
              <SheetHeader className="space-y-4 pb-6 border-b border-border/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center animate-glow">
                    <Sparkles className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <SheetTitle className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      Capturethe8
                    </SheetTitle>
                    <SheetDescription className="text-sm text-muted-foreground">
                      Liverpool's Digital Heritage
                    </SheetDescription>
                  </div>
                </div>
              </SheetHeader>

              <div className="py-6 space-y-2">
                {navItems.map((item, index) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `group flex items-center gap-4 p-4 rounded-xl transition-all duration-300 animate-fade-in-up ${
                        isActive 
                          ? "bg-primary/10 text-primary border border-primary/20" 
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }`
                    }
                    style={{ animationDelay: `${index * 100}ms` }}
                    onClick={() => setIsOpen(false)}
                  >
                    {({ isActive }) => (
                      <>
                        <div className={`p-2 rounded-lg transition-all group-hover:scale-110 ${
                          isActive 
                            ? "bg-primary/20 text-primary" 
                            : "bg-muted/20 group-hover:bg-primary/10 group-hover:text-primary"
                        }`}>
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <div className="font-medium">{item.text}</div>
                          <div className="text-xs text-muted-foreground">{item.description}</div>
                        </div>
                        {isActive && (
                          <Badge variant="default" className="bg-primary/20 text-primary border-primary/30">
                            Current
                          </Badge>
                        )}
                      </>
                    )}
                  </NavLink>
                ))}
                
                {/* 3D Objects in Mobile Sheet */}
                <NavLink
                  to="/3d"
                  className={({ isActive }) =>
                    `group flex items-center gap-4 p-4 rounded-xl transition-all duration-300 border-2 border-dashed animate-fade-in-up ${
                      isActive 
                        ? "bg-gradient-to-r from-primary/10 to-accent/10 text-primary border-primary/30 shadow-lg" 
                        : "border-primary/20 text-primary/80 hover:bg-primary/5 hover:border-primary/40 hover:text-primary"
                    }`
                  }
                  style={{ animationDelay: '500ms' }}
                  onClick={() => setIsOpen(false)}
                >
                  {({ isActive }) => (
                    <>
                      <div className={`p-2 rounded-lg transition-all group-hover:scale-110 group-hover:rotate-12 ${
                        isActive 
                          ? "bg-primary/20 text-primary" 
                          : "bg-primary/10 group-hover:bg-primary/20"
                      }`}>
                        <GiCube className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold">3D Objects</div>
                        <div className="text-xs text-muted-foreground">Interactive 3D portraits</div>
                      </div>
                      {isActive && (
                        <Badge variant="default" className="bg-primary text-primary-foreground animate-pulse">
                          Viewing
                        </Badge>
                      )}
                    </>
                  )}
                </NavLink>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
