import { useState, useEffect } from "react";
import { Calendar, MapPin, ArrowRight, Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProjectModal from "@/components/ProjectModal";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    // Roofing Projects
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
    // Other Projects
    {
      id: 6,
      title: "Modern Luxury Estate",
      category: "Residential",
      location: "Minneapolis",
      description: "A breathtaking 6,000 sq ft contemporary estate featuring floor-to-ceiling windows, infinity pool, and smart home automation throughout.",
      imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      completionDate: "March 2024",
      size: "6,000 sq ft",
      budget: "$2.5M",
      features: ["Smart Home", "Infinity Pool", "Floor-to-Ceiling Windows", "Luxury Finishes"],
      status: "Completed"
    },
    {
      id: 7,
      title: "Downtown Office Tower",
      category: "Commercial", 
      location: "St. Paul",
      description: "15-story mixed-use development with retail space, modern offices, and rooftop amenities in the heart of downtown.",
      imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      completionDate: "January 2024",
      size: "150,000 sq ft",
      budget: "$15M",
      features: ["Mixed-Use", "Rooftop Amenities", "Modern Offices", "Retail Space"],
      status: "Completed"
    },
    {
      id: 8,
      title: "Chef's Dream Kitchen",
      category: "Remodeling",
      location: "Maple Grove",
      description: "Complete luxury kitchen transformation with custom cabinetry, marble waterfall island, and professional-grade appliances.",
      imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
      completionDate: "February 2024",
      size: "400 sq ft",
      budget: "$150K",
      features: ["Custom Cabinetry", "Marble Island", "Professional Appliances", "Luxury Finishes"],
      status: "Completed"
    },
    {
      id: 9,
      title: "Craftsman Style Home",
      category: "Residential",
      location: "Plymouth",
      description: "Timeless 3,200 sq ft craftsman home with custom millwork, hardwood floors, and period-appropriate details.",
      imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      completionDate: "December 2023",
      size: "3,200 sq ft",
      budget: "$800K",
      features: ["Custom Millwork", "Hardwood Floors", "Period Details", "Energy Efficient"],
      status: "Completed"
    },
    {
      id: 10,
      title: "Retail Shopping Center",
      category: "Commercial",
      location: "Rogers",
      description: "45,000 sq ft shopping center with flagship stores, restaurants, and ample parking with sustainable design features.",
      imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      completionDate: "November 2023",
      size: "45,000 sq ft",
      budget: "$8M",
      features: ["Sustainable Design", "Flagship Stores", "Restaurants", "Ample Parking"],
      status: "Completed"
    },
    {
      id: 11,
      title: "Master Suite Addition",
      category: "Remodeling", 
      location: "Coon Rapids",
      description: "Luxurious master suite addition with spa-like bathroom, walk-in closet, and private balcony overlooking gardens.",
      imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      completionDate: "October 2023",
      size: "800 sq ft",
      budget: "$200K",
      features: ["Spa-like Bathroom", "Walk-in Closet", "Private Balcony", "Garden Views"],
      status: "Completed"
    },
    {
      id: 12,
      title: "Industrial Warehouse",
      category: "Commercial",
      location: "Anoka",
      description: "State-of-the-art 100,000 sq ft warehouse facility with advanced logistics systems and sustainable energy features.",
      imageUrl: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
      completionDate: "September 2023",
      size: "100,000 sq ft",
      budget: "$12M",
      features: ["Advanced Logistics", "Sustainable Energy", "State-of-the-art", "Efficient Design"],
      status: "Completed"
    },
    {
      id: 13,
      title: "Luxury Condo Renovation",
      category: "Remodeling",
      location: "Minneapolis",
      description: "Complete renovation of a penthouse condo with modern finishes, smart home technology, and panoramic city views.",
      imageUrl: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
      completionDate: "August 2023",
      size: "2,500 sq ft",
      budget: "$500K",
      features: ["Smart Home", "Panoramic Views", "Modern Finishes", "Penthouse Design"],
      status: "Completed"
    }
  ];

  const categories = ["All", "Roofing", "Residential", "Commercial", "Remodeling"];
  const locations = ["All", "Minneapolis", "St. Paul", "Maple Grove", "Plymouth", "Rogers", "Coon Rapids", "Anoka"];

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
      <section className="relative py-12 mobile-sm:py-16 mobile-md:py-20 sm:py-24 md:py-28 lg:py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/20">
        <div className="max-w-7xl mx-auto px-3 mobile-sm:px-4 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-3xl mobile-sm:text-4xl mobile-md:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-foreground mb-4 mobile-sm:mb-6 sm:mb-8 leading-tight">
              OUR
              <span className="block text-primary bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                PROJECTS
              </span>
            </h1>
            <p className="text-base mobile-sm:text-lg mobile-md:text-xl sm:text-2xl md:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-2">
              Explore our portfolio of exceptional construction projects that showcase our commitment to quality, 
              innovation, and client satisfaction across the Twin Cities.
            </p>
          </div>
        </div>
      </section>

      {/* Advanced Mobile-Optimized Filters Section */}
      <section className="py-8 mobile-sm:py-10 mobile-md:py-12 sm:py-14 md:py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-3 mobile-sm:px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col mobile-lg:flex-row gap-4 mobile-sm:gap-6 items-stretch mobile-lg:items-center justify-between">
            {/* Advanced Mobile Search */}
            <div className="relative w-full mobile-lg:w-80 lg:w-96">
              <Search className="absolute left-3 mobile-sm:left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 mobile-sm:w-5 h-4 mobile-sm:h-5" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 mobile-sm:pl-10 pr-4 py-3 mobile-sm:py-4 text-sm mobile-sm:text-base border-2 border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-background/50 backdrop-blur-sm"
              />
            </div>

            {/* Advanced Mobile Filters */}
            <div className="flex flex-col mobile-sm:flex-row gap-3 mobile-sm:gap-4 w-full mobile-lg:w-auto">
              {/* Category Filter */}
              <div className="flex items-center gap-2 mobile-sm:gap-3">
                <Filter className="w-4 mobile-sm:w-5 h-4 mobile-sm:h-5 text-muted-foreground flex-shrink-0" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="flex-1 mobile-sm:min-w-[140px] px-3 mobile-sm:px-4 py-3 mobile-sm:py-4 text-sm mobile-sm:text-base border-2 border-border rounded-xl bg-background/50 backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Location Filter */}
              <div className="flex items-center gap-2 mobile-sm:gap-3">
                <MapPin className="w-4 mobile-sm:w-5 h-4 mobile-sm:h-5 text-muted-foreground flex-shrink-0" />
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="flex-1 mobile-sm:min-w-[140px] px-3 mobile-sm:px-4 py-3 mobile-sm:py-4 text-sm mobile-sm:text-base border-2 border-border rounded-xl bg-background/50 backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
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

          <div className="grid grid-cols-1 mobile-sm:grid-cols-1 mobile-md:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mobile-sm:gap-6 sm:gap-8">
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
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-background/90 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      {project.location}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {project.completionDate}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {project.location}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm mb-4">
                    <span className="text-muted-foreground">Size: {project.size}</span>
                    <span className="font-semibold text-primary">{project.budget}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features.slice(0, 2).map((feature, idx) => (
                      <span
                        key={idx}
                        className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                    {project.features.length > 2 && (
                      <span className="text-xs text-muted-foreground">
                        +{project.features.length - 2} more
                      </span>
                    )}
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2" />
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
