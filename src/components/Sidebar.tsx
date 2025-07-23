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
    <aside className="hidden lg:flex lg:w-16 border-r border-border bg-card h-full flex-col fixed left-0 top-0 z-40">
      <div className="flex h-full flex-col">
        {/* Logo/Brand */}
        <div className="flex items-center justify-center h-16 border-b border-border">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">F</span>
          </div>
        </div>
        
        <div className="flex-1 overflow-auto py-4">
          <div className="space-y-6">
            {menuItems.map((section, sectionIndex) => (
              <div key={section.section} className="space-y-1">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.href;
                  return (
                    <Link 
                      key={item.href}
                      to={item.href}
                      className={`relative flex items-center justify-center w-12 h-12 mx-2 rounded-xl transition-all duration-200 group ${
                        isActive 
                          ? "bg-primary text-primary-foreground shadow-lg" 
                          : "text-muted-foreground hover:text-foreground hover:bg-accent"
                      }`}
                      title={item.label}
                    >
                      <Icon className="h-5 w-5" />
                      {item.badge && (
                        <span className={`absolute -top-1 -right-1 h-5 w-5 rounded-full text-xs font-medium flex items-center justify-center ${
                          item.badge === "!" 
                            ? "bg-destructive text-destructive-foreground" 
                            : "bg-primary text-primary-foreground"
                        }`}>
                          {item.badge}
                        </span>
                      )}
                      {item.count && (
                        <span className="absolute -top-1 -right-1 h-4 w-4 bg-primary text-primary-foreground text-xs font-medium rounded-full flex items-center justify-center">
                          {item.count.length > 2 ? '99+' : item.count}
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}