import { useState, useEffect } from "react";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import CustomLogo from "./CustomLogo";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { 
      label: "Services", 
      href: "/services",
      submenu: [
        { label: "Roofing Services", href: "/roofing-services" },
        { label: "Remodeling Services", href: "/remodeling-services" },
        { label: "Commercial Services", href: "/commercial-services" },
        { label: "Siding Services", href: "/siding-services" },
        { label: "Window Services", href: "/window-services" }
      ]
    },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "Locations", href: "/locations" },
    { label: "Contact", href: "/contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleGetQuote = () => {
    if (window.location.pathname === '/') {
      // If on home page, scroll to contact section
      const element = document.querySelector('#contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on other pages, navigate to home page contact section
      window.location.href = '/#contact';
    }
    setIsMenuOpen(false);
  };

  const handleNavigation = (href: string) => {
    if (href.startsWith('#')) {
      // Handle anchor links for home page sections
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Handle page navigation
      window.location.href = href;
    }
    setIsMenuOpen(false);
  };

  const isHomePage = window.location.pathname === '/';
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isHomePage 
        ? (scrolled 
          ? 'bg-background/98 backdrop-blur-xl shadow-lg border-b border-border/50' 
          : 'bg-transparent')
        : 'bg-background/98 backdrop-blur-xl shadow-lg border-b border-border/50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-500 ${
          isHomePage ? (scrolled ? 'h-14 sm:h-16' : 'h-16 sm:h-20') : 'h-14 sm:h-16'
        }`}>
          {/* Logo */}
          <div className="transform transition-all duration-300 hover:scale-105">
            <CustomLogo 
              size="sm" 
              animated={true} 
              variant={isHomePage ? (scrolled ? "dark" : "light") : "dark"}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <button
                key={item.label}
                onClick={() => handleNavigation(item.href)}
                className={`relative px-3 xl:px-4 py-2 text-xs xl:text-sm font-semibold tracking-wide uppercase transition-all duration-300 group min-h-[44px] flex items-center ${
                  isHomePage ? (scrolled ? 'text-foreground' : 'text-white') : 'text-foreground'
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
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-3">
            <Button 
              variant="ghost" 
              size="sm" 
              className={`font-semibold transition-all duration-300 hover:scale-105 text-xs xl:text-sm min-h-[44px] px-3 xl:px-4 ${
                isHomePage ? (scrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-primary') : 'text-foreground hover:text-primary'
              }`}
              data-testid="button-call"
            >
              <Phone className="w-3 xl:w-4 h-3 xl:h-4 mr-1 xl:mr-2" />
              <span className="hidden xl:inline">(555) 123-4567</span>
              <span className="xl:hidden">Call</span>
            </Button>
            <Button 
              size="sm" 
              onClick={handleGetQuote}
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-4 xl:px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg group text-xs xl:text-sm min-h-[44px]"
              data-testid="button-quote"
            >
              <span className="hidden xl:inline">Get Free Quote</span>
              <span className="xl:hidden">Quote</span>
              <ArrowRight className="w-3 xl:w-4 h-3 xl:h-4 ml-1 xl:ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`lg:hidden transition-all duration-300 hover:scale-110 min-w-[48px] min-h-[48px] ${
              isHomePage ? (scrolled ? 'text-foreground' : 'text-white') : 'text-foreground'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="button-menu-toggle"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </div>

        {/* Enhanced Mobile Menu */}
        <div className={`lg:hidden fixed inset-0 z-[9999] transition-all duration-500 ${
          isMenuOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible'
        }`}>
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className={`absolute top-0 right-0 h-full w-full max-w-sm bg-background/98 backdrop-blur-xl border-l border-border/50 shadow-2xl transform transition-all duration-500 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-border/30">
              <div className="flex items-center space-x-3">
                <CustomLogo size="sm" variant="dark" />
                <div className="bg-primary/10 px-3 py-1 rounded-full">
                  <span className="text-xs font-bold text-primary">#1 CONSTRUCTION COMPANY</span>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(false)}
                className="text-foreground hover:text-primary transition-all duration-300 hover:scale-110 min-w-[48px] min-h-[48px]"
              >
                <X className="w-6 h-6" />
              </Button>
            </div>

            {/* Navigation Items */}
            <div className="px-4 sm:px-6 py-6 space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={item.label}
                  onClick={() => handleNavigation(item.href)}
                  className="block w-full text-left text-lg font-semibold text-foreground hover:text-primary transition-all duration-300 py-4 px-4 rounded-lg hover:bg-primary/5 hover:translate-x-2 min-h-[56px] flex items-center justify-between group"
                  data-testid={`mobile-nav-${item.label.toLowerCase()}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
                </button>
              ))}
            </div>

            {/* Contact Section */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 border-t border-border/30 bg-background/95">
              <div className="space-y-4">
                <div className="flex items-center justify-center p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <Phone className="w-5 h-5 text-primary mr-3" />
                  <span className="text-lg font-semibold text-foreground">(555) 123-4567</span>
                </div>
                <Button 
                  onClick={handleGetQuote}
                  className="w-full h-14 text-lg font-bold bg-primary hover:bg-primary/90 rounded-xl hover:scale-105 transition-all duration-300 group shadow-lg" 
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