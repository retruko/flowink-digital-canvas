
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
    <Card className="rounded-3xl border-2 border-border bg-gradient-to-br from-card via-card to-card/95 shadow-medium backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-xl font-bold font-display">Acciones Rápidas</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <Button
                key={action.label}
                variant={action.variant}
                className={`h-auto flex-col gap-4 p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-medium hover:-translate-y-0.5 ${
                  action.variant === "gradient" 
                    ? "bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground shadow-glow hover:shadow-glow border-primary/30" 
                    : "bg-gradient-to-br from-muted/30 to-muted/10 hover:from-accent/30 hover:to-accent/20 border-border"
                }`}
              >
                <div className={`h-12 w-12 rounded-2xl flex items-center justify-center ${
                  action.variant === "gradient" 
                    ? "bg-white/20" 
                    : "bg-primary/10"
                }`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div className="text-center">
                  <div className="font-bold text-sm mb-1">{action.label}</div>
                  <div className="text-xs text-muted-foreground font-medium">
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
