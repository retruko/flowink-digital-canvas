import { ProtectedRoute } from "@/components/ProtectedRoute";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { DashboardCard } from "@/components/DashboardCard";
import { Button } from "@/components/ui/button";
import { Plus, Palette, Users, Star } from "lucide-react";

const Artists = () => {
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
                  <h1 className="text-4xl font-bold mb-2">Tatuadores</h1>
                  <p className="text-muted-foreground">Gestiona el equipo de artistas</p>
                </div>
                <Button className="bg-primary text-primary-foreground">
                  <Plus className="h-4 w-4 mr-2" />
                  Nuevo Artista
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <DashboardCard
                  title="Total Artistas"
                  value="5"
                  description="En el estudio"
                  icon={Palette}
                />
                <DashboardCard
                  title="Activos Hoy"
                  value="4"
                  description="Trabajando"
                  icon={Users}
                />
                <DashboardCard
                  title="Rating Promedio"
                  value="4.8"
                  description="De 5 estrellas"
                  icon={Star}
                />
                <DashboardCard
                  title="Ingresos (mes)"
                  value="€12,450"
                  description="Total generado"
                  icon={Palette}
                />
              </div>

              <div className="bg-card rounded-lg p-6 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-semibold">Equipo de Artistas</h2>
                  <div className="flex gap-4">
                    <Button variant="outline">Ver Horarios</Button>
                    <Button variant="outline">Gestionar</Button>
                  </div>
                </div>
                <div className="text-center py-12 text-muted-foreground">
                  Lista de artistas en desarrollo...
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Artists;