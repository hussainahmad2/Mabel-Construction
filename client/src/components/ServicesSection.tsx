import { Home, Building, Wrench, Hammer, PaintBucket, Zap } from "lucide-react";
import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  const services = [
    {
      icon: Home,
      title: "Custom Home Building",
      description: "From concept to completion, we build your dream home with meticulous attention to detail and modern construction techniques.",
      features: [
        "Architectural Design Consultation", 
        "Luxury Finishes & Materials",
        "Energy-Efficient Construction",
        "Smart Home Integration"
      ]
    },
    {
      icon: Building,
      title: "Commercial Construction",
      description: "Professional commercial spaces that enhance your business image and provide functional, efficient work environments.",
      features: [
        "Office Buildings & Complexes",
        "Retail & Restaurant Spaces", 
        "Warehouse & Industrial",
        "Tenant Improvement Projects"
      ]
    },
    {
      icon: Wrench,
      title: "Renovations & Remodeling",
      description: "Transform your existing space with our expert renovation services that breathe new life into any property.",
      features: [
        "Kitchen & Bathroom Remodeling",
        "Basement Finishing",
        "Room Additions",
        "Exterior Renovations"
      ]
    },
    {
      icon: Hammer,
      title: "Structural Work",
      description: "Expert structural engineering and construction services ensuring safety, durability, and code compliance.",
      features: [
        "Foundation Repair & Installation",
        "Load-Bearing Wall Modifications",
        "Structural Reinforcement", 
        "Seismic Retrofitting"
      ]
    },
    {
      icon: PaintBucket,
      title: "Finishing Services",
      description: "Professional finishing touches that showcase the quality and craftsmanship of your construction project.",
      features: [
        "Interior & Exterior Painting",
        "Flooring Installation",
        "Trim & Millwork",
        "Custom Cabinetry"
      ]
    },
    {
      icon: Zap,
      title: "Specialty Services",
      description: "Comprehensive construction solutions including electrical, plumbing, and emergency repair services.",
      features: [
        "Emergency Repair Services",
        "Electrical & Plumbing",
        "HVAC Installation",
        "Disaster Restoration"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-6">
            SERVICES
            <span className="block text-primary">We Provide</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Mabel Construction delivers comprehensive construction services with bold design and exceptional quality. 
            From custom homes to commercial projects, we build your vision with precision and style.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
              data-testid={`service-card-${index}`}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-8">
            Need a custom solution? We're here to help bring your vision to life.
          </p>
          <button 
            className="bg-primary text-primary-foreground px-8 py-4 text-lg font-semibold rounded-md hover-elevate active-elevate-2 transition-all"
            data-testid="button-services-consultation"
          >
            Schedule Free Consultation
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}