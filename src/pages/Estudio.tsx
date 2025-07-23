import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Instagram, 
  Facebook,
  Twitter,
  Globe,
  Camera,
  Save,
  Upload,
  Star,
  Users,
  Calendar,
  DollarSign
} from "lucide-react";

export default function Estudio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background/90">
      <div className="flex">
        <Sidebar />
        
        <div className="flex-1">
          <Header />
          
          <main className="p-4 sm:p-6 lg:p-8 lg:ml-20">
            <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8 transform scale-[0.90] origin-top">
              {/* Header */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Mi Estudio</h1>
                  <p className="text-sm sm:text-base text-muted-foreground mt-2">
                    Configura la información de tu estudio de tatuajes
                  </p>
                </div>
                <Button className="shadow-lg w-full sm:w-auto">
                  <Save className="h-4 w-4 mr-2" />
                  Guardar Cambios
                </Button>
              </div>

              {/* Studio Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <Card className="shadow-soft border-border/50">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      Clientes Totales
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">247</div>
                    <p className="text-xs text-muted-foreground">+12 este mes</p>
                  </CardContent>
                </Card>

                <Card className="shadow-soft border-border/50">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Citas este mes
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">64</div>
                    <p className="text-xs text-muted-foreground">+8% vs mes anterior</p>
                  </CardContent>
                </Card>

                <Card className="shadow-soft border-border/50">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                      <Star className="h-4 w-4" />
                      Valoración
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">4.8</div>
                    <p className="text-xs text-muted-foreground">127 reseñas</p>
                  </CardContent>
                </Card>

                <Card className="shadow-soft border-border/50">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                      <DollarSign className="h-4 w-4" />
                      Ingresos mes
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">€12,450</div>
                    <p className="text-xs text-muted-foreground">+15% vs mes anterior</p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Información Básica */}
                <Card className="shadow-medium border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Building2 className="h-5 w-5" />
                      Información Básica
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Logo del Estudio */}
                    <div className="space-y-3">
                      <Label className="text-sm font-medium">Logo del Estudio</Label>
                      <div className="flex items-center gap-4">
                        <div className="w-20 h-20 bg-accent rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                          <Camera className="h-8 w-8 text-muted-foreground" />
                        </div>
                        <Button variant="outline" size="sm">
                          <Upload className="h-4 w-4 mr-2" />
                          Subir Logo
                        </Button>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-3">
                      <Label htmlFor="studio-name">Nombre del Estudio</Label>
                      <Input id="studio-name" placeholder="Ej: FlowInk Tattoo Studio" defaultValue="FlowInk Tattoo Studio" />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="commercial-name">Nombre Comercial</Label>
                      <Input id="commercial-name" placeholder="Ej: FlowInk" defaultValue="FlowInk" />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="description">Descripción</Label>
                      <Textarea 
                        id="description" 
                        placeholder="Describe tu estudio de tatuajes..."
                        className="min-h-[100px]"
                        defaultValue="Estudio de tatuajes especializado en diseños únicos y personalizados. Contamos con artistas experimentados y un ambiente profesional y cómodo."
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="license">Número de Licencia</Label>
                      <Input id="license" placeholder="Ej: EST-2024-001" defaultValue="EST-2024-001" />
                    </div>
                  </CardContent>
                </Card>

                {/* Información de Contacto */}
                <Card className="shadow-medium border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Phone className="h-5 w-5" />
                      Información de Contacto
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      <Label htmlFor="address" className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        Dirección
                      </Label>
                      <Input id="address" placeholder="Calle, número, ciudad" defaultValue="Calle Mayor 123, 28001 Madrid" />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="phone" className="flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        Teléfono
                      </Label>
                      <Input id="phone" placeholder="+34 xxx xxx xxx" defaultValue="+34 91 234 5678" />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="email" className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        Email
                      </Label>
                      <Input id="email" type="email" placeholder="info@estudio.com" defaultValue="info@flowink.com" />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="website" className="flex items-center gap-2">
                        <Globe className="h-4 w-4" />
                        Sitio Web
                      </Label>
                      <Input id="website" placeholder="https://miestudio.com" defaultValue="https://flowink.com" />
                    </div>

                    <Separator />

                    <div className="space-y-3">
                      <Label className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        Horarios de Atención
                      </Label>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <Label className="text-xs text-muted-foreground">Lunes a Viernes</Label>
                          <Input placeholder="10:00 - 20:00" defaultValue="10:00 - 20:00" />
                        </div>
                        <div>
                          <Label className="text-xs text-muted-foreground">Sábados</Label>
                          <Input placeholder="10:00 - 18:00" defaultValue="10:00 - 18:00" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <Label className="text-xs text-muted-foreground">Domingos</Label>
                          <Input placeholder="Cerrado" defaultValue="Cerrado" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Redes Sociales */}
                <Card className="shadow-medium border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Instagram className="h-5 w-5" />
                      Redes Sociales
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      <Label htmlFor="instagram" className="flex items-center gap-2">
                        <Instagram className="h-4 w-4" />
                        Instagram
                      </Label>
                      <Input id="instagram" placeholder="@usuario_instagram" defaultValue="@flowink_tattoo" />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="facebook" className="flex items-center gap-2">
                        <Facebook className="h-4 w-4" />
                        Facebook
                      </Label>
                      <Input id="facebook" placeholder="FlowInk Tattoo Studio" defaultValue="FlowInk Tattoo Studio" />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="twitter" className="flex items-center gap-2">
                        <Twitter className="h-4 w-4" />
                        Twitter/X
                      </Label>
                      <Input id="twitter" placeholder="@usuario_twitter" defaultValue="@flowink_tattoo" />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="tiktok">TikTok</Label>
                      <Input id="tiktok" placeholder="@usuario_tiktok" defaultValue="@flowink_tattoo" />
                    </div>

                    <Separator />

                    <div className="space-y-3">
                      <Label>Estado de Redes</Label>
                      <div className="flex gap-2 flex-wrap">
                        <Badge variant="secondary" className="bg-green-500/20 text-green-700 border-green-300">
                          Instagram Activo
                        </Badge>
                        <Badge variant="secondary" className="bg-blue-500/20 text-blue-700 border-blue-300">
                          Facebook Activo
                        </Badge>
                        <Badge variant="secondary" className="bg-gray-500/20 text-gray-700 border-gray-300">
                          Twitter Inactivo
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Servicios y Especialidades */}
                <Card className="shadow-medium border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Star className="h-5 w-5" />
                      Servicios y Especialidades
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      <Label>Especialidades Principales</Label>
                      <div className="flex gap-2 flex-wrap">
                        <Badge variant="secondary">Tatuajes Realistas</Badge>
                        <Badge variant="secondary">Old School</Badge>
                        <Badge variant="secondary">Blackwork</Badge>
                        <Badge variant="secondary">Acuarela</Badge>
                        <Badge variant="secondary">Minimalista</Badge>
                        <Badge variant="secondary">Japonés</Badge>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-3">
                      <Label>Servicios Adicionales</Label>
                      <div className="flex gap-2 flex-wrap">
                        <Badge variant="outline">Piercing</Badge>
                        <Badge variant="outline">Cover-ups</Badge>
                        <Badge variant="outline">Retoque</Badge>
                        <Badge variant="outline">Diseño Personalizado</Badge>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-3">
                      <Label htmlFor="price-range">Rango de Precios</Label>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <Label className="text-xs text-muted-foreground">Mínimo</Label>
                          <Input placeholder="€50" defaultValue="€50" />
                        </div>
                        <div>
                          <Label className="text-xs text-muted-foreground">Por hora</Label>
                          <Input placeholder="€80" defaultValue="€80" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="booking-info">Información de Reservas</Label>
                      <Textarea 
                        id="booking-info" 
                        placeholder="Información importante sobre reservas..."
                        className="min-h-[80px]"
                        defaultValue="Se requiere cita previa. Depósito del 30% para confirmar la cita. Cancelaciones con 24h de antelación."
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Configuración Avanzada */}
              <Card className="shadow-medium border-border/50">
                <CardHeader>
                  <CardTitle>Configuración Avanzada</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="booking-advance">Días de Anticipación para Reservas</Label>
                      <Input id="booking-advance" type="number" placeholder="7" defaultValue="7" />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="session-duration">Duración Promedio de Sesión (horas)</Label>
                      <Input id="session-duration" type="number" step="0.5" placeholder="3" defaultValue="3" />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="deposit-percentage">Porcentaje de Depósito (%)</Label>
                      <Input id="deposit-percentage" type="number" placeholder="30" defaultValue="30" />
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <Label htmlFor="policies">Políticas del Estudio</Label>
                    <Textarea 
                      id="policies" 
                      placeholder="Políticas y normas del estudio..."
                      className="min-h-[120px]"
                      defaultValue="• Edad mínima: 18 años (16-17 con consentimiento paterno)
• Prohibido el consumo de alcohol o drogas antes de la sesión
• Se requiere identificación oficial
• No se realizan tatuajes en manos, cara o cuello sin experiencia previa
• Política de no devolución de depósitos"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}