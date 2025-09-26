import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProjectCard from "./ProjectCard";

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // //todo: remove mock data - replace with real project data
  const projects = [
    {
      title: "Modern Luxury Estate",
      category: "Residential",
      description: "A breathtaking 6,000 sq ft contemporary estate featuring floor-to-ceiling windows, infinity pool, and smart home automation throughout.",
      imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      completionDate: "March 2024"
    },
    {
      title: "Downtown Office Tower",
      category: "Commercial", 
      description: "15-story mixed-use development with retail space, modern offices, and rooftop amenities in the heart of downtown.",
      imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      completionDate: "January 2024"
    },
    {
      title: "Chef's Dream Kitchen",
      category: "Renovation",
      description: "Complete luxury kitchen transformation with custom cabinetry, marble waterfall island, and professional-grade appliances.",
      imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
      completionDate: "February 2024"
    },
    {
      title: "Craftsman Style Home",
      category: "Residential",
      description: "Timeless 3,200 sq ft craftsman home with custom millwork, hardwood floors, and period-appropriate details.",
      imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      completionDate: "December 2023"
    },
    {
      title: "Retail Shopping Center",
      category: "Commercial",
      description: "45,000 sq ft shopping center with flagship stores, restaurants, and ample parking with sustainable design features.",
      imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      completionDate: "November 2023"
    },
    {
      title: "Master Suite Addition",
      category: "Renovation", 
      description: "Luxurious master suite addition with spa-like bathroom, walk-in closet, and private balcony overlooking gardens.",
      imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      completionDate: "October 2023"
    }
  ];

  const categories = ["All", "Residential", "Commercial", "Renovation"];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const handleProjectClick = (project: typeof projects[0]) => {
    console.log(`Viewing project: ${project.title}`);
    // //todo: remove mock functionality - implement project detail modal/page
  };

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-6">
            OUR
            <span className="block text-primary">PORTFOLIO</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our showcase of exceptional construction projects that demonstrate our commitment to quality, 
            innovation, and client satisfaction across residential, commercial, and renovation work.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="px-6 py-2 hover-elevate active-elevate-2"
              data-testid={`filter-${category.toLowerCase()}`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={`${project.title}-${selectedCategory}`}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <ProjectCard 
                {...project} 
                onClick={() => handleProjectClick(project)}
              />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-8">
            Ready to start your own construction project? Let's discuss your vision.
          </p>
          <Button 
            size="lg"
            className="px-8 py-4 text-lg font-semibold hover-elevate active-elevate-2"
            data-testid="button-portfolio-contact"
          >
            Start Your Project
          </Button>
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