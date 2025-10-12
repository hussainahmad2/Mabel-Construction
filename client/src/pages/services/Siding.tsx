import { useState, useEffect } from "react";
import { Shield, CheckCircle, Star, ArrowRight, Calendar, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Siding() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sidingServices = [
    {
      title: "Vinyl Siding",
      description: "Durable, low-maintenance vinyl siding in a variety of colors and styles.",
      features: ["Weather Resistant", "Low Maintenance", "Energy Efficient", "Color Options", "Warranty"],
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
      startingPrice: "From $8/sq ft"
    },
    {
      title: "Fiber Cement Siding",
      description: "Premium fiber cement siding that mimics wood with superior durability.",
      features: ["Wood Look", "Fire Resistant", "Insect Resistant", "Long Lasting", "Paintable"],
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      startingPrice: "From $12/sq ft"
    },
    {
      title: "Wood Siding",
      description: "Classic wood siding for a natural, timeless appearance.",
      features: ["Natural Beauty", "Customizable", "Paintable", "Stainable", "Traditional Look"],
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      startingPrice: "From $15/sq ft"
    },
    {
      title: "Metal Siding",
      description: "Modern metal siding for contemporary homes and commercial buildings.",
      features: ["Modern Look", "Durable", "Low Maintenance", "Energy Efficient", "Recyclable"],
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      startingPrice: "From $10/sq ft"
    },
    {
      title: "Stone Veneer",
      description: "Elegant stone veneer siding for a luxurious, natural appearance.",
      features: ["Natural Stone", "Elegant Look", "Durable", "Low Maintenance", "Premium Finish"],
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      startingPrice: "From $20/sq ft"
    },
    {
      title: "Siding Repair",
      description: "Professional repair and maintenance services for existing siding.",
      features: ["Damage Assessment", "Color Matching", "Weather Sealing", "Maintenance", "Warranty"],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      startingPrice: "From $5/sq ft"
    }
  ];

  const sidingTypes = [
    { name: "Vinyl", description: "Most popular and cost-effective option", lifespan: "20-40 years" },
    { name: "Fiber Cement", description: "Premium option with wood appearance", lifespan: "30-50 years" },
    { name: "Wood", description: "Classic natural beauty", lifespan: "20-40 years" },
    { name: "Metal", description: "Modern and durable", lifespan: "40-70 years" },
    { name: "Stone", description: "Luxury natural stone", lifespan: "50-100 years" }
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
              SIDING
              <span className="block text-primary">SERVICES</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Protect and beautify your property with our expert siding installation and repair services. 
              From vinyl to stone veneer, we offer quality siding solutions for every style and budget.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-6">
              Complete Siding Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From installation to repair, we provide comprehensive siding services to protect and enhance your property.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sidingServices.map((service, index) => (
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

      {/* Siding Types */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-6">
              Siding Materials
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose from a variety of high-quality siding materials to match your style and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {sidingTypes.map((type, index) => (
              <div
                key={index}
                className={`bg-card border border-card-border rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">{type.name}</h3>
                <p className="text-muted-foreground mb-3 text-sm">{type.description}</p>
                <div className="text-sm font-semibold text-primary">Lifespan: {type.lifespan}</div>
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
                Why Choose Mabel Construction for Siding?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Expert Installation</h3>
                    <p className="text-muted-foreground">Skilled craftsmen with years of siding installation experience</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Quality Materials</h3>
                    <p className="text-muted-foreground">We use only premium siding materials from trusted manufacturers</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Weather Protection</h3>
                    <p className="text-muted-foreground">Proper installation ensures maximum protection from the elements</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Energy Efficiency</h3>
                    <p className="text-muted-foreground">Proper siding installation improves your home's energy efficiency</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Warranty Protection</h3>
                    <p className="text-muted-foreground">Comprehensive warranties on both materials and workmanship</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop"
                alt="Beautiful Home Siding"
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
              Siding Services Near You
            </h2>
            <p className="text-lg text-muted-foreground">
              We provide expert siding services throughout the Twin Cities metropolitan area.
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
            Ready to Update Your Siding?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Get a free siding inspection and quote. Protect and beautify your property with quality siding.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Inspection
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
