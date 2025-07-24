import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  CheckCircle,
  Users, 
  Calendar, 
  Palette, 
  FileText,
  User,
  Bot
} from "lucide-react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Simple Manychat-style header */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <Palette className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">FlowInk</span>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/auth">
                <Button variant="ghost" className="text-gray-600">
                  Iniciar Sesión
                </Button>
              </Link>
              <Link to="/auth">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Empezar Gratis
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero super simple */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Gestiona tu estudio de tatuajes
            <span className="block text-blue-600">sin papeleos</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Todo lo que necesitas: citas, clientes, inventario y documentos. Simple y automático.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/auth">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
                Empezar Gratis
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="px-8 py-4">
              Ver Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Chat conversations - estilo Manychat pero simple */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            ¿Te suena familiar?
          </h2>
          
          {/* WhatsApp style chat */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Chat header */}
            <div className="bg-green-500 text-white p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <User className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">Tatuador frustrado</h3>
                <p className="text-sm opacity-90">en línea</p>
              </div>
            </div>
            
            {/* Messages */}
            <div className="p-6 space-y-4 bg-gray-50 min-h-[300px]">
              <div className="flex justify-start">
                <div className="bg-white rounded-lg p-3 max-w-xs shadow-sm">
                  <p className="text-gray-800">Tío, estoy hasta las narices de perder papeles de clientes...</p>
                </div>
              </div>
              
              <div className="flex justify-end">
                <div className="bg-blue-500 text-white rounded-lg p-3 max-w-xs">
                  <p>¿Has probado FlowInk? Todo automático 🔥</p>
                </div>
              </div>
              
              <div className="flex justify-start">
                <div className="bg-white rounded-lg p-3 max-w-xs shadow-sm">
                  <p className="text-gray-800">¿En serio? ¿También los consentimientos?</p>
                </div>
              </div>
              
              <div className="flex justify-end">
                <div className="bg-blue-500 text-white rounded-lg p-3 max-w-xs">
                  <p>¡Claro! Generación automática, firma digital, todo legal ✅</p>
                </div>
              </div>
              
              <div className="flex justify-start">
                <div className="bg-white rounded-lg p-3 max-w-xs shadow-sm">
                  <p className="text-gray-800">Joder... eso me cambiaría la vida</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features super simple */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Todo lo que necesitas
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Agenda Inteligente</h3>
              <p className="text-gray-600">Citas automáticas sin conflictos</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Gestión de Clientes</h3>
              <p className="text-gray-600">Toda la info organizada</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <FileText className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Documentos Legales</h3>
              <p className="text-gray-600">Consentimientos automáticos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing simple */}
      <section id="pricing" className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Precios simples
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* FREE */}
            <Card className="p-6">
              <CardHeader>
                <CardTitle>Gratis</CardTitle>
                <CardDescription>Para empezar</CardDescription>
                <div className="text-3xl font-bold">€0</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    10 clientes max
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Inventario básico
                  </li>
                </ul>
                <Button className="w-full mt-4" variant="outline">
                  Empezar Gratis
                </Button>
              </CardContent>
            </Card>

            {/* Individual */}
            <Card className="p-6 border-blue-200 relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600">
                Más Popular
              </Badge>
              <CardHeader>
                <CardTitle>Individual</CardTitle>
                <CardDescription>Para artistas</CardDescription>
                <div className="text-3xl font-bold">€12<span className="text-lg text-gray-500">/mes</span></div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Clientes ilimitados
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Inventario completo
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Documentos automáticos
                  </li>
                </ul>
                <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                  Probar 7 días gratis
                </Button>
              </CardContent>
            </Card>

            {/* Studio */}
            <Card className="p-6">
              <CardHeader>
                <CardTitle>Estudio</CardTitle>
                <CardDescription>Para equipos</CardDescription>
                <div className="text-3xl font-bold">€45<span className="text-lg text-gray-500">/mes</span></div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Todo ilimitado
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Múltiples artistas
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Analytics avanzados
                  </li>
                </ul>
                <Button className="w-full mt-4" variant="outline">
                  Probar 7 días gratis
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">
            ¿Listo para simplificar tu estudio?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Únete a cientos de tatuadores que ya usan FlowInk
          </p>
          <Link to="/auth">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
              Empezar Gratis Ahora
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer simple */}
      <footer className="py-8 px-6 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
              <Palette className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold">FlowInk</span>
          </div>
          <p className="text-gray-400">© 2024 FlowInk. Gestión simple para tatuadores.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;