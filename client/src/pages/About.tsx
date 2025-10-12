import { useState, useEffect } from "react";
import { Award, Users, Clock, Shield, CheckCircle, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: "20+", label: "Years Experience", icon: Clock },
    { number: "500+", label: "Projects Completed", icon: Award },
    { number: "100%", label: "Client Satisfaction", icon: Star },
    { number: "50+", label: "Expert Team Members", icon: Users }
  ];

  const values = [
    {
      title: "Quality Craftsmanship",
      description: "We never compromise on quality. Every project is built to last with premium materials and expert workmanship.",
      icon: Shield
    },
    {
      title: "Client-Focused Approach",
      description: "Your vision is our priority. We work closely with you throughout every step of the construction process.",
      icon: Users
    },
    {
      title: "Timely Delivery",
      description: "We respect your time and budget. Our projects are completed on schedule and within budget.",
      icon: Clock
    },
    {
      title: "Licensed & Insured",
      description: "Fully licensed, bonded, and insured for your peace of mind and protection.",
      icon: CheckCircle
    }
  ];

  const testimonials = [
    {
      quote: "Mabel Construction transformed our outdated kitchen into a modern masterpiece. Their attention to detail and professionalism exceeded our expectations.",
      author: "Sarah Johnson",
      location: "Minneapolis, MN",
      rating: 5
    },
    {
      quote: "From start to finish, the team was professional, punctual, and delivered exceptional quality. Our new roof looks amazing!",
      author: "Michael Chen",
      location: "St. Paul, MN",
      rating: 5
    },
    {
      quote: "The commercial renovation project was completed ahead of schedule. Mabel Construction is now our go-to contractor for all projects.",
      author: "Lisa Rodriguez",
      location: "Maple Grove, MN",
      rating: 5
    }
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
              ABOUT
              <span className="block text-primary">MABEL CONSTRUCTION</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Building excellence in the Twin Cities for over two decades. We're more than just contractors – 
              we're your partners in bringing your construction dreams to life.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl lg:text-4xl font-black text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded in 2004, Mabel Construction began as a small family business with a simple mission: 
                to deliver exceptional construction services that exceed client expectations. What started as 
                a local roofing company has grown into a full-service construction firm serving the entire 
                Twin Cities metropolitan area.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Today, we're proud to be one of the most trusted construction companies in Minnesota, 
                known for our commitment to quality, integrity, and customer satisfaction. Our team of 
                skilled professionals brings decades of combined experience to every project.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                View Our Portfolio
              </Button>
            </div>
            <div className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop"
                alt="Mabel Construction Team"
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-6">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These core values guide everything we do and ensure we deliver the best possible experience for our clients.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-6">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about their experience with Mabel Construction.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-card border border-card-border rounded-lg p-6 transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-primary/60 mb-4" />
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss your construction needs and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Get Free Quote
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Call (555) 123-4567
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
