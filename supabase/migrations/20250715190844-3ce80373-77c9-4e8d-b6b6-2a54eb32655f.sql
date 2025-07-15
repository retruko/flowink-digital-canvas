-- Crear tabla de perfiles de usuario
CREATE TABLE public.profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  email TEXT,
  phone TEXT,
  role TEXT NOT NULL DEFAULT 'user' CHECK (role IN ('admin', 'artist', 'receptionist', 'user')),
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Habilitar RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Políticas para profiles
CREATE POLICY "Los usuarios pueden ver todos los perfiles" 
ON public.profiles 
FOR SELECT 
USING (true);

CREATE POLICY "Los usuarios pueden actualizar su propio perfil" 
ON public.profiles 
FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Los usuarios pueden insertar su propio perfil" 
ON public.profiles 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- Función para crear perfil automáticamente
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (user_id, full_name, email)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name'),
    NEW.email
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger para crear perfil automáticamente
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Función para actualizar updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger para updated_at en profiles
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Tabla de clientes
CREATE TABLE public.clients (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  birth_date DATE,
  emergency_contact_name TEXT,
  emergency_contact_phone TEXT,
  medical_conditions TEXT,
  allergies TEXT,
  notes TEXT,
  created_by UUID REFERENCES public.profiles(user_id),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Habilitar RLS para clients
ALTER TABLE public.clients ENABLE ROW LEVEL SECURITY;

-- Políticas para clients
CREATE POLICY "Usuarios autenticados pueden ver clientes" 
ON public.clients 
FOR SELECT 
USING (auth.uid() IS NOT NULL);

CREATE POLICY "Usuarios autenticados pueden crear clientes" 
ON public.clients 
FOR INSERT 
WITH CHECK (auth.uid() IS NOT NULL AND auth.uid() = created_by);

CREATE POLICY "Usuarios autenticados pueden actualizar clientes" 
ON public.clients 
FOR UPDATE 
USING (auth.uid() IS NOT NULL);

CREATE POLICY "Usuarios autenticados pueden eliminar clientes" 
ON public.clients 
FOR DELETE 
USING (auth.uid() IS NOT NULL);

-- Trigger para updated_at en clients
CREATE TRIGGER update_clients_updated_at
  BEFORE UPDATE ON public.clients
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Tabla de citas
CREATE TABLE public.appointments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  client_id UUID NOT NULL REFERENCES public.clients(id) ON DELETE CASCADE,
  artist_id UUID REFERENCES public.profiles(user_id),
  title TEXT NOT NULL,
  description TEXT,
  appointment_date TIMESTAMP WITH TIME ZONE NOT NULL,
  duration_minutes INTEGER NOT NULL DEFAULT 120,
  status TEXT NOT NULL DEFAULT 'scheduled' CHECK (status IN ('scheduled', 'confirmed', 'in_progress', 'completed', 'cancelled', 'no_show')),
  price DECIMAL(10,2),
  deposit_paid DECIMAL(10,2) DEFAULT 0,
  notes TEXT,
  created_by UUID REFERENCES public.profiles(user_id),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Habilitar RLS para appointments
ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;

-- Políticas para appointments
CREATE POLICY "Usuarios autenticados pueden ver citas" 
ON public.appointments 
FOR SELECT 
USING (auth.uid() IS NOT NULL);

CREATE POLICY "Usuarios autenticados pueden crear citas" 
ON public.appointments 
FOR INSERT 
WITH CHECK (auth.uid() IS NOT NULL AND auth.uid() = created_by);

CREATE POLICY "Usuarios autenticados pueden actualizar citas" 
ON public.appointments 
FOR UPDATE 
USING (auth.uid() IS NOT NULL);

CREATE POLICY "Usuarios autenticados pueden eliminar citas" 
ON public.appointments 
FOR DELETE 
USING (auth.uid() IS NOT NULL);

-- Trigger para updated_at en appointments
CREATE TRIGGER update_appointments_updated_at
  BEFORE UPDATE ON public.appointments
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Tabla de inventario
CREATE TABLE public.inventory_items (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('ink', 'needles', 'equipment', 'supplies', 'aftercare')),
  brand TEXT,
  color TEXT,
  size TEXT,
  current_stock INTEGER NOT NULL DEFAULT 0,
  min_stock_level INTEGER NOT NULL DEFAULT 5,
  unit_cost DECIMAL(10,2),
  supplier TEXT,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Habilitar RLS para inventory_items
ALTER TABLE public.inventory_items ENABLE ROW LEVEL SECURITY;

-- Políticas para inventory_items
CREATE POLICY "Usuarios autenticados pueden ver inventario" 
ON public.inventory_items 
FOR SELECT 
USING (auth.uid() IS NOT NULL);

CREATE POLICY "Usuarios autenticados pueden gestionar inventario" 
ON public.inventory_items 
FOR ALL 
USING (auth.uid() IS NOT NULL);

-- Trigger para updated_at en inventory_items
CREATE TRIGGER update_inventory_items_updated_at
  BEFORE UPDATE ON public.inventory_items
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Tabla de servicios
CREATE TABLE public.services (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  base_price DECIMAL(10,2) NOT NULL,
  duration_minutes INTEGER NOT NULL DEFAULT 120,
  category TEXT NOT NULL CHECK (category IN ('tattoo', 'piercing', 'consultation', 'touch_up', 'removal')),
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Habilitar RLS para services
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;

-- Políticas para services
CREATE POLICY "Todos pueden ver servicios activos" 
ON public.services 
FOR SELECT 
USING (is_active = true);

CREATE POLICY "Usuarios autenticados pueden gestionar servicios" 
ON public.services 
FOR ALL 
USING (auth.uid() IS NOT NULL);

-- Trigger para updated_at en services
CREATE TRIGGER update_services_updated_at
  BEFORE UPDATE ON public.services
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Tabla de facturas
CREATE TABLE public.invoices (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  invoice_number TEXT UNIQUE NOT NULL,
  client_id UUID NOT NULL REFERENCES public.clients(id),
  appointment_id UUID REFERENCES public.appointments(id),
  subtotal DECIMAL(10,2) NOT NULL DEFAULT 0,
  tax_amount DECIMAL(10,2) NOT NULL DEFAULT 0,
  total_amount DECIMAL(10,2) NOT NULL DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'sent', 'paid', 'overdue', 'cancelled')),
  payment_method TEXT CHECK (payment_method IN ('cash', 'card', 'transfer', 'other')),
  paid_at TIMESTAMP WITH TIME ZONE,
  due_date TIMESTAMP WITH TIME ZONE,
  notes TEXT,
  created_by UUID REFERENCES public.profiles(user_id),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Habilitar RLS para invoices
ALTER TABLE public.invoices ENABLE ROW LEVEL SECURITY;

-- Políticas para invoices
CREATE POLICY "Usuarios autenticados pueden ver facturas" 
ON public.invoices 
FOR SELECT 
USING (auth.uid() IS NOT NULL);

CREATE POLICY "Usuarios autenticados pueden gestionar facturas" 
ON public.invoices 
FOR ALL 
USING (auth.uid() IS NOT NULL);

-- Trigger para updated_at en invoices
CREATE TRIGGER update_invoices_updated_at
  BEFORE UPDATE ON public.invoices
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Generar número de factura automáticamente
CREATE OR REPLACE FUNCTION public.generate_invoice_number()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.invoice_number IS NULL THEN
    NEW.invoice_number := 'INV-' || to_char(now(), 'YYYY') || '-' || 
                         LPAD((SELECT COALESCE(MAX(CAST(SPLIT_PART(invoice_number, '-', 3) AS INTEGER)), 0) + 1 
                               FROM public.invoices 
                               WHERE invoice_number LIKE 'INV-' || to_char(now(), 'YYYY') || '-%')::TEXT, 4, '0');
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER generate_invoice_number_trigger
  BEFORE INSERT ON public.invoices
  FOR EACH ROW
  EXECUTE FUNCTION public.generate_invoice_number();

-- Insertar algunos datos de ejemplo
INSERT INTO public.services (name, description, base_price, duration_minutes, category) VALUES
('Tatuaje Pequeño', 'Tatuaje de hasta 5cm', 80.00, 60, 'tattoo'),
('Tatuaje Mediano', 'Tatuaje de 5-15cm', 150.00, 120, 'tattoo'),
('Tatuaje Grande', 'Tatuaje de más de 15cm', 300.00, 240, 'tattoo'),
('Consulta', 'Consulta y diseño', 30.00, 30, 'consultation'),
('Retoque', 'Retoque de tatuaje existente', 50.00, 60, 'touch_up');

INSERT INTO public.inventory_items (name, category, brand, current_stock, min_stock_level, unit_cost) VALUES
('Tinta Negra', 'ink', 'Eternal Ink', 10, 3, 15.00),
('Tinta Roja', 'ink', 'Eternal Ink', 8, 3, 15.00),
('Agujas 3RL', 'needles', 'Cheyenne', 50, 10, 2.50),
('Agujas 5RL', 'needles', 'Cheyenne', 45, 10, 2.50),
('Guantes Nitrilo', 'supplies', 'Medline', 200, 50, 0.15),
('Film Protector', 'aftercare', 'Saniderm', 25, 5, 8.00);