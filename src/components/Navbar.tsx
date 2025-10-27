import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.jpg";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-card/95 backdrop-blur-sm shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Manvaasam" className="h-14 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.path) ? "text-primary" : "text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a 
              href="https://wa.me/916380091001" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="default" size="sm" className="gap-2">
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-3 text-sm font-medium transition-colors ${
                  isActive(item.path) ? "text-primary" : "text-foreground"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a 
              href="https://wa.me/916380091001" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              <Button variant="default" size="sm" className="mt-4 w-full gap-2">
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </Button>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
