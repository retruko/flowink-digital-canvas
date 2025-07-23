import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { UserPlus, Phone, Mail, Calendar, Eye } from "lucide-react";

const mockLeads = [
  {
    id: 1,
    name: "María González",
    email: "maria.gonzalez@email.com",
    phone: "+34 666 777 888",
    source: "Instagram",
    interest: "Tatuaje brazo",
    status: "new",
    createdAt: "2024-01-15",
    notes: "Interesada en un diseño floral en el brazo"
  },
  {
    id: 2,
    name: "Carlos Ruiz",
    email: "carlos.ruiz@email.com",
    phone: "+34 666 888 999",
    source: "Referido",
    interest: "Tatuaje espalda",
    status: "contacted",
    createdAt: "2024-01-14",
    notes: "Quiere un diseño de dragón japonés"
  },
  {
    id: 3,
    name: "Ana López",
    email: "ana.lopez@email.com",
    phone: "+34 666 999 000",
    source: "Google",
    interest: "Tatuaje pequeño",
    status: "qualified",
    createdAt: "2024-01-13",
    notes: "Primer tatuaje, busca algo discreto"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "new": return "bg-blue-500/20 text-blue-700 border-blue-300";
    case "contacted": return "bg-yellow-500/20 text-yellow-700 border-yellow-300";
    case "qualified": return "bg-green-500/20 text-green-700 border-green-300";
    default: return "bg-gray-500/20 text-gray-700 border-gray-300";
  }
};

const getStatusText = (status: string) => {
  switch (status) {
    case "new": return "Nuevo";
    case "contacted": return "Contactado";
    case "qualified": return "Calificado";
    default: return status;
  }
};

export default function Leads() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background/90">
      <div className="flex">
        <Sidebar />
        
        <div className="flex-1">
          <Header />
          
          <main className="p-4 sm:p-6 lg:p-8 lg:ml-20">
            <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8 transform scale-[0.90] origin-top">
              {/* Header */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Potenciales Clientes</h1>
                  <p className="text-sm sm:text-base text-muted-foreground mt-2">
                    Gestiona tus potenciales clientes y conviértelos en clientes
                  </p>
                </div>
                <Button className="shadow-lg w-full sm:w-auto">
                  <UserPlus className="h-4 w-4 mr-2" />
                  Nuevo Potencial Cliente
                </Button>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <Card className="shadow-soft border-border/50">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium text-muted-foreground">Total Potenciales Clientes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">12</div>
                    <p className="text-xs text-muted-foreground">+3 esta semana</p>
                  </CardContent>
                </Card>

                <Card className="shadow-soft border-border/50">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium text-muted-foreground">Nuevos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-blue-600">4</div>
                    <p className="text-xs text-muted-foreground">Sin contactar</p>
                  </CardContent>
                </Card>

                <Card className="shadow-soft border-border/50">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium text-muted-foreground">Contactados</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-yellow-600">5</div>
                    <p className="text-xs text-muted-foreground">En proceso</p>
                  </CardContent>
                </Card>

                <Card className="shadow-soft border-border/50">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium text-muted-foreground">Calificados</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-600">3</div>
                    <p className="text-xs text-muted-foreground">Listos para cita</p>
                  </CardContent>
                </Card>
              </div>

              {/* Leads Table */}
              <Card className="shadow-medium border-border/50">
                <CardHeader>
                  <CardTitle>Lista de Potenciales Clientes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                     {mockLeads.map((lead) => (
                       <div key={lead.id} className="flex flex-col lg:flex-row lg:items-center lg:justify-between p-4 rounded-lg border border-border/50 hover:bg-accent/30 transition-colors space-y-4 lg:space-y-0">
                         <div className="flex-1 space-y-2">
                           <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                             <h3 className="font-semibold">{lead.name}</h3>
                             <Badge className={getStatusColor(lead.status)}>
                               {getStatusText(lead.status)}
                             </Badge>
                             <span className="text-sm text-muted-foreground">
                               Origen: {lead.source}
                             </span>
                           </div>
                           
                           <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm text-muted-foreground">
                             <div className="flex items-center gap-2">
                               <Mail className="h-4 w-4" />
                               <span className="break-all">{lead.email}</span>
                             </div>
                             <div className="flex items-center gap-2">
                               <Phone className="h-4 w-4" />
                               {lead.phone}
                             </div>
                             <div className="flex items-center gap-2">
                               <Calendar className="h-4 w-4" />
                               {lead.createdAt}
                             </div>
                           </div>
                           
                           <div className="text-sm">
                             <span className="font-medium">Interés:</span> {lead.interest}
                           </div>
                           
                           {lead.notes && (
                             <div className="text-sm text-muted-foreground">
                               <span className="font-medium">Notas:</span> {lead.notes}
                             </div>
                           )}
                         </div>
                         
                         <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                           <Button variant="outline" size="sm" className="w-full sm:w-auto">
                             <Eye className="h-4 w-4 mr-2" />
                             Ver
                           </Button>
                           <Button variant="outline" size="sm" className="w-full sm:w-auto">
                             <Phone className="h-4 w-4 mr-2" />
                             Contactar
                           </Button>
                         </div>
                       </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}