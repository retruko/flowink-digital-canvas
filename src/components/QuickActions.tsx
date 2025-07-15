import { Plus, UserPlus, Calendar, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const quickActions = [
  {
    icon: Calendar,
    label: "Nueva Cita",
    description: "Agendar una nueva cita",
    variant: "gradient" as const,
  },
  {
    icon: UserPlus,
    label: "Nuevo Cliente",
    description: "Registrar cliente",
    variant: "outline" as const,
  },
  {
    icon: FileText,
    label: "Consentimiento",
    description: "Generar documento",
    variant: "outline" as const,
  },
  {
    icon: Plus,
    label: "Otro",
    description: "Más opciones",
    variant: "ghost" as const,
  },
];

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Acciones Rápidas</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <Button
                key={action.label}
                variant={action.variant}
                className="h-auto flex-col gap-2 p-4"
              >
                <Icon className="h-6 w-6" />
                <div className="text-center">
                  <div className="font-medium text-sm">{action.label}</div>
                  <div className="text-xs text-muted-foreground">
                    {action.description}
                  </div>
                </div>
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}