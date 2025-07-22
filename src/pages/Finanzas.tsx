import { useState } from "react";
import { DollarSign, TrendingDown, BarChart3, Calendar, Filter, Download, Plus, CreditCard, Target, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { DashboardCard } from "@/components/DashboardCard";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { MobileSidebar } from "@/components/MobileSidebar";

export default function Finanzas() {
  const [period, setPeriod] = useState("30days");
  const [filterType, setFilterType] = useState("all");

  const getPeriodData = () => {
    switch (period) {
      case "today":
        return {
          revenue: "€890",
          expenses: "€320",
          profit: "€570",
          transactions: 12,
          growth: 19.5
        };
      case "7days":
        return {
          revenue: "€6,540",
          expenses: "€2,340",
          profit: "€4,200",
          transactions: 84,
          growth: 10.5
        };
      case "30days":
        return {
          revenue: "€28,450",
          expenses: "€12,680",
          profit: "€15,770",
          transactions: 342,
          growth: 9.0
        };
      case "3months":
        return {
          revenue: "€94,230",
          expenses: "€42,150",
          profit: "€52,080",
          transactions: 1156,
          growth: 10.0
        };
      default:
        return {
          revenue: "€28,450",
          expenses: "€12,680", 
          profit: "€15,770",
          transactions: 342,
          growth: 9.0
        };
    }
  };

  const data = getPeriodData();

  // Datos de transacciones recientes de ingresos
  const recentRevenue = [
    { id: "1", date: "2024-01-15", client: "María García", service: "Tatuaje brazo", amount: "€380", method: "Tarjeta", status: "completed" },
    { id: "2", date: "2024-01-15", client: "Juan Pérez", service: "Consulta", amount: "€50", method: "Efectivo", status: "completed" },
    { id: "3", date: "2024-01-15", client: "Ana López", service: "Depósito - Tatuaje espalda", amount: "€120", method: "Transferencia", status: "completed" },
    { id: "4", date: "2024-01-14", client: "Pedro Ruiz", service: "Retoque", amount: "€80", method: "Tarjeta", status: "completed" },
    { id: "5", date: "2024-01-14", client: "Laura Martín", service: "Piercing", amount: "€45", method: "Efectivo", status: "completed" },
    { id: "6", date: "2024-01-14", client: "Roberto Silva", service: "Depósito - Tatuaje grande", amount: "€200", method: "Tarjeta", status: "pending" },
  ];

  // Datos de gastos
  const recentExpenses = [
    { id: "1", date: "2024-01-15", concept: "Tintas premium", category: "Material", amount: "€145", supplier: "TattooSupply Pro", status: "paid" },
    { id: "2", date: "2024-01-14", concept: "Agujas desechables", category: "Material", amount: "€89", supplier: "Ink Masters", status: "paid" },
    { id: "3", date: "2024-01-14", concept: "Alquiler local", category: "Fijo", amount: "€1,200", supplier: "Inmobiliaria García", status: "paid" },
    { id: "4", date: "2024-01-13", concept: "Electricidad", category: "Servicios", amount: "€180", supplier: "Iberdrola", status: "pending" },
    { id: "5", date: "2024-01-13", concept: "Guantes nitrilo", category: "Material", amount: "€35", supplier: "MedSupplies", status: "paid" },
    { id: "6", date: "2024-01-12", concept: "Limpieza", category: "Servicios", amount: "€90", supplier: "CleanPro", status: "paid" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
      case "paid": return "default";
      case "pending": return "outline";
      case "cancelled": return "destructive";
      default: return "outline";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "completed": return "Completado";
      case "paid": return "Pagado";
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
        
        <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-auto">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Header */}
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
                Finanzas
              </h1>
              <p className="text-base md:text-lg text-muted-foreground">
                Gestión completa de ingresos, gastos y reportes financieros
              </p>
            </div>

            {/* Filtros globales */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 bg-card rounded-lg border">
              <div>
                <h3 className="text-lg font-semibold">Período de análisis</h3>
                <p className="text-sm text-muted-foreground">Selecciona el rango de fechas para visualizar</p>
              </div>
              <div className="flex items-center gap-3">
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
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Exportar
                </Button>
              </div>
            </div>

            {/* Métricas principales */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <DashboardCard
                title="Ingresos Totales"
                value={data.revenue}
                description="Servicios y depósitos"
                icon={DollarSign}
                trend={{ value: data.growth, label: "vs período anterior", positive: data.growth > 0 }}
              />
              <DashboardCard
                title="Gastos Totales"
                value={data.expenses}
                description="Materiales y servicios"
                icon={TrendingDown}
                trend={{ value: -5, label: "vs período anterior", positive: false }}
              />
              <DashboardCard
                title="Beneficio Neto"
                value={data.profit}
                description="Ingresos - Gastos"
                icon={TrendingUp}
                trend={{ value: 15, label: "vs período anterior", positive: true }}
              />
              <DashboardCard
                title="Transacciones"
                value={data.transactions.toString()}
                description="Total de movimientos"
                icon={BarChart3}
                trend={{ value: 8, label: "vs período anterior", positive: true }}
              />
            </div>

            {/* Pestañas de contenido */}
            <Tabs defaultValue="ingresos" className="space-y-6">
              <div className="border-b">
                <TabsList className="h-12 w-auto bg-transparent p-0">
                  <TabsTrigger 
                    value="ingresos" 
                    className="h-12 px-6 text-sm font-medium border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent rounded-none"
                  >
                    💰 Ingresos
                  </TabsTrigger>
                  <TabsTrigger 
                    value="gastos" 
                    className="h-12 px-6 text-sm font-medium border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent rounded-none"
                  >
                    📊 Gastos
                  </TabsTrigger>
                  <TabsTrigger 
                    value="reportes" 
                    className="h-12 px-6 text-sm font-medium border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent rounded-none"
                  >
                    📈 Reportes
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* Pestaña de Ingresos */}
              <TabsContent value="ingresos" className="p-6 space-y-6">
                <div className="grid gap-6 md:grid-cols-3">
                  <DashboardCard
                    title="Por Servicios"
                    value="€21,340"
                    description="Tatuajes y consultas"
                    icon={Target}
                    trend={{ value: 12, label: "vs período anterior", positive: true }}
                  />
                  <DashboardCard
                    title="Depósitos"
                    value="€7,110"
                    description="Reservas confirmadas"
                    icon={CreditCard}
                    trend={{ value: 8, label: "vs período anterior", positive: true }}
                  />
                  <DashboardCard
                    title="Ticket Promedio"
                    value="€156"
                    description="Por transacción"
                    icon={TrendingUp}
                    trend={{ value: 5, label: "vs período anterior", positive: true }}
                  />
                </div>

                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>Transacciones de Ingresos</CardTitle>
                        <CardDescription>Historial de pagos recibidos</CardDescription>
                      </div>
                      <Button variant="outline" size="sm">
                        <Filter className="w-4 h-4 mr-2" />
                        Filtrar
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentRevenue.map((transaction) => (
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
                              <p className="font-medium text-lg text-green-600">{transaction.amount}</p>
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
              </TabsContent>

              {/* Pestaña de Gastos */}
              <TabsContent value="gastos" className="p-6 space-y-6">
                <div className="flex justify-end">
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Registrar Gasto
                  </Button>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                  <Card className="border-l-4 border-l-orange-500">
                    <CardHeader>
                      <CardTitle className="text-orange-700">Por Categoría</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Material</span>
                          <span className="font-medium">€6,890 (54%)</span>
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Fijos</span>
                          <span className="font-medium">€3,600 (28%)</span>
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Servicios</span>
                          <span className="font-medium">€2,190 (18%)</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-blue-500">
                    <CardHeader>
                      <CardTitle className="text-blue-700">Este Mes</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Presupuesto</span>
                          <span className="font-medium">€15,000</span>
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Gastado</span>
                          <span className="font-medium">€12,680</span>
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Restante</span>
                          <span className="font-medium text-green-600">€2,320</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-red-500">
                    <CardHeader>
                      <CardTitle className="text-red-700">Pendientes</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Facturas</span>
                          <span className="font-medium">€420</span>
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Vencidas</span>
                          <span className="font-medium text-red-600">€180</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>📋 Registro de Gastos</CardTitle>
                        <CardDescription>Historial detallado de gastos y facturas</CardDescription>
                      </div>
                      <Button variant="outline" size="sm">
                        <Filter className="w-4 h-4 mr-2" />
                        Filtrar
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {recentExpenses.map((expense) => (
                        <div key={expense.id} className="flex items-center justify-between p-4 bg-gradient-to-r from-background to-muted/20 rounded-lg border hover:bg-accent/50 transition-colors">
                          <div className="flex items-center gap-4">
                            <div className="text-sm text-muted-foreground font-mono bg-muted/50 px-2 py-1 rounded">
                              {expense.date}
                            </div>
                            <div>
                              <p className="font-medium">{expense.concept}</p>
                              <p className="text-sm text-muted-foreground">{expense.supplier}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="text-right">
                              <p className="font-medium text-lg text-red-600">{expense.amount}</p>
                              <p className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded">{expense.category}</p>
                            </div>
                            <Badge variant={getStatusColor(expense.status)}>
                              {getStatusLabel(expense.status)}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Pestaña de Reportes */}
              <TabsContent value="reportes" className="p-6 space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Evolución Mensual</CardTitle>
                      <CardDescription>Comparativa de ingresos vs gastos</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Enero</span>
                          <div className="flex gap-2">
                            <span className="text-green-600">€28,450</span>
                            <span className="text-red-600">€12,680</span>
                          </div>
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Diciembre</span>
                          <div className="flex gap-2">
                            <span className="text-green-600">€26,100</span>
                            <span className="text-red-600">€13,200</span>
                          </div>
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Noviembre</span>
                          <div className="flex gap-2">
                            <span className="text-green-600">€24,890</span>
                            <span className="text-red-600">€11,560</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Métricas Clave</CardTitle>
                      <CardDescription>Indicadores de rendimiento</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Margen de beneficio</span>
                          <span className="font-medium text-green-600">55.4%</span>
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Crecimiento mensual</span>
                          <span className="font-medium text-green-600">+9.0%</span>
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between">
                          <span className="text-sm">ROI</span>
                          <span className="font-medium text-green-600">124%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Reportes Disponibles</CardTitle>
                    <CardDescription>Genera reportes detallados para análisis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      <Button variant="outline" className="h-20 flex flex-col gap-2">
                        <BarChart3 className="w-6 h-6" />
                        Reporte Mensual
                      </Button>
                      <Button variant="outline" className="h-20 flex flex-col gap-2">
                        <TrendingUp className="w-6 h-6" />
                        Análisis de Tendencias
                      </Button>
                      <Button variant="outline" className="h-20 flex flex-col gap-2">
                        <DollarSign className="w-6 h-6" />
                        Estado de Resultados
                      </Button>
                      <Button variant="outline" className="h-20 flex flex-col gap-2">
                        <Target className="w-6 h-6" />
                        Cumplimiento Objetivos
                      </Button>
                      <Button variant="outline" className="h-20 flex flex-col gap-2">
                        <Calendar className="w-6 h-6" />
                        Flujo de Caja
                      </Button>
                      <Button variant="outline" className="h-20 flex flex-col gap-2">
                        <Filter className="w-6 h-6" />
                        Reporte Personalizado
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
}