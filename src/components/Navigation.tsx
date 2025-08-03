import { useState } from "react";
import { Link, useLocation, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Home, User, Headphones, Mail, Info } from "lucide-react";
import { GiCube } from "react-icons/gi";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { path: "/", label: <Home className="h-5 w-5" />, text: "Home" },
    { path: "/gallery", label: <Headphones className="h-5 w-5" />, text: "Gallery" },
    { path: "/contact", label: <Mail className="h-5 w-5" />, text: "Contact" },
    { path: "/about", label: <Info className="h-5 w-5" />, text: "About" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Capturethe8
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 transition-colors hover:text-primary ${
                  isActive(item.path) ? "text-primary font-medium" : "text-muted-foreground"
                }`}
                title={item.text}
              >
                {item.label}
              </Link>
            ))}
            <NavLink
              to="/3d"
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 rounded hover:bg-accent transition ${isActive ? "bg-accent font-bold" : ""}`
              }
            >
              <GiCube size={20} />
              <span>3D</span>
            </NavLink>
          </div>

          {/* Mobile Hamburger Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-background border-b border-border z-40">
            <div className="flex flex-col py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-4 py-2 transition-colors hover:text-primary ${
                    isActive(item.path) ? "text-primary font-medium" : "text-muted-foreground"
                  }`}
                  title={item.text}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <NavLink
                to="/3d"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 py-2 rounded hover:bg-accent transition ${isActive ? "bg-accent font-bold" : ""}`
                }
                onClick={() => setIsOpen(false)}
              >
                <GiCube size={20} />
                <span>3D</span>
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
