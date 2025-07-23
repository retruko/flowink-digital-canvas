import { useState } from "react";
import { DollarSign, TrendingUp, CreditCard, Target, Calendar, Filter, Download } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { DashboardCard } from "@/components/DashboardCard";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { MobileSidebar } from "@/components/MobileSidebar";

export default function Revenue() {
  const [period, setPeriod] = useState("30days");
  const [filterType, setFilterType] = useState("all");

  const getPeriodData = () => {
    switch (period) {
      case "today":
        return {
          total: "€890",
          services: "€650",
          deposits: "€240",
          transactions: 12,
          previousPeriod: "€745",
          growth: 19.5
        };
      case "7days":
        return {
          total: "€6,540",
          services: "€4,890",
          deposits: "€1,650",
          transactions: 84,
          previousPeriod: "€5,920",
          growth: 10.5
        };
      case "30days":
        return {
          total: "€28,450",
          services: "€21,340",
          deposits: "€7,110",
          transactions: 342,
          previousPeriod: "€26,100",
          growth: 9.0
        };
      case "3months":
        return {
          total: "€94,230",
          services: "€70,680",
          deposits: "€23,550",
          transactions: 1156,
          previousPeriod: "€85,640",
          growth: 10.0
        };
      default:
        return {
          total: "€28,450",
          services: "€21,340",
          deposits: "€7,110",
          transactions: 342,
          previousPeriod: "€26,100",
          growth: 9.0
        };
    }
  };

  const data = getPeriodData();

  // Datos de transacciones recientes
  const recentTransactions = [
    { id: "1", date: "2024-01-15", client: "María García", service: "Tatuaje brazo", amount: "€380", method: "Tarjeta", status: "completed" },
    { id: "2", date: "2024-01-15", client: "Juan Pérez", service: "Consulta", amount: "€50", method: "Efectivo", status: "completed" },
    { id: "3", date: "2024-01-15", client: "Ana López", service: "Depósito - Tatuaje espalda", amount: "€120", method: "Transferencia", status: "completed" },
    { id: "4", date: "2024-01-14", client: "Pedro Ruiz", service: "Retoque", amount: "€80", method: "Tarjeta", status: "completed" },
    { id: "5", date: "2024-01-14", client: "Laura Martín", service: "Piercing", amount: "€45", method: "Efectivo", status: "completed" },
    { id: "6", date: "2024-01-14", client: "Roberto Silva", service: "Depósito - Tatuaje grande", amount: "€200", method: "Tarjeta", status: "pending" },
    { id: "7", date: "2024-01-13", client: "Carmen Vega", service: "Tatuaje pequeño", amount: "€180", method: "Efectivo", status: "completed" },
    { id: "8", date: "2024-01-13", client: "Diego Torres", service: "Consulta + Diseño", amount: "€75", method: "Transferencia", status: "completed" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "default";
      case "pending": return "outline";
      case "cancelled": return "destructive";
      default: return "outline";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "completed": return "Completado";
      case "pending": return "Pendiente";
      case "cancelled": return "Cancelado";
      default: return status;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      <Header />
      <div className="flex">
        <Sidebar />
        <MobileSidebar />
        
        <main className="flex-1 p-8 lg:ml-20">
          <div className="space-y-8 transform scale-[0.90] origin-top">
            {/* Header */}
            <div className="space-y-2">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
                Ingresos
              </h1>
              <p className="text-lg text-muted-foreground">
                Análisis detallado de facturación y pagos
              </p>
            </div>

            {/* Filtros */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Select value={period} onValueChange={setPeriod}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="today">Hoy</SelectItem>
                    <SelectItem value="7days">Últimos 7 días</SelectItem>
                    <SelectItem value="30days">Últimos 30 días</SelectItem>
                    <SelectItem value="3months">Últimos 3 meses</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={filterType} onValueChange={setFilterType}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos los tipos</SelectItem>
                    <SelectItem value="services">Solo servicios</SelectItem>
                    <SelectItem value="deposits">Solo depósitos</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Exportar
              </Button>
            </div>

            {/* Métricas principales */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <DashboardCard
                title="Ingresos Totales"
                value={data.total}
                description={`Período anterior: ${data.previousPeriod}`}
                icon={DollarSign}
                trend={{ value: data.growth, label: "vs período anterior", positive: data.growth > 0 }}
              />
              <DashboardCard
                title="Por Servicios"
                value={data.services}
                description={`${data.transactions} transacciones`}
                icon={Target}
                trend={{ value: 12, label: "vs período anterior", positive: true }}
              />
              <DashboardCard
                title="Depósitos"
                value={data.deposits}
                description="Reservas confirmadas"
                icon={CreditCard}
                trend={{ value: 8, label: "vs período anterior", positive: true }}
              />
              <DashboardCard
                title="Crecimiento"
                value={`${data.growth.toFixed(1)}%`}
                description="Respecto al período anterior"
                icon={TrendingUp}
                trend={{ value: data.growth, label: "crecimiento", positive: data.growth > 0 }}
              />
            </div>

            {/* Transacciones recientes */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-primary" />
                      Transacciones Recientes
                    </CardTitle>
                    <CardDescription>
                      Historial de pagos y cobros
                    </CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4 mr-2" />
                    Filtrar
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentTransactions.map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="text-sm text-muted-foreground font-mono">
                          {transaction.date}
                        </div>
                        <div>
                          <p className="font-medium">{transaction.client}</p>
                          <p className="text-sm text-muted-foreground">{transaction.service}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="font-medium text-lg">{transaction.amount}</p>
                          <p className="text-sm text-muted-foreground">{transaction.method}</p>
                        </div>
                        <Badge variant={getStatusColor(transaction.status)}>
                          {getStatusLabel(transaction.status)}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Resumen por métodos de pago */}
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Por Método de Pago</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Tarjeta</span>
                      <span className="font-medium">€18,340 (64%)</span>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Efectivo</span>
                      <span className="font-medium">€6,890 (24%)</span>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Transferencia</span>
                      <span className="font-medium">€3,220 (12%)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Por Tipo de Servicio</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Tatuajes</span>
                      <span className="font-medium">€19,560 (69%)</span>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Depósitos</span>
                      <span className="font-medium">€7,110 (25%)</span>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Consultas</span>
                      <span className="font-medium">€1,780 (6%)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Estadísticas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Ticket promedio</span>
                      <span className="font-medium">€156</span>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Transacciones/día</span>
                      <span className="font-medium">11.4</span>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Pendientes de cobro</span>
                      <span className="font-medium">€420</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}