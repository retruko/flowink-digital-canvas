import { Calendar, Users, DollarSign, TrendingUp, BarChart3, PieChart, Target, Star, Building, Shield } from "lucide-react";
import { DashboardCard } from "@/components/DashboardCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const OwnerDashboard = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
          Panel del Dueño
        </h1>
        <p className="text-lg text-muted-foreground">
          Visión ejecutiva y análisis del negocio
        </p>
      </div>

      {/* KPIs Ejecutivos */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCard
          title="Ingresos Mensuales"
          value="€28,450"
          description="Meta: €30,000"
          icon={DollarSign}
          trend={{ value: 15, label: "vs mes pasado", positive: true }}
        />
        <DashboardCard
          title="Margen de Beneficio"
          value="42%"
          description="Después de gastos"
          icon={TrendingUp}
          trend={{ value: 3, label: "vs mes pasado", positive: true }}
        />
        <DashboardCard
          title="Clientes Activos"
          value="847"
          description="87 nuevos este mes"
          icon={Users}
          trend={{ value: 12, label: "vs mes pasado", positive: true }}
        />
        <DashboardCard
          title="ROI Campañas"
          value="340%"
          description="Marketing digital"
          icon={Target}
          trend={{ value: 25, label: "este trimestre", positive: true }}
        />
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Analytics del Negocio */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-primary" />
                    Análisis del Negocio
                  </CardTitle>
                  <CardDescription>
                    Métricas clave de rendimiento
                  </CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  Ver Reportes
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Ingresos por Artista */}
                <div>
                  <h4 className="font-semibold mb-3">Ingresos por Artista (Este Mes)</h4>
                  <div className="space-y-3">
                    {[
                      { name: "Carlos Ruiz", revenue: "€8,200", sessions: 42, growth: 18 },
                      { name: "Sofia López", revenue: "€7,800", sessions: 38, growth: 22 },
                      { name: "Miguel Torres", revenue: "€6,950", sessions: 35, growth: 8 },
                      { name: "Laura Vega", revenue: "€5,500", sessions: 28, growth: 15 },
                    ].map((artist, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          <div>
                            <p className="font-medium">{artist.name}</p>
                            <p className="text-sm text-muted-foreground">{artist.sessions} sesiones</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">{artist.revenue}</p>
                          <p className="text-sm text-green-600">+{artist.growth}%</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Métricas de Satisfacción */}
                <div>
                  <h4 className="font-semibold mb-3">Satisfacción del Cliente</h4>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">4.9</div>
                      <div className="text-sm text-muted-foreground">Rating Promedio</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">94%</div>
                      <div className="text-sm text-muted-foreground">Recomendaciones</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">78%</div>
                      <div className="text-sm text-muted-foreground">Clientes Repetidos</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Panel Ejecutivo */}
        <div className="space-y-6">
          {/* Resumen Financiero */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="w-5 h-5 text-primary" />
                Resumen Financiero
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Ingresos Brutos</span>
                  <span className="font-semibold">€28,450</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Gastos Operativos</span>
                  <span className="font-semibold text-red-600">-€9,200</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Comisiones Artistas</span>
                  <span className="font-semibold text-red-600">-€7,350</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Beneficio Neto</span>
                    <span className="font-bold text-green-600">€11,900</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Margen</span>
                  <span className="font-semibold">42%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Alertas de Negocio */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Alertas Importantes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2" />
                  <div>
                    <p className="text-sm font-medium">Stock Bajo</p>
                    <p className="text-xs text-muted-foreground">3 productos necesitan reposición</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />
                  <div>
                    <p className="text-sm font-medium">Meta Alcanzada</p>
                    <p className="text-xs text-muted-foreground">Ingresos superan expectativas en 15%</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
                  <div>
                    <p className="text-sm font-medium">Oportunidad</p>
                    <p className="text-xs text-muted-foreground">15 leads calientes pendientes</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Métricas Rápidas */}
          <div className="grid gap-4">
            <DashboardCard
              title="Ocupación Media"
              value="89%"
              description="Últimos 30 días"
              icon={Building}
              trend={{ value: 7, label: "vs mes anterior", positive: true }}
            />
            <DashboardCard
              title="Tiempo Medio Sesión"
              value="2.8h"
              description="Optimización del tiempo"
              icon={Star}
              trend={{ value: -5, label: "más eficiente", positive: true }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};