import { Search, Bell, Settings, User, MessageSquare, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import flowinkLogo from "@/assets/flowink-logo.png";
import { MobileSidebar } from "./MobileSidebar";

export function Header() {
  return (
    <header className="border-b border-border bg-card/90 backdrop-blur-xl sticky top-0 z-50 shadow-soft">
      <div className="flex h-16 sm:h-20 items-center justify-between px-4 sm:px-8">
        <div className="flex items-center space-x-2 sm:space-x-8">
          {/* Mobile menu button */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="lg:hidden h-8 w-8 sm:h-10 sm:w-10 rounded-2xl hover:bg-accent/50">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-80">
              <MobileSidebar />
            </SheetContent>
          </Sheet>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="flex items-center justify-center h-8 w-8 sm:h-12 sm:w-12 rounded-2xl bg-gradient-to-br from-primary via-primary to-primary/80 shadow-glow">
              <img src={flowinkLogo} alt="Tatuoria" className="h-4 w-4 sm:h-7 sm:w-7 filter brightness-0 invert" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl sm:text-2xl font-bold font-display bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
                Tatuoria
              </h1>
              <p className="text-xs sm:text-sm text-muted-foreground font-medium">Studio Manager</p>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="Buscar clientes, citas, artistas..." 
                className="pl-12 w-96 h-12 bg-gradient-to-r from-muted/30 to-muted/20 border-0 rounded-2xl focus:ring-2 focus:ring-primary/30 shadow-soft backdrop-blur-sm"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-1 sm:space-x-3">
          <Button variant="ghost" size="sm" className="relative h-8 w-8 sm:h-12 sm:w-12 rounded-2xl hover:bg-accent/50 transition-all duration-300">
            <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5" />
            <Badge 
              className="absolute -top-1 -right-1 h-4 w-4 sm:h-5 sm:w-5 p-0 text-xs bg-success text-success-foreground border-2 border-background rounded-full shadow-soft"
              variant="default"
            >
              2
            </Badge>
          </Button>
          
          <Button variant="ghost" size="sm" className="relative h-8 w-8 sm:h-12 sm:w-12 rounded-2xl hover:bg-accent/50 transition-all duration-300">
            <Bell className="h-4 w-4 sm:h-5 sm:w-5" />
            <Badge 
              className="absolute -top-1 -right-1 h-4 w-4 sm:h-5 sm:w-5 p-0 text-xs bg-primary text-primary-foreground border-2 border-background rounded-full shadow-soft"
              variant="default"
            >
              5
            </Badge>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="h-10 px-2 sm:h-14 sm:px-4 rounded-2xl hover:bg-accent/50 transition-all duration-300">
                <div className="flex items-center space-x-1 sm:space-x-3">
                  <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-2xl bg-gradient-to-br from-primary via-primary to-primary/80 flex items-center justify-center shadow-medium">
                    <User className="h-4 w-4 sm:h-5 sm:w-5 text-primary-foreground" />
                  </div>
                  <div className="hidden md:block text-left">
                    <div className="text-sm font-semibold">Alex Rivera</div>
                    <div className="text-xs text-muted-foreground">Dueño del Estudio</div>
                  </div>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64 rounded-2xl shadow-large border-border/50 bg-card/95 backdrop-blur-xl">
              <DropdownMenuItem className="rounded-xl m-1 h-12">
                <Settings className="mr-3 h-4 w-4" />
                Configuración
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="rounded-xl m-1 h-12 text-destructive focus:text-destructive">
                Cerrar Sesión
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}