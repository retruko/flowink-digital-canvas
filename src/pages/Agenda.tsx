import { useState } from "react";
import { Calendar, Clock, User, MapPin, Plus, Filter, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";

export default function Agenda() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedView, setSelectedView] = useState("cabinas");

  const appointments = [
    {
      id: 1,
      time: "09:00",
      duration: 120,
      client: "María García",
      artist: "Carlos",
      service: "Tatuaje brazo completo",
      status: "confirmed",
      phone: "+34 666 123 456",
      notes: "Primera sesión, diseño floral"
    },
    {
      id: 2,
      time: "11:30",
      duration: 60,
      client: "Juan Pérez",
      artist: "Sofia",
      service: "Consulta + Diseño",
      status: "pending",
      phone: "+34 677 234 567",
      notes: "Quiere un tatuaje en la muñeca"
    },
    {
      id: 3,
      time: "14:00",
      duration: 180,
      client: "Ana López",
      artist: "Miguel",
      service: "Tatuaje espalda",
      status: "in_progress",
      phone: "+34 688 345 678",
      notes: "Segunda sesión, mandalas"
    },
    {
      id: 4,
      time: "16:30",
      duration: 90,
      client: "Pedro Ruiz",
      artist: "Carlos",
      service: "Retoque",
      status: "confirmed",
      phone: "+34 699 456 789",
      notes: "Retoque de tatuaje antiguo"
    },
    {
      id: 5,
      time: "18:00",
      duration: 60,
      client: "Laura Martín",
      artist: "Sofia",
      service: "Piercing",
      status: "pending",
      phone: "+34 611 567 890",
      notes: "Piercing en la oreja"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed": return "default";
      case "in_progress": return "secondary";
      case "pending": return "outline";
      default: return "destructive";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "confirmed": return "Confirmada";
      case "in_progress": return "En curso";
      case "pending": return "Pendiente";
      default: return "Cancelada";
    }
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('es-ES', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const calculateEndTime = (startTime: string, duration: number) => {
    const [hours, minutes] = startTime.split(':').map(Number);
    const endMinutes = hours * 60 + minutes + duration;
    const endHours = Math.floor(endMinutes / 60);
    const endMins = endMinutes % 60;
    return `${endHours.toString().padStart(2, '0')}:${endMins.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6 lg:ml-18">
          <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold">Agenda</h1>
                <p className="text-muted-foreground">Gestión de citas y calendario</p>
              </div>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Nueva Cita
              </Button>
            </div>

            {/* Controles de navegación */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <ChevronLeft className="w-4 h-4" />
                      </Button>
                      <div className="text-center min-w-[200px]">
                        <h3 className="font-semibold capitalize">{formatDate(selectedDate)}</h3>
                      </div>
                      <Button variant="outline" size="sm">
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </div>
                    <Button variant="outline" size="sm">
                      Hoy
                    </Button>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <Search className="w-4 h-4 text-muted-foreground" />
                      <Input 
                        placeholder="Buscar citas..." 
                        className="w-64"
                      />
                    </div>
                    <Select value={selectedView} onValueChange={setSelectedView}>
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cabinas">Vista Cabinas</SelectItem>
                        <SelectItem value="day">Día</SelectItem>
                        <SelectItem value="week">Semana</SelectItem>
                        <SelectItem value="month">Mes</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline" size="sm">
                      <Filter className="w-4 h-4 mr-2" />
                      Filtros
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Resumen del día */}
            <div className="grid gap-6 md:grid-cols-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Calendar className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Total Citas</p>
                      <p className="text-2xl font-bold">{appointments.length}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Clock className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Confirmadas</p>
                      <p className="text-2xl font-bold">
                        {appointments.filter(apt => apt.status === 'confirmed').length}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-yellow-100 rounded-lg">
                      <User className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Pendientes</p>
                      <p className="text-2xl font-bold">
                        {appointments.filter(apt => apt.status === 'pending').length}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <MapPin className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">En Curso</p>
                      <p className="text-2xl font-bold">
                        {appointments.filter(apt => apt.status === 'in_progress').length}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Vista de Cabinas o Lista de citas */}
            {selectedView === "cabinas" ? (
              <Card>
                <CardHeader>
                  <CardTitle>Vista por Cabinas</CardTitle>
                  <CardDescription>
                    Organización de citas por espacios de trabajo - {formatDate(selectedDate)}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <div className="grid grid-cols-5 gap-4 min-w-[800px]">
                      {/* Header con horarios */}
                      <div className="text-center font-medium text-sm text-muted-foreground py-2"></div>
                      <div className="text-center font-bold text-sm py-2 bg-accent/20 rounded-lg">CABINA 1</div>
                      <div className="text-center font-bold text-sm py-2 bg-accent/20 rounded-lg">CABINA 2</div>
                      <div className="text-center font-bold text-sm py-2 bg-accent/20 rounded-lg">CABINA 3</div>
                      <div className="text-center font-bold text-sm py-2 bg-accent/20 rounded-lg">CABINA 4</div>
                      
                      {/* Horarios */}
                      {["11:00", "12:00", "13:00", "14:00", "15:00"].map((hour) => (
                        <>
                          <div key={hour} className="text-sm font-medium text-muted-foreground py-4 text-center">
                            {hour}
                          </div>
                          
                          {/* Cabina 1 */}
                          <div className="p-2 min-h-[100px] border border-border rounded-lg bg-card">
                            {hour === "11:00" && (
                              <div className="bg-blue-500/20 border border-blue-500/30 text-blue-300 p-3 rounded-lg text-xs h-full">
                                <div className="font-bold text-blue-200">TATUAJE</div>
                                <div className="text-xs opacity-75 mt-1">11:00 - 14:00</div>
                                <div className="text-xs font-medium mt-1">Rubén Álvarez</div>
                                <div className="text-xs mt-1">Brazo completo realismo blanco y negro de su perro.</div>
                                <Badge className="bg-blue-500 text-white text-xs mt-2">Rastea</Badge>
                              </div>
                            )}
                            {hour === "15:00" && (
                              <div className="bg-blue-500/10 border border-blue-500/20 text-blue-400 p-2 rounded-lg text-xs">
                                <div className="text-center font-medium">📩 Recordatorio enviado</div>
                              </div>
                            )}
                          </div>
                          
                          {/* Cabina 2 */}
                          <div className="p-2 min-h-[100px] border border-border rounded-lg bg-card">
                            {hour === "12:00" && (
                              <div className="bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 p-3 rounded-lg text-xs h-full">
                                <div className="text-center text-cyan-200 font-bold mb-2">¡Hay citas solapadas!</div>
                                <div className="font-bold text-cyan-200">REPASO</div>
                                <div className="text-xs opacity-75 mt-1">12:00 - 15:00</div>
                                <div className="text-xs font-medium mt-1">Paloma Gutiérrez</div>
                                <div className="text-xs mt-1">Repaso de lettering árabe antebrazo derecho.</div>
                                <Badge className="bg-cyan-500 text-white text-xs mt-2">JoseArt</Badge>
                              </div>
                            )}
                          </div>
                          
                          {/* Cabina 3 */}
                          <div className="p-2 min-h-[100px] border border-border rounded-lg bg-card">
                            {hour === "11:00" && (
                              <div className="bg-purple-500/20 border border-purple-500/30 text-purple-300 p-3 rounded-lg text-xs h-full">
                                <div className="font-bold text-purple-200">PIERCING</div>
                                <div className="text-xs opacity-75 mt-1">11:00 - 14:00</div>
                                <div className="text-xs font-medium mt-1">Nerea Fernández</div>
                                <div className="text-xs mt-1">Lengua + Lóbulo. Tragus.</div>
                                <Badge className="bg-purple-500 text-white text-xs mt-2">MeryLine</Badge>
                              </div>
                            )}
                            {hour === "15:00" && (
                              <div className="bg-green-500/10 border border-green-500/20 text-green-400 p-2 rounded-lg text-xs">
                                <div className="text-center font-medium">🟢 Recordatorio enviado</div>
                              </div>
                            )}
                          </div>
                          
                          {/* Cabina 4 */}
                          <div className="p-2 min-h-[100px] border border-border rounded-lg bg-card">
                            {hour === "12:00" && (
                              <div className="bg-orange-500/20 border border-orange-500/30 text-orange-300 p-3 rounded-lg text-xs h-full">
                                <div className="font-bold text-orange-200">TATUAJE - 1ª SESIÓN</div>
                                <div className="text-xs opacity-75 mt-1">12:00 - 15:00</div>
                                <div className="text-xs font-medium mt-1">Marcos Pascual</div>
                                <div className="text-xs mt-1">Dragón japonés hombro - todo color.</div>
                                <Badge className="bg-orange-500 text-white text-xs mt-2">RaulNK</Badge>
                              </div>
                            )}
                            {hour === "16:00" && (
                              <div className="bg-red-500/20 border border-red-500/30 text-red-300 p-2 rounded-lg text-xs">
                                <div className="text-center font-medium text-red-200">❌ Cita cancelada</div>
                              </div>
                            )}
                          </div>
                        </>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle>Citas de Hoy</CardTitle>
                  <CardDescription>
                    Agenda completa del {formatDate(selectedDate)}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {appointments.map((appointment) => (
                      <div 
                        key={appointment.id} 
                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className="text-center min-w-[80px]">
                            <div className="font-mono text-lg font-semibold">
                              {appointment.time}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {calculateEndTime(appointment.time, appointment.duration)}
                            </div>
                          </div>
                          
                          <div className="w-px h-12 bg-border" />
                          
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="font-semibold">{appointment.client}</h3>
                              <Badge variant="outline" className="text-xs">
                                {appointment.artist}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-1">
                              {appointment.service}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              📞 {appointment.phone}
                            </p>
                            {appointment.notes && (
                              <p className="text-xs text-muted-foreground mt-1">
                                💭 {appointment.notes}
                              </p>
                            )}
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <div className="text-right text-sm text-muted-foreground">
                            {appointment.duration} min
                          </div>
                          <Badge variant={getStatusColor(appointment.status)}>
                            {getStatusLabel(appointment.status)}
                          </Badge>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              Editar
                            </Button>
                            <Button variant="outline" size="sm">
                              Contactar
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Artistas disponibles */}
            <Card>
              <CardHeader>
                <CardTitle>Estado de Artistas</CardTitle>
                <CardDescription>Disponibilidad actual del equipo</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  {[
                    { name: "Carlos", status: "busy", currentClient: "Ana López", availableAt: "17:30" },
                    { name: "Sofia", status: "available", currentClient: null, availableAt: "Ahora" },
                    { name: "Miguel", status: "busy", currentClient: "Pedro Ruiz", availableAt: "18:00" },
                    { name: "Laura", status: "break", currentClient: null, availableAt: "15:00" },
                  ].map((artist) => (
                    <div key={artist.name} className="p-4 border rounded-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-3 h-3 rounded-full ${
                          artist.status === 'available' ? 'bg-green-500' :
                          artist.status === 'busy' ? 'bg-red-500' : 'bg-yellow-500'
                        }`} />
                        <h4 className="font-semibold">{artist.name}</h4>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {artist.status === 'available' && 'Disponible ahora'}
                        {artist.status === 'busy' && `Con ${artist.currentClient}`}
                        {artist.status === 'break' && 'En descanso'}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        Libre a las {artist.availableAt}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}