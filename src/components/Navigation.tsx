import { useState } from "react";
import { Link, useLocation, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Home, User, Headphones, Mail, Info, Building2 } from "lucide-react";
import { GiCube } from "react-icons/gi";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { path: "/", label: <Home className="h-5 w-5 nav-icon" />, text: "Home" },
    { path: "/gallery", label: <Headphones className="h-5 w-5 nav-icon" />, text: "Gallery" },
    { path: "/research", label: <Building2 className="h-5 w-5 nav-icon" />, text: "Research" },
    { path: "/contact", label: <Mail className="h-5 w-5 nav-icon" />, text: "Contact" },
    { path: "/about", label: <Info className="h-5 w-5 nav-icon" />, text: "About" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-blue-500 hover:text-teal-500 transition-colors">
            Capturethe8
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors hover:text-blue-600 hover:bg-gray-100 ${
                  isActive(item.path) ? "text-blue-600 font-medium bg-blue-50" : "text-black"
                }`}
                title={item.text}
              >
                {item.label}
                <span className="text-sm font-medium text-black">{item.text}</span>
              </Link>
            ))}
            <NavLink
              to="/3d"
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 rounded-md hover:bg-teal-500 hover:text-white transition ${
                  isActive ? "bg-blue-500 text-white font-bold" : "text-black hover:text-white"
                }`
              }
            >
              <GiCube className="nav-icon" />
              <span className="text-sm font-medium">3D Objects</span>
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
          <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-gray-200 z-40 shadow-lg">
            <div className="flex flex-col py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-3 transition-colors hover:text-blue-600 hover:bg-gray-50 ${
                    isActive(item.path) ? "text-blue-600 font-medium bg-blue-50" : "text-black"
                  }`}
                  title={item.text}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                  <span className="font-medium text-black">{item.text}</span>
                </Link>
              ))}
              <NavLink
                to="/3d"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-md hover:bg-teal-500 hover:text-white transition ${
                    isActive ? "bg-blue-500 text-white font-bold" : "text-black hover:text-white"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                <GiCube className="nav-icon" />
                <span className="font-medium">3D Objects</span>
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
