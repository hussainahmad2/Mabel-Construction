import { ArrowDown, Hammer, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/Construction_site_hero_image_38f111ff.png";

export default function HeroSection() {
  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Construction site" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-primary/30" />
      </div>

      {/* Floating 3D Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-icon absolute top-20 left-10 text-white/20" style={{ animationDelay: '0s' }}>
          <Hammer className="w-12 h-12" />
        </div>
        <div className="floating-icon absolute top-40 right-20 text-white/20" style={{ animationDelay: '2s' }}>
          <Shield className="w-16 h-16" />
        </div>
        <div className="floating-icon absolute bottom-40 left-20 text-white/20" style={{ animationDelay: '4s' }}>
          <Star className="w-10 h-10" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-6 leading-tight">
            QUALITY
            <span className="block text-primary">You Deserve</span>
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white/90 mb-8">
            PRICES YOU CAN AFFORD
          </h2>
          <p className="text-lg sm:text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Bold construction excellence that transforms your vision into reality. 
            Experience the perfect blend of modern design and proven craftsmanship.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-4 bg-primary border-primary-border hover-elevate"
              data-testid="button-hero-quote"
            >
              GET FREE QUOTE
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
              data-testid="button-hero-call"
            >
              CALL US NOW
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={scrollToServices}
            className="flex flex-col items-center text-white/60 hover:text-white transition-colors group"
            data-testid="button-scroll-down"
          >
            <span className="text-sm font-medium mb-2">SCROLL</span>
            <ArrowDown className="w-6 h-6 animate-bounce group-hover:transform group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(5deg); }
          66% { transform: translateY(-10px) rotate(-5deg); }
        }
        .floating-icon {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}