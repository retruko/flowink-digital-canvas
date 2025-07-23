import { useState } from "react";
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
  UserCog, 
  Shield, 
  Calendar, 
  Clock,
  Phone,
  Mail,
  MapPin,
  Filter,
  Search
} from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { DashboardCard } from "@/components/DashboardCard";
import { PermissionsConfig } from "@/components/PermissionsConfig";

interface Manager {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: "manager" | "supervisor" | "admin";
  department: string;
  status: "active" | "inactive" | "vacation";
  startDate: string;
  permissions: string[];
  performance: {
    clientsSatisfaction: number;
    teamManagement: number;
    salesTarget: number;
  };
}

export default function Managers() {
  const [managers, setManagers] = useState<Manager[]>([
    {
      id: "1",
      name: "Ana García",
      email: "ana.garcia@flowink.com",
      phone: "+34 666 111 222",
      role: "manager",
      department: "Operaciones",
      status: "active",
      startDate: "2023-01-15",
      permissions: ["Gestión de citas", "Supervisión de artistas", "Reportes"],
      performance: {
        clientsSatisfaction: 95,
        teamManagement: 88,
        salesTarget: 102
      }
    },
    {
      id: "2",
      name: "Carlos Mendoza",
      email: "carlos.mendoza@flowink.com",
      phone: "+34 666 333 444",
      role: "supervisor",
      department: "Ventas",
      status: "active",
      startDate: "2023-03-20",
      permissions: ["Gestión de leads", "Seguimiento de ventas", "Facturación"],
      performance: {
        clientsSatisfaction: 92,
        teamManagement: 85,
        salesTarget: 98
      }
    },
    {
      id: "3",
      name: "Laura Ruiz",
      email: "laura.ruiz@flowink.com",
      phone: "+34 666 555 666",
      role: "manager",
      department: "Recursos Humanos",
      status: "vacation",
      startDate: "2022-11-10",
      permissions: ["Gestión de personal", "Nóminas", "Formación"],
      performance: {
        clientsSatisfaction: 90,
        teamManagement: 94,
        salesTarget: 85
      }
    }
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-success/20 text-success-foreground border-success/30";
      case "vacation": return "bg-warning/20 text-warning-foreground border-warning/30";
      case "inactive": return "bg-destructive/20 text-destructive-foreground border-destructive/30";
      default: return "bg-muted/20 text-muted-foreground border-muted/30";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "active": return "Activo";
      case "vacation": return "De vacaciones";
      case "inactive": return "Inactivo";
      default: return status;
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case "admin": return "bg-primary/20 text-primary-foreground border-primary/30";
      case "manager": return "bg-secondary/20 text-secondary-foreground border-secondary/30";
      case "supervisor": return "bg-accent/20 text-accent-foreground border-accent/30";
      default: return "bg-muted/20 text-muted-foreground border-muted/30";
    }
  };

  const getRoleLabel = (role: string) => {
    switch (role) {
      case "admin": return "Administrador";
      case "manager": return "Manager";
      case "supervisor": return "Supervisor";
      default: return role;
    }
  };

  const filteredManagers = managers.filter(manager => {
    const matchesSearch = manager.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         manager.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         manager.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || manager.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/90 to-background/80">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8 lg:ml-20">
          <div className="space-y-8 transform scale-[0.90] origin-top">
            {/* Header */}
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-4xl font-bold text-foreground">Gestión de Managers</h1>
                <p className="text-muted-foreground mt-2">Administra el equipo de gestión del estudio</p>
              </div>
              <div className="flex gap-2">
                <PermissionsConfig 
                  userType="managers" 
                  onSave={(permissions) => console.log('Permisos guardados:', permissions)} 
                />
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="gap-2">
                    <Plus className="h-4 w-4" />
                    Nuevo Manager
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>Nuevo Manager</DialogTitle>
                    <DialogDescription>
                      Agrega un nuevo manager al equipo
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Nombre completo</Label>
                      <Input id="name" placeholder="Nombre del manager" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="email@flowink.com" />
                    </div>
                    <div>
                      <Label htmlFor="role">Rol</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona un rol" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="manager">Manager</SelectItem>
                          <SelectItem value="supervisor">Supervisor</SelectItem>
                          <SelectItem value="admin">Administrador</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button className="w-full">Crear Manager</Button>
                  </div>
                </DialogContent>
                </Dialog>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <DashboardCard
                title="Total Managers"
                value={managers.length.toString()}
                description="En el equipo"
                icon={UserCog}
              />
              
              <DashboardCard
                title="Activos"
                value={managers.filter(m => m.status === 'active').length.toString()}
                description="Trabajando hoy"
                icon={Shield}
              />

              <DashboardCard
                title="Satisfacción Promedio"
                value={`${Math.round(managers.reduce((acc, m) => acc + m.performance.clientsSatisfaction, 0) / managers.length)}%`}
                description="Clientes satisfechos"
                icon={Calendar}
              />

              <DashboardCard
                title="Cumplimiento Objetivos"
                value={`${Math.round(managers.reduce((acc, m) => acc + m.performance.salesTarget, 0) / managers.length)}%`}
                description="Meta de ventas"
                icon={Clock}
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
                        placeholder="Buscar managers..." 
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
                        <SelectItem value="active">Activos</SelectItem>
                        <SelectItem value="vacation">De vacaciones</SelectItem>
                        <SelectItem value="inactive">Inactivos</SelectItem>
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

            {/* Lista de Managers */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredManagers.map((manager) => (
                <Card key={manager.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12 ring-2 ring-border">
                          <AvatarFallback className="bg-primary/10 text-primary font-bold">
                            {manager.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="flex items-center gap-2">
                            {manager.name}
                            <Badge className={getStatusColor(manager.status)}>
                              {getStatusLabel(manager.status)}
                            </Badge>
                          </CardTitle>
                          <CardDescription className="flex items-center gap-2">
                            <Badge className={getRoleColor(manager.role)}>
                              {getRoleLabel(manager.role)}
                            </Badge>
                            <span>• {manager.department}</span>
                          </CardDescription>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          <Edit2 className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Mail className="h-4 w-4" />
                        <span className="truncate">{manager.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Phone className="h-4 w-4" />
                        {manager.phone}
                      </div>
                    </div>
                    
                    <div className="text-sm">
                      <span className="font-medium">Desde:</span> {new Date(manager.startDate).toLocaleDateString('es-ES')}
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium mb-2">Permisos:</p>
                      <div className="flex flex-wrap gap-1">
                        {manager.permissions.map((permission, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {permission}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-medium mb-3">Rendimiento:</p>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Satisfacción clientes</span>
                          <span className="font-medium">{manager.performance.clientsSatisfaction}%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Gestión de equipo</span>
                          <span className="font-medium">{manager.performance.teamManagement}%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Objetivos de venta</span>
                          <span className={`font-medium ${manager.performance.salesTarget >= 100 ? 'text-success' : 'text-warning'}`}>
                            {manager.performance.salesTarget}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredManagers.length === 0 && (
              <Card>
                <CardContent className="p-12 text-center">
                  <UserCog className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No se encontraron managers</h3>
                  <p className="text-muted-foreground">
                    {searchTerm || statusFilter !== "all" 
                      ? "Intenta ajustar los filtros de búsqueda"
                      : "Agrega el primer manager al equipo"
                    }
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}