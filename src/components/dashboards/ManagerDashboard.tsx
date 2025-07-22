import { Calendar, Users, Clock, Target, TrendingUp, Phone, Package, AlertCircle, CheckCircle2, XCircle, DollarSign, CreditCard, Banknote, Plus } from "lucide-react";
import { DashboardCard } from "@/components/DashboardCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import * as React from "react";

export const ManagerDashboard = () => {
  const [period, setPeriod] = React.useState("today");

  const getPeriodLabel = () => {
    switch (period) {
      case "today": return "Hoy";
      case "7days": return "Últimos 7 días";
      case "30days": return "Últimos 30 días";
      case "3months": return "Últimos 3 meses";
      default: return "Hoy";
    }
  };

  const getRevenueData = () => {
    switch (period) {
      case "today": return { value: "€890", description: "Meta: €1,200", trend: 12 };
      case "7days": return { value: "€6,540", description: "Meta: €8,400", trend: 8 };
      case "30days": return { value: "€28,450", description: "Meta: €36,000", trend: -3 };
      case "3months": return { value: "€94,230", description: "Meta: €108,000", trend: 15 };
      default: return { value: "€890", description: "Meta: €1,200", trend: 12 };
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
          Panel
        </h1>
        <p className="text-lg text-muted-foreground">
          Gestión diaria y seguimiento de leads
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCard
          title="Citas Hoy"
          value="12"
          description="3 pendientes confirmación"
          icon={Calendar}
          trend={{ value: 20, label: "vs ayer", positive: true }}
        />
        <DashboardCard
          title="Clientes Potenciales"
          value="8"
          description="5 sin contactar"
          icon={Phone}
          trend={{ value: 15, label: "esta semana", positive: true }}
        />
        <DashboardCard
          title="Stock Bajo"
          value="3"
          description="Productos agotándose"
          icon={Package}
          trend={{ value: 2, label: "esta semana", positive: false }}
        />
        <DashboardCard
          title="Ocupación"
          value="85%"
          description="Cabinas en uso"
          icon={Target}
          trend={{ value: 8, label: "vs semana pasada", positive: true }}
        />
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Agenda del Día */}
        <div>
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    Agenda de Hoy
                  </CardTitle>
                  <CardDescription>
                    Próximas citas y estado actual
                  </CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  Ver Calendario
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { time: "09:00", client: "María García", artist: "Carlos", status: "finalizada", service: "Tatuaje pequeño" },
                  { time: "10:30", client: "Juan Pérez", artist: "Sofia", status: "pendiente", service: "Consulta" },
                  { time: "12:00", client: "Ana López", artist: "Miguel", status: "en_curso", service: "Tatuaje mediano" },
                  { time: "14:00", client: "Pedro Ruiz", artist: "Carlos", status: "pendiente", service: "Retoque" },
                  { time: "16:30", client: "Laura Martín", artist: "Sofia", status: "pendiente", service: "Tatuaje grande" },
                ].map((appointment, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="text-sm font-mono text-muted-foreground">
                        {appointment.time}
                      </div>
                      <div>
                        <p className="font-medium">{appointment.client}</p>
                        <p className="text-sm text-muted-foreground">{appointment.service}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-muted-foreground">
                        {appointment.artist}
                      </span>
                      <Badge
                        variant={
                          appointment.status === "finalizada" ? "default" :
                          appointment.status === "en_curso" ? "secondary" :
                          "outline"
                        }
                        className="flex items-center gap-1"
                      >
                        {appointment.status === "finalizada" && <CheckCircle2 className="w-3 h-3" />}
                        {appointment.status === "en_curso" && <Clock className="w-3 h-3" />}
                        {appointment.status === "pendiente" && <AlertCircle className="w-3 h-3" />}
                        {appointment.status === "finalizada" ? "Finalizada" :
                         appointment.status === "en_curso" ? "En curso" :
                         "Pendiente"}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Estado de Artistas */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Estado Artistas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { name: "Carlos", status: "working", client: "Ana López", until: "15:30" },
                  { name: "Sofia", status: "break", until: "14:00" },
                  { name: "Miguel", status: "free", until: null },
                  { name: "Laura", status: "working", client: "Pedro Ruiz", until: "17:00" },
                ].map((artist, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${
                        artist.status === "working" ? "bg-red-500" :
                        artist.status === "break" ? "bg-yellow-500" :
                        "bg-green-500"
                      }`} />
                      <div>
                        <p className="font-medium text-sm">{artist.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {artist.status === "working" ? `Con ${artist.client}` :
                           artist.status === "break" ? "En descanso" :
                           "Disponible"}
                        </p>
                      </div>
                    </div>
                    {artist.until && (
                      <span className="text-xs text-muted-foreground">
                        hasta {artist.until}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Potenciales Clientes */}
      <div>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary" />
                  Potenciales Clientes
                </CardTitle>
                <CardDescription>
                  Clientes que requieren seguimiento y contacto
                </CardDescription>
              </div>
              <Button variant="outline" size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Añadir Cliente
              </Button>
            </div>
            
            {/* Leyenda de colores */}
            <div className="flex items-center gap-6 mt-4 p-3 bg-muted/50 rounded-lg">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <span className="text-sm text-muted-foreground">Pendiente de contestación</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="text-sm text-muted-foreground">Contestado</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-sm text-muted-foreground">Fidelizado</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                { name: "Roberto Silva", time: "2h", type: "Consulta web", priority: "high", interest: "Tatuaje brazo completo" },
                { name: "Carmen Vega", time: "4h", type: "WhatsApp", priority: "medium", interest: "Tatuaje pequeño muñeca" },
                { name: "Diego Torres", time: "1d", type: "Instagram", priority: "low", interest: "Consulta diseño" },
                { name: "Isabel Ruiz", time: "2d", type: "Teléfono", priority: "medium", interest: "Retoque tatuaje" },
                { name: "Miguel Santos", time: "3h", type: "Email", priority: "high", interest: "Tatuaje espalda" },
                { name: "Ana Fernández", time: "1d", type: "WhatsApp", priority: "medium", interest: "Piercing" },
                { name: "Carlos López", time: "5h", type: "Instagram", priority: "low", interest: "Consulta precios" },
                { name: "Laura García", time: "2d", type: "Teléfono", priority: "high", interest: "Tatuaje realista" },
              ].map((lead, index) => (
                <div key={index} className="p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-medium">{lead.name}</p>
                      <p className="text-sm text-muted-foreground">{lead.type} • hace {lead.time}</p>
                    </div>
                    <div className={`w-2 h-2 rounded-full ${
                      lead.priority === "high" ? "bg-red-500" :
                      lead.priority === "medium" ? "bg-yellow-500" :
                      "bg-green-500"
                    }`} />
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{lead.interest}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    Contactar
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Revenue Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Ingresos</h2>
            <p className="text-sm text-muted-foreground">Resumen de ventas y facturación</p>
          </div>
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
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <DashboardCard
            title={`Ingresos ${getPeriodLabel()}`}
            value={getRevenueData().value}
            description={getRevenueData().description}
            icon={DollarSign}
            trend={{ value: getRevenueData().trend, label: "vs período anterior", positive: getRevenueData().trend > 0 }}
          />
          <DashboardCard
            title="Servicios Vendidos"
            value="24"
            description="15 tatuajes, 9 consultas"
            icon={Target}
            trend={{ value: 18, label: "vs período anterior", positive: true }}
          />
          <DashboardCard
            title="Depósitos Cobrados"
            value="€340"
            description="8 reservas confirmadas"
            icon={CreditCard}
            trend={{ value: 22, label: "vs período anterior", positive: true }}
          />
        </div>
      </div>
    </div>
  );
};