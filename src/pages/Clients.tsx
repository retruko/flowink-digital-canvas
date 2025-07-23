import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { MobileSidebar } from "@/components/MobileSidebar";
import { DashboardCard } from "@/components/DashboardCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Plus, Search, Filter, Users, Phone, Mail, Calendar } from "lucide-react";

const Clients = () => {
  const clients = [
    {
      id: 1,
      name: "María García",
      email: "maria.garcia@email.com",
      phone: "+34 666 123 456",
      totalAppointments: 8,
      lastVisit: "2024-01-15",
      status: "active",
      totalSpent: "€1,240"
    },
    {
      id: 2,
      name: "Juan Pérez",
      email: "juan.perez@email.com",
      phone: "+34 677 234 567",
      totalAppointments: 3,
      lastVisit: "2024-01-10",
      status: "active",
      totalSpent: "€580"
    },
    {
      id: 3,
      name: "Ana López",
      email: "ana.lopez@email.com",
      phone: "+34 688 345 678",
      totalAppointments: 12,
      lastVisit: "2024-01-12",
      status: "vip",
      totalSpent: "€2,890"
    },
    {
      id: 4,
      name: "Pedro Ruiz",
      email: "pedro.ruiz@email.com",
      phone: "+34 699 456 789",
      totalAppointments: 5,
      lastVisit: "2023-12-20",
      status: "inactive",
      totalSpent: "€750"
    },
    {
      id: 5,
      name: "Laura Martín",
      email: "laura.martin@email.com",
      phone: "+34 611 567 890",
      totalAppointments: 2,
      lastVisit: "2024-01-08",
      status: "new",
      totalSpent: "€180"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "vip": return "default";
      case "active": return "secondary";
      case "new": return "outline";
      case "inactive": return "destructive";
      default: return "outline";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "vip": return "VIP";
      case "active": return "Activo";
      case "new": return "Nuevo";
      case "inactive": return "Inactivo";
      default: return status;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6 lg:ml-20">
          <div className="space-y-6 transform scale-[0.90] origin-top">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold">Clientes</h1>
                <p className="text-muted-foreground">Gestiona tu base de clientes</p>
              </div>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Nuevo Cliente
              </Button>
            </div>

            {/* Métricas */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <DashboardCard
                title="Total Clientes"
                value="284"
                description="Clientes registrados"
                icon={Users}
                trend={{ value: 12, label: "este mes", positive: true }}
              />
              <DashboardCard
                title="Nuevos (mes)"
                value="24"
                description="Nuevos registros"
                icon={Plus}
                trend={{ value: 12, label: "vs mes anterior", positive: true }}
              />
              <DashboardCard
                title="Activos"
                value="156"
                description="Con citas este mes"
                icon={Users}
                trend={{ value: 8, label: "vs mes anterior", positive: true }}
              />
              <DashboardCard
                title="Recurrentes"
                value="89"
                description="Más de 3 citas"
                icon={Users}
                trend={{ value: 15, label: "vs mes anterior", positive: true }}
              />
            </div>

            {/* Filtros y búsqueda */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">Buscar clientes</h3>
                    <p className="text-sm text-muted-foreground">Encuentra clientes por nombre, email o teléfono</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <Search className="w-4 h-4 text-muted-foreground" />
                      <Input 
                        placeholder="Buscar clientes..." 
                        className="w-64"
                      />
                    </div>
                    <Button variant="outline">
                      <Filter className="w-4 h-4 mr-2" />
                      Filtros
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Lista de clientes */}
            <Card>
              <CardHeader>
                <CardTitle>Lista de Clientes</CardTitle>
                <CardDescription>
                  Gestiona la información de tus clientes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {clients.map((client) => (
                    <div 
                      key={client.id} 
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="font-semibold text-primary">
                            {client.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        
                        <div>
                          <h3 className="font-semibold">{client.name}</h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Mail className="w-3 h-3" />
                              {client.email}
                            </div>
                            <div className="flex items-center gap-1">
                              <Phone className="w-3 h-3" />
                              {client.phone}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-6">
                        <div className="text-center">
                          <p className="text-sm font-medium">{client.totalAppointments}</p>
                          <p className="text-xs text-muted-foreground">Citas</p>
                        </div>
                        
                        <div className="text-center">
                          <p className="text-sm font-medium">{client.totalSpent}</p>
                          <p className="text-xs text-muted-foreground">Gastado</p>
                        </div>
                        
                        <div className="text-center">
                          <p className="text-sm font-medium">{client.lastVisit}</p>
                          <p className="text-xs text-muted-foreground">Última visita</p>
                        </div>
                        
                        <Badge variant={getStatusColor(client.status)}>
                          {getStatusLabel(client.status)}
                        </Badge>
                        
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            Ver
                          </Button>
                          <Button variant="outline" size="sm">
                            <Calendar className="w-3 h-3 mr-1" />
                            Cita
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Estadísticas adicionales */}
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Clientes por Estado</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>VIP</span>
                      <span className="font-medium">25 (9%)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Activos</span>
                      <span className="font-medium">156 (55%)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Nuevos</span>
                      <span className="font-medium">78 (27%)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Inactivos</span>
                      <span className="font-medium">25 (9%)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Actividad Reciente</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Nuevos registros hoy</span>
                      <span className="font-medium">3</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Citas programadas</span>
                      <span className="font-medium">12</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Clientes contactados</span>
                      <span className="font-medium">8</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Pendientes seguimiento</span>
                      <span className="font-medium">5</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Clients;