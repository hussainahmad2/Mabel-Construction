import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import useResponsive from "@/hooks/use-responsive";

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isMobile, isTablet, isDesktop } = useResponsive();

  // Real project data including roofing projects
  const projects = [
    // ===== ROOFING PROJECTS =====
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
    
    // ===== REMODELING PROJECTS =====
    {
      id: 6,
      title: "Chef's Dream Kitchen",
      category: "Remodeling",
      location: "Maple Grove",
      description: "Complete luxury kitchen transformation with custom cabinetry, marble waterfall island, and professional-grade appliances.",
      imageUrl: "/assets/Remodelling/6.jpg",
      completionDate: "February 2024",
      size: "400 sq ft",
      budget: "$150K",
      features: ["Custom Cabinetry", "Marble Island", "Professional Appliances", "Luxury Finishes"],
      status: "Completed"
    },
    {
      id: 7,
      title: "Master Suite Addition",
      category: "Remodeling", 
      location: "Coon Rapids",
      description: "Luxurious master suite addition with spa-like bathroom, walk-in closet, and private balcony overlooking gardens.",
      imageUrl: "/assets/Remodelling/7.jpg",
      completionDate: "October 2023",
      size: "800 sq ft",
      budget: "$200K",
      features: ["Spa-like Bathroom", "Walk-in Closet", "Private Balcony", "Garden Views"],
      status: "Completed"
    },
    {
      id: 8,
      title: "Luxury Kitchen Remodel",
      category: "Remodeling",
      location: "Edina",
      description: "Complete kitchen transformation featuring custom cabinetry, quartz countertops, and premium appliances. This modern design maximizes space and functionality while maintaining elegant aesthetics.",
      imageUrl: "/assets/Remodelling/8.jpg",
      completionDate: "December 2023",
      size: "350 sq ft",
      budget: "$85K",
      features: ["Custom Cabinetry", "Quartz Countertops", "Premium Appliances", "Modern Design"],
      status: "Completed"
    },
    {
      id: 9,
      title: "Master Bathroom Renovation",
      category: "Remodeling",
      location: "Wayzata",
      description: "Spa-inspired master bathroom renovation with walk-in shower, freestanding tub, and custom vanity. Features heated floors and smart mirrors for ultimate luxury.",
      imageUrl: "/assets/Remodelling/9.jpg",
      completionDate: "November 2023",
      size: "180 sq ft",
      budget: "$65K",
      features: ["Walk-in Shower", "Freestanding Tub", "Heated Floors", "Smart Mirrors"],
      status: "Completed"
    },
    {
      id: 10,
      title: "Basement Finishing Project",
      category: "Remodeling",
      location: "Plymouth",
      description: "Complete basement transformation into a family entertainment area with home theater, wet bar, and game room. Includes proper insulation and egress windows.",
      imageUrl: "/assets/Remodelling/10.jpg",
      completionDate: "October 2023",
      size: "1,200 sq ft",
      budget: "$95K",
      features: ["Home Theater", "Wet Bar", "Game Room", "Egress Windows"],
      status: "Completed"
    },
    {
      id: 11,
      title: "Living Room Modernization",
      category: "Remodeling",
      location: "Minnetonka",
      description: "Contemporary living room makeover with open concept design, built-in entertainment center, and custom lighting. Features hardwood floors and modern fireplace.",
      imageUrl: "/assets/Remodelling/11.jpg",
      completionDate: "September 2023",
      size: "400 sq ft",
      budget: "$45K",
      features: ["Open Concept", "Built-in Entertainment", "Custom Lighting", "Hardwood Floors"],
      status: "Completed"
    },
    {
      id: 12,
      title: "Home Office Conversion",
      category: "Remodeling",
      location: "St. Louis Park",
      description: "Converted spare bedroom into a professional home office with custom built-in desk, storage solutions, and soundproofing. Perfect for remote work.",
      imageUrl: "/assets/Remodelling/12.jpg",
      completionDate: "August 2023",
      size: "120 sq ft",
      budget: "$25K",
      features: ["Custom Built-in Desk", "Storage Solutions", "Soundproofing", "Professional Setup"],
      status: "Completed"
    },
    
    // ===== COMMERCIAL PROJECTS =====
    {
      id: 13,
      title: "Downtown Office Tower",
      category: "Commercial", 
      location: "St. Paul",
      description: "15-story mixed-use development with retail space, modern offices, and rooftop amenities in the heart of downtown.",
      imageUrl: "/assets/Commercial/13.jpg",
      completionDate: "January 2024",
      size: "150,000 sq ft",
      budget: "$15M",
      features: ["Mixed-Use", "Rooftop Amenities", "Modern Offices", "Retail Space"],
      status: "Completed"
    },
    {
      id: 14,
      title: "Retail Shopping Center",
      category: "Commercial",
      location: "Rogers",
      description: "45,000 sq ft shopping center with flagship stores, restaurants, and ample parking with sustainable design features.",
      imageUrl: "/assets/Commercial/14.jpg",
      completionDate: "November 2023",
      size: "45,000 sq ft",
      budget: "$8M",
      features: ["Sustainable Design", "Flagship Stores", "Restaurants", "Ample Parking"],
      status: "Completed"
    },
    {
      id: 15,
      title: "Industrial Warehouse",
      category: "Commercial",
      location: "Anoka",
      description: "State-of-the-art 100,000 sq ft warehouse facility with advanced logistics systems and sustainable energy features.",
      imageUrl: "/assets/Commercial/15.jpg",
      completionDate: "September 2023",
      size: "100,000 sq ft",
      budget: "$12M",
      features: ["Advanced Logistics", "Sustainable Energy", "State-of-the-art", "Efficient Design"],
      status: "Completed"
    },
    
    // ===== SLIDING PROJECTS =====
    {
      id: 19,
      title: "Patio Door Installation",
      category: "Sliding",
      location: "Eden Prairie",
      description: "Installation of premium sliding patio doors with energy-efficient glass and smooth operation. Features weatherproofing and security locks.",
      imageUrl: "/assets/Sliding/16.jpg",
      completionDate: "February 2023",
      size: "8 ft opening",
      budget: "$3,500",
      features: ["Energy Efficient Glass", "Smooth Operation", "Weatherproofing", "Security Locks"],
      status: "Completed"
    },
    {
      id: 20,
      title: "Closet Door Replacement",
      category: "Sliding",
      location: "Shoreview",
      description: "Custom sliding closet doors with mirrored panels and soft-close mechanisms. Maximizes space and adds modern functionality to bedroom.",
      imageUrl: "/assets/Sliding/17.jpg",
      completionDate: "January 2023",
      size: "6 ft opening",
      budget: "$1,800",
      features: ["Mirrored Panels", "Soft-Close", "Space Maximizing", "Modern Design"],
      status: "Completed"
    },
    {
      id: 21,
      title: "Barn Door Installation",
      category: "Sliding",
      location: "White Bear Lake",
      description: "Rustic barn door installation for home office with custom hardware and track system. Adds character and functionality to the space.",
      imageUrl: "/assets/Sliding/18.jpg",
      completionDate: "December 2022",
      size: "7 ft opening",
      budget: "$2,200",
      features: ["Custom Hardware", "Track System", "Rustic Design", "Space Saving"],
      status: "Completed"
    },
    {
      id: 22,
      title: "Minneapolis Home Siding",
      category: "Sliding",
      location: "Minneapolis",
      description: "Complete vinyl siding replacement for a 2,500 sq ft home with energy-efficient insulation and custom trim work. Features weather-resistant materials and modern color scheme.",
      imageUrl: "/assets/Sliding/19.jpg",
      completionDate: "March 2024",
      size: "2,500 sq ft",
      budget: "$22,000",
      features: ["Energy Efficient", "Custom Trim", "Weather Resistant", "Modern Design"],
      status: "Completed"
    },
    {
      id: 23,
      title: "St. Paul Luxury Siding",
      category: "Sliding",
      location: "St. Paul",
      description: "Premium fiber cement siding installation with stone veneer accents and custom color matching for a modern aesthetic. Features enhanced durability and low maintenance.",
      imageUrl: "/assets/Sliding/20.jpg",
      completionDate: "July 2024",
      size: "3,200 sq ft",
      budget: "$38,500",
      features: ["Fiber Cement", "Stone Veneer", "Custom Colors", "Low Maintenance"],
      status: "Under Construction"
    },
    {
      id: 24,
      title: "Maple Grove Patio Doors",
      category: "Sliding",
      location: "Maple Grove",
      description: "Custom sliding patio door installation with energy-efficient glass and weatherproofing for year-round comfort. Features smooth operation and security locks.",
      imageUrl: "/assets/Sliding/21.jpg",
      completionDate: "April 2024",
      size: "8 ft opening",
      budget: "$3,500",
      features: ["Energy Efficient", "Weatherproofing", "Smooth Operation", "Security Locks"],
      status: "Completed"
    },
    {
      id: 24,
      title: "Maple Grove Patio Doors",
      category: "Sliding",
      location: "Maple Grove",
      description: "Custom sliding patio door installation with energy-efficient glass and weatherproofing for year-round comfort. Features smooth operation and security locks.",
      imageUrl: "/assets/Sliding/22.jpg",
      completionDate: "April 2024",
      size: "8 ft opening",
      budget: "$3,500",
      features: ["Energy Efficient", "Weatherproofing", "Smooth Operation", "Security Locks"],
      status: "Completed"
    },{
      id: 24,
      title: "Maple Grove Patio Doors",
      category: "Sliding",
      location: "Maple Grove",
      description: "Custom sliding patio door installation with energy-efficient glass and weatherproofing for year-round comfort. Features smooth operation and security locks.",
      imageUrl: "/assets/Sliding/23.jpg",
      completionDate: "April 2024",
      size: "8 ft opening",
      budget: "$3,500",
      features: ["Energy Efficient", "Weatherproofing", "Smooth Operation", "Security Locks"],
      status: "Completed"
    },
    // ===== WINDOWS PROJECTS =====
    {
      id: 25,
      title: "Bay Window Installation",
      category: "Windows",
      location: "Stillwater",
      description: "Custom bay window installation with energy-efficient triple-pane glass and custom trim work. Creates additional seating area and natural light.",
      imageUrl: "/assets/Windows/18.jpg",
      completionDate: "November 2022",
      size: "6 ft wide",
      budget: "$4,200",
      features: ["Triple-Pane Glass", "Custom Trim", "Additional Seating", "Natural Light"],
      status: "Completed"
    },
    {
      id: 26,
      title: "Eden Prairie Bay Window",
      category: "Windows",
      location: "Eden Prairie",
      description: "Custom bay window installation with energy-efficient triple-pane glass and built-in seating area. Features panoramic views and enhanced natural lighting.",
      imageUrl: "/assets/Windows/19.jpg",
      completionDate: "March 2024",
      size: "8 ft wide",
      budget: "$5,500",
      features: ["Triple-Pane Glass", "Built-in Seating", "Panoramic Views", "Energy Efficient"],
      status: "Completed"
    },
    {
      id: 27,
      title: "Minneapolis Skylights",
      category: "Windows",
      location: "Minneapolis",
      description: "Multiple skylight installation project bringing natural light to a dark interior space with remote-controlled ventilation and energy-efficient glass.",
      imageUrl: "/assets/Windows/25.jpg",
      completionDate: "May 2024",
      size: "4 Skylights",
      budget: "$8,200",
      features: ["Remote Control", "Energy Efficient", "Natural Light", "Ventilation"],
      status: "Under Construction"
    },
    {
      id: 28,
      title: "St. Paul Window Replacement",
      category: "Windows",
      location: "St. Paul",
      description: "Complete window replacement for a historic home with period-appropriate casement windows and custom trim work. Maintains architectural integrity while improving energy efficiency.",
      imageUrl: "/assets/Windows/26.jpg",
      completionDate: "April 2024",
      size: "12 Windows",
      budget: "$18,500",
      features: ["Period-Appropriate", "Custom Trim", "Energy Efficient", "Historic Preservation"],
      status: "Completed"
    },
    {
      id: 29,
      title: "Maple Grove Office Windows",
      category: "Windows",
      location: "Maple Grove",
      description: "Commercial window installation for office building with energy-efficient glass and modern architectural design. Features sound reduction and UV protection.",
      imageUrl: "/assets/Windows/27.jpg",
      completionDate: "June 2024",
      size: "20 Windows",
      budget: "$45,000",
      features: ["Energy Efficient", "Sound Reduction", "UV Protection", "Modern Design"],
      status: "Under Construction"
    },
  ];


  const categories = ["All", "Roofing", "Residential", "Commercial", "Remodelling", "Sliding", "Windows"];

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
    <section id="portfolio" className={`${
      isMobile ? 'py-12' : isTablet ? 'py-16' : 'py-20'
    } bg-background`}>
      <div className="container-responsive">
        {/* Section Header */}
        <div className={`text-center ${
          isMobile ? 'mb-8' : isTablet ? 'mb-12' : 'mb-16'
        }`}>
          <h2 className={`${
            isMobile ? 'text-2xl' : isTablet ? 'text-3xl md:text-4xl' : 'text-5xl'
          } font-black text-foreground ${
            isMobile ? 'mb-4' : isTablet ? 'mb-6' : 'mb-8'
          }`}>
            OUR
            <span className="block text-primary">PORTFOLIO</span>
          </h2>
          <p className={`${
            isMobile ? 'text-sm' : isTablet ? 'text-base' : 'text-lg'
          } text-muted-foreground max-w-3xl mx-auto leading-relaxed ${
            isMobile ? 'px-4' : 'px-0'
          }`}>
            Explore our showcase of exceptional construction projects that demonstrate our commitment to quality, 
            innovation, and client satisfaction.
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center ${
          isMobile ? 'gap-2' : isTablet ? 'gap-3' : 'gap-4'
        } ${
          isMobile ? 'mb-6' : isTablet ? 'mb-8' : 'mb-12'
        } ${isMobile ? 'px-4' : 'px-0'}`}>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`${
                isMobile ? 'text-xs px-3 py-2' : isTablet ? 'text-sm px-4 py-2' : 'text-base px-6 py-3'
              } hover-elevate active-elevate-2 touch-target`}
              data-testid={`filter-${category.toLowerCase()}`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className={`grid ${
          isMobile ? 'grid-cols-1' : isTablet ? 'grid-cols-2' : 'grid-cols-3'
        } ${
          isMobile ? 'gap-4' : isTablet ? 'gap-6' : 'gap-8'
        }`}>
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