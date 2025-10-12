import { useState, useEffect } from "react";
import { Zap, CheckCircle, Star, ArrowRight, Calendar, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Windows() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const windowServices = [
    {
      title: "Window Replacement",
      description: "Complete window replacement with energy-efficient options for better performance.",
      features: ["Energy Efficient", "Noise Reduction", "UV Protection", "Easy Operation", "Warranty"],
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      startingPrice: "From $300/window"
    },
    {
      title: "New Construction Windows",
      description: "Professional window installation for new homes and buildings.",
      features: ["Custom Sizing", "Energy Star Rated", "Weather Sealing", "Professional Install", "Warranty"],
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      startingPrice: "From $400/window"
    },
    {
      title: "Window Repair",
      description: "Expert repair services to restore your windows to optimal condition.",
      features: ["Glass Replacement", "Hardware Repair", "Weather Stripping", "Seal Repair", "Maintenance"],
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
      startingPrice: "From $150/window"
    },
    {
      title: "Bay & Bow Windows",
      description: "Elegant bay and bow windows to enhance your home's architecture.",
      features: ["Custom Design", "Natural Light", "Architectural Appeal", "Energy Efficient", "Professional Install"],
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      startingPrice: "From $1,500"
    },
    {
      title: "Skylights",
      description: "Bring natural light into your home with professional skylight installation.",
      features: ["Natural Light", "Ventilation Options", "Energy Efficient", "Weather Sealed", "Remote Control"],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      startingPrice: "From $800"
    },
    {
      title: "Window Treatments",
      description: "Complete window treatment solutions for privacy and style.",
      features: ["Blinds", "Shades", "Shutters", "Curtains", "Custom Design"],
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
      startingPrice: "From $200/window"
    }
  ];

  const windowTypes = [
    { name: "Double-Hung", description: "Classic style with two sashes", energy: "High" },
    { name: "Casement", description: "Crank-out style for easy operation", energy: "High" },
    { name: "Sliding", description: "Horizontal sliding panels", energy: "Medium" },
    { name: "Picture", description: "Fixed windows for views", energy: "High" },
    { name: "Awning", description: "Top-hinged outward opening", energy: "High" }
  ];

  const locations = [
    "Minneapolis", "St. Paul", "Maple Grove", "Plymouth", 
    "Rogers", "Coon Rapids", "Anoka", "Brooklyn Park"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground mb-6">
              WINDOW
              <span className="block text-primary">SERVICES</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Enhance your home's comfort, energy efficiency, and beauty with our expert window installation 
              and replacement services. Quality windows that make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-6">
              Complete Window Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From replacement to new installation, we provide comprehensive window services for every need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {windowServices.map((service, index) => (
              <div
                key={index}
                className={`bg-card border border-card-border rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2">Features:</h4>
                    <div className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">{service.startingPrice}</span>
                    <Button variant="outline" size="sm">
                      Get Quote
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Window Types */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-6">
              Window Styles
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose from a variety of window styles to match your home's architecture and your personal preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {windowTypes.map((type, index) => (
              <div
                key={index}
                className={`bg-card border border-card-border rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">{type.name}</h3>
                <p className="text-muted-foreground mb-3 text-sm">{type.description}</p>
                <div className="text-sm font-semibold text-primary">Energy: {type.energy}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-6">
                Why Choose Mabel Construction for Windows?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Energy Efficiency</h3>
                    <p className="text-muted-foreground">Energy Star rated windows to reduce your utility bills</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Professional Installation</h3>
                    <p className="text-muted-foreground">Expert installation ensures proper fit and performance</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Quality Materials</h3>
                    <p className="text-muted-foreground">Premium windows from trusted manufacturers</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Custom Solutions</h3>
                    <p className="text-muted-foreground">Custom sizing and design options for your specific needs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Warranty Protection</h3>
                    <p className="text-muted-foreground">Comprehensive warranties on both windows and installation</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop"
                alt="Beautiful Windows"
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-4">
              Window Services Near You
            </h2>
            <p className="text-lg text-muted-foreground">
              We provide expert window services throughout the Twin Cities metropolitan area.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {locations.map((location, index) => (
              <div
                key={index}
                className={`bg-card border border-card-border rounded-lg p-4 text-center hover:shadow-lg transition-all duration-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <MapPin className="w-6 h-6 text-primary mx-auto mb-2" />
                <span className="text-sm font-semibold text-foreground">{location}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-6">
            Ready to Upgrade Your Windows?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Get a free window consultation and quote. Improve your home's comfort and energy efficiency today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Phone className="w-5 h-5 mr-2" />
              Call (555) 123-4567
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
