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
    section: "",
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
    <aside className="hidden lg:flex lg:w-20 border-r border-border bg-card h-[calc(100vh-48px)] flex-col fixed left-0 top-12 z-40">
      <div className="flex h-full flex-col">
        <div className="flex-1 py-2 flex flex-col justify-between">
          <div className="space-y-6">
            {menuItems.map((section, sectionIndex) => (
              <div key={section.section} className="space-y-2">
                {/* Category Label */}
                {section.section && (
                  <div className="px-2 mb-2">
                    <span className="text-[8px] font-medium text-muted-foreground/40 uppercase tracking-wide block text-center">
                      {section.section}
                    </span>
                    <div className="w-4 h-px bg-border/30 mx-auto mt-1"></div>
                  </div>
                )}
                
                {section.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.href;
                  return (
                    <Link 
                      key={item.href}
                      to={item.href}
                      className={`relative flex flex-col items-center justify-center py-1.5 px-0.5 mx-1 rounded-md transition-all duration-200 ${
                        isActive 
                          ? "bg-primary text-primary-foreground shadow-sm" 
                          : "text-muted-foreground hover:text-foreground hover:bg-accent"
                      }`}
                    >
                      <div className="relative mb-0.5 flex items-center justify-center">
                        <Icon className="h-3.5 w-3.5" />
                        {item.badge && (
                          <span className={`absolute -top-1 -right-1 h-3 w-3 rounded-full text-xs font-medium flex items-center justify-center ${
                            item.badge === "!" 
                              ? "bg-destructive text-destructive-foreground" 
                              : "bg-primary text-primary-foreground"
                          }`}>
                            {item.badge}
                          </span>
                        )}
                        {item.count && (
                          <span className="absolute -top-1 -right-1 h-3 w-3 bg-primary text-primary-foreground text-xs font-medium rounded-full flex items-center justify-center">
                            {item.count.length > 2 ? '9+' : item.count}
                          </span>
                        )}
                      </div>
                      <span className="text-xs font-medium text-center leading-tight px-0.5">
                        {item.label}
                      </span>
                    </Link>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="border-t border-border pt-3 space-y-2">
            <Link 
              to="/configuracion"
              className={`flex flex-col items-center justify-center py-1.5 px-0.5 mx-1 rounded-md transition-all duration-200 ${
                location.pathname === "/configuracion"
                  ? "bg-primary text-primary-foreground shadow-sm" 
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
              }`}
            >
              <Settings className="h-3.5 w-3.5 mb-0.5" />
              <span className="text-xs font-medium text-center">General</span>
            </Link>
            
            <button 
              className="flex flex-col items-center justify-center py-1.5 px-0.5 mx-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-all duration-200 w-full"
              title="Ayuda y soporte"
            >
              <Shield className="h-3.5 w-3.5 mb-0.5" />
              <span className="text-xs font-medium text-center">Ayuda</span>
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}