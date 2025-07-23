
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin } from "lucide-react";

interface Appointment {
  id: string;
  clientName: string;
  service: string;
  time: string;
  status: "confirmed" | "pending" | "completed";
  artist: string;
  location?: string;
}

const appointments: Appointment[] = [
  {
    id: "1",
    clientName: "María García",
    service: "Tatuaje Brazo",
    time: "14:00",
    status: "confirmed",
    artist: "Alex Rivera",
    location: "Cabina 1"
  },
  {
    id: "2",
    clientName: "Carlos López",
    service: "Piercing",
    time: "15:30",
    status: "pending",
    artist: "Sam Torres",
    location: "Cabina 2"
  },
  {
    id: "3",
    clientName: "Ana Martín",
    service: "Microblading",
    time: "16:00",
    status: "completed",
    artist: "Luna Costa",
    location: "Cabina 3"
  },
  {
    id: "4",
    clientName: "Pedro Ruiz",
    service: "Tatuaje Espalda",
    time: "17:00",
    status: "confirmed",
    artist: "Alex Rivera",
    location: "Cabina 1"
  }
];

const statusColors = {
  confirmed: "bg-success text-success-foreground",
  pending: "bg-warning text-warning-foreground",
  completed: "bg-muted text-muted-foreground"
};

const statusLabels = {
  confirmed: "Confirmada",
  pending: "Pendiente",
  completed: "Completada"
};

export function RecentAppointments() {
  return (
    <Card className="rounded-3xl border-2 border-border bg-gradient-to-br from-card via-card to-card/95 shadow-medium backdrop-blur-sm h-[600px] flex flex-col">
      <CardHeader className="flex-shrink-0">
        <CardTitle className="flex items-center gap-3 text-xl font-bold font-display">
          <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border border-primary/20">
            <Clock className="h-5 w-5 text-primary" />
          </div>
          Citas de Hoy
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 overflow-hidden">
        <div className="space-y-4 h-full overflow-y-auto scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent pr-2">
          {appointments.map((appointment) => (
            <div
              key={appointment.id}
              className="flex items-center space-x-4 p-4 rounded-2xl border-2 border-border hover:border-foreground/20 bg-gradient-to-r from-card to-card/80 hover:from-accent/20 hover:to-accent/10 transition-all duration-300 group hover:shadow-medium"
            >
              <Avatar className="h-12 w-12 ring-2 ring-border shadow-soft">
                <AvatarFallback className="bg-gradient-to-br from-primary/20 to-primary/10 text-primary font-bold border border-primary/20">
                  {appointment.clientName.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-bold group-hover:text-foreground transition-colors">{appointment.clientName}</p>
                  <Badge 
                    className={`${statusColors[appointment.status]} rounded-2xl px-3 py-1 font-semibold shadow-soft border border-current/20`}
                    variant="secondary"
                  >
                    {statusLabels[appointment.status]}
                  </Badge>
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground font-medium">
                  <span className="bg-muted/50 px-2 py-1 rounded-xl border border-border/50">{appointment.service}</span>
                  <span className="bg-muted/50 px-2 py-1 rounded-xl border border-border/50">{appointment.time}</span>
                  <span className="bg-muted/50 px-2 py-1 rounded-xl border border-border/50">{appointment.artist}</span>
                  {appointment.location && (
                    <span className="flex items-center gap-1 bg-muted/50 px-2 py-1 rounded-xl border border-border/50">
                      <MapPin className="h-3 w-3" />
                      {appointment.location}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
