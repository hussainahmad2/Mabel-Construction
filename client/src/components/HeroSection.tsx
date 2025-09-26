import { useState, useEffect } from "react";
import { ArrowDown, Hammer, Shield, Star, Play, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage1 from "@assets/stock_images/modern_construction__73d5bb72.jpg";
import heroImage2 from "@assets/stock_images/luxury_modern_buildi_4a2612ff.jpg";
import heroImage3 from "@assets/stock_images/professional_constru_4979b818.jpg";
import heroImage4 from "@assets/stock_images/modern_construction__b326e3db.jpg";
import heroImage5 from "@assets/stock_images/luxury_modern_buildi_c655d0f3.jpg";

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const heroImages = [
    { src: heroImage1, alt: "Modern Construction Site" },
    { src: heroImage2, alt: "Luxury Building Architecture" },
    { src: heroImage3, alt: "Professional Construction Workers" },
    { src: heroImage4, alt: "Construction Cranes and Equipment" },
    { src: heroImage5, alt: "Modern Building Development" }
  ];
  
  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [heroImages.length]);
  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const handleVideoPlay = () => {
    console.log('Play company video');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Auto-Changing Background Images */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <img 
              src={image.src} 
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-primary/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>
      
      {/* Slideshow Indicators */}
      <div className="absolute bottom-8 right-8 z-20 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-primary scale-125' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
            data-testid={`hero-indicator-${index}`}
          />
        ))}
      </div>

      {/* Enhanced Floating 3D Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-icon-1 absolute top-20 left-[5%] text-white/15" style={{ animationDelay: '0s' }}>
          <Hammer className="w-16 h-16" />
        </div>
        <div className="floating-icon-2 absolute top-32 right-[8%] text-white/15" style={{ animationDelay: '1s' }}>
          <Shield className="w-20 h-20" />
        </div>
        <div className="floating-icon-3 absolute bottom-40 left-[10%] text-white/15" style={{ animationDelay: '2s' }}>
          <Star className="w-14 h-14" />
        </div>
        <div className="floating-icon-1 absolute top-[60%] right-[15%] text-white/15" style={{ animationDelay: '3s' }}>
          <Award className="w-12 h-12" />
        </div>
        <div className="floating-icon-2 absolute bottom-[20%] right-[5%] text-white/15" style={{ animationDelay: '4s' }}>
          <Hammer className="w-10 h-10" />
        </div>
      </div>

      {/* Enhanced Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Animated Badge */}
          <div className={`inline-flex items-center px-6 py-3 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30 mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <Award className="w-5 h-5 text-primary mr-3" />
            <span className="text-white font-semibold tracking-wide">#1 CONSTRUCTION COMPANY</span>
          </div>
          
          {/* Main Headlines with Staggered Animation */}
          <h1 className={`text-4xl sm:text-6xl lg:text-8xl font-black text-white mb-6 leading-tight transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            THE MODERN
            <span className="block bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              CONSTRUCTION
            </span>
            <span className="block text-white/90">& INDUSTRIAL AGENCY</span>
          </h1>
          
          <h2 className={`text-xl sm:text-2xl lg:text-3xl font-bold text-white/90 mb-8 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Quality You Deserve • Prices You Can Afford
          </h2>
          
          <p className={`text-lg sm:text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            We take pride in our craftsmanship approach, working closely with clients to understand their vision and deliver projects that exceed expectations. From concept to completion, every detail matters.
          </p>
          
          {/* Enhanced Action Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-900 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <Button 
              size="lg" 
              className="text-lg px-10 py-4 h-14 bg-primary border-primary-border hover-elevate active-elevate-2 rounded-full font-bold tracking-wide shadow-2xl hover:shadow-primary/25 transition-all duration-300 group"
              data-testid="button-hero-quote"
            >
              GET STARTED
              <ArrowDown className="w-5 h-5 ml-3 rotate-[-90deg] transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              onClick={handleVideoPlay}
              className="text-lg px-8 py-4 h-14 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 rounded-full font-semibold transition-all duration-300 group"
              data-testid="button-hero-video"
            >
              <Play className="w-5 h-5 mr-3 transition-transform duration-300 group-hover:scale-110" />
              WATCH VIDEO
            </Button>
          </div>
          
          {/* Stats Row */}
          <div className={`mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 transition-all duration-1000 delay-1100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-black text-primary mb-2">20+</div>
              <div className="text-white/80 font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-black text-primary mb-2">500+</div>
              <div className="text-white/80 font-medium">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-black text-primary mb-2">100%</div>
              <div className="text-white/80 font-medium">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={scrollToServices}
            className={`flex flex-col items-center text-white/60 hover:text-white transition-all duration-500 group ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            data-testid="button-scroll-down"
            style={{ animationDelay: '1300ms' }}
          >
            <span className="text-sm font-bold mb-3 tracking-wider">DISCOVER MORE</span>
            <div className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center">
              <ArrowDown className="w-4 h-4 animate-bounce text-white/60 group-hover:text-primary transition-all duration-300 mt-2" />
            </div>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes float1 {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          25% { transform: translateY(-15px) rotate(3deg) scale(1.05); }
          50% { transform: translateY(-25px) rotate(-2deg) scale(1.1); }
          75% { transform: translateY(-10px) rotate(4deg) scale(1.05); }
        }
        
        @keyframes float2 {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          33% { transform: translateY(-30px) rotate(-5deg) scale(1.08); }
          66% { transform: translateY(-15px) rotate(3deg) scale(1.12); }
        }
        
        @keyframes float3 {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          20% { transform: translateY(-20px) rotate(2deg) scale(1.06); }
          40% { transform: translateY(-35px) rotate(-3deg) scale(1.1); }
          60% { transform: translateY(-25px) rotate(4deg) scale(1.08); }
          80% { transform: translateY(-10px) rotate(-2deg) scale(1.04); }
        }
        
        @keyframes slideInFromBottom {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .floating-icon-1 {
          animation: float1 8s ease-in-out infinite;
        }
        
        .floating-icon-2 {
          animation: float2 10s ease-in-out infinite;
        }
        
        .floating-icon-3 {
          animation: float3 12s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}