import { Eye, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  completionDate: string;
  onClick?: () => void;
}

export default function ProjectCard({ 
  title, 
  category, 
  description, 
  imageUrl, 
  completionDate,
  onClick 
}: ProjectCardProps) {
  return (
    <Card className="group overflow-hidden hover-elevate active-elevate-2 cursor-pointer h-full" onClick={onClick}>
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button 
            size="lg" 
            className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
            data-testid={`button-view-project-${title.toLowerCase().replace(/\s+/g, '-')}`}
          >
            <Eye className="w-5 h-5 mr-2" />
            View Project
          </Button>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
          <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-2" />
        </div>
        
        <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
          {description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">
            Completed: {completionDate}
          </span>
          <div className="flex items-center text-primary text-sm font-medium">
            View Details
            <ExternalLink className="w-4 h-4 ml-1" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}