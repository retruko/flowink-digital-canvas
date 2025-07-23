import { useState } from "react";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Plus, Edit2, Trash2, DoorOpen, MapPin, Users, Clock } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface Cabina {
  id: string;
  numero: number;
  nombre: string;
  capacidad: number;
  descripcion?: string;
  ubicacion?: string;
  activa: boolean;
  equipamiento: string[];
}

export default function Cabinas() {
  const [cabinas, setCabinas] = useState<Cabina[]>([
    {
      id: "1",
      numero: 1,
      nombre: "Cabina Principal",
      capacidad: 2,
      descripcion: "Cabina principal para tatuajes grandes",
      ubicacion: "Planta baja - Izquierda",
      activa: true,
      equipamiento: ["Silla ajustable", "Lámpara LED", "Mesa auxiliar", "Estación de trabajo"]
    },
    {
      id: "2",
      numero: 2,
      nombre: "Cabina Express",
      capacidad: 1,
      descripcion: "Cabina para trabajos rápidos y retoques",
      ubicacion: "Planta baja - Centro",
      activa: true,
      equipamiento: ["Silla básica", "Lámpara", "Mesa pequeña"]
    },
    {
      id: "3",
      numero: 3,
      nombre: "Cabina Piercing",
      capacidad: 1,
      descripcion: "Cabina especializada en piercings",
      ubicacion: "Planta baja - Derecha",
      activa: true,
      equipamiento: ["Camilla", "Lámpara quirúrgica", "Esterilizador", "Instrumentos piercing"]
    },
    {
      id: "4",
      numero: 4,
      nombre: "Cabina VIP",
      capacidad: 3,
      descripcion: "Cabina privada para sesiones largas",
      ubicacion: "Planta alta",
      activa: false,
      equipamiento: ["Silla premium", "Sistema de sonido", "TV", "Nevera", "Sofá"]
    }
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingCabina, setEditingCabina] = useState<Cabina | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/90 to-background/80">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8 lg:ml-20">
          <div className="space-y-8">
            {/* Header */}
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-4xl font-bold text-foreground">Gestión de Cabinas</h1>
                <p className="text-muted-foreground mt-2">Administra las cabinas y espacios de trabajo del estudio</p>
              </div>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="gap-2">
                    <Plus className="h-4 w-4" />
                    Nueva Cabina
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>Nueva Cabina</DialogTitle>
                    <DialogDescription>
                      Agrega una nueva cabina al estudio
                    </DialogDescription>
                  </DialogHeader>
                  {/* Formulario aquí */}
                </DialogContent>
              </Dialog>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <DoorOpen className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">{cabinas.length}</p>
                      <p className="text-sm text-muted-foreground">Total Cabinas</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-success/10 rounded-xl">
                      <Users className="h-6 w-6 text-success" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">{cabinas.filter(c => c.activa).length}</p>
                      <p className="text-sm text-muted-foreground">Activas</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-warning/10 rounded-xl">
                      <Clock className="h-6 w-6 text-warning" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">{cabinas.reduce((acc, c) => acc + c.capacidad, 0)}</p>
                      <p className="text-sm text-muted-foreground">Capacidad Total</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-accent/10 rounded-xl">
                      <MapPin className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">2</p>
                      <p className="text-sm text-muted-foreground">Plantas</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Cabinas Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cabinas.map((cabina) => (
                <Card key={cabina.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          Cabina {cabina.numero}
                          <Badge variant={cabina.activa ? "default" : "secondary"}>
                            {cabina.activa ? "Activa" : "Inactiva"}
                          </Badge>
                        </CardTitle>
                        <CardDescription className="font-medium">{cabina.nombre}</CardDescription>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm" onClick={() => setEditingCabina(cabina)}>
                          <Edit2 className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {cabina.ubicacion}
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      Capacidad: {cabina.capacidad} personas
                    </div>
                    
                    {cabina.descripcion && (
                      <p className="text-sm text-muted-foreground">{cabina.descripcion}</p>
                    )}
                    
                    <div>
                      <p className="text-sm font-medium mb-2">Equipamiento:</p>
                      <div className="flex flex-wrap gap-1">
                        {cabina.equipamiento.map((equipo, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {equipo}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}