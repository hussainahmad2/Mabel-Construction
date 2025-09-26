import { useState, useEffect } from "react";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo3D from "./Logo3D";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-background/98 backdrop-blur-xl shadow-lg border-b border-border/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-500 ${
          scrolled ? 'h-16' : 'h-20'
        }`}>
          {/* Logo */}
          <div className="transform transition-all duration-300 hover:scale-105">
            <Logo3D size="sm" animated={true} />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-4 py-2 text-sm font-semibold tracking-wide uppercase transition-all duration-300 group ${
                  scrolled ? 'text-foreground' : 'text-white'
                } hover:text-primary`}
                data-testid={`nav-${item.label.toLowerCase()}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button 
              variant="ghost" 
              size="sm" 
              className={`font-semibold transition-all duration-300 hover:scale-105 ${
                scrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-primary'
              }`}
              data-testid="button-call"
            >
              <Phone className="w-4 h-4 mr-2" />
              (555) 123-4567
            </Button>
            <Button 
              size="sm" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg group"
              data-testid="button-quote"
            >
              Get Free Quote
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`lg:hidden transition-all duration-300 hover:scale-110 ${
              scrolled ? 'text-foreground' : 'text-white'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="button-menu-toggle"
          >
            <div className="relative w-6 h-6">
              <span className={`absolute inset-0 transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-0' : 'rotate-0 -translate-y-2'
              }`}>
                <Menu className="w-6 h-6" />
              </span>
              <span className={`absolute inset-0 transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 translate-y-0' : 'rotate-0 translate-y-2'
              }`}>
                <X className="w-6 h-6" />
              </span>
            </div>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden absolute top-full left-0 right-0 transition-all duration-500 overflow-hidden ${
          isMenuOpen 
            ? 'max-h-screen opacity-100 transform translate-y-0' 
            : 'max-h-0 opacity-0 transform -translate-y-4'
        }`}>
          <div className="bg-background/98 backdrop-blur-xl border-b border-border/50 shadow-2xl">
            <div className="px-6 py-8 space-y-6">
              {navItems.map((item, index) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-lg font-semibold text-foreground hover:text-primary transition-all duration-300 py-3 border-b border-border/30 last:border-b-0 hover:translate-x-2"
                  data-testid={`mobile-nav-${item.label.toLowerCase()}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-6 space-y-4">
                <Button 
                  variant="outline" 
                  className="w-full h-12 text-lg font-semibold border-2 hover:scale-105 transition-all duration-300" 
                  data-testid="mobile-button-call"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  (555) 123-4567
                </Button>
                <Button 
                  className="w-full h-12 text-lg font-semibold bg-primary hover:bg-primary/90 rounded-full hover:scale-105 transition-all duration-300 group" 
                  data-testid="mobile-button-quote"
                >
                  Get Free Quote
                  <ArrowRight className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation Enhancement Styles */}
      <style>{`
        @keyframes slideInFromTop {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        nav button {
          animation: slideInFromTop 0.8s ease-out forwards;
          opacity: 0;
        }
        
        nav button:nth-child(1) { animation-delay: 100ms; }
        nav button:nth-child(2) { animation-delay: 200ms; }
        nav button:nth-child(3) { animation-delay: 300ms; }
        nav button:nth-child(4) { animation-delay: 400ms; }
        nav button:nth-child(5) { animation-delay: 500ms; }
      `}</style>
    </nav>
  );
}