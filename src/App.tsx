import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import Landing from "./pages/Landing";
import Clients from "./pages/Clients";
import Appointments from "./pages/Appointments";
import Artists from "./pages/Artists";
import Inventory from "./pages/Inventory";
import Invoices from "./pages/Invoices";
import Settings from "./pages/Settings";
import Leads from "./pages/Leads";
import Revenue from "./pages/Revenue";
import Finanzas from "./pages/Finanzas";
import Agenda from "./pages/Agenda";
import Estudio from "./pages/Estudio";
import Cabinas from "./pages/Cabinas";
import Managers from "./pages/Managers";
import Communications from "./pages/Communications";
import ClientProfile from "./pages/ClientProfile";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/clientes" element={<Clients />} />
            <Route path="/clientes/:id" element={<ClientProfile />} />
            <Route path="/agenda" element={<Agenda />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/artistas" element={<Artists />} />
            <Route path="/inventario" element={<Inventory />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/ingresos" element={<Revenue />} />
            <Route path="/finanzas" element={<Finanzas />} />
            <Route path="/estudio" element={<Estudio />} />
            <Route path="/estudio/cabinas" element={<Cabinas />} />
            <Route path="/managers" element={<Managers />} />
            <Route path="/comunicaciones" element={<Communications />} />
            <Route path="/configuracion" element={<Settings />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
