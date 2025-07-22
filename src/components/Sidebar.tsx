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
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  {
    section: "Principal",
    items: [
      { icon: LayoutDashboard, label: "Inicio", href: "/", active: true },
      { icon: Calendar, label: "Agenda", href: "/agenda", badge: "8" },
      { icon: Users, label: "Clientes", href: "/clientes", count: "284" },
    ]
  },
  {
    section: "Gestión",
    items: [
      { icon: DollarSign, label: "Finanzas", href: "/finanzas" },
      { icon: UserPlus, label: "Pot. Clientes", href: "/leads", badge: "12" },
      { icon: Package, label: "Inventario", href: "/inventario", badge: "!" },
    ]
  },
  {
    section: "Estudio",
    items: [
      { icon: Building2, label: "Mi Estudio", href: "/estudio", 
        subItems: [
          { icon: Building2, label: "Cabinas", href: "/estudio/cabinas" },
          { icon: Clock, label: "Horarios", href: "/estudio/horarios" },
        ]
      },
      { icon: UserCog, label: "Managers", href: "/managers", count: "2" },
      { icon: Palette, label: "Tatuadores", href: "/tatuadores", count: "5" },
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
  const location = useLocation();

  return (
    <aside className="hidden lg:flex lg:w-80 border-r border-border bg-gradient-to-b from-card/50 via-card/30 to-card/50 backdrop-blur-sm h-full flex-col">
      <div className="flex h-full flex-col">
        <div className="flex-1 overflow-auto py-8">
          <div className="space-y-8 px-6">
            {menuItems.map((section, sectionIndex) => (
              <div key={section.section}>
                <div className="space-y-3">
                  <h3 className="px-4 text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">
                    {section.section}
                  </h3>
                  <div className="space-y-2">
                    {section.items.map((item) => {
                      const Icon = item.icon;
                      const isActive = location.pathname === item.href;
                      return (
                        <Button
                          key={item.href}
                          variant={isActive ? "secondary" : "ghost"}
                          className={`w-full justify-start h-14 text-sm font-medium rounded-2xl transition-all duration-300 ${
                            isActive 
                              ? "bg-gradient-to-r from-accent via-accent/80 to-accent text-accent-foreground border border-border/30 shadow-medium" 
                              : "hover:bg-gradient-to-r hover:from-accent/30 hover:to-accent/20 text-muted-foreground hover:text-foreground hover:shadow-soft"
                          }`}
                          size="sm"
                          asChild
                        >
                          <Link to={item.href}>
                            <div className={`mr-4 h-10 w-10 rounded-xl flex items-center justify-center ${
                              isActive 
                                ? "bg-primary/20 text-primary" 
                                : "bg-muted/30 text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                            } transition-all duration-300`}>
                              <Icon className="h-5 w-5" />
                            </div>
                            <span className="flex-1 text-left font-semibold">{item.label}</span>
                            {item.badge && (
                              <Badge 
                                variant="secondary"
                                className={`h-6 w-6 p-0 text-xs ml-auto rounded-full shadow-soft ${
                                  item.badge === "!" 
                                    ? "bg-destructive/20 text-destructive border border-destructive/30" 
                                    : "bg-primary/20 text-primary border border-primary/30"
                                }`}
                              >
                                {item.badge}
                              </Badge>
                            )}
                            {item.count && (
                              <span className="text-sm text-muted-foreground ml-auto bg-muted/50 px-2 py-1 rounded-xl">
                                {item.count}
                              </span>
                            )}
                          </Link>
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
        <div className="border-t border-border/50 p-6 bg-gradient-to-r from-card/80 to-card/50 backdrop-blur-sm">
          <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">
            Equipo Online
          </h3>
          <div className="space-y-3">
            {teamMembers.map((member) => (
              <div key={member.name} className="flex items-center space-x-4 p-3 rounded-2xl hover:bg-accent/30 transition-all duration-300 group">
                <div className="relative">
                  <Avatar className="h-10 w-10 ring-2 ring-background shadow-medium">
                    <AvatarFallback className="bg-gradient-to-br from-primary/20 to-primary/10 text-primary text-sm font-bold">
                      {member.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className={`absolute -bottom-0.5 -right-0.5 h-4 w-4 rounded-full border-2 border-background shadow-soft ${
                    member.status === "online" ? "bg-success" : 
                    member.status === "busy" ? "bg-warning" : "bg-muted"
                  }`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold truncate group-hover:text-foreground transition-colors">{member.name}</p>
                  <p className="text-xs text-muted-foreground font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}