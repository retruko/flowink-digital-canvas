import { useState } from "react";
import { DollarSign, TrendingDown, BarChart3, Filter, Download, Plus, CreditCard, Target, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { DashboardCard } from "@/components/DashboardCard";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";

export default function Finanzas() {
  const [period, setPeriod] = useState("30days");

  const getStatusColor = (status: string) => {
    if (status === "completed" || status === "paid") return "default";
    if (status === "pending") return "outline";
    return "destructive";
  };

  const getStatusLabel = (status: string) => {
    if (status === "completed") return "Completado";
    if (status === "paid") return "Pagado";
    if (status === "pending") return "Pendiente";
    return "Cancelado";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6 lg:ml-18">
          <div className="space-y-6">
            {/* Header */}
            <div>
              <h1 className="text-3xl font-bold">Finanzas</h1>
              <p className="text-muted-foreground">Gestión completa de ingresos, gastos y reportes</p>
            </div>

            {/* Filtros */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">Período de análisis</h3>
                    <p className="text-sm text-muted-foreground">Selecciona el rango de fechas</p>
                  </div>
                  <div className="flex gap-3">
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
              </CardContent>
            </Card>

            {/* Métricas */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <DashboardCard
                title="Ingresos Totales"
                value="€28,450"
                description="Servicios y depósitos"
                icon={DollarSign}
                trend={{ value: 9, label: "vs período anterior", positive: true }}
              />
              <DashboardCard
                title="Gastos Totales"
                value="€12,680"
                description="Materiales y servicios"
                icon={TrendingDown}
                trend={{ value: -5, label: "vs período anterior", positive: false }}
              />
              <DashboardCard
                title="Beneficio Neto"
                value="€15,770"
                description="Ingresos - Gastos"
                icon={TrendingUp}
                trend={{ value: 15, label: "vs período anterior", positive: true }}
              />
              <DashboardCard
                title="Transacciones"
                value="342"
                description="Total de movimientos"
                icon={BarChart3}
                trend={{ value: 8, label: "vs período anterior", positive: true }}
              />
            </div>

            {/* Tabs */}
            <Tabs defaultValue="ingresos" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="ingresos">Ingresos</TabsTrigger>
                <TabsTrigger value="gastos">Gastos</TabsTrigger>
                <TabsTrigger value="reportes">Reportes</TabsTrigger>
              </TabsList>

              {/* Ingresos Tab */}
              <TabsContent value="ingresos" className="space-y-6">
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
                      {[
                        { id: "1", date: "2024-01-15", client: "María García", service: "Tatuaje brazo", amount: "€380", method: "Tarjeta", status: "completed" },
                        { id: "2", date: "2024-01-15", client: "Juan Pérez", service: "Consulta", amount: "€50", method: "Efectivo", status: "completed" },
                        { id: "3", date: "2024-01-15", client: "Ana López", service: "Depósito", amount: "€120", method: "Transferencia", status: "completed" },
                        { id: "4", date: "2024-01-14", client: "Pedro Ruiz", service: "Retoque", amount: "€80", method: "Tarjeta", status: "completed" },
                        { id: "5", date: "2024-01-14", client: "Roberto Silva", service: "Depósito", amount: "€200", method: "Tarjeta", status: "pending" },
                      ].map((transaction) => (
                        <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg">
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

              {/* Gastos Tab */}
              <TabsContent value="gastos" className="space-y-6">
                <div className="flex justify-end">
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Registrar Gasto
                  </Button>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <CardTitle>Por Categoría</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>Material</span>
                          <span className="font-medium">€6,890 (54%)</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Fijos</span>
                          <span className="font-medium">€3,600 (28%)</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Servicios</span>
                          <span className="font-medium">€2,190 (18%)</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Este Mes</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>Presupuesto</span>
                          <span className="font-medium">€15,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Gastado</span>
                          <span className="font-medium">€12,680</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Restante</span>
                          <span className="font-medium text-green-600">€2,320</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Pendientes</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>Facturas</span>
                          <span className="font-medium">€420</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Vencidas</span>
                          <span className="font-medium text-red-600">€180</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Registro de Gastos</CardTitle>
                    <CardDescription>Historial de gastos y facturas</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { id: "1", date: "2024-01-15", concept: "Tintas premium", category: "Material", amount: "€145", supplier: "TattooSupply Pro", status: "paid" },
                        { id: "2", date: "2024-01-14", concept: "Agujas desechables", category: "Material", amount: "€89", supplier: "Ink Masters", status: "paid" },
                        { id: "3", date: "2024-01-14", concept: "Alquiler local", category: "Fijo", amount: "€1,200", supplier: "Inmobiliaria García", status: "paid" },
                        { id: "4", date: "2024-01-13", concept: "Electricidad", category: "Servicios", amount: "€180", supplier: "Iberdrola", status: "pending" },
                      ].map((expense) => (
                        <div key={expense.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center gap-4">
                            <div className="text-sm text-muted-foreground font-mono">
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
                              <p className="text-sm text-muted-foreground">{expense.category}</p>
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

              {/* Reportes Tab */}
              <TabsContent value="reportes" className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Evolución Mensual</CardTitle>
                      <CardDescription>Comparativa de ingresos vs gastos</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span>Enero</span>
                          <div className="flex gap-2">
                            <span className="text-green-600">€28,450</span>
                            <span className="text-red-600">€12,680</span>
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <span>Diciembre</span>
                          <div className="flex gap-2">
                            <span className="text-green-600">€26,100</span>
                            <span className="text-red-600">€13,200</span>
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <span>Noviembre</span>
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
                        <div className="flex justify-between">
                          <span>Margen de beneficio</span>
                          <span className="font-medium text-green-600">55.4%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Crecimiento mensual</span>
                          <span className="font-medium text-green-600">+9.0%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>ROI</span>
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