import { Search, Bell, Settings, User, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
    <header className="border-b border-border bg-card/80 backdrop-blur-xl sticky top-0 z-50">
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-primary/80 shadow-lg">
              <img src={flowinkLogo} alt="FlowInk" className="h-6 w-6 filter brightness-0 invert" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                FlowInk
              </h1>
              <p className="text-xs text-muted-foreground">Studio Manager</p>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Buscar clientes, citas..." 
                className="pl-10 w-80 bg-muted/50 border-0 focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" className="relative hover:bg-accent">
            <MessageSquare className="h-4 w-4" />
            <Badge 
              className="absolute -top-1 -right-1 h-4 w-4 p-0 text-xs bg-success text-success-foreground border-background"
              variant="default"
            >
              2
            </Badge>
          </Button>
          
          <Button variant="ghost" size="sm" className="relative hover:bg-accent">
            <Bell className="h-4 w-4" />
            <Badge 
              className="absolute -top-1 -right-1 h-4 w-4 p-0 text-xs bg-primary text-primary-foreground border-background"
              variant="default"
            >
              5
            </Badge>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="hover:bg-accent">
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                    <User className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div className="hidden sm:block text-left">
                    <div className="text-sm font-medium">Alex Rivera</div>
                    <div className="text-xs text-muted-foreground">Dueño</div>
                  </div>
                </div>
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