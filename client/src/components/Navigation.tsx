import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo3D from "./Logo3D";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo3D size="sm" />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary transition-colors font-medium"
                data-testid={`nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" data-testid="button-call">
              <Phone className="w-4 h-4 mr-2" />
              Call Us
            </Button>
            <Button size="sm" data-testid="button-quote">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="button-menu-toggle"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border shadow-lg">
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
                  data-testid={`mobile-nav-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 space-y-2">
                <Button variant="outline" className="w-full" data-testid="mobile-button-call">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Us
                </Button>
                <Button className="w-full" data-testid="mobile-button-quote">
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}