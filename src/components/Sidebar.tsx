import { 
  LayoutDashboard,
  Calendar,
  Users,
  UserPlus,
  FileText,
  Package,
  DollarSign,
  Settings,
  BarChart3,
  Building2,
  UserCog,
  Palette,
  Shield,
  Clock,
  TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const menuItems = [
  {
    section: "Principal",
    items: [
      { icon: LayoutDashboard, label: "Dashboard", href: "/", active: true },
      { icon: Calendar, label: "Agenda", href: "/agenda", badge: "8" },
    ]
  },
  {
    section: "Gestión",
    items: [
      { icon: Users, label: "Clientes", href: "/clientes", count: "284" },
      { icon: UserPlus, label: "Leads", href: "/leads", badge: "12" },
      { icon: FileText, label: "Consentimientos", href: "/consentimientos" },
    ]
  },
  {
    section: "Estudio",
    items: [
      { icon: Building2, label: "Mi Estudio", href: "/estudio" },
      { icon: UserCog, label: "Managers", href: "/managers", count: "2" },
      { icon: Palette, label: "Tatuadores", href: "/tatuadores", count: "5" },
      { icon: Package, label: "Inventario", href: "/inventario", badge: "!" },
      { icon: Clock, label: "Horarios", href: "/horarios" },
    ]
  },
  {
    section: "Finanzas",
    items: [
      { icon: DollarSign, label: "Ingresos", href: "/ingresos" },
      { icon: TrendingUp, label: "Comisiones", href: "/comisiones", badge: "3" },
      { icon: BarChart3, label: "Reportes", href: "/reportes" },
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

const teamMembers = [
  { name: "Alex Rivera", role: "Dueño", avatar: "AR", status: "online" },
  { name: "Sam Torres", role: "Manager", avatar: "ST", status: "online" },
  { name: "Luna Costa", role: "Artista", avatar: "LC", status: "busy" },
];

export function Sidebar() {
  return (
    <aside className="w-72 border-r border-border bg-card/30 backdrop-blur-sm">
      <div className="flex h-full flex-col">
        <div className="flex-1 overflow-auto py-6">
          <div className="space-y-6 px-4">
            {menuItems.map((section, sectionIndex) => (
              <div key={section.section}>
                <div className="space-y-2">
                  <h3 className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                    {section.section}
                  </h3>
                  <div className="space-y-1">
                    {section.items.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Button
                          key={item.href}
                          variant={item.active ? "secondary" : "ghost"}
                          className={`w-full justify-start h-10 text-sm ${
                            item.active 
                              ? "bg-accent/50 text-accent-foreground border border-border/50 shadow-sm" 
                              : "hover:bg-accent/30 text-muted-foreground hover:text-foreground"
                          }`}
                          size="sm"
                        >
                          <Icon className="mr-3 h-4 w-4" />
                          <span className="flex-1 text-left">{item.label}</span>
                          {item.badge && (
                            <Badge 
                              variant={item.badge === "!" ? "destructive" : "secondary"}
                              className={`h-5 w-5 p-0 text-xs ml-auto ${
                                item.badge === "!" 
                                  ? "bg-destructive/20 text-destructive border-destructive/30" 
                                  : "bg-primary/20 text-primary border-primary/30"
                              }`}
                            >
                              {item.badge}
                            </Badge>
                          )}
                          {item.count && (
                            <span className="text-xs text-muted-foreground ml-auto">
                              {item.count}
                            </span>
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

        {/* Team Section */}
        <div className="border-t border-border p-4">
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Equipo Online
          </h3>
          <div className="space-y-2">
            {teamMembers.map((member) => (
              <div key={member.name} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-accent/30 transition-colors">
                <div className="relative">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-primary/10 text-primary text-xs">
                      {member.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className={`absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-background ${
                    member.status === "online" ? "bg-success" : 
                    member.status === "busy" ? "bg-warning" : "bg-muted"
                  }`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{member.name}</p>
                  <p className="text-xs text-muted-foreground">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}