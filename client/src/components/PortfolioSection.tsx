import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Real project data including roofing projects
  const projects = [
    // Completed Roofing Projects
    {
      id: 1,
      title: "Minneapolis Residential Roof Replacement",
      category: "Roofing",
      location: "Minneapolis",
      description: "Complete roof replacement for a 2,500 sq ft residential home featuring premium architectural shingles, enhanced ventilation, and ice dam protection. Project included gutter replacement and skylight installation.",
      imageUrl: "/assets/1.jpg",
      completionDate: "March 2024",
      size: "2,500 sq ft",
      budget: "$45K",
      features: ["Premium Shingles", "Enhanced Ventilation", "Ice Dam Protection", "Gutter Replacement"],
      status: "Completed"
    },
    {
      id: 2,
      title: "St. Paul Commercial Roofing System",
      category: "Roofing",
      location: "St. Paul",
      description: "Professional commercial roofing installation for a 15,000 sq ft office building. Features TPO membrane roofing, improved insulation, and comprehensive warranty coverage for maximum durability.",
      imageUrl: "/assets/2.jpg",
      completionDate: "February 2024",
      size: "15,000 sq ft",
      budget: "$180K",
      features: ["TPO Membrane", "Improved Insulation", "Comprehensive Warranty", "Energy Efficient"],
      status: "Completed"
    },
    {
      id: 3,
      title: "Maple Grove Luxury Home Roofing",
      category: "Roofing",
      location: "Maple Grove",
      description: "High-end residential roofing project featuring premium slate tiles, custom copper gutters, and integrated solar panel preparation. Includes comprehensive weatherproofing and 30-year warranty.",
      imageUrl: "/assets/3.jpg",
      completionDate: "January 2024",
      size: "4,200 sq ft",
      budget: "$95K",
      features: ["Premium Slate Tiles", "Custom Copper Gutters", "Solar Panel Ready", "30-Year Warranty"],
      status: "Completed"
    },
    // Under Construction Roofing Projects
    {
      id: 4,
      title: "Plymouth Multi-Family Complex Roofing",
      category: "Roofing",
      location: "Plymouth",
      description: "Large-scale roofing project for a 50-unit apartment complex. Installing energy-efficient EPDM membrane roofing with enhanced insulation and modern drainage systems.",
      imageUrl: "/assets/4.jpg",
      completionDate: "June 2024",
      size: "75,000 sq ft",
      budget: "$320K",
      features: ["EPDM Membrane", "Energy Efficient", "Enhanced Insulation", "Modern Drainage"],
      status: "Under Construction"
    },
    {
      id: 5,
      title: "Coon Rapids Industrial Facility Roof",
      category: "Roofing",
      location: "Coon Rapids",
      description: "Heavy-duty industrial roofing installation for a 25,000 sq ft manufacturing facility. Features reinforced metal roofing, specialized ventilation systems, and enhanced structural support.",
      imageUrl: "/assets/5.jpg",
      completionDate: "July 2024",
      size: "25,000 sq ft",
      budget: "$150K",
      features: ["Reinforced Metal", "Specialized Ventilation", "Enhanced Support", "Industrial Grade"],
      status: "Under Construction"
    },
    // Other Projects
    {
      id: 6,
      title: "Modern Luxury Estate",
      category: "Residential",
      location: "Edina",
      description: "A breathtaking 6,000 sq ft contemporary estate featuring floor-to-ceiling windows, infinity pool, and smart home automation throughout.",
      imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      completionDate: "March 2024",
      size: "6,000 sq ft",
      budget: "$2.5M",
      features: ["Smart Home Automation", "Infinity Pool", "Floor-to-Ceiling Windows", "Luxury Finishes"],
      status: "Completed"
    },
    {
      id: 7,
      title: "Downtown Office Tower",
      category: "Commercial",
      location: "Minneapolis",
      description: "15-story mixed-use development with retail space, modern offices, and rooftop amenities in the heart of downtown.",
      imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      completionDate: "January 2024",
      size: "200,000 sq ft",
      budget: "$50M",
      features: ["Mixed-Use Development", "Rooftop Amenities", "Modern Offices", "Retail Space"],
      status: "Completed"
    },
    {
      id: 8,
      title: "Chef's Dream Kitchen",
      category: "Renovation",
      location: "Wayzata",
      description: "Complete luxury kitchen transformation with custom cabinetry, marble waterfall island, and professional-grade appliances.",
      imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
      completionDate: "February 2024",
      size: "400 sq ft",
      budget: "$85K",
      features: ["Custom Cabinetry", "Marble Waterfall Island", "Professional Appliances", "Luxury Finishes"],
      status: "Completed"
    },
    {
      id: 9,
      title: "Craftsman Style Home",
      category: "Residential",
      location: "St. Louis Park",
      description: "Timeless 3,200 sq ft craftsman home with custom millwork, hardwood floors, and period-appropriate details.",
      imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      completionDate: "December 2023",
      size: "3,200 sq ft",
      budget: "$750K",
      features: ["Custom Millwork", "Hardwood Floors", "Period Details", "Timeless Design"],
      status: "Completed"
    },
    {
      id: 10,
      title: "Retail Shopping Center",
      category: "Commercial",
      location: "Bloomington",
      description: "45,000 sq ft shopping center with flagship stores, restaurants, and ample parking with sustainable design features.",
      imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      completionDate: "November 2023",
      size: "45,000 sq ft",
      budget: "$12M",
      features: ["Flagship Stores", "Restaurant Space", "Ample Parking", "Sustainable Design"],
      status: "Completed"
    },
    {
      id: 11,
      title: "Master Suite Addition",
      category: "Renovation",
      location: "Minnetonka",
      description: "Luxurious master suite addition with spa-like bathroom, walk-in closet, and private balcony overlooking gardens.",
      imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      completionDate: "October 2023",
      size: "800 sq ft",
      budget: "$120K",
      features: ["Spa-like Bathroom", "Walk-in Closet", "Private Balcony", "Garden Views"],
      status: "Completed"
    }
  ];

  const categories = ["All", "Roofing", "Residential", "Commercial", "Renovation"];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const handleProjectClick = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="portfolio" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4 sm:mb-6">
            OUR
            <span className="block text-primary">PORTFOLIO</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Explore our showcase of exceptional construction projects that demonstrate our commitment to quality, 
            innovation, and client satisfaction.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4 sm:px-0">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="px-4 sm:px-6 py-2 hover-elevate active-elevate-2 text-sm sm:text-base min-h-[44px]"
              data-testid={`filter-${category.toLowerCase()}`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
        <div className="text-center mt-12 sm:mt-16 px-4 sm:px-0">
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
            Ready to start your own construction project? Let's discuss your vision.
          </p>
          <Button 
            size="lg"
            className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold hover-elevate active-elevate-2 min-h-[48px] w-full sm:w-auto"
            data-testid="button-portfolio-contact"
          >
            Start Your Project
          </Button>
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

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