-- Crear tabla para plantillas de email automático
CREATE TABLE public.email_templates (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  type TEXT NOT NULL, -- 'review_request', 'aftercare', 'birthday', 'appointment_reminder', 'follow_up'
  subject TEXT NOT NULL,
  body_html TEXT NOT NULL,
  body_text TEXT,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_by UUID REFERENCES auth.users(id)
);

-- Crear tabla para configuración de emails automáticos
CREATE TABLE public.email_automation_settings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email_type TEXT NOT NULL,
  is_enabled BOOLEAN NOT NULL DEFAULT false,
  send_after_days INTEGER, -- días después del evento para enviar (ej: 7 días después del tatuaje)
  send_at_time TIME, -- hora específica para enviar (ej: 10:00 AM para cumpleaños)
  template_id UUID REFERENCES public.email_templates(id),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(email_type)
);

-- Crear tabla para logs de emails enviados
CREATE TABLE public.email_logs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  client_id UUID REFERENCES public.clients(id),
  appointment_id UUID REFERENCES public.appointments(id),
  email_type TEXT NOT NULL,
  template_id UUID REFERENCES public.email_templates(id),
  recipient_email TEXT NOT NULL,
  subject TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending', -- 'pending', 'sent', 'failed', 'bounced'
  sent_at TIMESTAMP WITH TIME ZONE,
  error_message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Habilitar RLS
ALTER TABLE public.email_templates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.email_automation_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.email_logs ENABLE ROW LEVEL SECURITY;

-- Políticas para email_templates
CREATE POLICY "Usuarios autenticados pueden ver plantillas" 
ON public.email_templates 
FOR SELECT 
USING (auth.uid() IS NOT NULL);

CREATE POLICY "Usuarios autenticados pueden gestionar plantillas" 
ON public.email_templates 
FOR ALL 
USING (auth.uid() IS NOT NULL);

-- Políticas para email_automation_settings
CREATE POLICY "Usuarios autenticados pueden ver configuración" 
ON public.email_automation_settings 
FOR SELECT 
USING (auth.uid() IS NOT NULL);

CREATE POLICY "Usuarios autenticados pueden gestionar configuración" 
ON public.email_automation_settings 
FOR ALL 
USING (auth.uid() IS NOT NULL);

-- Políticas para email_logs
CREATE POLICY "Usuarios autenticados pueden ver logs" 
ON public.email_logs 
FOR SELECT 
USING (auth.uid() IS NOT NULL);

CREATE POLICY "Usuarios autenticados pueden crear logs" 
ON public.email_logs 
FOR INSERT 
WITH CHECK (auth.uid() IS NOT NULL);

-- Triggers para updated_at
CREATE TRIGGER update_email_templates_updated_at
BEFORE UPDATE ON public.email_templates
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_email_automation_settings_updated_at
BEFORE UPDATE ON public.email_automation_settings
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insertar plantillas por defecto
INSERT INTO public.email_templates (name, type, subject, body_html, body_text) VALUES
('Solicitud de Reseña', 'review_request', '¿Qué te pareció tu tatuaje? 🎨', 
'<h2>¡Hola {{client_name}}!</h2>
<p>Esperamos que estés disfrutando de tu nuevo tatuaje realizado por {{artist_name}}.</p>
<p>Nos encantaría conocer tu experiencia. ¿Podrías dejarnos una reseña?</p>
<a href="{{review_link}}" style="background-color: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Dejar Reseña</a>
<p>¡Gracias por confiar en nosotros!</p>',
'Hola {{client_name}}! Esperamos que estés disfrutando de tu nuevo tatuaje. Nos encantaría conocer tu experiencia: {{review_link}}'),

('Cuidado Post-Tatuaje', 'aftercare', 'Cuidados importantes para tu tatuaje 💙', 
'<h2>¡Hola {{client_name}}!</h2>
<p>Tu tatuaje se ve increíble. Aquí tienes algunos consejos importantes:</p>
<ul>
<li>Mantén la zona limpia y seca</li>
<li>Aplica la crema recomendada 2-3 veces al día</li>
<li>Evita la exposición directa al sol</li>
<li>No te bañes en piscinas o jacuzzis por 2 semanas</li>
</ul>
<p>Si tienes alguna pregunta, no dudes en contactarnos.</p>',
'Hola {{client_name}}! Cuida tu tatuaje: mantén limpio, usa crema, evita sol y piscinas.'),

('Felicitación de Cumpleaños', 'birthday', '¡Feliz Cumpleaños! 🎉', 
'<h2>¡Feliz Cumpleaños {{client_name}}! 🎂</h2>
<p>Esperamos que tengas un día maravilloso lleno de alegría.</p>
<p>Como regalo, tienes un <strong>15% de descuento</strong> en tu próximo tatuaje.</p>
<p>Código: BIRTHDAY{{year}}</p>
<p>¡Válido hasta {{expiry_date}}!</p>',
'¡Feliz Cumpleaños {{client_name}}! 15% descuento en tu próximo tatuaje. Código: BIRTHDAY{{year}}'),

('Recordatorio de Cita', 'appointment_reminder', 'Recordatorio: Tu cita es mañana 📅', 
'<h2>¡Hola {{client_name}}!</h2>
<p>Te recordamos que tienes una cita mañana:</p>
<p><strong>Fecha:</strong> {{appointment_date}}</p>
<p><strong>Hora:</strong> {{appointment_time}}</p>
<p><strong>Artista:</strong> {{artist_name}}</p>
<p><strong>Servicio:</strong> {{service_name}}</p>
<p>¡Te esperamos!</p>',
'Hola {{client_name}}! Recordatorio de cita mañana: {{appointment_date}} a las {{appointment_time}} con {{artist_name}}');

-- Insertar configuraciones por defecto
INSERT INTO public.email_automation_settings (email_type, is_enabled, send_after_days, send_at_time) VALUES
('review_request', false, 7, null),
('aftercare', false, 1, null),
('birthday', false, null, '10:00:00'),
('appointment_reminder', false, 1, '18:00:00'),
('follow_up', false, 30, null);