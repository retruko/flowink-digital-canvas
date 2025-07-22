import { Calendar, Users, Clock, Target, TrendingUp, Phone, UserCheck, AlertCircle, CheckCircle2, XCircle } from "lucide-react";
import { DashboardCard } from "@/components/DashboardCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const ManagerDashboard = () => {
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
          title="Leads Activos"
          value="8"
          description="5 sin contactar"
          icon={Phone}
          trend={{ value: 15, label: "esta semana", positive: true }}
        />
        <DashboardCard
          title="Check-ins Hoy"
          value="9"
          description="75% puntualidad"
          icon={UserCheck}
          trend={{ value: 5, label: "vs ayer", positive: true }}
        />
        <DashboardCard
          title="Ocupación"
          value="85%"
          description="Cabinas en uso"
          icon={Target}
          trend={{ value: 8, label: "vs semana pasada", positive: true }}
        />
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Agenda del Día */}
        <div className="lg:col-span-2">
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
                  { time: "09:00", client: "María García", artist: "Carlos", status: "confirmed", service: "Tatuaje pequeño" },
                  { time: "10:30", client: "Juan Pérez", artist: "Sofia", status: "pending", service: "Consulta" },
                  { time: "12:00", client: "Ana López", artist: "Miguel", status: "in_progress", service: "Tatuaje mediano" },
                  { time: "14:00", client: "Pedro Ruiz", artist: "Carlos", status: "confirmed", service: "Retoque" },
                  { time: "16:30", client: "Laura Martín", artist: "Sofia", status: "pending", service: "Tatuaje grande" },
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
                          appointment.status === "confirmed" ? "default" :
                          appointment.status === "in_progress" ? "secondary" :
                          "outline"
                        }
                        className="flex items-center gap-1"
                      >
                        {appointment.status === "confirmed" && <CheckCircle2 className="w-3 h-3" />}
                        {appointment.status === "in_progress" && <Clock className="w-3 h-3" />}
                        {appointment.status === "pending" && <AlertCircle className="w-3 h-3" />}
                        {appointment.status === "confirmed" ? "Confirmada" :
                         appointment.status === "in_progress" ? "En curso" :
                         "Pendiente"}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Leads y Acciones */}
        <div className="space-y-6">
          {/* Leads Pendientes */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary" />
                Leads Pendientes
              </CardTitle>
              <CardDescription>
                Requieren seguimiento
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { name: "Roberto Silva", time: "2h", type: "Consulta web", priority: "high" },
                  { name: "Carmen Vega", time: "4h", type: "WhatsApp", priority: "medium" },
                  { name: "Diego Torres", time: "1d", type: "Instagram", priority: "low" },
                  { name: "Isabel Ruiz", time: "2d", type: "Teléfono", priority: "medium" },
                ].map((lead, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium text-sm">{lead.name}</p>
                      <p className="text-xs text-muted-foreground">{lead.type} • hace {lead.time}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${
                        lead.priority === "high" ? "bg-red-500" :
                        lead.priority === "medium" ? "bg-yellow-500" :
                        "bg-green-500"
                      }`} />
                      <Button variant="ghost" size="sm">
                        Contactar
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Estado de Artistas */}
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

          {/* Métricas Rápidas */}
          <div className="grid gap-4">
            <DashboardCard
              title="Ingresos Hoy"
              value="€890"
              description="Meta: €1,200"
              icon={TrendingUp}
              trend={{ value: 12, label: "vs ayer", positive: true }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};