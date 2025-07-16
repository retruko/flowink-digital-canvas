import { ProtectedRoute } from "@/components/ProtectedRoute";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { DashboardCard } from "@/components/DashboardCard";
import { Button } from "@/components/ui/button";
import { Plus, FileText, DollarSign, AlertCircle } from "lucide-react";

const Invoices = () => {
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
                  <h1 className="text-4xl font-bold mb-2">Facturas</h1>
                  <p className="text-muted-foreground">Gestión de facturación</p>
                </div>
                <Button className="bg-primary text-primary-foreground">
                  <Plus className="h-4 w-4 mr-2" />
                  Nueva Factura
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <DashboardCard
                  title="Total Facturas"
                  value="89"
                  description="Este mes"
                  icon={FileText}
                />
                <DashboardCard
                  title="Pagadas"
                  value="76"
                  description="Completadas"
                  icon={DollarSign}
                />
                <DashboardCard
                  title="Pendientes"
                  value="13"
                  description="Por cobrar"
                  icon={AlertCircle}
                />
                <DashboardCard
                  title="Total Facturado"
                  value="€15,890"
                  description="Este mes"
                  icon={DollarSign}
                />
              </div>

              <div className="bg-card rounded-lg p-6 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-semibold">Facturas Recientes</h2>
                  <div className="flex gap-4">
                    <Button variant="outline">Filtrar</Button>
                    <Button variant="outline">Exportar</Button>
                  </div>
                </div>
                <div className="text-center py-12 text-muted-foreground">
                  Sistema de facturación en desarrollo...
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Invoices;