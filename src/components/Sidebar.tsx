import { 
  Calendar,
  Users,
  FileText,
  Package,
  DollarSign,
  Settings,
  BarChart3,
  UserPlus,
  Clock,
  Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const menuItems = [
  {
    section: "Principal",
    items: [
      { icon: BarChart3, label: "Dashboard", href: "/", active: true },
      { icon: Calendar, label: "Agenda", href: "/agenda", badge: "5" },
      { icon: Users, label: "Clientes", href: "/clientes" },
      { icon: UserPlus, label: "Leads", href: "/leads", badge: "12" },
    ]
  },
  {
    section: "Operaciones",
    items: [
      { icon: FileText, label: "Consentimientos", href: "/consentimientos" },
      { icon: Package, label: "Inventario", href: "/inventario", badge: "!" },
      { icon: Clock, label: "Horarios", href: "/horarios" },
    ]
  },
  {
    section: "Finanzas",
    items: [
      { icon: DollarSign, label: "Ingresos", href: "/ingresos" },
      { icon: BarChart3, label: "Comisiones", href: "/comisiones" },
    ]
  },
  {
    section: "Configuración",
    items: [
      { icon: Settings, label: "General", href: "/configuracion" },
      { icon: Shield, label: "Permisos", href: "/permisos" },
    ]
  }
];

export function Sidebar() {
  return (
    <aside className="w-64 border-r border-border bg-card/30 backdrop-blur-sm">
      <div className="flex h-full flex-col">
        <div className="flex-1 overflow-auto py-6">
          <div className="space-y-6 px-3">
            {menuItems.map((section, sectionIndex) => (
              <div key={section.section}>
                {sectionIndex > 0 && <Separator className="my-4" />}
                <div className="space-y-1">
                  <h3 className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    {section.section}
                  </h3>
                  <div className="space-y-1">
                    {section.items.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Button
                          key={item.href}
                          variant={item.active ? "secondary" : "ghost"}
                          className="w-full justify-start"
                          size="sm"
                        >
                          <Icon className="mr-2 h-4 w-4" />
                          {item.label}
                          {item.badge && (
                            <Badge 
                              variant={item.badge === "!" ? "destructive" : "secondary"}
                              className="ml-auto h-5 w-5 p-0 text-xs"
                            >
                              {item.badge}
                            </Badge>
                          )}
                        </Button>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}