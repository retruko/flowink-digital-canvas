import { useState } from "react";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Plus, 
  Edit2, 
  Trash2, 
  Palette, 
  Star, 
  Calendar, 
  Users,
  Phone,
  Mail,
  Filter,
  Search,
  Clock,
  TrendingUp,
  Award,
  Settings2
} from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { DashboardCard } from "@/components/DashboardCard";
import { PermissionsConfig } from "@/components/PermissionsConfig";

interface Artist {
  id: string;
  name: string;
  email: string;
  phone: string;
  specialty: string;
  experience: string;
  status: "active" | "inactive" | "vacation" | "busy";
  startDate: string;
  permissions: string[];
  performance: {
    satisfaction: number;
    completedTattoos: number;
    monthlyRevenue: number;
  };
  portfolio: {
    images: number;
    styles: string[];
  };
}

const Artists = () => {
  const [artists, setArtists] = useState<Artist[]>([
    {
      id: "1",
      name: "Luna Costa",
      email: "luna.costa@flowink.com",
      phone: "+34 666 111 222",
      specialty: "Realismo",
      experience: "5 años",
      status: "active",
      startDate: "2022-03-15",
      permissions: ["Ver mis citas", "Gestionar horario", "Ver inventario"],
      performance: {
        satisfaction: 98,
        completedTattoos: 89,
        monthlyRevenue: 4200
      },
      portfolio: {
        images: 45,
        styles: ["Realismo", "Retrato", "Blanco y Negro"]
      }
    },
    {
      id: "2",
      name: "Marcus Rivera",
      email: "marcus.rivera@flowink.com",
      phone: "+34 666 333 444",
      specialty: "Traditional",
      experience: "8 años",
      status: "active",
      startDate: "2021-01-20",
      permissions: ["Ver mis citas", "Gestionar horario", "Ver inventario", "Mentor junior"],
      performance: {
        satisfaction: 95,
        completedTattoos: 156,
        monthlyRevenue: 3800
      },
      portfolio: {
        images: 78,
        styles: ["Traditional", "Neo-Traditional", "Color"]
      }
    },
    {
      id: "3",
      name: "Jade Wong",
      email: "jade.wong@flowink.com",
      phone: "+34 666 555 666",
      specialty: "Minimalista",
      experience: "3 años",
      status: "busy",
      startDate: "2023-06-10",
      permissions: ["Ver mis citas", "Gestionar horario"],
      performance: {
        satisfaction: 97,
        completedTattoos: 67,
        monthlyRevenue: 2950
      },
      portfolio: {
        images: 32,
        styles: ["Minimalista", "Fine Line", "Geométrico"]
      }
    },
    {
      id: "4",
      name: "Diego Santos",
      email: "diego.santos@flowink.com",
      phone: "+34 666 777 888",
      specialty: "Japonés",
      experience: "12 años",
      status: "vacation",
      startDate: "2019-09-05",
      permissions: ["Ver mis citas", "Gestionar horario", "Ver inventario", "Mentor junior", "Diseño personalizado"],
      performance: {
        satisfaction: 99,
        completedTattoos: 45,
        monthlyRevenue: 5200
      },
      portfolio: {
        images: 67,
        styles: ["Japonés", "Dragones", "Koi", "Samurai"]
      }
    },
    {
      id: "5",
      name: "Sofia Morales",
      email: "sofia.morales@flowink.com",
      phone: "+34 666 999 000",
      specialty: "Watercolor",
      experience: "4 años",
      status: "active",
      startDate: "2022-11-15",
      permissions: ["Ver mis citas", "Gestionar horario", "Ver inventario"],
      performance: {
        satisfaction: 92,
        completedTattoos: 54,
        monthlyRevenue: 3200
      },
      portfolio: {
        images: 29,
        styles: ["Watercolor", "Abstracto", "Floral"]
      }
    }
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [specialtyFilter, setSpecialtyFilter] = useState("all");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-success/20 text-success-foreground border-success/30";
      case "busy": return "bg-warning/20 text-warning-foreground border-warning/30";
      case "vacation": return "bg-blue-500/20 text-blue-700 border-blue-500/30";
      case "inactive": return "bg-destructive/20 text-destructive-foreground border-destructive/30";
      default: return "bg-muted/20 text-muted-foreground border-muted/30";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "active": return "Disponible";
      case "busy": return "Ocupado";
      case "vacation": return "Vacaciones";
      case "inactive": return "Inactivo";
      default: return status;
    }
  };

  const filteredArtists = artists.filter(artist => {
    const matchesSearch = artist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         artist.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         artist.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || artist.status === statusFilter;
    const matchesSpecialty = specialtyFilter === "all" || artist.specialty.toLowerCase().includes(specialtyFilter.toLowerCase());
    return matchesSearch && matchesStatus && matchesSpecialty;
  });

  const totalRevenue = artists.reduce((sum, artist) => sum + artist.performance.monthlyRevenue, 0);
  const averageSatisfaction = artists.reduce((sum, artist) => sum + artist.performance.satisfaction, 0) / artists.length;
  const activeArtists = artists.filter(a => a.status === "active" || a.status === "busy").length;

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-background via-background/90 to-background/80">
        <Header />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-8 lg:ml-20">
            <div className="space-y-8 transform scale-[0.90] origin-top">
              {/* Header */}
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-4xl font-bold text-foreground">Gestión de Artistas</h1>
                  <p className="text-muted-foreground mt-2">Administra el equipo creativo del estudio</p>
                </div>
                <div className="flex gap-2">
                  <PermissionsConfig 
                    userType="artists" 
                    onSave={(permissions) => console.log('Permisos de artistas guardados:', permissions)} 
                  />
                  <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                      <Button className="gap-2">
                        <Plus className="h-4 w-4" />
                        Nuevo Artista
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <DialogHeader>
                        <DialogTitle>Nuevo Artista</DialogTitle>
                        <DialogDescription>
                          Agrega un nuevo artista al equipo
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="name">Nombre completo</Label>
                          <Input id="name" placeholder="Nombre del artista" />
                        </div>
                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="email@flowink.com" />
                        </div>
                        <div>
                          <Label htmlFor="specialty">Especialidad</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Estilo principal" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="realismo">Realismo</SelectItem>
                              <SelectItem value="traditional">Traditional</SelectItem>
                              <SelectItem value="minimalista">Minimalista</SelectItem>
                              <SelectItem value="japones">Japonés</SelectItem>
                              <SelectItem value="watercolor">Watercolor</SelectItem>
                              <SelectItem value="geometrico">Geométrico</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="experience">Experiencia</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Años de experiencia" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1-2">1-2 años</SelectItem>
                              <SelectItem value="3-5">3-5 años</SelectItem>
                              <SelectItem value="6-10">6-10 años</SelectItem>
                              <SelectItem value="10+">Más de 10 años</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <Button className="w-full">Crear Artista</Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <DashboardCard
                  title="Total Artistas"
                  value={artists.length.toString()}
                  description="En el equipo"
                  icon={Palette}
                />
                
                <DashboardCard
                  title="Activos"
                  value={activeArtists.toString()}
                  description="Trabajando hoy"
                  icon={Users}
                />

                <DashboardCard
                  title="Satisfacción"
                  value={`${averageSatisfaction.toFixed(0)}%`}
                  description="Promedio"
                  icon={Star}
                />

                <DashboardCard
                  title="Ingresos (mes)"
                  value={`€${totalRevenue.toLocaleString()}`}
                  description="Total generado"
                  icon={TrendingUp}
                />
              </div>

              {/* Filtros */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="flex items-center gap-2">
                        <Search className="h-4 w-4 text-muted-foreground" />
                        <Input 
                          placeholder="Buscar artistas..." 
                          className="w-64"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />
                      </div>
                      <Select value={statusFilter} onValueChange={setStatusFilter}>
                        <SelectTrigger className="w-48">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Todos los estados</SelectItem>
                          <SelectItem value="active">Disponibles</SelectItem>
                          <SelectItem value="busy">Ocupados</SelectItem>
                          <SelectItem value="vacation">Vacaciones</SelectItem>
                          <SelectItem value="inactive">Inactivos</SelectItem>
                        </SelectContent>
                      </Select>
                      <Select value={specialtyFilter} onValueChange={setSpecialtyFilter}>
                        <SelectTrigger className="w-48">
                          <SelectValue placeholder="Especialidad" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Todas las especialidades</SelectItem>
                          <SelectItem value="realismo">Realismo</SelectItem>
                          <SelectItem value="traditional">Traditional</SelectItem>
                          <SelectItem value="minimalista">Minimalista</SelectItem>
                          <SelectItem value="japones">Japonés</SelectItem>
                          <SelectItem value="watercolor">Watercolor</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4 mr-2" />
                      Más filtros
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Lista de Artistas */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredArtists.map((artist) => (
                  <Card key={artist.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-4">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-4">
                          <Avatar className="h-12 w-12 ring-2 ring-border">
                            <AvatarFallback className="bg-primary/10 text-primary font-bold">
                              {artist.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="flex items-center gap-2">
                              {artist.name}
                              <Badge className={getStatusColor(artist.status)}>
                                {getStatusLabel(artist.status)}
                              </Badge>
                            </CardTitle>
                            <CardDescription className="flex items-center gap-2">
                              <Badge variant="outline" className="text-primary border-primary/30">
                                {artist.specialty}
                              </Badge>
                              <span>• {artist.experience} exp.</span>
                            </CardDescription>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            <Settings2 className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Mail className="h-4 w-4" />
                          <span className="truncate">{artist.email}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Phone className="h-4 w-4" />
                          {artist.phone}
                        </div>
                      </div>
                      
                      <div className="text-sm">
                        <span className="font-medium">Desde:</span> {new Date(artist.startDate).toLocaleDateString('es-ES')}
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium mb-2">Permisos personalizados:</p>
                        <div className="flex flex-wrap gap-1">
                          {artist.permissions.map((permission, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {permission}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-sm font-medium mb-3">Rendimiento:</p>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="text-center p-2 bg-accent/20 rounded-lg">
                            <div className="flex items-center justify-center gap-1">
                              <Star className="h-3 w-3 text-yellow-500" />
                              <span className="font-bold text-sm">{artist.performance.satisfaction}%</span>
                            </div>
                            <p className="text-xs text-muted-foreground">Satisfacción</p>
                          </div>
                          <div className="text-center p-2 bg-success/10 rounded-lg">
                            <p className="font-bold text-sm">{artist.performance.completedTattoos}</p>
                            <p className="text-xs text-muted-foreground">Tatuajes</p>
                          </div>
                          <div className="text-center p-2 bg-primary/10 rounded-lg">
                            <p className="font-bold text-sm">€{artist.performance.monthlyRevenue.toLocaleString()}</p>
                            <p className="text-xs text-muted-foreground">Este mes</p>
                          </div>
                          <div className="text-center p-2 bg-purple-500/10 rounded-lg">
                            <p className="font-bold text-sm">{artist.portfolio.images}</p>
                            <p className="text-xs text-muted-foreground">Fotos</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm font-medium mb-2">Estilos:</p>
                        <div className="flex flex-wrap gap-1">
                          {artist.portfolio.styles.map((style, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {style}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredArtists.length === 0 && (
                <Card>
                  <CardContent className="p-12 text-center">
                    <Palette className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">No se encontraron artistas</h3>
                    <p className="text-muted-foreground">
                      {searchTerm || statusFilter !== "all" || specialtyFilter !== "all"
                        ? "Intenta ajustar los filtros de búsqueda"
                        : "Agrega el primer artista al equipo"
                      }
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Artists;