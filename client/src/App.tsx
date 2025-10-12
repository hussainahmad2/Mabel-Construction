import { Switch, Route } from "wouter";
import { useState, useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";
import SplashScreen from "@/components/SplashScreen";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Projects from "@/pages/Projects";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";
import Locations from "@/pages/Locations";
import RoofingServices from "./pages/services/RoofingServices";
import RemodelingServices from "./pages/services/RemodelingServices";
import CommercialServices from "./pages/services/CommercialServices";
import SidingServices from "./pages/services/SidingServices";
import WindowServices from "./pages/services/WindowServices";
import LocationServicePage from "./pages/LocationServicePage";
import Minneapolis from "@/pages/locations/Minneapolis";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/projects" component={Projects} />
      <Route path="/blog" component={Blog} />
      <Route path="/contact" component={Contact} />
      <Route path="/locations" component={Locations} />
      {/* Main Service Pages */}
      <Route path="/roofing-services" component={RoofingServices} />
      <Route path="/remodeling-services" component={RemodelingServices} />
      <Route path="/commercial-services" component={CommercialServices} />
      <Route path="/siding-services" component={SidingServices} />
      <Route path="/window-services" component={WindowServices} />
      
      {/* Roofing Services by Location */}
      <Route path="/roofing-services-in-minneapolis" component={() => <LocationServicePage service="roofing" />} />
      <Route path="/roofing-services-in-st-paul" component={() => <LocationServicePage service="roofing" />} />
      <Route path="/roofing-services-in-coon-rapids" component={() => <LocationServicePage service="roofing" />} />
      <Route path="/roofing-services-in-blaine" component={() => <LocationServicePage service="roofing" />} />
      <Route path="/roofing-services-in-shoreview" component={() => <LocationServicePage service="roofing" />} />
      <Route path="/roofing-services-in-north-oaks" component={() => <LocationServicePage service="roofing" />} />
      <Route path="/roofing-services-in-plymouth" component={() => <LocationServicePage service="roofing" />} />
      <Route path="/roofing-services-in-ramsey" component={() => <LocationServicePage service="roofing" />} />
      <Route path="/roofing-services-in-anoka" component={() => <LocationServicePage service="roofing" />} />
      <Route path="/roofing-services-in-rogers" component={() => <LocationServicePage service="roofing" />} />
      <Route path="/roofing-services-in-st-michael" component={() => <LocationServicePage service="roofing" />} />
      <Route path="/roofing-services-in-maple-grove" component={() => <LocationServicePage service="roofing" />} />
      <Route path="/roofing-services-in-fridley" component={() => <LocationServicePage service="roofing" />} />
      <Route path="/roofing-services-in-columbia-heights" component={() => <LocationServicePage service="roofing" />} />

      {/* Remodeling Services by Location */}
      <Route path="/remodeling-services-in-minneapolis" component={() => <LocationServicePage service="remodeling" />} />
      <Route path="/remodeling-services-in-st-paul" component={() => <LocationServicePage service="remodeling" />} />
      <Route path="/remodeling-services-in-coon-rapids" component={() => <LocationServicePage service="remodeling" />} />
      <Route path="/remodeling-services-in-blaine" component={() => <LocationServicePage service="remodeling" />} />
      <Route path="/remodeling-services-in-shoreview" component={() => <LocationServicePage service="remodeling" />} />
      <Route path="/remodeling-services-in-north-oaks" component={() => <LocationServicePage service="remodeling" />} />
      <Route path="/remodeling-services-in-plymouth" component={() => <LocationServicePage service="remodeling" />} />
      <Route path="/remodeling-services-in-ramsey" component={() => <LocationServicePage service="remodeling" />} />
      <Route path="/remodeling-services-in-anoka" component={() => <LocationServicePage service="remodeling" />} />
      <Route path="/remodeling-services-in-rogers" component={() => <LocationServicePage service="remodeling" />} />
      <Route path="/remodeling-services-in-st-michael" component={() => <LocationServicePage service="remodeling" />} />
      <Route path="/remodeling-services-in-maple-grove" component={() => <LocationServicePage service="remodeling" />} />
      <Route path="/remodeling-services-in-fridley" component={() => <LocationServicePage service="remodeling" />} />
      <Route path="/remodeling-services-in-columbia-heights" component={() => <LocationServicePage service="remodeling" />} />

      {/* Commercial Services by Location */}
      <Route path="/commercial-services-in-minneapolis" component={() => <LocationServicePage service="commercial" />} />
      <Route path="/commercial-services-in-st-paul" component={() => <LocationServicePage service="commercial" />} />
      <Route path="/commercial-services-in-coon-rapids" component={() => <LocationServicePage service="commercial" />} />
      <Route path="/commercial-services-in-blaine" component={() => <LocationServicePage service="commercial" />} />
      <Route path="/commercial-services-in-shoreview" component={() => <LocationServicePage service="commercial" />} />
      <Route path="/commercial-services-in-north-oaks" component={() => <LocationServicePage service="commercial" />} />
      <Route path="/commercial-services-in-plymouth" component={() => <LocationServicePage service="commercial" />} />
      <Route path="/commercial-services-in-ramsey" component={() => <LocationServicePage service="commercial" />} />
      <Route path="/commercial-services-in-anoka" component={() => <LocationServicePage service="commercial" />} />
      <Route path="/commercial-services-in-rogers" component={() => <LocationServicePage service="commercial" />} />
      <Route path="/commercial-services-in-st-michael" component={() => <LocationServicePage service="commercial" />} />
      <Route path="/commercial-services-in-maple-grove" component={() => <LocationServicePage service="commercial" />} />
      <Route path="/commercial-services-in-fridley" component={() => <LocationServicePage service="commercial" />} />
      <Route path="/commercial-services-in-columbia-heights" component={() => <LocationServicePage service="commercial" />} />

      {/* Siding Services by Location */}
      <Route path="/siding-services-in-minneapolis" component={() => <LocationServicePage service="siding" />} />
      <Route path="/siding-services-in-st-paul" component={() => <LocationServicePage service="siding" />} />
      <Route path="/siding-services-in-coon-rapids" component={() => <LocationServicePage service="siding" />} />
      <Route path="/siding-services-in-blaine" component={() => <LocationServicePage service="siding" />} />
      <Route path="/siding-services-in-shoreview" component={() => <LocationServicePage service="siding" />} />
      <Route path="/siding-services-in-north-oaks" component={() => <LocationServicePage service="siding" />} />
      <Route path="/siding-services-in-plymouth" component={() => <LocationServicePage service="siding" />} />
      <Route path="/siding-services-in-ramsey" component={() => <LocationServicePage service="siding" />} />
      <Route path="/siding-services-in-anoka" component={() => <LocationServicePage service="siding" />} />
      <Route path="/siding-services-in-rogers" component={() => <LocationServicePage service="siding" />} />
      <Route path="/siding-services-in-st-michael" component={() => <LocationServicePage service="siding" />} />
      <Route path="/siding-services-in-maple-grove" component={() => <LocationServicePage service="siding" />} />
      <Route path="/siding-services-in-fridley" component={() => <LocationServicePage service="siding" />} />
      <Route path="/siding-services-in-columbia-heights" component={() => <LocationServicePage service="siding" />} />

      {/* Window Services by Location */}
      <Route path="/window-services-in-minneapolis" component={() => <LocationServicePage service="window" />} />
      <Route path="/window-services-in-st-paul" component={() => <LocationServicePage service="window" />} />
      <Route path="/window-services-in-coon-rapids" component={() => <LocationServicePage service="window" />} />
      <Route path="/window-services-in-blaine" component={() => <LocationServicePage service="window" />} />
      <Route path="/window-services-in-shoreview" component={() => <LocationServicePage service="window" />} />
      <Route path="/window-services-in-north-oaks" component={() => <LocationServicePage service="window" />} />
      <Route path="/window-services-in-plymouth" component={() => <LocationServicePage service="window" />} />
      <Route path="/window-services-in-ramsey" component={() => <LocationServicePage service="window" />} />
      <Route path="/window-services-in-anoka" component={() => <LocationServicePage service="window" />} />
      <Route path="/window-services-in-rogers" component={() => <LocationServicePage service="window" />} />
      <Route path="/window-services-in-st-michael" component={() => <LocationServicePage service="window" />} />
      <Route path="/window-services-in-maple-grove" component={() => <LocationServicePage service="window" />} />
      <Route path="/window-services-in-fridley" component={() => <LocationServicePage service="window" />} />
      <Route path="/window-services-in-columbia-heights" component={() => <LocationServicePage service="window" />} />
      
      {/* Legacy Routes - 301 Redirects */}
      <Route path="/services/roofing" component={() => { window.location.href = "/roofing-services"; return null; }} />
      <Route path="/services/remodeling" component={() => { window.location.href = "/remodeling-services"; return null; }} />
      <Route path="/services/commercial" component={() => { window.location.href = "/commercial-services"; return null; }} />
      <Route path="/services/siding" component={() => { window.location.href = "/siding-services"; return null; }} />
      <Route path="/services/windows" component={() => { window.location.href = "/window-services"; return null; }} />
      
      {/* Location Pages */}
      <Route path="/minneapolis" component={Minneapolis} />
      
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Check if splash has been shown before in this session
    const splashShown = sessionStorage.getItem('splashShown');
    if (splashShown) {
      setShowSplash(false);
    }
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
    sessionStorage.setItem('splashShown', 'true');
  };

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
