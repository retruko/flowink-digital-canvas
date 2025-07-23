import { useState, useEffect } from "react";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Mail, 
  Edit2, 
  Plus, 
  Clock, 
  Calendar,
  Settings,
  Send,
  History,
  Users,
  Gift,
  Heart,
  Star,
  CheckCircle,
  XCircle,
  AlertCircle
} from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { DashboardCard } from "@/components/DashboardCard";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface EmailTemplate {
  id: string;
  name: string;
  type: string;
  subject: string;
  body_html: string;
  body_text: string;
  is_active: boolean;
  created_at: string;
}

interface EmailAutomationSetting {
  id: string;
  email_type: string;
  is_enabled: boolean;
  send_after_days: number | null;
  send_at_time: string | null;
  template_id: string | null;
}

interface EmailLog {
  id: string;
  client_id: string;
  email_type: string;
  recipient_email: string;
  subject: string;
  status: string;
  sent_at: string | null;
  error_message: string | null;
  created_at: string;
}

const Communications = () => {
  const [templates, setTemplates] = useState<EmailTemplate[]>([]);
  const [automationSettings, setAutomationSettings] = useState<EmailAutomationSetting[]>([]);
  const [emailLogs, setEmailLogs] = useState<EmailLog[]>([]);
  const [isTemplateDialogOpen, setIsTemplateDialogOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const emailTypes = [
    { type: "review_request", label: "Solicitud de Reseña", icon: Star, color: "text-yellow-500" },
    { type: "aftercare", label: "Cuidado Post-Tatuaje", icon: Heart, color: "text-red-500" },
    { type: "birthday", label: "Felicitación de Cumpleaños", icon: Gift, color: "text-purple-500" },
    { type: "appointment_reminder", label: "Recordatorio de Cita", icon: Calendar, color: "text-blue-500" },
    { type: "follow_up", label: "Seguimiento", icon: Users, color: "text-green-500" }
  ];

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [templatesRes, settingsRes, logsRes] = await Promise.all([
        supabase.from('email_templates').select('*').order('created_at', { ascending: false }),
        supabase.from('email_automation_settings').select('*'),
        supabase.from('email_logs').select('*').order('created_at', { ascending: false }).limit(50)
      ]);

      if (templatesRes.error) throw templatesRes.error;
      if (settingsRes.error) throw settingsRes.error;
      if (logsRes.error) throw logsRes.error;

      setTemplates(templatesRes.data || []);
      setAutomationSettings(settingsRes.data || []);
      setEmailLogs(logsRes.data || []);
    } catch (error) {
      console.error('Error loading data:', error);
      toast({
        title: "Error",
        description: "No se pudieron cargar los datos",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const updateAutomationSetting = async (emailType: string, field: string, value: any) => {
    try {
      const { error } = await supabase
        .from('email_automation_settings')
        .update({ [field]: value })
        .eq('email_type', emailType);

      if (error) throw error;

      setAutomationSettings(prev => 
        prev.map(setting => 
          setting.email_type === emailType 
            ? { ...setting, [field]: value }
            : setting
        )
      );

      toast({
        title: "Configuración actualizada",
        description: "Los cambios se han guardado correctamente"
      });
    } catch (error) {
      console.error('Error updating setting:', error);
      toast({
        title: "Error",
        description: "No se pudo actualizar la configuración",
        variant: "destructive"
      });
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'sent': return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'failed': return <XCircle className="h-4 w-4 text-red-500" />;
      case 'pending': return <Clock className="h-4 w-4 text-yellow-500" />;
      default: return <AlertCircle className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'sent': return 'Enviado';
      case 'failed': return 'Error';
      case 'pending': return 'Pendiente';
      default: return status;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'sent': return 'bg-green-500/20 text-green-700 border-green-500/30';
      case 'failed': return 'bg-red-500/20 text-red-700 border-red-500/30';
      case 'pending': return 'bg-yellow-500/20 text-yellow-700 border-yellow-500/30';
      default: return 'bg-gray-500/20 text-gray-700 border-gray-500/30';
    }
  };

  const totalEmailsSent = emailLogs.filter(log => log.status === 'sent').length;
  const pendingEmails = emailLogs.filter(log => log.status === 'pending').length;
  const failedEmails = emailLogs.filter(log => log.status === 'failed').length;
  const activeAutomations = automationSettings.filter(setting => setting.is_enabled).length;

  if (loading) {
    return (
      <ProtectedRoute>
        <div className="min-h-screen bg-gradient-to-br from-background via-background/90 to-background/80">
          <Header />
          <div className="flex">
            <Sidebar />
            <main className="flex-1 p-8 lg:ml-20">
              <div className="flex items-center justify-center h-64">
                <div className="text-center">
                  <div className="h-8 w-8 animate-spin border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
                  <p className="text-muted-foreground">Cargando...</p>
                </div>
              </div>
            </main>
          </div>
        </div>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-background via-background/90 to-background/80">
        <Header />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-8 lg:ml-20">
            <div className="space-y-8 transform scale-[0.90] origin-top">
              {/* Header */}
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-4xl font-bold text-foreground">Comunicaciones</h1>
                  <p className="text-muted-foreground mt-2">Gestiona los emails automáticos del estudio</p>
                </div>
                <Dialog open={isTemplateDialogOpen} onOpenChange={setIsTemplateDialogOpen}>
                  <DialogTrigger asChild>
                    <Button className="gap-2">
                      <Plus className="h-4 w-4" />
                      Nueva Plantilla
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Nueva Plantilla de Email</DialogTitle>
                      <DialogDescription>
                        Crea una nueva plantilla personalizada
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground">Funcionalidad en desarrollo...</p>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <DashboardCard
                  title="Emails Enviados"
                  value={totalEmailsSent.toString()}
                  description="Este mes"
                  icon={Send}
                />
                
                <DashboardCard
                  title="Pendientes"
                  value={pendingEmails.toString()}
                  description="En cola"
                  icon={Clock}
                />

                <DashboardCard
                  title="Automatizaciones"
                  value={activeAutomations.toString()}
                  description="Activas"
                  icon={Settings}
                />

                <DashboardCard
                  title="Fallos"
                  value={failedEmails.toString()}
                  description="Errores"
                  icon={AlertCircle}
                />
              </div>

              {/* Tabs principales */}
              <Tabs defaultValue="automation" className="space-y-6">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="automation">Automatización</TabsTrigger>
                  <TabsTrigger value="templates">Plantillas</TabsTrigger>
                  <TabsTrigger value="logs">Historial</TabsTrigger>
                </TabsList>

                {/* Automatización */}
                <TabsContent value="automation" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Settings className="h-5 w-5" />
                        Configuración de Emails Automáticos
                      </CardTitle>
                      <CardDescription>
                        Activa y configura los emails que se envían automáticamente
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {emailTypes.map((emailType) => {
                          const setting = automationSettings.find(s => s.email_type === emailType.type);
                          const IconComponent = emailType.icon;
                          
                          return (
                            <div key={emailType.type} className="flex items-center justify-between p-4 border rounded-lg">
                              <div className="flex items-center gap-4">
                                <IconComponent className={`h-6 w-6 ${emailType.color}`} />
                                <div>
                                  <h3 className="font-medium">{emailType.label}</h3>
                                  <p className="text-sm text-muted-foreground">
                                    {emailType.type === 'review_request' && 'Se envía después de completar un tatuaje'}
                                    {emailType.type === 'aftercare' && 'Instrucciones de cuidado post-tatuaje'}
                                    {emailType.type === 'birthday' && 'Felicitación con descuento especial'}
                                    {emailType.type === 'appointment_reminder' && 'Recordatorio de cita próxima'}
                                    {emailType.type === 'follow_up' && 'Seguimiento de satisfacción'}
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-center gap-4">
                                {setting?.send_after_days && (
                                  <div className="text-sm text-muted-foreground">
                                    {setting.send_after_days} días después
                                  </div>
                                )}
                                {setting?.send_at_time && (
                                  <div className="text-sm text-muted-foreground">
                                    a las {setting.send_at_time}
                                  </div>
                                )}
                                <Switch
                                  checked={setting?.is_enabled || false}
                                  onCheckedChange={(checked) => 
                                    updateAutomationSetting(emailType.type, 'is_enabled', checked)
                                  }
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Plantillas */}
                <TabsContent value="templates" className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {templates.map((template) => {
                      const emailType = emailTypes.find(t => t.type === template.type);
                      const IconComponent = emailType?.icon || Mail;
                      
                      return (
                        <Card key={template.id} className="hover:shadow-lg transition-shadow">
                          <CardHeader>
                            <div className="flex justify-between items-start">
                              <div className="flex items-center gap-3">
                                <IconComponent className={`h-5 w-5 ${emailType?.color || 'text-gray-500'}`} />
                                <div>
                                  <CardTitle className="text-lg">{template.name}</CardTitle>
                                  <CardDescription>{emailType?.label}</CardDescription>
                                </div>
                              </div>
                              <div className="flex gap-2">
                                <Badge variant={template.is_active ? "default" : "secondary"}>
                                  {template.is_active ? "Activa" : "Inactiva"}
                                </Badge>
                                <Button variant="ghost" size="sm">
                                  <Edit2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-3">
                              <div>
                                <p className="text-sm font-medium">Asunto:</p>
                                <p className="text-sm text-muted-foreground">{template.subject}</p>
                              </div>
                              <div>
                                <p className="text-sm font-medium">Vista previa:</p>
                                <div 
                                  className="text-sm text-muted-foreground bg-muted/50 p-3 rounded max-h-24 overflow-hidden"
                                  dangerouslySetInnerHTML={{ 
                                    __html: template.body_html.replace(/{{[^}]+}}/g, '<span class="text-primary font-medium">[Variable]</span>').substring(0, 200) + '...'
                                  }}
                                />
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </TabsContent>

                {/* Historial */}
                <TabsContent value="logs" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <History className="h-5 w-5" />
                        Historial de Emails Enviados
                      </CardTitle>
                      <CardDescription>
                        Últimos 50 emails enviados automáticamente
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {emailLogs.length === 0 ? (
                          <div className="text-center py-8">
                            <Mail className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                            <p className="text-muted-foreground">No hay emails en el historial</p>
                          </div>
                        ) : (
                          emailLogs.map((log) => {
                            const emailType = emailTypes.find(t => t.type === log.email_type);
                            
                            return (
                              <div key={log.id} className="flex items-center justify-between p-4 border rounded-lg">
                                <div className="flex items-center gap-4">
                                  {getStatusIcon(log.status)}
                                  <div>
                                    <p className="font-medium">{emailType?.label || log.email_type}</p>
                                    <p className="text-sm text-muted-foreground">
                                      Para: {log.recipient_email}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                      {log.subject}
                                    </p>
                                  </div>
                                </div>
                                <div className="text-right">
                                  <Badge className={getStatusColor(log.status)}>
                                    {getStatusLabel(log.status)}
                                  </Badge>
                                  <p className="text-sm text-muted-foreground mt-1">
                                    {log.sent_at 
                                      ? new Date(log.sent_at).toLocaleDateString('es-ES', {
                                          day: '2-digit',
                                          month: '2-digit',
                                          year: 'numeric',
                                          hour: '2-digit',
                                          minute: '2-digit'
                                        })
                                      : new Date(log.created_at).toLocaleDateString('es-ES', {
                                          day: '2-digit',
                                          month: '2-digit',
                                          year: 'numeric'
                                        })
                                    }
                                  </p>
                                </div>
                              </div>
                            );
                          })
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Communications;