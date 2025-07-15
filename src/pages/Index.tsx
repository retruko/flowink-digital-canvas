import { Calendar, Users, DollarSign, Package, TrendingUp, AlertTriangle } from "lucide-react";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { DashboardCard } from "@/components/DashboardCard";
import { RecentAppointments } from "@/components/RecentAppointments";
import { QuickActions } from "@/components/QuickActions";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="space-y-6">
            {/* Header Section */}
            <div>
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <p className="text-muted-foreground">
                Bienvenido a FlowInk - Panel de control de tu estudio
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <DashboardCard
                title="Citas Hoy"
                value="12"
                description="4 confirmadas, 8 pendientes"
                icon={Calendar}
                trend={{ value: 20, label: "vs ayer", positive: true }}
              />
              <DashboardCard
                title="Clientes Activos"
                value="284"
                description="23 nuevos este mes"
                icon={Users}
                trend={{ value: 8, label: "este mes", positive: true }}
              />
              <DashboardCard
                title="Ingresos Día"
                value="€1,240"
                description="Meta: €1,500"
                icon={DollarSign}
                trend={{ value: 12, label: "vs ayer", positive: true }}
              />
              <DashboardCard
                title="Stock Bajo"
                value="5"
                description="Artículos por reposer"
                icon={Package}
                className="border-warning/20 bg-warning/5"
              />
            </div>

            {/* Main Content Grid */}
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <RecentAppointments />
              </div>
              <div>
                <QuickActions />
              </div>
            </div>

            {/* Additional Stats Row */}
            <div className="grid gap-4 md:grid-cols-3">
              <DashboardCard
                title="Comisiones Pendientes"
                value="€320"
                description="3 artistas"
                icon={DollarSign}
              />
              <DashboardCard
                title="Satisfacción Cliente"
                value="4.8"
                description="Promedio este mes"
                icon={TrendingUp}
                trend={{ value: 5, label: "mejora", positive: true }}
              />
              <DashboardCard
                title="Consentimientos"
                value="18"
                description="Firmados hoy"
                icon={AlertTriangle}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
