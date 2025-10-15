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
    },
    // Remodelling Projects
    {
      id: 12,
      title: "Luxury Kitchen Remodel",
      category: "Remodelling",
      location: "Edina",
      description: "Complete kitchen transformation featuring custom cabinetry, quartz countertops, and premium appliances. This modern design maximizes space and functionality while maintaining elegant aesthetics.",
      imageUrl: "/assets/Remodelling/6.jpg",
      completionDate: "December 2023",
      size: "350 sq ft",
      budget: "$85K",
      features: ["Custom Cabinetry", "Quartz Countertops", "Premium Appliances", "Modern Design"],
      status: "Completed"
    },
    {
      id: 13,
      title: "Master Bathroom Renovation",
      category: "Remodelling",
      location: "Wayzata",
      description: "Spa-inspired master bathroom renovation with walk-in shower, freestanding tub, and custom vanity. Features heated floors and smart mirrors for ultimate luxury.",
      imageUrl: "/assets/Remodelling/7.jpg",
      completionDate: "November 2023",
      size: "180 sq ft",
      budget: "$65K",
      features: ["Walk-in Shower", "Freestanding Tub", "Heated Floors", "Smart Mirrors"],
      status: "Completed"
    },
    {
      id: 14,
      title: "Basement Finishing Project",
      category: "Remodelling",
      location: "Plymouth",
      description: "Complete basement transformation into a family entertainment area with home theater, wet bar, and game room. Includes proper insulation and egress windows.",
      imageUrl: "/assets/Remodelling/8.jpg",
      completionDate: "October 2023",
      size: "1,200 sq ft",
      budget: "$95K",
      features: ["Home Theater", "Wet Bar", "Game Room", "Egress Windows"],
      status: "Completed"
    },
    {
      id: 15,
      title: "Living Room Modernization",
      category: "Remodelling",
      location: "Minnetonka",
      description: "Contemporary living room makeover with open concept design, built-in entertainment center, and custom lighting. Features hardwood floors and modern fireplace.",
      imageUrl: "/assets/Remodelling/9.jpg",
      completionDate: "September 2023",
      size: "400 sq ft",
      budget: "$45K",
      features: ["Open Concept", "Built-in Entertainment", "Custom Lighting", "Hardwood Floors"],
      status: "Completed"
    },
    {
      id: 16,
      title: "Home Office Conversion",
      category: "Remodelling",
      location: "St. Louis Park",
      description: "Converted spare bedroom into a professional home office with custom built-in desk, storage solutions, and soundproofing. Perfect for remote work.",
      imageUrl: "/assets/Remodelling/10.jpg",
      completionDate: "August 2023",
      size: "120 sq ft",
      budget: "$25K",
      features: ["Custom Built-in Desk", "Storage Solutions", "Soundproofing", "Professional Setup"],
      status: "Completed"
    },
    {
      id: 17,
      title: "Laundry Room Upgrade",
      category: "Remodelling",
      location: "Maple Grove",
      description: "Complete laundry room renovation with custom cabinets, utility sink, and folding station. Includes new flooring and improved lighting for better functionality.",
      imageUrl: "/assets/Remodelling/11.jpg",
      completionDate: "July 2023",
      size: "80 sq ft",
      budget: "$18K",
      features: ["Custom Cabinets", "Utility Sink", "Folding Station", "Improved Lighting"],
      status: "Completed"
    },
    {
      id: 18,
      title: "Guest Bedroom Makeover",
      category: "Remodelling",
      location: "Coon Rapids",
      description: "Elegant guest bedroom renovation with new flooring, custom closet system, and updated lighting. Features neutral colors and modern fixtures.",
      imageUrl: "/assets/Remodelling/12.jpg",
      completionDate: "June 2023",
      size: "140 sq ft",
      budget: "$22K",
      features: ["New Flooring", "Custom Closet", "Updated Lighting", "Modern Fixtures"],
      status: "Completed"
    },
    // Commercial Projects
    {
      id: 19,
      title: "Office Building Renovation",
      category: "Commercial",
      location: "Bloomington",
      description: "Complete renovation of a 20,000 sq ft office building with modern amenities, energy-efficient systems, and contemporary design. Includes new HVAC and electrical systems.",
      imageUrl: "/assets/Commercial/13.jpg",
      completionDate: "May 2023",
      size: "20,000 sq ft",
      budget: "$1.2M",
      features: ["Modern Amenities", "Energy Efficient", "New HVAC", "Contemporary Design"],
      status: "Completed"
    },
    {
      id: 20,
      title: "Retail Space Modernization",
      category: "Commercial",
      location: "Richfield",
      description: "Complete modernization of retail space with open floor plan, modern fixtures, and improved customer flow. Features new flooring, lighting, and display areas.",
      imageUrl: "/assets/Commercial/14.jpg",
      completionDate: "April 2023",
      size: "8,500 sq ft",
      budget: "$450K",
      features: ["Open Floor Plan", "Modern Fixtures", "Improved Flow", "New Flooring"],
      status: "Completed"
    },
    {
      id: 21,
      title: "Restaurant Interior Design",
      category: "Commercial",
      location: "Uptown Minneapolis",
      description: "Complete interior renovation of upscale restaurant with custom bar, dining areas, and kitchen upgrades. Features unique lighting and modern decor.",
      imageUrl: "/assets/Commercial/15.jpg",
      completionDate: "March 2023",
      size: "3,200 sq ft",
      budget: "$280K",
      features: ["Custom Bar", "Dining Areas", "Kitchen Upgrades", "Unique Lighting"],
      status: "Completed"
    },
    // Sliding Projects
    {
      id: 22,
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
      id: 23,
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
      id: 24,
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
    // Windows Projects
    {
      id: 25,
      title: "Bay Window Installation",
      category: "Windows",
      location: "Stillwater",
      description: "Custom bay window installation with energy-efficient triple-pane glass and custom trim work. Creates additional seating area and natural light.",
      imageUrl: "/assets/Windows/19.jpg",
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
      imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
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
      imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
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
      imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
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
      imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      completionDate: "June 2024",
      size: "20 Windows",
      budget: "$45,000",
      features: ["Energy Efficient", "Sound Reduction", "UV Protection", "Modern Design"],
      status: "Under Construction"
    },
    {
      id: 30,
      title: "Plymouth Picture Window",
      category: "Windows",
      location: "Plymouth",
      description: "Large picture window installation with panoramic views and energy-efficient glass for maximum natural light. Features custom framing and weather sealing.",
      imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
      completionDate: "February 2024",
      size: "8 ft wide",
      budget: "$3,800",
      features: ["Panoramic Views", "Energy Efficient", "Custom Framing", "Weather Sealing"],
      status: "Completed"
    },
    // Additional Siding Projects
    {
      id: 31,
      title: "Minneapolis Home Siding",
      category: "Sliding",
      location: "Minneapolis",
      description: "Complete vinyl siding replacement for a 2,500 sq ft home with energy-efficient insulation and custom trim work. Features weather-resistant materials and modern color scheme.",
      imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      completionDate: "March 2024",
      size: "2,500 sq ft",
      budget: "$22,000",
      features: ["Energy Efficient", "Custom Trim", "Weather Resistant", "Modern Design"],
      status: "Completed"
    },
    {
      id: 32,
      title: "St. Paul Luxury Siding",
      category: "Sliding",
      location: "St. Paul",
      description: "Premium fiber cement siding installation with stone veneer accents and custom color matching for a modern aesthetic. Features enhanced durability and low maintenance.",
      imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      completionDate: "July 2024",
      size: "3,200 sq ft",
      budget: "$38,500",
      features: ["Fiber Cement", "Stone Veneer", "Custom Colors", "Low Maintenance"],
      status: "Under Construction"
    },
    {
      id: 33,
      title: "Maple Grove Patio Doors",
      category: "Sliding",
      location: "Maple Grove",
      description: "Custom sliding patio door installation with energy-efficient glass and weatherproofing for year-round comfort. Features smooth operation and security locks.",
      imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      completionDate: "April 2024",
      size: "8 ft opening",
      budget: "$3,500",
      features: ["Energy Efficient", "Weatherproofing", "Smooth Operation", "Security Locks"],
      status: "Completed"
    },
    {
      id: 34,
      title: "Plymouth Office Building",
      category: "Sliding",
      location: "Plymouth",
      description: "Commercial metal siding installation with modern architectural panels and integrated ventilation systems. Features energy efficiency and contemporary design.",
      imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      completionDate: "August 2024",
      size: "15,000 sq ft",
      budget: "$125,000",
      features: ["Metal Panels", "Architectural Design", "Ventilation", "Energy Efficient"],
      status: "Under Construction"
    },
    // Additional Remodelling Projects
    {
      id: 35,
      title: "Edina Luxury Kitchen",
      category: "Remodelling",
      location: "Edina",
      description: "Complete kitchen transformation featuring custom cabinetry, quartz countertops, premium appliances, and modern lighting design. This 350 sq ft space now serves as the heart of the home.",
      imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
      completionDate: "December 2023",
      size: "350 sq ft",
      budget: "$85,000",
      features: ["Custom Cabinetry", "Quartz Countertops", "Premium Appliances", "Modern Lighting"],
      status: "Completed"
    },
    {
      id: 36,
      title: "Wayzata Master Bathroom",
      category: "Remodelling",
      location: "Wayzata",
      description: "Spa-inspired master bathroom renovation with walk-in shower, freestanding tub, custom vanity, and heated floors. Creating a luxurious retreat for relaxation.",
      imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      completionDate: "September 2024",
      size: "180 sq ft",
      budget: "$65,000",
      features: ["Walk-in Shower", "Freestanding Tub", "Heated Floors", "Smart Mirrors"],
      status: "Under Construction"
    },
    // Additional Commercial Projects
    {
      id: 37,
      title: "Bloomington Office Complex",
      category: "Commercial",
      location: "Bloomington",
      description: "Complete renovation of a 20,000 sq ft office building with modern amenities, energy-efficient systems, and contemporary design. Includes new HVAC, electrical, and flooring throughout.",
      imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      completionDate: "May 2023",
      size: "20,000 sq ft",
      budget: "$1,200,000",
      features: ["Modern Amenities", "Energy Efficient", "New HVAC", "Contemporary Design"],
      status: "Completed"
    },
    {
      id: 38,
      title: "Richfield Shopping Center",
      category: "Commercial",
      location: "Richfield",
      description: "Complete modernization of retail space with open floor plan, modern fixtures, and improved customer flow. Features new flooring, lighting, and display areas for enhanced shopping experience.",
      imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      completionDate: "October 2024",
      size: "8,500 sq ft",
      budget: "$450,000",
      features: ["Open Floor Plan", "Modern Fixtures", "Improved Flow", "New Flooring"],
      status: "Under Construction"
    }
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