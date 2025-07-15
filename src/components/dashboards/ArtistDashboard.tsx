import { Calendar, Clock, Users, TrendingUp, Star, Target, CheckCircle2, XCircle } from "lucide-react";
import { DashboardCard } from "@/components/DashboardCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const ArtistDashboard = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
          Mi Dashboard
        </h1>
        <p className="text-lg text-muted-foreground">
          Tus citas, clientes y estadísticas personales
        </p>
      </div>

      {/* Stats Personales */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCard
          title="Mis Citas Hoy"
          value="5"
          description="4 confirmadas"
          icon={Calendar}
          trend={{ value: 25, label: "vs ayer", positive: true }}
        />
        <DashboardCard
          title="Clientes Este Mes"
          value="28"
          description="12 nuevos"
          icon={Users}
          trend={{ value: 15, label: "vs mes pasado", positive: true }}
        />
        <DashboardCard
          title="Ingresos Mes"
          value="€3,450"
          description="85% de meta"
          icon={TrendingUp}
          trend={{ value: 12, label: "vs mes pasado", positive: true }}
        />
        <DashboardCard
          title="Rating Promedio"
          value="4.9"
          description="De 47 reseñas"
          icon={Star}
          trend={{ value: 3, label: "este mes", positive: true }}
        />
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Mis Citas de Hoy */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    Mis Citas de Hoy
                  </CardTitle>
                  <CardDescription>
                    Agenda personal del día
                  </CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  Ver Semana
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { time: "09:00", client: "María García", status: "completed", service: "Tatuaje pequeño", duration: "1h 30m" },
                  { time: "11:00", client: "Juan Pérez", status: "in_progress", service: "Consulta + diseño", duration: "2h" },
                  { time: "14:00", client: "Ana López", status: "confirmed", service: "Tatuaje mediano", duration: "3h" },
                  { time: "17:30", client: "Pedro Ruiz", status: "confirmed", service: "Retoque", duration: "1h" },
                ].map((appointment, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="text-sm font-mono text-muted-foreground">
                        {appointment.time}
                      </div>
                      <Avatar className="w-8 h-8">
                        <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${appointment.client}`} />
                        <AvatarFallback>{appointment.client.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{appointment.client}</p>
                        <p className="text-sm text-muted-foreground">{appointment.service}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-muted-foreground">
                        {appointment.duration}
                      </span>
                      <Badge
                        variant={
                          appointment.status === "completed" ? "default" :
                          appointment.status === "in_progress" ? "secondary" :
                          "outline"
                        }
                        className="flex items-center gap-1"
                      >
                        {appointment.status === "completed" && <CheckCircle2 className="w-3 h-3" />}
                        {appointment.status === "in_progress" && <Clock className="w-3 h-3" />}
                        {appointment.status === "confirmed" && <Calendar className="w-3 h-3" />}
                        {appointment.status === "completed" ? "Completada" :
                         appointment.status === "in_progress" ? "En curso" :
                         "Confirmada"}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Panel Lateral */}
        <div className="space-y-6">
          {/* Próximos Clientes */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Próximo Cliente
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-4">
                <Avatar className="w-16 h-16 mx-auto">
                  <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ana López" />
                  <AvatarFallback>AL</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">Ana López</p>
                  <p className="text-sm text-muted-foreground">Tatuaje mediano</p>
                  <p className="text-lg font-bold text-primary">14:00</p>
                </div>
                <div className="space-y-2">
                  <Button className="w-full" size="sm">
                    Ver Historial
                  </Button>
                  <Button variant="outline" className="w-full" size="sm">
                    Contactar
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Estadísticas Rápidas */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Estadísticas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Citas completadas</span>
                  <span className="font-semibold">128 este mes</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Tiempo promedio</span>
                  <span className="font-semibold">2h 15m</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Clientes satisfechos</span>
                  <span className="font-semibold">98%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Rebooking rate</span>
                  <span className="font-semibold">76%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Logros */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-primary" />
                Logros del Mes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-2 bg-primary/10 rounded-lg">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Top Artista</p>
                    <p className="text-xs text-muted-foreground">Mayor puntuación</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-2 bg-green-500/10 rounded-lg">
                  <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                    <Target className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Meta Alcanzada</p>
                    <p className="text-xs text-muted-foreground">110% del objetivo</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};