import { Switch, Route, Router } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import HomePage from "@/pages/HomePage";
import DocumentaryDetailPage from "@/pages/DocumentaryDetailPage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import PhotographyPage from "@/pages/PhotographyPage";
import AdminLogin from "@/pages/AdminLogin";
import AdminDashboard from "@/pages/AdminDashboard";
import AdminDocumentaries from "@/pages/AdminDocumentaries";
import AdminProfile from "@/pages/AdminProfile";
import AdminSettings from "@/pages/AdminSettings";
import NotFound from "@/pages/not-found";

const basePath = import.meta.env.DEV ? "" : "/documentary_streamer_reactjs";

function AppRouter() {
  return (
    <Router base={basePath}>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/documentary/:id" component={DocumentaryDetailPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/photography" component={PhotographyPage} />
        <Route path="/admin/login" component={AdminLogin} />
        <Route path="/admin/documentaries" component={AdminDocumentaries} />
        <Route path="/admin/profile" component={AdminProfile} />
        <Route path="/admin/settings" component={AdminSettings} />
        <Route path="/admin" component={AdminDashboard} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <AppRouter />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
