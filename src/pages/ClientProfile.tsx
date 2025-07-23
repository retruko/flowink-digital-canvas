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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  User,
  Edit2,
  Plus,
  FileText,
  Camera,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Clock,
  Upload,
  Download,
  Eye,
  Trash2,
  AlertTriangle,
  Heart,
  Activity,
  FileCheck,
  Image,
  ArrowLeft
} from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface Client {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  birth_date: string;
  medical_conditions: string;
  allergies: string;
  emergency_contact_name: string;
  emergency_contact_phone: string;
  notes: string;
  created_at: string;
}

interface ClientDocument {
  id: string;
  document_type: string;
  file_name: string;
  file_url: string;
  file_size: number;
  notes: string;
  created_at: string;
}

interface ClientPhoto {
  id: string;
  photo_type: string;
  file_name: string;
  file_url: string;
  file_size: number;
  description: string;
  appointment_id: string;
  created_at: string;
}

interface Appointment {
  id: string;
  title: string;
  appointment_date: string;
  duration_minutes: number;
  status: string;
  description: string;
  price: number;
  artist_id: string;
}

const ClientProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [client, setClient] = useState<Client | null>(null);
  const [documents, setDocuments] = useState<ClientDocument[]>([]);
  const [photos, setPhotos] = useState<ClientPhoto[]>([]);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploadingDocument, setUploadingDocument] = useState(false);
  const [uploadingPhoto, setUploadingPhoto] = useState(false);

  const documentTypes = [
    { value: "dni", label: "DNI", icon: FileText, color: "text-blue-500" },
    { value: "consent", label: "Consentimiento", icon: FileCheck, color: "text-green-500" },
    { value: "medical", label: "Informe Médico", icon: Heart, color: "text-red-500" },
    { value: "other", label: "Otro", icon: FileText, color: "text-gray-500" }
  ];

  const photoTypes = [
    { value: "before", label: "Antes", icon: Camera, color: "text-orange-500" },
    { value: "during", label: "Durante", icon: Activity, color: "text-yellow-500" },
    { value: "after", label: "Después", icon: Eye, color: "text-green-500" },
    { value: "reference", label: "Referencia", icon: Image, color: "text-purple-500" },
    { value: "portfolio", label: "Portfolio", icon: Camera, color: "text-blue-500" }
  ];

  useEffect(() => {
    if (id) {
      loadClientData();
    }
  }, [id]);

  const loadClientData = async () => {
    try {
      const [clientRes, documentsRes, photosRes, appointmentsRes] = await Promise.all([
        supabase.from('clients').select('*').eq('id', id).single(),
        supabase.from('client_documents').select('*').eq('client_id', id).order('created_at', { ascending: false }),
        supabase.from('client_photos').select('*').eq('client_id', id).order('created_at', { ascending: false }),
        supabase.from('appointments').select('*').eq('client_id', id).order('appointment_date', { ascending: false }).limit(10)
      ]);

      if (clientRes.error) throw clientRes.error;
      if (documentsRes.error) throw documentsRes.error;
      if (photosRes.error) throw photosRes.error;
      if (appointmentsRes.error) throw appointmentsRes.error;

      setClient(clientRes.data);
      setDocuments(documentsRes.data || []);
      setPhotos(photosRes.data || []);
      setAppointments(appointmentsRes.data || []);
    } catch (error) {
      console.error('Error loading client data:', error);
      toast({
        title: "Error",
        description: "No se pudieron cargar los datos del cliente",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (file: File, type: 'document' | 'photo', documentType?: string, photoType?: string) => {
    if (type === 'document') setUploadingDocument(true);
    if (type === 'photo') setUploadingPhoto(true);

    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const bucket = type === 'document' ? 'client-documents' : 'client-photos';
      const filePath = `${id}/${fileName}`;

      // Upload file to Supabase Storage
      const { error: uploadError } = await supabase.storage
        .from(bucket)
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      // Get public URL
      const { data: urlData } = supabase.storage
        .from(bucket)
        .getPublicUrl(filePath);

      // Insert record in database
      if (type === 'document') {
        const { error } = await supabase
          .from('client_documents')
          .insert({
            client_id: id,
            document_type: documentType,
            file_name: file.name,
            file_url: urlData.publicUrl,
            file_size: file.size,
            uploaded_by: (await supabase.auth.getUser()).data.user?.id
          });

        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('client_photos')
          .insert({
            client_id: id,
            photo_type: photoType,
            file_name: file.name,
            file_url: urlData.publicUrl,
            file_size: file.size,
            uploaded_by: (await supabase.auth.getUser()).data.user?.id
          });

        if (error) throw error;
      }

      toast({
        title: "Archivo subido",
        description: `${type === 'document' ? 'Documento' : 'Foto'} subido correctamente`
      });

      loadClientData(); // Reload data
    } catch (error) {
      console.error('Error uploading file:', error);
      toast({
        title: "Error",
        description: "No se pudo subir el archivo",
        variant: "destructive"
      });
    } finally {
      if (type === 'document') setUploadingDocument(false);
      if (type === 'photo') setUploadingPhoto(false);
    }
  };

  const getDocumentTypeInfo = (type: string) => {
    return documentTypes.find(dt => dt.value === type) || documentTypes[0];
  };

  const getPhotoTypeInfo = (type: string) => {
    return photoTypes.find(pt => pt.value === type) || photoTypes[0];
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

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
                  <p className="text-muted-foreground">Cargando ficha del cliente...</p>
                </div>
              </div>
            </main>
          </div>
        </div>
      </ProtectedRoute>
    );
  }

  if (!client) {
    return (
      <ProtectedRoute>
        <div className="min-h-screen bg-gradient-to-br from-background via-background/90 to-background/80">
          <Header />
          <div className="flex">
            <Sidebar />
            <main className="flex-1 p-8 lg:ml-20">
              <div className="text-center py-12">
                <h2 className="text-2xl font-semibold mb-4">Cliente no encontrado</h2>
                <Button onClick={() => navigate('/clientes')}>
                  Volver a Clientes
                </Button>
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
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Button variant="ghost" size="sm" onClick={() => navigate('/clientes')}>
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Volver
                  </Button>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-16 w-16 ring-2 ring-border">
                      <AvatarFallback className="bg-primary/10 text-primary font-bold text-xl">
                        {client.full_name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h1 className="text-3xl font-bold text-foreground">{client.full_name}</h1>
                      <p className="text-muted-foreground">{client.email}</p>
                    </div>
                  </div>
                </div>
                <Button variant="outline">
                  <Edit2 className="h-4 w-4 mr-2" />
                  Editar Cliente
                </Button>
              </div>

              {/* Stats rápidas */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                        <FileText className="h-6 w-6 text-blue-500" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold">{documents.length}</p>
                        <p className="text-sm text-muted-foreground">Documentos</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
                        <Camera className="h-6 w-6 text-purple-500" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold">{photos.length}</p>
                        <p className="text-sm text-muted-foreground">Fotos</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                        <Calendar className="h-6 w-6 text-green-500" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold">{appointments.length}</p>
                        <p className="text-sm text-muted-foreground">Citas</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 bg-orange-500/10 rounded-lg flex items-center justify-center">
                        <Clock className="h-6 w-6 text-orange-500" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold">
                          {client.created_at ? new Date(client.created_at).getFullYear() : 'N/A'}
                        </p>
                        <p className="text-sm text-muted-foreground">Cliente desde</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Tabs principales */}
              <Tabs defaultValue="info" className="space-y-6">
                <TabsList className="grid w-full grid-cols-5">
                  <TabsTrigger value="info">Información</TabsTrigger>
                  <TabsTrigger value="documents">Documentos</TabsTrigger>
                  <TabsTrigger value="photos">Fotos</TabsTrigger>
                  <TabsTrigger value="appointments">Citas</TabsTrigger>
                  <TabsTrigger value="medical">Médico</TabsTrigger>
                </TabsList>

                {/* Información Personal */}
                <TabsContent value="info" className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Datos Personales</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label>Email</Label>
                            <div className="flex items-center gap-2 mt-1">
                              <Mail className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm">{client.email || 'No especificado'}</span>
                            </div>
                          </div>
                          <div>
                            <Label>Teléfono</Label>
                            <div className="flex items-center gap-2 mt-1">
                              <Phone className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm">{client.phone || 'No especificado'}</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <Label>Fecha de Nacimiento</Label>
                          <div className="flex items-center gap-2 mt-1">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">
                              {client.birth_date 
                                ? new Date(client.birth_date).toLocaleDateString('es-ES')
                                : 'No especificada'
                              }
                            </span>
                          </div>
                        </div>
                        <div>
                          <Label>Notas</Label>
                          <p className="text-sm text-muted-foreground mt-1">
                            {client.notes || 'Sin notas adicionales'}
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Contacto de Emergencia</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <Label>Nombre</Label>
                          <div className="flex items-center gap-2 mt-1">
                            <User className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">
                              {client.emergency_contact_name || 'No especificado'}
                            </span>
                          </div>
                        </div>
                        <div>
                          <Label>Teléfono</Label>
                          <div className="flex items-center gap-2 mt-1">
                            <Phone className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">
                              {client.emergency_contact_phone || 'No especificado'}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                {/* Documentos */}
                <TabsContent value="documents" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <div>
                          <CardTitle>Documentos del Cliente</CardTitle>
                          <CardDescription>DNI, consentimientos y otros documentos legales</CardDescription>
                        </div>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button>
                              <Plus className="h-4 w-4 mr-2" />
                              Subir Documento
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Subir Nuevo Documento</DialogTitle>
                              <DialogDescription>
                                Selecciona el tipo de documento y súbelo al sistema
                              </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4">
                              <p className="text-sm text-muted-foreground">Funcionalidad en desarrollo...</p>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </CardHeader>
                    <CardContent>
                      {documents.length === 0 ? (
                        <div className="text-center py-8">
                          <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                          <p className="text-muted-foreground">No hay documentos subidos</p>
                        </div>
                      ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {documents.map((doc) => {
                            const typeInfo = getDocumentTypeInfo(doc.document_type);
                            const IconComponent = typeInfo.icon;
                            
                            return (
                              <div key={doc.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                                <div className="flex items-center justify-between mb-2">
                                  <div className="flex items-center gap-3">
                                    <IconComponent className={`h-5 w-5 ${typeInfo.color}`} />
                                    <div>
                                      <p className="font-medium text-sm">{typeInfo.label}</p>
                                      <p className="text-xs text-muted-foreground">{doc.file_name}</p>
                                    </div>
                                  </div>
                                  <div className="flex gap-1">
                                    <Button variant="ghost" size="sm">
                                      <Eye className="h-4 w-4" />
                                    </Button>
                                    <Button variant="ghost" size="sm">
                                      <Download className="h-4 w-4" />
                                    </Button>
                                    <Button variant="ghost" size="sm">
                                      <Trash2 className="h-4 w-4" />
                                    </Button>
                                  </div>
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  <p>{formatFileSize(doc.file_size)}</p>
                                  <p>Subido el {new Date(doc.created_at).toLocaleDateString('es-ES')}</p>
                                  {doc.notes && <p className="mt-1">Nota: {doc.notes}</p>}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Fotos */}
                <TabsContent value="photos" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <div>
                          <CardTitle>Galería de Fotos</CardTitle>
                          <CardDescription>Fotos del proceso, referencias y portfolio</CardDescription>
                        </div>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button>
                              <Plus className="h-4 w-4 mr-2" />
                              Subir Foto
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Subir Nueva Foto</DialogTitle>
                              <DialogDescription>
                                Selecciona el tipo de foto y súbela al sistema
                              </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4">
                              <p className="text-sm text-muted-foreground">Funcionalidad en desarrollo...</p>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </CardHeader>
                    <CardContent>
                      {photos.length === 0 ? (
                        <div className="text-center py-8">
                          <Camera className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                          <p className="text-muted-foreground">No hay fotos subidas</p>
                        </div>
                      ) : (
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                          {photos.map((photo) => {
                            const typeInfo = getPhotoTypeInfo(photo.photo_type);
                            
                            return (
                              <div key={photo.id} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                                <div className="aspect-square bg-muted flex items-center justify-center">
                                  <Camera className="h-8 w-8 text-muted-foreground" />
                                </div>
                                <div className="p-3">
                                  <div className="flex items-center gap-2 mb-1">
                                    <Badge variant="outline" className={typeInfo.color}>
                                      {typeInfo.label}
                                    </Badge>
                                  </div>
                                  <p className="text-xs text-muted-foreground truncate">{photo.file_name}</p>
                                  {photo.description && (
                                    <p className="text-xs text-muted-foreground mt-1">{photo.description}</p>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Citas */}
                <TabsContent value="appointments" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Historial de Citas</CardTitle>
                      <CardDescription>Últimas citas y próximas reservas</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {appointments.length === 0 ? (
                        <div className="text-center py-8">
                          <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                          <p className="text-muted-foreground">No hay citas registradas</p>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          {appointments.map((appointment) => (
                            <div key={appointment.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h3 className="font-medium">{appointment.title}</h3>
                                  <p className="text-sm text-muted-foreground">{appointment.description}</p>
                                  <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                                    <span>{new Date(appointment.appointment_date).toLocaleDateString('es-ES')}</span>
                                    <span>{appointment.duration_minutes} min</span>
                                    {appointment.price && <span>€{appointment.price}</span>}
                                  </div>
                                </div>
                                <Badge variant={appointment.status === 'completed' ? 'default' : 'secondary'}>
                                  {appointment.status === 'completed' ? 'Completada' : 
                                   appointment.status === 'confirmed' ? 'Confirmada' : 
                                   appointment.status === 'pending' ? 'Pendiente' : appointment.status}
                                </Badge>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Información Médica */}
                <TabsContent value="medical" className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Heart className="h-5 w-5 text-red-500" />
                          Condiciones Médicas
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">
                          {client.medical_conditions || 'Sin condiciones médicas reportadas'}
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <AlertTriangle className="h-5 w-5 text-orange-500" />
                          Alergias
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">
                          {client.allergies || 'Sin alergias reportadas'}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default ClientProfile;