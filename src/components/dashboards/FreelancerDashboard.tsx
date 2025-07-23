import { Calendar, Clock, Users, TrendingUp, Star, Target, CheckCircle2, XCircle, MapPin, DollarSign } from "lucide-react";
import { DashboardCard } from "@/components/DashboardCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const FreelancerDashboard = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
          Panel Freelancer
        </h1>
        <p className="text-lg text-muted-foreground">
          Gestiona tu carrera independiente y proyectos
        </p>
      </div>

      {/* Stats Freelancer */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCard
          title="Proyectos Activos"
          value="7"
          description="3 estudios diferentes"
          icon={Target}
          trend={{ value: 40, label: "vs mes pasado", positive: true }}
        />
        <DashboardCard
          title="Ingresos Mes"
          value="€2,850"
          description="85% de meta personal"
          icon={DollarSign}
          trend={{ value: 18, label: "vs mes pasado", positive: true }}
        />
        <DashboardCard
          title="Clientes Únicos"
          value="23"
          description="8 nuevos este mes"
          icon={Users}
          trend={{ value: 25, label: "vs mes pasado", positive: true }}
        />
        <DashboardCard
          title="Satisfacción"
          value="95%"
          description="Clientes satisfechos"
          icon={Star}
          trend={{ value: 5, label: "este mes", positive: true }}
        />
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Próximos Trabajos */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    Próximos Trabajos
                  </CardTitle>
                  <CardDescription>
                    Proyectos confirmados y pendientes
                  </CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  Ver Agenda Completa
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { 
                    date: "Hoy 15:00", 
                    client: "Ana Martín", 
                    studio: "Ink Studio", 
                    status: "confirmed", 
                    service: "Tatuaje brazo",
                    fee: "€180",
                    location: "Madrid Centro"
                  },
                  { 
                    date: "Mañana 10:00", 
                    client: "Carlos Ruiz", 
                    studio: "Black Rose", 
                    status: "confirmed", 
                    service: "Diseño personalizado",
                    fee: "€120",
                    location: "Malasaña"
                  },
                  { 
                    date: "15 Mar 14:00", 
                    client: "Laura Vega", 
                    studio: "Art Tattoo", 
                    status: "pending", 
                    service: "Cover-up espalda",
                    fee: "€350",
                    location: "Chamberí"
                  },
                  { 
                    date: "18 Mar 16:30", 
                    client: "Miguel Torres", 
                    studio: "Ink Studio", 
                    status: "proposal", 
                    service: "Manga completa",
                    fee: "€800",
                    location: "Madrid Centro"
                  },
                ].map((job, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="text-sm font-mono text-muted-foreground min-w-[90px]">
                        {job.date}
                      </div>
                      <Avatar className="w-8 h-8">
                        <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${job.client}`} />
                        <AvatarFallback>{job.client.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{job.client}</p>
                        <p className="text-sm text-muted-foreground">{job.service}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <MapPin className="w-3 h-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">{job.studio} • {job.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-semibold text-green-600">
                        {job.fee}
                      </span>
                      <Badge
                        variant={
                          job.status === "confirmed" ? "default" :
                          job.status === "pending" ? "secondary" :
                          "outline"
                        }
                        className="flex items-center gap-1"
                      >
                        {job.status === "confirmed" && <CheckCircle2 className="w-3 h-3" />}
                        {job.status === "pending" && <Clock className="w-3 h-3" />}
                        {job.status === "proposal" && <Target className="w-3 h-3" />}
                        {job.status === "confirmed" ? "Confirmado" :
                         job.status === "pending" ? "Pendiente" :
                         "Propuesta"}
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
          {/* Estudios Colaboradores */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Estudios Colaboradores
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { name: "Ink Studio", sessions: 15, rating: 4.9, status: "preferred" },
                  { name: "Black Rose", sessions: 8, rating: 4.7, status: "active" },
                  { name: "Art Tattoo", sessions: 4, rating: 4.8, status: "new" },
                  { name: "Dark Ink", sessions: 12, rating: 4.6, status: "active" },
                ].map((studio, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium text-sm">{studio.name}</p>
                      <p className="text-xs text-muted-foreground">{studio.sessions} sesiones</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-right">
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-yellow-500" />
                          <span className="text-xs">{studio.rating}</span>
                        </div>
                        <Badge 
                          variant={studio.status === "preferred" ? "default" : "outline"}
                          className="text-xs"
                        >
                          {studio.status === "preferred" ? "Preferido" :
                           studio.status === "new" ? "Nuevo" : "Activo"}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Estadísticas del Mes */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Estadísticas del Mes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Proyectos completados</span>
                  <span className="font-semibold">18</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Horas trabajadas</span>
                  <span className="font-semibold">85h</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Tarifa promedio/hora</span>
                  <span className="font-semibold">€33.5</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Eficiencia</span>
                  <span className="font-semibold">94%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Clientes satisfechos</span>
                  <span className="font-semibold">100%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Próximas Oportunidades */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Oportunidades
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <p className="font-medium text-sm">Proyecto Especial</p>
                  <p className="text-xs text-muted-foreground">Convención de tatuajes - €500</p>
                  <Button size="sm" className="w-full mt-2">
                    Ver Detalles
                  </Button>
                </div>
                <div className="p-3 bg-green-500/10 rounded-lg">
                  <p className="font-medium text-sm">Cliente VIP</p>
                  <p className="text-xs text-muted-foreground">Sesión premium - €400</p>
                  <Button size="sm" variant="outline" className="w-full mt-2">
                    Considerar
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Métricas Rápidas */}
          <div className="grid gap-4">
            <DashboardCard
              title="Próximo Pago"
              value="€680"
              description="En 3 días"
              icon={DollarSign}
            />
          </div>
        </div>
      </div>
    </div>
  );
};