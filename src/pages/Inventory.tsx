import { ProtectedRoute } from "@/components/ProtectedRoute";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { DashboardCard } from "@/components/DashboardCard";
import { Button } from "@/components/ui/button";
import { Plus, Package, AlertTriangle, TrendingDown } from "lucide-react";

const Inventory = () => {
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
                  <h1 className="text-4xl font-bold mb-2">Inventario</h1>
                  <p className="text-muted-foreground">Control de stock y materiales</p>
                </div>
                <Button className="bg-primary text-primary-foreground">
                  <Plus className="h-4 w-4 mr-2" />
                  Agregar Producto
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <DashboardCard
                  title="Total Productos"
                  value="156"
                  description="En inventario"
                  icon={Package}
                />
                <DashboardCard
                  title="Stock Bajo"
                  value="8"
                  description="Requieren restock"
                  icon={AlertTriangle}
                />
                <DashboardCard
                  title="Valor Total"
                  value="€8,450"
                  description="Inventario actual"
                  icon={Package}
                />
                <DashboardCard
                  title="Productos Agotados"
                  value="3"
                  description="Sin stock"
                  icon={TrendingDown}
                />
              </div>

              <div className="bg-card rounded-lg p-6 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-semibold">Control de Stock</h2>
                  <div className="flex gap-4">
                    <Button variant="outline">Buscar</Button>
                    <Button variant="outline">Categorías</Button>
                  </div>
                </div>
                <div className="text-center py-12 text-muted-foreground">
                  Sistema de inventario en desarrollo...
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Inventory;