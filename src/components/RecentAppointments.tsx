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
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5" />
          Citas de Hoy
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {appointments.map((appointment) => (
            <div
              key={appointment.id}
              className="flex items-center space-x-4 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors"
            >
              <Avatar className="h-10 w-10">
                <AvatarFallback className="bg-primary/10 text-primary">
                  {appointment.clientName.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">{appointment.clientName}</p>
                  <Badge 
                    className={statusColors[appointment.status]}
                    variant="secondary"
                  >
                    {statusLabels[appointment.status]}
                  </Badge>
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span>{appointment.service}</span>
                  <span>•</span>
                  <span>{appointment.time}</span>
                  <span>•</span>
                  <span>{appointment.artist}</span>
                  {appointment.location && (
                    <>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {appointment.location}
                      </span>
                    </>
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