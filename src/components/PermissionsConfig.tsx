import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Settings, Save, Users, Palette } from "lucide-react";

interface Permission {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
}

interface PermissionsConfigProps {
  userType: "managers" | "artists";
  onSave: (permissions: Permission[]) => void;
}

export const PermissionsConfig = ({ userType, onSave }: PermissionsConfigProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const defaultPermissions: Record<string, Permission[]> = {
    managers: [
      { id: "view_statistics", name: "Ver Estadísticas", description: "Dashboard con métricas del estudio", enabled: true },
      { id: "view_revenue", name: "Ver Ingresos", description: "Información financiera y facturación", enabled: true },
      { id: "manage_appointments", name: "Gestionar Citas", description: "Crear, editar y cancelar citas", enabled: true },
      { id: "manage_clients", name: "Gestionar Clientes", description: "Ver y editar información de clientes", enabled: true },
      { id: "view_inventory", name: "Ver Inventario", description: "Consultar stock y materiales", enabled: false },
      { id: "manage_artists", name: "Gestionar Artistas", description: "Administrar equipo de artistas", enabled: false },
      { id: "view_reports", name: "Ver Reportes", description: "Acceso a reportes detallados", enabled: true },
    ],
    artists: [
      { id: "view_own_statistics", name: "Ver Mis Estadísticas", description: "Sus propias métricas y rendimiento", enabled: true },
      { id: "view_own_appointments", name: "Ver Mis Citas", description: "Solo sus citas asignadas", enabled: true },
      { id: "view_all_appointments", name: "Ver Todas las Citas", description: "Citas de todo el estudio", enabled: false },
      { id: "view_client_history", name: "Ver Historial de Clientes", description: "Historial completo de clientes", enabled: true },
      { id: "manage_own_schedule", name: "Gestionar Mi Horario", description: "Modificar su disponibilidad", enabled: true },
      { id: "view_inventory", name: "Ver Inventario", description: "Consultar materiales disponibles", enabled: true },
      { id: "view_revenue", name: "Ver Ingresos Generales", description: "Ingresos totales del estudio", enabled: false },
    ]
  };

  const [permissions, setPermissions] = useState<Permission[]>(defaultPermissions[userType]);

  const togglePermission = (id: string) => {
    setPermissions(prev => 
      prev.map(p => p.id === id ? { ...p, enabled: !p.enabled } : p)
    );
  };

  const handleSave = () => {
    onSave(permissions);
    setIsOpen(false);
  };

  const enabledCount = permissions.filter(p => p.enabled).length;
  const Icon = userType === "managers" ? Users : Palette;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Settings className="h-4 w-4" />
          Configurar Permisos
          <Badge variant="secondary" className="ml-1">
            {enabledCount}/{permissions.length}
          </Badge>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Icon className="h-5 w-5" />
            Configurar Permisos para {userType === "managers" ? "Managers" : "Artistas"}
          </DialogTitle>
          <DialogDescription>
            Configura qué funcionalidades pueden ver y usar los {userType === "managers" ? "managers" : "artistas"} del estudio.
            Los permisos se pueden configurar por defecto para todos, y luego personalizar individualmente para cada persona.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {permissions.map((permission) => (
            <Card key={permission.id} className={`transition-all ${permission.enabled ? 'ring-1 ring-primary/20' : ''}`}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <Switch
                        id={permission.id}
                        checked={permission.enabled}
                        onCheckedChange={() => togglePermission(permission.id)}
                      />
                      <Label htmlFor={permission.id} className="font-medium">
                        {permission.name}
                      </Label>
                      <Badge variant={permission.enabled ? "default" : "secondary"}>
                        {permission.enabled ? "Activo" : "Inactivo"}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1 ml-8">
                      {permission.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-between items-center pt-4 border-t">
          <div className="text-sm text-muted-foreground">
            {enabledCount} de {permissions.length} permisos activos
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Cancelar
            </Button>
            <Button onClick={handleSave} className="gap-2">
              <Save className="h-4 w-4" />
              Guardar Configuración
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};