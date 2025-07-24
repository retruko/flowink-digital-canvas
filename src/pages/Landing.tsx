import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Star, 
  Users, 
  Calendar, 
  Shield, 
  Palette, 
  Award,
  CheckCircle,
  Zap,
  Globe,
  BarChart3,
  FileText,
  Camera,
  TrendingUp,
  Eye,
  Sparkles,
  Crown,
  Play,
  Heart
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Landing = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const plans = [
    {
      name: "FREE",
      price: "€0",
      period: "/mes",
      description: "Perfecto para empezar",
      features: [
        "Máximo 10 contactos/mes",
        "Máximo 5 artículos en inventario",
        "10 consentimientos informados",
        "50 potenciales clientes/mes",
        "Sin managers ni artistas"
      ],
      popular: false,
      ctaText: "Empezar Gratis",
      color: "from-gray-500 to-gray-600"
    },
    {
      name: "INDIVIDUAL",
      price: "€29",
      period: "/mes",
      description: "Para artistas independientes",
      features: [
        "1 rol de dueño",
        "Contactos ilimitados",
        "Inventario completo",
        "Consentimientos ilimitados",
        "Potenciales clientes ilimitados",
        "Sin managers ni artistas"
      ],
      popular: true,
      ctaText: "Empezar Prueba",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "ESTUDIO",
      price: "€79",
      period: "/mes",
      description: "Para estudios completos",
      features: [
        "3 roles: Dueños/Managers/Artistas",
        "Todo ilimitado",
        "Control granular de permisos",
        "Gestión de equipo completa",
        "Analytics avanzados",
        "Soporte prioritario"
      ],
      popular: false,
      ctaText: "Empezar Prueba",
      color: "from-blue-500 to-purple-600"
    }
  ];

  const features = [
    {
      icon: Users,
      title: "Gestión de Potenciales Clientes",
      description: "Captura y nurture leads automáticamente con formularios inteligentes",
      delay: "0ms"
    },
    {
      icon: Globe,
      title: "Formularios Multiidioma",
      description: "Formularios para turistas en todos los idiomas principales",
      delay: "100ms"
    },
    {
      icon: BarChart3,
      title: "Trazabilidad Completa",
      description: "Sigue cada interacción con tus clientes desde el primer contacto",
      delay: "200ms"
    },
    {
      icon: Calendar,
      title: "Agenda Inteligente",
      description: "Reservas automáticas con recordatorios y gestión de cancelaciones",
      delay: "300ms"
    },
    {
      icon: FileText,
      title: "Consentimientos Digitales",
      description: "Firmas digitales y documentos legales automáticos",
      delay: "400ms"
    },
    {
      icon: TrendingUp,
      title: "Analytics Avanzados",
      description: "Métricas en tiempo real para optimizar tu negocio",
      delay: "500ms"
    }
  ];

  const testimonials = [
    {
      name: "Carlos Martinez",
      role: "Dueño - InkFlow Studio",
      content: "FlowInk transformó completamente nuestra operación. Ahora gestionamos 3x más clientes con menos esfuerzo.",
      rating: 5,
      avatar: "CM"
    },
    {
      name: "Ana Rodriguez", 
      role: "Artista Independiente",
      content: "La mejor inversión que he hecho. Los formularios automáticos me ahorran 2 horas diarias.",
      rating: 5,
      avatar: "AR"
    },
    {
      name: "David Garcia",
      role: "Manager - TattooVibe",
      content: "El control de permisos es increíble. Cada artista ve solo lo que necesita ver.",
      rating: 5,
      avatar: "DG"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50/30 to-pink-50/20 overflow-hidden">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-purple-100/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-lg">
                <Palette className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold gradient-text">FlowInk</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-600 hover:text-purple-600 transition-colors story-link">Características</a>
              <a href="#pricing" className="text-gray-600 hover:text-purple-600 transition-colors story-link">Precios</a>
              <a href="#testimonials" className="text-gray-600 hover:text-purple-600 transition-colors story-link">Testimonios</a>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/auth">
                <Button variant="ghost" className="text-gray-600 hover:text-purple-600">
                  Iniciar Sesión
                </Button>
              </Link>
              <Link to="/auth">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                  Empezar Gratis
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-transparent to-pink-600/5" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Badge variant="outline" className="mb-6 px-4 py-2 text-purple-600 border-purple-200 bg-purple-50/50 backdrop-blur-sm">
                <Sparkles className="h-4 w-4 mr-2" />
                La revolución de la gestión de estudios de tatuaje
              </Badge>
              
              <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
                <span className="block gradient-text animate-bounce-in">
                  Revoluciona tu
                </span>
                <span className="block text-gray-900 animate-bounce-in" style={{ animationDelay: '0.2s' }}>
                  estudio de tatuajes
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: '0.4s' }}>
                La plataforma más <span className="font-bold text-purple-600">inteligente</span> y <span className="font-bold text-pink-600">fácil</span> para gestionar clientes, citas, inventario y tu equipo. 
                <span className="block mt-2 text-lg">Diseñada especialmente para estudios modernos.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-scale-in" style={{ animationDelay: '0.6s' }}>
                <Link to="/auth">
                  <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 animate-pulse-glow">
                    <Play className="h-5 w-5 mr-2" />
                    Empezar Gratis Ahora
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-purple-200 text-purple-600 hover:bg-purple-50 hover-lift">
                  <Eye className="h-5 w-5 mr-2" />
                  Ver Demo
                </Button>
              </div>
              
              <div className="flex items-center justify-center gap-8 text-sm text-gray-500 animate-fade-up" style={{ animationDelay: '0.8s' }}>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Sin permanencia
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Configuración en 5 minutos
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Soporte 24/7
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-gray-500 mb-4">Más de 500+ estudios ya confían en FlowInk</p>
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-2xl font-bold ml-2">4.9</span>
              <span className="text-gray-500">(230+ reseñas)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-purple-600 border-purple-200 bg-purple-50/50">
              <Zap className="h-4 w-4 mr-2" />
              Características Únicas
            </Badge>
            <h2 className="text-5xl font-bold mb-6">
              Mucho más que <span className="gradient-text">gestión básica</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mientras otros solo gestionan citas, nosotros transformamos completamente cómo operas tu estudio
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index} 
                  className="group hover-lift border-0 shadow-soft hover:shadow-strong bg-white/70 backdrop-blur-sm animate-fade-up"
                  style={{ animationDelay: feature.delay }}
                >
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-purple-600" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6 bg-gradient-to-br from-purple-50/50 to-pink-50/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-purple-600 border-purple-200 bg-white/50">
              <Crown className="h-4 w-4 mr-2" />
              Planes y Precios
            </Badge>
            <h2 className="text-5xl font-bold mb-6">
              Un plan para cada <span className="gradient-text">ambición</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desde artistas independientes hasta estudios con múltiples ubicaciones
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index}
                className={`relative group hover-lift transition-all duration-500 border-0 shadow-medium hover:shadow-strong bg-white/80 backdrop-blur-sm ${
                  plan.popular ? 'scale-105 ring-2 ring-purple-500/50 shadow-glow' : ''
                } animate-scale-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 text-sm font-semibold">
                      <Sparkles className="h-3 w-3 mr-1" />
                      Más Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center text-white font-bold text-xl`}>
                    {plan.name[0]}
                  </div>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-black">{plan.price}</span>
                    <span className="text-gray-500">{plan.period}</span>
                  </div>
                  <CardDescription className="text-gray-600">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link to="/auth" className="block mt-6">
                    <Button 
                      className={`w-full py-3 font-semibold transition-all duration-300 ${
                        plan.popular 
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl' 
                          : 'bg-gray-900 hover:bg-gray-800 text-white'
                      }`}
                    >
                      {plan.ctaText}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-purple-600 border-purple-200 bg-purple-50/50">
              <Heart className="h-4 w-4 mr-2" />
              Lo que dicen nuestros usuarios
            </Badge>
            <h2 className="text-5xl font-bold mb-6">
              <span className="gradient-text">Resultados reales</span> de estudios reales
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 bg-white/80 backdrop-blur-sm animate-fade-up hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-float" />
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-pink-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-5xl font-bold mb-6 animate-bounce-in">
            ¿Listo para revolucionar tu estudio?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Únete a cientos de estudios que ya están transformando su negocio con FlowInk
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <Link to="/auth">
              <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
                <Sparkles className="h-5 w-5 mr-2" />
                Empezar Gratis - Sin Tarjeta
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="border-white/50 text-white hover:bg-white/10 px-8 py-4 text-lg">
              <Play className="h-5 w-5 mr-2" />
              Ver Demo en Vivo
            </Button>
          </div>
          
          <p className="text-sm opacity-75 mt-6">
            ✨ Configuración en menos de 5 minutos • 🔒 Datos 100% seguros • 📞 Soporte en español
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 text-gray-300">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                <Palette className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">FlowInk</span>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacidad</a>
              <a href="#" className="hover:text-white transition-colors">Términos</a>
              <a href="#" className="hover:text-white transition-colors">Soporte</a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
            © 2024 FlowInk. Transformando estudios de tatuaje en todo el mundo.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;