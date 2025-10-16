import { useState, useEffect } from "react";
import { Calendar, User, ArrowRight, Search, Tag, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import useResponsive from "@/hooks/use-responsive";

export default function Blog() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const { isMobile, isTablet, isDesktop } = useResponsive();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "10 Essential Questions to Ask Your Contractor",
      excerpt: "Before hiring a contractor, make sure you ask these crucial questions to ensure you're making the right choice for your project.",
      content: "Choosing the right contractor is one of the most important decisions you'll make for your construction project. Here are the essential questions every homeowner should ask...",
      author: "Sarah Johnson",
      publishDate: "2024-03-15",
      readTime: "5 min read",
      category: "Tips & Advice",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
      tags: ["Contractor", "Tips", "Home Improvement"]
    },
    {
      id: 2,
      title: "Sustainable Building Materials: The Future of Construction",
      excerpt: "Discover the latest sustainable building materials that are revolutionizing the construction industry and helping create eco-friendly homes.",
      content: "As environmental consciousness grows, the construction industry is embracing sustainable materials that reduce environmental impact while maintaining quality...",
      author: "Michael Chen",
      publishDate: "2024-03-10",
      readTime: "7 min read",
      category: "Sustainability",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
      tags: ["Sustainability", "Materials", "Eco-friendly"]
    },
    {
      id: 3,
      title: "Kitchen Remodeling: Design Trends for 2024",
      excerpt: "Explore the hottest kitchen design trends for 2024, from smart appliances to bold color choices and innovative storage solutions.",
      content: "Kitchen design continues to evolve with new trends that combine functionality and style. Here are the top trends shaping kitchen remodels in 2024...",
      author: "Lisa Rodriguez",
      publishDate: "2024-03-05",
      readTime: "6 min read",
      category: "Design",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
      tags: ["Kitchen", "Design", "Trends", "Remodeling"]
    },
    {
      id: 4,
      title: "Commercial Construction: What to Expect in 2024",
      excerpt: "A comprehensive look at the commercial construction landscape for 2024, including emerging trends and market predictions.",
      content: "The commercial construction sector is experiencing significant growth with new technologies and changing workplace demands driving innovation...",
      author: "David Thompson",
      publishDate: "2024-02-28",
      readTime: "8 min read",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      tags: ["Commercial", "Construction", "Trends", "2024"]
    },
    {
      id: 5,
      title: "Home Addition Planning: A Complete Guide",
      excerpt: "Everything you need to know about planning a home addition, from permits to design considerations and budget planning.",
      content: "Adding space to your home is a significant investment that requires careful planning. This guide covers all aspects of home addition planning...",
      author: "Jennifer Martinez",
      publishDate: "2024-02-20",
      readTime: "10 min read",
      category: "Home Improvement",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      tags: ["Home Addition", "Planning", "Guide", "Renovation"]
    },
    {
      id: 6,
      title: "Energy-Efficient Windows: A Smart Investment",
      excerpt: "Learn how energy-efficient windows can reduce your utility bills and improve your home's comfort while increasing its value.",
      content: "Energy-efficient windows are one of the best investments you can make for your home. They provide numerous benefits beyond just energy savings...",
      author: "Robert Wilson",
      publishDate: "2024-02-15",
      readTime: "6 min read",
      category: "Energy Efficiency",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      tags: ["Windows", "Energy Efficiency", "Investment", "Home Value"]
    }
  ];

  const categories = ["All", "Tips & Advice", "Sustainability", "Design", "Commercial", "Home Improvement", "Energy Efficiency"];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = searchTerm === "" || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1, 4);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className={`relative ${
        isMobile ? 'py-16' : isTablet ? 'py-20' : 'py-24'
      } bg-gradient-to-br from-primary/10 via-background to-secondary/20`}>
        <div className="container-responsive">
          <div className={`text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className={`${
              isMobile ? 'text-3xl' : isTablet ? 'text-4xl md:text-5xl' : 'text-6xl'
            } font-black text-foreground ${
              isMobile ? 'mb-4' : isTablet ? 'mb-6' : 'mb-6'
            } leading-tight`}>
              CONSTRUCTION
              <span className="block text-primary">BLOG</span>
            </h1>
            <p className={`${
              isMobile ? 'text-base' : isTablet ? 'text-lg' : 'text-xl'
            } text-muted-foreground max-w-4xl mx-auto leading-relaxed ${
              isMobile ? 'px-4' : 'px-0'
            }`}>
              Stay informed with the latest construction trends, tips, and insights from our expert team. 
              Your go-to resource for all things construction and home improvement.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className={`${
        isMobile ? 'py-8' : isTablet ? 'py-10' : 'py-12'
      } bg-secondary/30`}>
        <div className="container-responsive">
          <div className={`flex ${
            isMobile ? 'flex-col' : isTablet ? 'flex-col' : 'flex-row'
          } ${
            isMobile ? 'gap-4' : isTablet ? 'gap-6' : 'gap-6'
          } items-center justify-between`}>
            {/* Search */}
            <div className={`relative ${
              isMobile ? 'w-full' : isTablet ? 'w-full' : 'w-96'
            }`}>
              <Search className={`absolute ${
                isMobile ? 'left-3' : 'left-3'
              } top-1/2 transform -translate-y-1/2 text-muted-foreground ${
                isMobile ? 'w-4 h-4' : 'w-5 h-5'
              }`} />
              <input
                type="text"
                placeholder="Search blog posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full ${
                  isMobile ? 'pl-9' : 'pl-10'
                } pr-4 ${
                  isMobile ? 'py-3' : 'py-3'
                } border border-border ${
                  isMobile ? 'rounded-lg' : 'rounded-lg'
                } bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary ${
                  isMobile ? 'text-sm' : 'text-base'
                }`}
              />
            </div>

            {/* Category Filter */}
            <div className={`flex items-center ${
              isMobile ? 'gap-2' : 'gap-2'
            }`}>
              <Tag className={`${
                isMobile ? 'w-4 h-4' : 'w-5 h-5'
              } text-muted-foreground`} />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className={`${
                  isMobile ? 'px-3 py-2' : 'px-4 py-2'
                } border border-border ${
                  isMobile ? 'rounded-lg' : 'rounded-lg'
                } bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary ${
                  isMobile ? 'text-sm' : 'text-base'
                }`}
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-4">
              Featured Article
            </h2>
          </div>
          
          <div className={`bg-card border border-card-border rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(featuredPost.publishDate).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {featuredPost.readTime}
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {featuredPost.author}
                  </div>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  {featuredPost.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredPost.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Button className="bg-primary hover:bg-primary/90">
                  Read Full Article
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-4">
              Latest Articles
            </h2>
            <p className="text-lg text-muted-foreground">
              Showing {filteredPosts.length} of {blogPosts.length} articles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <div
                key={post.id}
                className={`bg-card border border-card-border rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.publishDate).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 2 && (
                      <span className="text-xs text-muted-foreground">
                        +{post.tags.length - 2} more
                      </span>
                    )}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground mb-4">No articles found matching your criteria.</p>
              <Button onClick={() => {
                setSelectedCategory("All");
                setSearchTerm("");
              }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-6">
            Stay Updated
          </h2>
          <p className="text-lg mb-8">
            Subscribe to our newsletter for the latest construction tips, trends, and project updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
