import { useState, useEffect } from "react";
import { Home, Wrench, CheckCircle, Star, ArrowRight, Calendar, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Remodeling() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const remodelingServices = [
    {
      title: "Kitchen Remodeling",
      description: "Transform your kitchen into a beautiful, functional space that fits your lifestyle.",
      features: ["Custom Cabinetry", "Countertop Installation", "Appliance Upgrades", "Lighting Design", "Flooring"],
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
      startingPrice: "From $15,000"
    },
    {
      title: "Bathroom Renovation",
      description: "Create a spa-like retreat with our expert bathroom remodeling services.",
      features: ["Vanity Installation", "Tile Work", "Plumbing Updates", "Lighting", "Storage Solutions"],
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      startingPrice: "From $8,000"
    },
    {
      title: "Basement Finishing",
      description: "Turn your unfinished basement into valuable living space.",
      features: ["Framing", "Insulation", "Drywall", "Flooring", "Lighting", "Storage"],
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      startingPrice: "From $25,000"
    },
    {
      title: "Room Additions",
      description: "Add space and value to your home with a custom room addition.",
      features: ["Design Planning", "Foundation Work", "Framing", "Roofing", "Finishing"],
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
      startingPrice: "From $50,000"
    },
    {
      title: "Whole House Remodeling",
      description: "Complete home transformation from top to bottom.",
      features: ["Design Consultation", "Structural Work", "All Rooms", "Systems Update", "Finishing"],
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      startingPrice: "From $100,000"
    },
    {
      title: "Historic Restoration",
      description: "Preserve the character of your historic home with careful restoration.",
      features: ["Period-Appropriate Materials", "Craftsmanship", "Code Compliance", "Preservation", "Modern Updates"],
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
      startingPrice: "Custom Quote"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We discuss your vision, needs, and budget to understand your project goals."
    },
    {
      step: "02",
      title: "Design & Planning",
      description: "Create detailed plans and 3D renderings to visualize your new space."
    },
    {
      step: "03",
      title: "Permits & Approvals",
      description: "Handle all necessary permits and approvals for your remodeling project."
    },
    {
      step: "04",
      title: "Construction",
      description: "Expert execution with regular progress updates and quality control."
    },
    {
      step: "05",
      title: "Final Walkthrough",
      description: "Complete project review and handover with warranty information."
    }
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
              REMODELING
              <span className="block text-primary">SERVICES</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transform your space with our expert remodeling services. From kitchen renovations to whole house 
              makeovers, we bring your vision to life with quality craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-6">
              Complete Remodeling Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Whether you're updating a single room or transforming your entire home, we have the expertise to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {remodelingServices.map((service, index) => (
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
                    <h4 className="font-semibold text-foreground mb-2">Includes:</h4>
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

      {/* Process Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-6">
              Our Remodeling Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We follow a proven process to ensure your remodeling project is completed on time, on budget, and to your satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full text-2xl font-black mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
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
                Why Choose Mabel Construction for Remodeling?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Design Expertise</h3>
                    <p className="text-muted-foreground">Our design team creates beautiful, functional spaces tailored to your needs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Quality Craftsmanship</h3>
                    <p className="text-muted-foreground">Skilled craftsmen with attention to detail and quality materials</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Project Management</h3>
                    <p className="text-muted-foreground">Dedicated project managers ensure smooth execution and communication</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Licensed & Insured</h3>
                    <p className="text-muted-foreground">Fully licensed contractors with comprehensive insurance coverage</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Warranty Protection</h3>
                    <p className="text-muted-foreground">Comprehensive warranties on all work performed</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop"
                alt="Beautiful Kitchen Remodel"
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
              Remodeling Services Near You
            </h2>
            <p className="text-lg text-muted-foreground">
              We provide expert remodeling services throughout the Twin Cities metropolitan area.
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
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Get a free consultation and design estimate. Let's create the home of your dreams together.
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
