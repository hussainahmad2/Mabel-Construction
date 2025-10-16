import { useState } from "react";
import { Eye, ExternalLink, Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import useResponsive from "@/hooks/use-responsive";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  completionDate: string;
  status?: string;
  onClick?: () => void;
}

export default function ProjectCard({ 
  title, 
  category, 
  description, 
  imageUrl, 
  completionDate,
  status = "Completed",
  onClick 
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { isMobile, isTablet, isDesktop } = useResponsive();
  
  return (
    <Card 
      className="group overflow-hidden hover-elevate active-elevate-2 cursor-pointer h-full transform transition-all duration-500 hover:scale-105 hover:shadow-2xl border-0" 
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container with Enhanced Effects */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img 
          src={imageUrl} 
          alt={title}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isHovered ? 'scale-110 brightness-110' : 'scale-100 brightness-100'
          }`}
        />
        
        {/* Multiple Gradient Overlays */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-40'
        }`} />
        
        <div className={`absolute inset-0 bg-gradient-to-r from-primary/30 via-transparent to-accent/30 transition-all duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`} />
        
        {/* Enhanced Hover Overlay */}
        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
          isHovered ? 'opacity-100 backdrop-blur-sm' : 'opacity-0'
        }`}>
          <div className="text-center transform transition-all duration-500">
            <Button 
              size="lg" 
              className={`bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 mb-4 transition-all duration-300 ${
                isHovered ? 'scale-100 translate-y-0' : 'scale-75 translate-y-4'
              }`}
              data-testid={`button-view-project-${title.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={(e) => {
                e.stopPropagation();
                onClick?.();
              }}
            >
              <Eye className="w-5 h-5 mr-2" />
              View Project
            </Button>
            <div className={`text-white text-sm transition-all duration-500 delay-100 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              Click to see full details
            </div>
          </div>
        </div>

        {/* Enhanced Category Badge */}
        <div className={`absolute ${
          isMobile ? 'top-2 left-2' : isTablet ? 'top-3 left-3' : 'top-4 left-4'
        }`}>
          <span className={`bg-primary text-primary-foreground ${
            isMobile ? 'px-2 py-1 text-xs' : isTablet ? 'px-3 py-1.5 text-sm' : 'px-4 py-2 text-sm'
          } rounded-full font-bold shadow-lg transition-all duration-300 ${
            isHovered ? 'scale-110 shadow-primary/25' : 'scale-100'
          }`}>
            {category}
          </span>
        </div>
        
        {/* Status Badge */}
        <div className={`absolute ${
          isMobile ? 'top-2 right-2' : isTablet ? 'top-3 right-3' : 'top-4 right-4'
        }`}>
          <span className={`${
            isMobile ? 'px-2 py-1 text-xs' : 'px-3 py-1 text-xs'
          } rounded-full font-bold shadow-lg transition-all duration-300 ${
            status === "Under Construction" 
              ? 'bg-orange-500 text-white' 
              : 'bg-green-500 text-white'
          } ${isHovered ? 'scale-110' : 'scale-100'}`}>
            {status}
          </span>
        </div>
        
        {/* Corner Decoration */}
        <div className={`absolute bottom-4 right-4 transition-all duration-500 ${
          isHovered ? 'opacity-100 rotate-12 scale-110' : 'opacity-0 rotate-0 scale-100'
        }`}>
          <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
            <ExternalLink className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>

      {/* Enhanced Content */}
      <CardContent className={`${
        isMobile ? 'p-4' : isTablet ? 'p-5' : 'p-6'
      }`}>
        <div className={`flex items-start justify-between ${
          isMobile ? 'mb-3' : 'mb-4'
        }`}>
          <h3 className={`${
            isMobile ? 'text-lg' : isTablet ? 'text-xl' : 'text-xl'
          } font-bold line-clamp-2 transition-all duration-300 ${
            isHovered ? 'text-primary transform -translate-y-0.5' : 'text-foreground'
          }`}>
            {title}
          </h3>
          <ExternalLink className={`${
            isMobile ? 'w-4 h-4' : 'w-5 h-5'
          } flex-shrink-0 ml-2 transition-all duration-300 ${
            isHovered ? 'text-primary transform rotate-12 scale-110' : 'text-muted-foreground'
          }`} />
        </div>
        
        <p className={`${
          isMobile ? 'text-sm' : isTablet ? 'text-base' : 'text-base'
        } text-muted-foreground ${
          isMobile ? 'mb-4' : isTablet ? 'mb-5' : 'mb-6'
        } line-clamp-3 leading-relaxed transition-all duration-300 ${
          isHovered ? 'text-foreground/80' : ''
        }`}>
          {description}
        </p>
        
        {/* Enhanced Project Details */}
        <div className={`${
          isMobile ? 'space-y-2' : 'space-y-3'
        }`}>
          <div className={`flex items-center ${
            isMobile ? 'text-xs' : 'text-sm'
          } transition-all duration-300 ${
            isHovered ? 'text-foreground/80 transform translate-x-1' : 'text-muted-foreground'
          }`}>
            <Calendar className={`${
              isMobile ? 'w-3 h-3' : 'w-4 h-4'
            } mr-2 text-primary`} />
            <span>
              {status === "Under Construction" ? `Expected: ${completionDate}` : `Completed: ${completionDate}`}
            </span>
          </div>
          
          <div 
            className={`flex items-center justify-between ${
              isMobile ? 'pt-2' : 'pt-2'
            } border-t border-border/50 transition-all duration-300 cursor-pointer touch-target ${
              isHovered ? 'border-primary/20' : ''
            }`}
            onClick={(e) => {
              e.stopPropagation();
              onClick?.();
            }}
          >
            <div className={`flex items-center text-primary ${
              isMobile ? 'text-xs' : 'text-sm'
            } font-semibold`}>
              <MapPin className={`${
                isMobile ? 'w-3 h-3' : 'w-4 h-4'
              } mr-1`} />
              View Details
            </div>
            <div className={`flex items-center ${
              isMobile ? 'text-xs' : 'text-xs'
            } text-muted-foreground transition-all duration-300 ${
              isHovered ? 'text-primary' : ''
            }`}>
              <span>Click to explore</span>
              <ExternalLink className={`${
                isMobile ? 'w-2.5 h-2.5' : 'w-3 h-3'
              } ml-1`} />
            </div>
          </div>
        </div>
      </CardContent>
      
      {/* Animated Border Effect */}
      <div className={`absolute inset-0 transition-all duration-500 pointer-events-none ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 rounded-lg" />
      </div>
    </Card>
  );
}