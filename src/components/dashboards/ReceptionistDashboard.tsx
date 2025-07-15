import { Calendar, CreditCard, Phone, Users, CheckCircle2, Clock, AlertCircle, DollarSign } from "lucide-react";
import { DashboardCard } from "@/components/DashboardCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const ReceptionistDashboard = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
          Recepción
        </h1>
        <p className="text-lg text-muted-foreground">
          Check-ins, pagos y atención al cliente
        </p>
      </div>

      {/* Stats de Recepción */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCard
          title="Check-ins Hoy"
          value="11"
          description="2 tardaron >15min"
          icon={CheckCircle2}
          trend={{ value: 10, label: "vs ayer", positive: true }}
        />
        <DashboardCard
          title="Pagos Pendientes"
          value="€450"
          description="3 facturas vencidas"
          icon={CreditCard}
          trend={{ value: -5, label: "vs ayer", positive: false }}
        />
        <DashboardCard
          title="Llamadas Hoy"
          value="23"
          description="18 consultas, 5 citas"
          icon={Phone}
          trend={{ value: 15, label: "vs ayer", positive: true }}
        />
        <DashboardCard
          title="Clientes Nuevos"
          value="4"
          description="Esta semana"
          icon={Users}
          trend={{ value: 20, label: "vs semana pasada", positive: true }}
        />
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Check-ins y Llegadas */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    Llegadas y Check-ins
                  </CardTitle>
                  <CardDescription>
                    Estado de citas del día
                  </CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  Check-in Manual
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { time: "09:00", client: "María García", artist: "Carlos", status: "checked_in", arrival: "08:55", payment: "pending" },
                  { time: "10:30", client: "Juan Pérez", artist: "Sofia", status: "waiting", arrival: "10:45", payment: "partial" },
                  { time: "12:00", client: "Ana López", artist: "Miguel", status: "in_session", arrival: "11:50", payment: "paid" },
                  { time: "14:00", client: "Pedro Ruiz", artist: "Carlos", status: "scheduled", arrival: null, payment: "pending" },
                  { time: "16:30", client: "Laura Martín", artist: "Sofia", status: "confirmed", arrival: null, payment: "deposit" },
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
                        <p className="text-sm text-muted-foreground">
                          {appointment.artist} • {appointment.arrival ? `Llegó: ${appointment.arrival}` : 'Sin llegar'}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge
                        variant={
                          appointment.payment === "paid" ? "default" :
                          appointment.payment === "partial" || appointment.payment === "deposit" ? "secondary" :
                          "outline"
                        }
                        className="text-xs"
                      >
                        {appointment.payment === "paid" ? "Pagado" :
                         appointment.payment === "partial" ? "Parcial" :
                         appointment.payment === "deposit" ? "Señado" :
                         "Pendiente"}
                      </Badge>
                      <Badge
                        variant={
                          appointment.status === "checked_in" || appointment.status === "in_session" ? "default" :
                          appointment.status === "waiting" ? "secondary" :
                          "outline"
                        }
                        className="flex items-center gap-1"
                      >
                        {appointment.status === "checked_in" && <CheckCircle2 className="w-3 h-3" />}
                        {appointment.status === "in_session" && <Clock className="w-3 h-3" />}
                        {appointment.status === "waiting" && <AlertCircle className="w-3 h-3" />}
                        {appointment.status === "checked_in" ? "Check-in" :
                         appointment.status === "in_session" ? "En sesión" :
                         appointment.status === "waiting" ? "Esperando" :
                         appointment.status === "scheduled" ? "Programada" :
                         "Confirmada"}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Panel de Acciones */}
        <div className="space-y-6">
          {/* Acciones Rápidas */}
          <Card>
            <CardHeader>
              <CardTitle>Acciones Rápidas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <Phone className="w-4 h-4 mr-2" />
                  Nueva Consulta
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Calendar className="w-4 h-4 mr-2" />
                  Agendar Cita
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <CreditCard className="w-4 h-4 mr-2" />
                  Procesar Pago
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Users className="w-4 h-4 mr-2" />
                  Nuevo Cliente
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Pagos Pendientes */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-primary" />
                Pagos Pendientes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { client: "Juan Pérez", amount: "€150", due: "Hoy", overdue: false },
                  { client: "Carmen Vega", amount: "€200", due: "Ayer", overdue: true },
                  { client: "Roberto Silva", amount: "€100", due: "2 días", overdue: true },
                ].map((payment, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium text-sm">{payment.client}</p>
                      <p className={`text-xs ${payment.overdue ? 'text-red-500' : 'text-muted-foreground'}`}>
                        Vence: {payment.due}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{payment.amount}</p>
                      <Button variant="ghost" size="sm" className="h-6 text-xs">
                        Cobrar
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Consultas del Día */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary" />
                Consultas Hoy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-center">
                  <p className="text-2xl font-bold">23</p>
                  <p className="text-sm text-muted-foreground">llamadas recibidas</p>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="text-center p-2 bg-accent/50 rounded">
                    <p className="font-semibold">18</p>
                    <p className="text-muted-foreground">Consultas</p>
                  </div>
                  <div className="text-center p-2 bg-accent/50 rounded">
                    <p className="font-semibold">5</p>
                    <p className="text-muted-foreground">Citas</p>
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