-- Crear tabla para documentos de clientes
CREATE TABLE public.client_documents (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  client_id UUID NOT NULL,
  document_type TEXT NOT NULL CHECK (document_type IN ('dni', 'consent', 'medical', 'other')),
  file_name TEXT NOT NULL,
  file_url TEXT NOT NULL,
  file_size INTEGER,
  uploaded_by UUID,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Crear tabla para fotos de clientes/trabajos
CREATE TABLE public.client_photos (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  client_id UUID NOT NULL,
  appointment_id UUID,
  photo_type TEXT NOT NULL CHECK (photo_type IN ('before', 'during', 'after', 'reference', 'portfolio')),
  file_name TEXT NOT NULL,
  file_url TEXT NOT NULL,
  file_size INTEGER,
  description TEXT,
  uploaded_by UUID,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Crear tabla para configuración de permisos por usuario
CREATE TABLE public.user_permissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  permission_key TEXT NOT NULL,
  enabled BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id, permission_key)
);

-- Crear tabla para configuración de permisos por defecto
CREATE TABLE public.default_permissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  role TEXT NOT NULL CHECK (role IN ('owner', 'manager', 'artist', 'receptionist')),
  permission_key TEXT NOT NULL,
  enabled BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(role, permission_key)
);

-- Mejorar tabla de inventario con campos específicos para agujas e tintas
ALTER TABLE public.inventory_items 
ADD COLUMN needle_type TEXT,
ADD COLUMN needle_size TEXT,
ADD COLUMN ink_color_code TEXT,
ADD COLUMN expiry_date DATE,
ADD COLUMN sterilization_date DATE,
ADD COLUMN batch_number TEXT,
ADD COLUMN manufacturer TEXT;

-- Habilitar RLS en las nuevas tablas
ALTER TABLE public.client_documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.client_photos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_permissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.default_permissions ENABLE ROW LEVEL SECURITY;

-- Políticas RLS para documentos de clientes
CREATE POLICY "Usuarios autenticados pueden ver documentos"
ON public.client_documents FOR SELECT
TO authenticated
USING (auth.uid() IS NOT NULL);

CREATE POLICY "Usuarios autenticados pueden crear documentos"
ON public.client_documents FOR INSERT
TO authenticated
WITH CHECK (auth.uid() IS NOT NULL AND auth.uid() = uploaded_by);

CREATE POLICY "Usuarios autenticados pueden actualizar documentos"
ON public.client_documents FOR UPDATE
TO authenticated
USING (auth.uid() IS NOT NULL);

CREATE POLICY "Usuarios autenticados pueden eliminar documentos"
ON public.client_documents FOR DELETE
TO authenticated
USING (auth.uid() IS NOT NULL);

-- Políticas RLS para fotos de clientes
CREATE POLICY "Usuarios autenticados pueden ver fotos"
ON public.client_photos FOR SELECT
TO authenticated
USING (auth.uid() IS NOT NULL);

CREATE POLICY "Usuarios autenticados pueden crear fotos"
ON public.client_photos FOR INSERT
TO authenticated
WITH CHECK (auth.uid() IS NOT NULL AND auth.uid() = uploaded_by);

CREATE POLICY "Usuarios autenticados pueden actualizar fotos"
ON public.client_photos FOR UPDATE
TO authenticated
USING (auth.uid() IS NOT NULL);

CREATE POLICY "Usuarios autenticados pueden eliminar fotos"
ON public.client_photos FOR DELETE
TO authenticated
USING (auth.uid() IS NOT NULL);

-- Políticas RLS para permisos de usuario
CREATE POLICY "Los usuarios pueden ver sus propios permisos"
ON public.user_permissions FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Los administradores pueden gestionar permisos"
ON public.user_permissions FOR ALL
TO authenticated
USING (auth.uid() IS NOT NULL);

-- Políticas RLS para permisos por defecto
CREATE POLICY "Usuarios autenticados pueden ver permisos por defecto"
ON public.default_permissions FOR SELECT
TO authenticated
USING (auth.uid() IS NOT NULL);

