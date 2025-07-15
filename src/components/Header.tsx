import { Calendar, Bell, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import flowinkLogo from "@/assets/flowink-logo.png";

export function Header() {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm">
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <img src={flowinkLogo} alt="FlowInk" className="h-8 w-8" />
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              FlowInk
            </h1>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="relative">
            <Calendar className="h-4 w-4" />
            <span className="hidden sm:inline ml-2">Agenda</span>
          </Button>
          
          <Button variant="ghost" size="sm" className="relative">
            <Bell className="h-4 w-4" />
            <Badge 
              className="absolute -top-1 -right-1 h-4 w-4 p-0 text-xs bg-primary text-primary-foreground"
              variant="default"
            >
              3
            </Badge>
            <span className="hidden sm:inline ml-2">Notificaciones</span>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">
                <User className="h-4 w-4" />
                <span className="hidden sm:inline ml-2">Mi Cuenta</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Configuración
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">
                Cerrar Sesión
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}