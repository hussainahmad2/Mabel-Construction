import { useState, useEffect } from "react";
import { Calendar, MapPin, ArrowRight, Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProjectModal from "@/components/ProjectModal";
import useResponsive from "@/hooks/use-responsive";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isMobile, isTablet, isDesktop } = useResponsive();

  useEffect(() => {
    setIsVisible(true);
  }, []);

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

  const categories = ["All", "Roofing", "Residential", "Commercial", "Remodeling", "Sliding", "Windows"];
  const locations = ["All", "Minneapolis", "St. Paul", "Maple Grove", "Plymouth", "Rogers", "Coon Rapids", "Anoka", "Edina", "Wayzata", "Minnetonka", "St. Louis Park", "Bloomington", "Richfield", "Uptown Minneapolis", "Eden Prairie", "Shoreview", "White Bear Lake", "Stillwater"];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    const matchesLocation = selectedLocation === "All" || project.location === selectedLocation;
    const matchesSearch = searchTerm === "" || 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesLocation && matchesSearch;
  });

  const handleProjectClick = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Advanced Mobile-Optimized Hero Section */}
      <section className={`relative ${
        isMobile ? 'py-12' : isTablet ? 'py-16' : 'py-20'
      } bg-gradient-to-br from-primary/10 via-background to-secondary/20`}>
        <div className="container-responsive">
          <div className={`text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className={`${
              isMobile ? 'text-3xl' : isTablet ? 'text-4xl md:text-5xl' : 'text-6xl lg:text-7xl'
            } font-black text-foreground ${
              isMobile ? 'mb-4' : isTablet ? 'mb-6' : 'mb-8'
            } leading-tight`}>
              OUR
              <span className="block text-primary bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                PROJECTS
              </span>
            </h1>
            <p className={`${
              isMobile ? 'text-sm' : isTablet ? 'text-base md:text-lg' : 'text-xl'
            } text-muted-foreground max-w-4xl mx-auto leading-relaxed ${
              isMobile ? 'px-4' : 'px-0'
            }`}>
              Explore our portfolio of exceptional construction projects that showcase our commitment to quality, 
              innovation, and client satisfaction across the Twin Cities.
            </p>
          </div>
        </div>
      </section>

      {/* Advanced Mobile-Optimized Filters Section */}
      <section className={`${
        isMobile ? 'py-8' : isTablet ? 'py-10' : 'py-12'
      } bg-secondary/30`}>
        <div className="container-responsive">
          <div className={`flex ${
            isMobile ? 'flex-col' : 'flex-row'
          } ${
            isMobile ? 'gap-4' : isTablet ? 'gap-6' : 'gap-8'
          } items-stretch ${
            isMobile ? 'items-stretch' : 'items-center'
          } justify-between`}>
            {/* Advanced Mobile Search */}
            <div className={`relative ${
              isMobile ? 'w-full' : isTablet ? 'w-80' : 'w-96'
            }`}>
              <Search className={`absolute ${
                isMobile ? 'left-3' : 'left-4'
              } top-1/2 transform -translate-y-1/2 text-muted-foreground ${
                isMobile ? 'w-4 h-4' : 'w-5 h-5'
              }`} />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full ${
                  isMobile ? 'pl-9' : 'pl-10'
                } pr-4 ${
                  isMobile ? 'py-3' : 'py-4'
                } ${
                  isMobile ? 'text-sm' : 'text-base'
                } border-2 border-border ${
                  isMobile ? 'rounded-lg' : 'rounded-xl'
                } focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-background/50 backdrop-blur-sm`}
              />
            </div>

            {/* Advanced Mobile Filters */}
            <div className={`flex ${
              isMobile ? 'flex-col' : 'flex-row'
            } ${
              isMobile ? 'gap-3' : isTablet ? 'gap-4' : 'gap-4'
            } ${
              isMobile ? 'w-full' : 'w-auto'
            }`}>
              {/* Category Filter */}
              <div className={`flex items-center ${
                isMobile ? 'gap-2' : 'gap-3'
              }`}>
                <Filter className={`${
                  isMobile ? 'w-4 h-4' : 'w-5 h-5'
                } text-muted-foreground flex-shrink-0`} />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className={`flex-1 ${
                    isMobile ? 'min-w-[120px]' : 'min-w-[140px]'
                  } ${
                    isMobile ? 'px-3 py-3' : 'px-4 py-4'
                  } ${
                    isMobile ? 'text-sm' : 'text-base'
                  } border-2 border-border ${
                    isMobile ? 'rounded-lg' : 'rounded-xl'
                  } bg-background/50 backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300`}
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Location Filter */}
              <div className={`flex items-center ${
                isMobile ? 'gap-2' : 'gap-3'
              }`}>
                <MapPin className={`${
                  isMobile ? 'w-4 h-4' : 'w-5 h-5'
                } text-muted-foreground flex-shrink-0`} />
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className={`flex-1 ${
                    isMobile ? 'min-w-[120px]' : 'min-w-[140px]'
                  } ${
                    isMobile ? 'px-3 py-3' : 'px-4 py-4'
                  } ${
                    isMobile ? 'text-sm' : 'text-base'
                  } border-2 border-border ${
                    isMobile ? 'rounded-lg' : 'rounded-xl'
                  } bg-background/50 backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300`}
                >
                  {locations.map(location => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Mobile-Optimized Projects Grid */}
      <section className="py-12 mobile-sm:py-14 mobile-md:py-16 sm:py-18 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-3 mobile-sm:px-4 sm:px-6 lg:px-8">
          <div className="text-center mobile-lg:text-left mb-8 mobile-sm:mb-10 sm:mb-12">
            <h2 className="text-2xl mobile-sm:text-3xl mobile-md:text-4xl sm:text-5xl lg:text-6xl font-black text-foreground mb-3 mobile-sm:mb-4">
              Featured Projects
            </h2>
            <p className="text-base mobile-sm:text-lg mobile-md:text-xl text-muted-foreground">
              Showing {filteredProjects.length} of {projects.length} projects
            </p>
          </div>

          <div className={`grid ${
            isMobile ? 'grid-cols-1' : isTablet ? 'grid-cols-2' : 'grid-cols-3'
          } ${
            isMobile ? 'gap-4' : isTablet ? 'gap-6' : 'gap-8'
          }`}>
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`bg-card border border-card-border rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => handleProjectClick(project)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className={`w-full ${
                      isMobile ? 'h-48' : isTablet ? 'h-56' : 'h-64'
                    } object-cover group-hover:scale-105 transition-transform duration-300`}
                  />
                  <div className={`absolute ${
                    isMobile ? 'top-3 left-3' : 'top-4 left-4'
                  }`}>
                    <span className={`bg-primary text-primary-foreground ${
                      isMobile ? 'px-2 py-1 text-xs' : 'px-3 py-1 text-sm'
                    } rounded-full font-semibold`}>
                      {project.category}
                    </span>
                  </div>
                  <div className={`absolute ${
                    isMobile ? 'top-3 right-3' : 'top-4 right-4'
                  }`}>
                    <span className={`bg-background/90 backdrop-blur-sm text-foreground ${
                      isMobile ? 'px-2 py-1 text-xs' : 'px-3 py-1 text-sm'
                    } rounded-full font-semibold`}>
                      {project.location}
                    </span>
                  </div>
                </div>
                
                <div className={`${
                  isMobile ? 'p-4' : isTablet ? 'p-5' : 'p-6'
                }`}>
                  <h3 className={`${
                    isMobile ? 'text-lg' : isTablet ? 'text-xl' : 'text-xl'
                  } font-bold text-foreground ${
                    isMobile ? 'mb-2' : 'mb-2'
                  } group-hover:text-primary transition-colors`}>
                    {project.title}
                  </h3>
                  <p className={`${
                    isMobile ? 'text-xs' : isTablet ? 'text-sm' : 'text-sm'
                  } text-muted-foreground ${
                    isMobile ? 'mb-3' : 'mb-4'
                  } line-clamp-2`}>
                    {project.description}
                  </p>
                  
                  <div className={`flex items-center justify-between ${
                    isMobile ? 'text-xs' : 'text-sm'
                  } text-muted-foreground ${
                    isMobile ? 'mb-3' : 'mb-4'
                  }`}>
                    <div className="flex items-center">
                      <Calendar className={`${
                        isMobile ? 'w-3 h-3' : 'w-4 h-4'
                      } mr-1`} />
                      {project.completionDate}
                    </div>
                    <div className="flex items-center">
                      <MapPin className={`${
                        isMobile ? 'w-3 h-3' : 'w-4 h-4'
                      } mr-1`} />
                      {project.location}
                    </div>
                  </div>

                  <div className={`flex items-center justify-between ${
                    isMobile ? 'text-xs' : 'text-sm'
                  } ${
                    isMobile ? 'mb-3' : 'mb-4'
                  }`}>
                    <span className="text-muted-foreground">Size: {project.size}</span>
                    <span className="font-semibold text-primary">{project.budget}</span>
                  </div>

                  <div className={`flex flex-wrap ${
                    isMobile ? 'gap-1' : 'gap-2'
                  } ${
                    isMobile ? 'mb-3' : 'mb-4'
                  }`}>
                    {project.features.slice(0, 2).map((feature, idx) => (
                      <span
                        key={idx}
                        className={`bg-secondary text-secondary-foreground ${
                          isMobile ? 'px-1.5 py-0.5 text-xs' : 'px-2 py-1 text-xs'
                        } rounded`}
                      >
                        {feature}
                      </span>
                    ))}
                    {project.features.length > 2 && (
                      <span className={`${
                        isMobile ? 'text-xs' : 'text-xs'
                      } text-muted-foreground`}>
                        +{project.features.length - 2} more
                      </span>
                    )}
                  </div>

                  <Button 
                    variant="outline" 
                    className={`w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors ${
                      isMobile ? 'text-sm py-2' : 'text-base py-2'
                    } touch-target`}
                  >
                    View Details
                    <ArrowRight className={`${
                      isMobile ? 'w-3 h-3' : 'w-4 h-4'
                    } ml-2`} />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground mb-4">No projects found matching your criteria.</p>
              <Button onClick={() => {
                setSelectedCategory("All");
                setSelectedLocation("All");
                setSearchTerm("");
              }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Get Free Quote
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      <Footer />

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
