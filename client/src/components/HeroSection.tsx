import { useState, useEffect } from "react";
import { ArrowDown, Hammer, Shield, Star, Play, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
// Professional HD construction images from Unsplash
const heroImage1 = "https://images.unsplash.com/photo-1590725140246-20acdee442be?w=1920&h=1080&fit=crop&q=90";
const heroImage2 = "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&h=1080&fit=crop&q=90";
const heroImage3 = "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=1080&fit=crop&q=90";
const heroImage4 = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=1080&fit=crop&q=90";
const heroImage5 = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop&q=90";

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const heroImages = [
    { src: heroImage1, alt: "Professional Construction Site with Cranes" },
    { src: heroImage2, alt: "Modern Building Construction" },
    { src: heroImage3, alt: "Construction Workers on Site" },
    { src: heroImage4, alt: "Commercial Construction Project" },
    { src: heroImage5, alt: "Luxury Home Construction" }
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

      {/* Enhanced Content - Advanced Mobile Optimization */}
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center pb-16 sm:pb-20 md:pb-24">
        <div className="max-w-4xl lg:max-w-5xl mx-auto">
          {/* Animated Badge - Moved here above main headlines */}
          <div className={`inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30 mb-6 sm:mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <Award className="w-4 sm:w-5 h-4 sm:h-5 text-primary mr-2 sm:mr-3" />
            <span className="text-white font-semibold tracking-wide text-sm sm:text-base">#1 CONSTRUCTION COMPANY</span>
          </div>
          
          {/* Main Headlines with Advanced Mobile Responsiveness */}
          <h1 className={`text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-4 sm:mb-6 md:mb-8 leading-tight transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <span className="block tracking-tight">THE MODERN</span>
            <span className="block bg-gradient-to-r from-primary via-purple-400 to-blue-400 bg-clip-text text-transparent leading-tight">
              CONSTRUCTION
            </span>
            <span className="block text-white/90 text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-tight mt-2">
              & INDUSTRIAL AGENCY
            </span>
          </h1>
          
          <h2 className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white/90 mb-6 sm:mb-8 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="block sm:inline">Quality You Deserve</span>
            <span className="hidden sm:inline"> • </span>
            <span className="block sm:inline">Prices You Can Afford</span>
          </h2>
          
          <p className={`text-base sm:text-lg md:text-xl text-white/80 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-700 px-4 sm:px-0 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            We take pride in our craftsmanship approach, working closely with clients to understand their vision and deliver projects that exceed expectations.
          </p>
          
          {/* Enhanced Action Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center transition-all duration-1000 delay-900 px-4 sm:px-0 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <Button 
              size="lg" 
              className="w-full sm:w-auto text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 h-12 sm:h-14 bg-primary border-primary-border hover-elevate active-elevate-2 rounded-full font-bold tracking-wide shadow-2xl hover:shadow-primary/25 transition-all duration-300 group min-h-[48px]"
              data-testid="button-hero-quote"
            >
              GET STARTED
              <ArrowDown className="w-4 sm:w-5 h-4 sm:h-5 ml-2 sm:ml-3 rotate-[-90deg] transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              onClick={handleVideoPlay}
              className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-12 sm:h-14 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 rounded-full font-semibold transition-all duration-300 group min-h-[48px]"
              data-testid="button-hero-video"
            >
              <Play className="w-4 sm:w-5 h-4 sm:h-5 mr-2 sm:mr-3 transition-transform duration-300 group-hover:scale-110" />
              WATCH VIDEO
            </Button>
          </div>
          
          {/* Stats Row */}
          <div className={`mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 transition-all duration-1000 delay-1100 px-4 sm:px-0 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-primary mb-1 sm:mb-2">20+</div>
              <div className="text-white/80 font-medium text-sm sm:text-base">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-primary mb-1 sm:mb-2">500+</div>
              <div className="text-white/80 font-medium text-sm sm:text-base">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-primary mb-1 sm:mb-2">100%</div>
              <div className="text-white/80 font-medium text-sm sm:text-base">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-20">
          <button 
            onClick={scrollToServices}
            className={`flex flex-col items-center text-white/60 hover:text-white transition-all duration-500 group min-h-[48px] min-w-[48px] ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            data-testid="button-scroll-down"
            style={{ animationDelay: '1300ms' }}
          >
            <span className="text-xs sm:text-sm font-bold mb-1 sm:mb-2 tracking-wider">DISCOVER MORE</span>
            <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-white/40 rounded-full flex justify-center">
              <ArrowDown className="w-2 sm:w-3 h-2 sm:h-3 animate-bounce text-white/60 group-hover:text-primary transition-all duration-300 mt-1" />
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