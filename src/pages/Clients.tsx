import { ProtectedRoute } from "@/components/ProtectedRoute";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { DashboardCard } from "@/components/DashboardCard";
import { Button } from "@/components/ui/button";
import { Plus, Search, Filter, Users } from "lucide-react";

const Clients = () => {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background/90">
        <Header />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-8">
            <div className="max-w-7xl mx-auto space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-4xl font-bold mb-2">Clientes</h1>
                  <p className="text-muted-foreground">Gestiona tu base de clientes</p>
                </div>
                <Button className="bg-primary text-primary-foreground">
                  <Plus className="h-4 w-4 mr-2" />
                  Nuevo Cliente
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <DashboardCard
                  title="Total Clientes"
                  value="284"
                  description="Clientes registrados"
                  icon={Users}
                />
                <DashboardCard
                  title="Nuevos (mes)"
                  value="24"
                  description="+12% vs mes anterior"
                  icon={Plus}
                />
                <DashboardCard
                  title="Activos"
                  value="156"
                  description="Con citas este mes"
                  icon={Users}
                />
                <DashboardCard
                  title="Recurrentes"
                  value="89"
                  description="Más de 3 citas"
                  icon={Users}
                />
              </div>

              <div className="bg-card rounded-lg p-6 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-semibold">Lista de Clientes</h2>
                  <div className="flex gap-4">
                    <Button variant="outline">
                      <Search className="h-4 w-4 mr-2" />
                      Buscar
                    </Button>
                    <Button variant="outline">
                      <Filter className="h-4 w-4 mr-2" />
                      Filtrar
                    </Button>
                  </div>
                </div>
                <div className="text-center py-12 text-muted-foreground">
                  Lista de clientes en desarrollo...
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Clients;