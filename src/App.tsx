import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import PageMetadata from "@/components/PageMetadata";
import RouteScroll from "@/components/RouteScroll";
import Index from "./pages/Index";
import ContactPage from "./pages/ContactPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicyPage from "./pages/CookiePolicyPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

export const SiteApp = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

        <div className="font-sans bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
          <PageMetadata />
          <RouteScroll />
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/cookies" element={<CookiePolicyPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppFloat />

        </div>

    </TooltipProvider>
  </QueryClientProvider>
);

const App = () => <BrowserRouter><SiteApp /></BrowserRouter>;
export default App;