CREATE POLICY "Los administradores pueden gestionar permisos por defecto"
ON public.default_permissions FOR ALL
TO authenticated
USING (auth.uid() IS NOT NULL);

-- Crear buckets de storage para documentos y fotos
INSERT INTO storage.buckets (id, name, public) 
VALUES ('client-documents', 'client-documents', false);

INSERT INTO storage.buckets (id, name, public) 
VALUES ('client-photos', 'client-photos', false);

-- Políticas de storage para documentos
CREATE POLICY "Usuarios autenticados pueden ver documentos"
ON storage.objects FOR SELECT
USING (bucket_id = 'client-documents' AND auth.uid() IS NOT NULL);

CREATE POLICY "Usuarios autenticados pueden subir documentos"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'client-documents' AND auth.uid() IS NOT NULL);

CREATE POLICY "Usuarios autenticados pueden actualizar documentos"
ON storage.objects FOR UPDATE
USING (bucket_id = 'client-documents' AND auth.uid() IS NOT NULL);

CREATE POLICY "Usuarios autenticados pueden eliminar documentos"
ON storage.objects FOR DELETE
USING (bucket_id = 'client-documents' AND auth.uid() IS NOT NULL);

-- Políticas de storage para fotos
CREATE POLICY "Usuarios autenticados pueden ver fotos"
ON storage.objects FOR SELECT
USING (bucket_id = 'client-photos' AND auth.uid() IS NOT NULL);

CREATE POLICY "Usuarios autenticados pueden subir fotos"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'client-photos' AND auth.uid() IS NOT NULL);

CREATE POLICY "Usuarios autenticados pueden actualizar fotos"
ON storage.objects FOR UPDATE
USING (bucket_id = 'client-photos' AND auth.uid() IS NOT NULL);

CREATE POLICY "Usuarios autenticados pueden eliminar fotos"
ON storage.objects FOR DELETE
USING (bucket_id = 'client-photos' AND auth.uid() IS NOT NULL);

-- Función para actualizar timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers para actualizar timestamps
CREATE TRIGGER update_client_documents_updated_at
  BEFORE UPDATE ON public.client_documents
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_client_photos_updated_at
  BEFORE UPDATE ON public.client_photos
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_user_permissions_updated_at
  BEFORE UPDATE ON public.user_permissions
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_default_permissions_updated_at
  BEFORE UPDATE ON public.default_permissions
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insertar permisos por defecto para cada rol
INSERT INTO public.default_permissions (role, permission_key, enabled) VALUES
-- Permisos para owner
('owner', 'view_all_clients', true),
('owner', 'edit_all_clients', true),
('owner', 'view_financial_data', true),
('owner', 'manage_inventory', true),
('owner', 'manage_users', true),
('owner', 'view_reports', true),
('owner', 'manage_appointments', true),
('owner', 'access_settings', true),

-- Permisos para manager
('manager', 'view_all_clients', true),
('manager', 'edit_all_clients', true),
('manager', 'view_financial_data', true),
('manager', 'manage_inventory', false),
('manager', 'manage_users', false),
('manager', 'view_reports', true),
('manager', 'manage_appointments', true),
('manager', 'access_settings', false),

-- Permisos para artist
('artist', 'view_all_clients', true),
('artist', 'edit_all_clients', false),
('artist', 'view_financial_data', false),
('artist', 'manage_inventory', false),
('artist', 'manage_users', false),
('artist', 'view_reports', false),
('artist', 'manage_appointments', true),
('artist', 'access_settings', false),

-- Permisos para receptionist
('receptionist', 'view_all_clients', true),
('receptionist', 'edit_all_clients', true),
('receptionist', 'view_financial_data', false),
('receptionist', 'manage_inventory', false),
('receptionist', 'manage_users', false),
('receptionist', 'view_reports', false),
('receptionist', 'manage_appointments', true),
('receptionist', 'access_settings', false);