import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import CustomLogo from "./CustomLogo";
import useResponsive from "@/hooks/use-responsive";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { isMobile, isTablet, isDesktop } = useResponsive();

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
      <div className="container-responsive">
        {/* Main Footer Content */}
        <div className={`${
          isMobile ? 'py-12' : isTablet ? 'py-14' : 'py-16'
        } grid ${
          isMobile ? 'grid-cols-1' : isTablet ? 'grid-cols-2' : 'grid-cols-5'
        } ${
          isMobile ? 'gap-6' : isTablet ? 'gap-8' : 'gap-8'
        }`}>
          {/* Company Info */}
          <div className={`${
            isMobile ? 'col-span-1' : isTablet ? 'col-span-2' : 'col-span-2'
          }`}>
            <CustomLogo size={isMobile ? "sm" : isTablet ? "md" : "lg"} animated={false} variant="light" />
            <p className={`${
              isMobile ? 'text-sm' : isTablet ? 'text-base' : 'text-base'
            } text-background/80 ${
              isMobile ? 'mt-4' : isTablet ? 'mt-5' : 'mt-6'
            } leading-relaxed max-w-md`}>
              Bold construction excellence that transforms your vision into reality. 
              Experience the perfect blend of modern design and proven craftsmanship.
            </p>
            
            {/* Contact Info */}
            <div className={`${
              isMobile ? 'mt-6' : isTablet ? 'mt-7' : 'mt-8'
            } ${
              isMobile ? 'space-y-3' : 'space-y-4'
            }`}>
              <div className="flex items-center space-x-3">
                <Phone className={`${
                  isMobile ? 'w-4 h-4' : 'w-5 h-5'
                } text-primary`} />
                <span className={`${
                  isMobile ? 'text-sm' : 'text-base'
                } text-background/90`}>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className={`${
                  isMobile ? 'w-4 h-4' : 'w-5 h-5'
                } text-primary`} />
                <span className={`${
                  isMobile ? 'text-sm' : 'text-base'
                } text-background/90`}>info@mabelconstruction.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className={`${
                  isMobile ? 'w-4 h-4' : 'w-5 h-5'
                } text-primary`} />
                <span className={`${
                  isMobile ? 'text-sm' : 'text-base'
                } text-background/90`}>123 Construction Ave, Building City, BC 12345</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className={`${
            isMobile ? 'mt-6' : ''
          }`}>
            <h3 className={`${
              isMobile ? 'text-base' : 'text-lg'
            } font-bold text-background ${
              isMobile ? 'mb-4' : 'mb-6'
            }`}>Services</h3>
            <ul className={`${
              isMobile ? 'space-y-2' : 'space-y-3'
            }`}>
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className={`${
                      isMobile ? 'text-sm' : 'text-base'
                    } text-background/80 hover:text-primary transition-colors`}
                    data-testid={`footer-service-${index}`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className={`${
            isMobile ? 'mt-6' : ''
          }`}>
            <h3 className={`${
              isMobile ? 'text-base' : 'text-lg'
            } font-bold text-background ${
              isMobile ? 'mb-4' : 'mb-6'
            }`}>Company</h3>
            <ul className={`${
              isMobile ? 'space-y-2' : 'space-y-3'
            }`}>
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className={`${
                      isMobile ? 'text-sm' : 'text-base'
                    } text-background/80 hover:text-primary transition-colors`}
                    data-testid={`footer-company-${index}`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className={`${
            isMobile ? 'mt-6' : ''
          }`}>
            <h3 className={`${
              isMobile ? 'text-base' : 'text-lg'
            } font-bold text-background ${
              isMobile ? 'mb-4' : 'mb-6'
            }`}>Resources</h3>
            <ul className={`${
              isMobile ? 'space-y-2' : 'space-y-3'
            }`}>
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className={`${
                      isMobile ? 'text-sm' : 'text-base'
                    } text-background/80 hover:text-primary transition-colors`}
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
        <div className={`${
          isMobile ? 'py-6' : 'py-8'
        } border-t border-background/20`}>
          <div className={`flex ${
            isMobile ? 'flex-col' : 'flex-row'
          } items-center justify-between ${
            isMobile ? 'space-y-4' : 'space-y-0'
          }`}>
            {/* Copyright */}
            <p className={`${
              isMobile ? 'text-xs' : 'text-sm'
            } text-background/60`}>
              © {currentYear} Mabel Construction. All rights reserved.
            </p>

            {/* Social Links */}
            <div className={`flex items-center ${
              isMobile ? 'space-x-3' : 'space-x-4'
            }`}>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className={`${
                    isMobile ? 'w-8 h-8' : 'w-10 h-10'
                  } bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-200 touch-target`}
                  data-testid={`social-${social.label.toLowerCase()}`}
                >
                  <social.icon className={`${
                    isMobile ? 'w-4 h-4' : 'w-5 h-5'
                  }`} />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className={`flex items-center ${
              isMobile ? 'space-x-4' : 'space-x-6'
            } ${
              isMobile ? 'text-xs' : 'text-sm'
            }`}>
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