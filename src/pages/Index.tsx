import { Calendar, Users, DollarSign, Package, TrendingUp, AlertTriangle, Clock, Target, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useProfile } from "@/hooks/useProfile";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { useToast } from "@/hooks/use-toast";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { DashboardCard } from "@/components/DashboardCard";
import { RecentAppointments } from "@/components/RecentAppointments";
import { QuickActions } from "@/components/QuickActions";
import { ManagerDashboard } from "@/components/dashboards/ManagerDashboard";
import { ArtistDashboard } from "@/components/dashboards/ArtistDashboard";
import { ReceptionistDashboard } from "@/components/dashboards/ReceptionistDashboard";
import { OwnerDashboard } from "@/components/dashboards/OwnerDashboard";
import { FreelancerDashboard } from "@/components/dashboards/FreelancerDashboard";

function DashboardContent() {
  const { user, signOut } = useAuth();
  const { profile, loading } = useProfile();
  const { toast } = useToast();

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "No se pudo cerrar sesión",
      });
    } else {
      toast({
        title: "Sesión cerrada",
        description: "Has cerrado sesión correctamente",
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  const AdminDashboard = () => (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
              Panel de Administración
            </h1>
            <p className="text-lg text-muted-foreground mt-1">
              Gestión completa de tu estudio de tatuaje
            </p>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Bienvenido, {profile?.full_name || user?.email}</p>
              <p className="text-xl font-semibold">{new Date().toLocaleDateString('es-ES', { 
                weekday: 'long', 
                day: 'numeric', 
                month: 'long' 
              })}</p>
            </div>
            <Button onClick={handleSignOut} variant="outline" size="sm">
              <LogOut className="w-4 h-4 mr-2" />
              Cerrar Sesión
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCard
          title="Citas Hoy"
          value="8"
          description="5 confirmadas, 3 pendientes"
          icon={Calendar}
          trend={{ value: 25, label: "vs ayer", positive: true }}
        />
        <DashboardCard
          title="Clientes Activos"
          value="284"
          description="23 nuevos este mes"
          icon={Users}
          trend={{ value: 12, label: "este mes", positive: true }}
        />
        <DashboardCard
          title="Ingresos Hoy"
          value="€1,847"
          description="Meta diaria: €2,000"
          icon={DollarSign}
          trend={{ value: 18, label: "vs ayer", positive: true }}
        />
        <DashboardCard
          title="Utilización"
          value="87%"
          description="Cabinas ocupadas"
          icon={Target}
          trend={{ value: 5, label: "vs semana pasada", positive: true }}
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-8">
          <RecentAppointments />
          
          {/* Secondary Stats */}
          <div className="grid gap-6 md:grid-cols-3">
            <DashboardCard
              title="Tiempo Promedio"
              value="2.5h"
              description="Por sesión"
              icon={Clock}
            />
            <DashboardCard
              title="Satisfacción"
              value="4.9"
              description="Rating promedio"
              icon={TrendingUp}
              trend={{ value: 3, label: "este mes", positive: true }}
            />
            <DashboardCard
              title="Stock Crítico"
              value="3"
              description="Artículos por reponer"
              icon={Package}
              className="border-warning/30 bg-warning/5"
            />
          </div>
        </div>
        
        <div className="space-y-8">
          <QuickActions />
          
          <DashboardCard
            title="Consentimientos"
            value="24"
            description="Firmados hoy"
            icon={AlertTriangle}
          />
          
          <DashboardCard
            title="Comisiones Pendientes"
            value="€420"
            description="5 artistas"
            icon={DollarSign}
          />
        </div>
      </div>
    </div>
  );

  const renderDashboardByRole = () => {
    // Si no hay profile o role es null, usar el dashboard por defecto (Manager)
    const userRole = profile?.role || 'user';
    
    switch (userRole) {
      case 'admin':
        return <AdminDashboard />;
      case 'owner':
        return <OwnerDashboard />;
      case 'artist':
        return <ArtistDashboard />;
      case 'freelancer':
        return <FreelancerDashboard />;
      case 'receptionist':
        return <ReceptionistDashboard />;
      case 'manager':
        return <ManagerDashboard />;
      case 'user':
      default:
        return <ManagerDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8 bg-gradient-to-br from-background via-background to-accent/20 lg:ml-16">
          <div className="max-w-7xl mx-auto">
            {renderDashboardByRole()}
          </div>
        </main>
      </div>
    </div>
  );
}

const Index = () => {
  return (
    <ProtectedRoute>
      <DashboardContent />
    </ProtectedRoute>
  );
};

export default Index;