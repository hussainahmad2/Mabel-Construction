import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import Logo3D from "./Logo3D";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      "Custom Home Building",
      "Commercial Construction", 
      "Renovations & Remodeling",
      "Structural Work",
      "Emergency Repairs"
    ],
    company: [
      "About Us",
      "Our Team", 
      "Careers",
      "Safety Standards",
      "Certifications"
    ],
    resources: [
      "Project Gallery",
      "Client Testimonials",
      "Construction Process",
      "Financing Options",
      "Maintenance Tips"
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" }, 
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Logo3D size="md" />
            <p className="text-background/80 mt-6 leading-relaxed max-w-md">
              Bold construction excellence that transforms your vision into reality. 
              Experience the perfect blend of modern design and proven craftsmanship.
            </p>
            
            {/* Contact Info */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-background/90">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-background/90">info@mabelconstruction.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-background/90">123 Construction Ave, Building City, BC 12345</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-background mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-background/80 hover:text-primary transition-colors"
                    data-testid={`footer-service-${index}`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold text-background mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-background/80 hover:text-primary transition-colors"
                    data-testid={`footer-company-${index}`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold text-background mb-6">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-background/80 hover:text-primary transition-colors"
                    data-testid={`footer-resource-${index}`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-background/60 text-sm">
              © {currentYear} Mabel Construction. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-200"
                  data-testid={`social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <a 
                href="#" 
                className="text-background/60 hover:text-primary transition-colors"
                data-testid="footer-privacy"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-background/60 hover:text-primary transition-colors"
                data-testid="footer-terms"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}