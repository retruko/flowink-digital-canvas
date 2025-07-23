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
    <aside className="hidden lg:flex lg:w-60 border-r border-border bg-card/50 backdrop-blur-sm h-full flex-col fixed left-0 top-0 z-40">
      <div className="flex h-full flex-col">
        <div className="flex-1 overflow-auto py-6">
          <div className="space-y-6 px-4">
            {menuItems.map((section, sectionIndex) => (
              <div key={section.section}>
                <h3 className="px-2 text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3">
                  {section.section}
                </h3>
                <div className="space-y-1">
                  {section.items.map((item) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.href;
                    return (
                      <Link 
                        key={item.href}
                        to={item.href}
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                          isActive 
                            ? "bg-primary text-primary-foreground" 
                            : "text-muted-foreground hover:text-foreground hover:bg-accent"
                        }`}
                      >
                        <Icon className="h-4 w-4 flex-shrink-0" />
                        <span className="truncate">{item.label}</span>
                        {item.badge && (
                          <Badge 
                            variant="secondary"
                            className={`h-5 w-5 p-0 text-xs ml-auto rounded-full flex items-center justify-center ${
                              item.badge === "!" 
                                ? "bg-destructive/20 text-destructive" 
                                : "bg-primary/20 text-primary"
                            }`}
                          >
                            {item.badge}
                          </Badge>
                        )}
                        {item.count && (
                          <span className="text-xs text-muted-foreground ml-auto bg-muted/50 px-2 py-1 rounded-lg">
                            {item.count}
                          </span>
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="border-t border-border/50 p-4 bg-card/30">
          <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3">
            Equipo Online
          </h3>
          <div className="space-y-2">
            {teamMembers.map((member) => (
              <div key={member.name} className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent/50 transition-colors">
                <div className="relative">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-primary/10 text-primary text-xs font-medium">
                      {member.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className={`absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-background ${
                    member.status === "online" ? "bg-green-500" : 
                    member.status === "busy" ? "bg-yellow-500" : "bg-gray-400"
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