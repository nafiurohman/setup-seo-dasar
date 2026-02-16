import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import TechnicalSEO from "./pages/TechnicalSEO";
import OnPageSEO from "./pages/OnPageSEO";
import OffPageSEO from "./pages/OffPageSEO";
import GoogleSearchConsole from "./pages/GoogleSearchConsole";
import GoogleAnalytics from "./pages/GoogleAnalytics";
import MobileSEO from "./pages/MobileSEO";
import AIVoiceSEO from "./pages/AIVoiceSEO";
import InternationalSEO from "./pages/InternationalSEO";
import SecurityTrust from "./pages/SecurityTrust";
import SEOChecklist from "./pages/SEOChecklist";
import ToolsResources from "./pages/ToolsResources";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/technical-seo" element={<TechnicalSEO />} />
              <Route path="/on-page-seo" element={<OnPageSEO />} />
              <Route path="/off-page-seo" element={<OffPageSEO />} />
              <Route path="/google-search-console" element={<GoogleSearchConsole />} />
              <Route path="/google-analytics" element={<GoogleAnalytics />} />
              <Route path="/mobile-seo" element={<MobileSEO />} />
              <Route path="/ai-voice-seo" element={<AIVoiceSEO />} />
              <Route path="/international-seo" element={<InternationalSEO />} />
              <Route path="/security-trust" element={<SecurityTrust />} />
              <Route path="/seo-checklist" element={<SEOChecklist />} />
              <Route path="/tools-resources" element={<ToolsResources />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
