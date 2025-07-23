import { ProtectedRoute } from "@/components/ProtectedRoute";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { DashboardCard } from "@/components/DashboardCard";
import { Button } from "@/components/ui/button";
import { Plus, Calendar, Clock, CheckCircle } from "lucide-react";

const Appointments = () => {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background/90">
        <Header />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-4 sm:p-6 lg:p-8 lg:ml-20">
            <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8 transform scale-[0.90] origin-top">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">Citas</h1>
                  <p className="text-sm sm:text-base text-muted-foreground">Gestiona las citas del estudio</p>
                </div>
                <Button className="bg-primary text-primary-foreground w-full sm:w-auto">
                  <Plus className="h-4 w-4 mr-2" />
                  Nueva Cita
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <DashboardCard
                  title="Hoy"
                  value="8"
                  description="Citas programadas"
                  icon={Calendar}
                />
                <DashboardCard
                  title="Esta Semana"
                  value="42"
                  description="Citas confirmadas"
                  icon={Calendar}
                />
                <DashboardCard
                  title="En Proceso"
                  value="3"
                  description="Citas activas"
                  icon={Clock}
                />
                <DashboardCard
                  title="Completadas"
                  value="127"
                  description="Este mes"
                  icon={CheckCircle}
                />
              </div>

              <div className="bg-card rounded-lg p-4 sm:p-6 shadow-lg">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
                  <h2 className="text-xl sm:text-2xl font-semibold">Agenda del Día</h2>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                    <Button variant="outline" className="w-full sm:w-auto">Ver Calendario</Button>
                    <Button variant="outline" className="w-full sm:w-auto">Filtrar</Button>
                  </div>
                </div>
                <div className="text-center py-12 text-muted-foreground">
                  Calendario de citas en desarrollo...
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Appointments;