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
  Heart,
  MessageSquare,
  Clock,
  Target,
  Layers,
  Building2,
  Smartphone,
  Mail,
  DollarSign,
  UserCheck,
  Languages,
  Workflow,
  PieChart,
  Lock,
  Headphones,
  Rocket,
  Gift,
  ChevronRight,
  MonitorSpeaker
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState, createElement } from "react";

const Landing = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate features every 3 seconds
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % 6);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const plans = [
    {
      name: "FREE",
      price: "€0",
      period: "/mes",
      description: "Perfecto para empezar tu aventura",
      features: [
        "Máximo 10 contactos/mes",
        "Máximo 5 artículos en inventario",
        "10 consentimientos informados",
        "50 potenciales clientes/mes",
        "Sin managers ni artistas",
        "Soporte por email"
      ],
      popular: false,
      ctaText: "Empezar Gratis",
      color: "from-gray-500 to-gray-600",
      icon: Gift
    },
    {
      name: "INDIVIDUAL",
      price: "€29",
      period: "/mes",
      description: "Para artistas independientes que van en serio",
      features: [
        "1 rol de dueño/artista",
        "Contactos ilimitados",
        "Inventario completo",
        "Consentimientos ilimitados",
        "Potenciales clientes ilimitados",
        "Formularios multiidioma",
        "Analytics básicos",
        "Soporte prioritario"
      ],
      popular: true,
      ctaText: "Empezar Prueba Gratis",
      color: "from-purple-500 to-pink-500",
      icon: Crown
    },
    {
      name: "ESTUDIO",
      price: "€79",
      period: "/mes",
      description: "Para estudios que quieren dominar el mercado",
      features: [
        "3 roles: Dueños/Managers/Artistas",
        "Todo ilimitado",
        "Control granular de permisos",
        "Gestión de equipo completa",
        "Analytics avanzados + IA",
        "Automatizaciones inteligentes",
        "API personalizada",
        "Soporte VIP 24/7"
      ],
      popular: false,
      ctaText: "Empezar Prueba Gratis",
      color: "from-blue-500 to-purple-600",
      icon: Rocket
    }
  ];

  const features = [
    {
      icon: Target,
      title: "Gestión Inteligente de Leads",
      description: "Captura automática de potenciales clientes con formularios inteligentes y seguimiento automatizado",
      delay: "0ms",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Languages,
      title: "Formularios Multiidioma",
      description: "Formularios automáticos en 15+ idiomas para captar turistas y clientes internacionales",
      delay: "100ms",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Workflow,
      title: "Trazabilidad Total",
      description: "Sigue cada paso del customer journey desde el primer contacto hasta la cita completada",
      delay: "200ms",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Calendar,
      title: "Agenda Ultra-Inteligente",
      description: "IA que optimiza horarios, detecta conflictos y sugiere las mejores franjas horarias",
      delay: "300ms",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: FileText,
      title: "Consentimientos Automáticos",
      description: "Generación automática de documentos legales personalizados con firma digital",
      delay: "400ms",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: PieChart,
      title: "Analytics + IA",
      description: "Predicciones de ingresos, análisis de tendencias y recomendaciones inteligentes",
      delay: "500ms",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const testimonials = [
    {
      name: "Carlos Martinez",
      role: "Dueño - InkFlow Studio Madrid",
      content: "FlowInk nos ayudó a crecer de 2 a 8 artistas en 6 meses. Los formularios automáticos capturan turistas que antes perdíamos.",
      rating: 5,
      avatar: "CM",
      stats: "300% más clientes"
    },
    {
      name: "Ana Rodriguez", 
      role: "Artista Independiente Barcelona",
      content: "Antes perdía 3 horas al día en papeleo. Ahora FlowInk lo hace todo automático. Puedo enfocarme solo en tatuar.",
      rating: 5,
      avatar: "AR",
      stats: "3h/día ahorradas"
    },
    {
      name: "David Garcia",
      role: "Manager - TattooVibe Valencia",
      content: "El control de permisos es increíble. Cada artista solo ve sus datos, pero yo tengo visión completa del negocio.",
      rating: 5,
      avatar: "DG",
      stats: "100% control"
    }
  ];

  const competitorComparison = [
    {
      feature: "Gestión de Leads",
      inkoru: false,
      flowink: true,
      description: "Captura y nurturing automático"
    },
    {
      feature: "Formularios Multiidioma",
      inkoru: false,
      flowink: true,
      description: "15+ idiomas para turistas"
    },
    {
      feature: "Trazabilidad Completa",
      inkoru: false,
      flowink: true,
      description: "Customer journey completo"
    },
    {
      feature: "IA y Predicciones",
      inkoru: false,
      flowink: true,
      description: "Analytics inteligentes"
    },
    {
      feature: "Agenda Básica",
      inkoru: true,
      flowink: true,
      description: "Gestión de citas"
    },
    {
      feature: "Control de Roles",
      inkoru: true,
      flowink: true,
      description: "Permisos granulares"
    }
  ];

  const animatedFeatures = [
    { icon: Calendar, title: "Agenda Inteligente", description: "IA optimiza horarios" },
    { icon: Users, title: "Gestión de Leads", description: "Captura automática" },
    { icon: Languages, title: "Multiidioma", description: "15+ idiomas" },
    { icon: BarChart3, title: "Analytics IA", description: "Predicciones exactas" },
    { icon: Shield, title: "Seguridad Total", description: "Datos protegidos" },
    { icon: Zap, title: "Automatización", description: "Workflow inteligente" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50/30 to-pink-50/20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Navigation with Blur Effect */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/90 border-b border-purple-100/50 transition-all duration-300">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Palette className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-black gradient-text">FlowInk</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-600 hover:text-purple-600 transition-all duration-300 story-link">Características</a>
              <a href="#comparison" className="text-gray-600 hover:text-purple-600 transition-all duration-300 story-link">vs Competencia</a>
              <a href="#pricing" className="text-gray-600 hover:text-purple-600 transition-all duration-300 story-link">Precios</a>
              <a href="#testimonials" className="text-gray-600 hover:text-purple-600 transition-all duration-300 story-link">Testimonios</a>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/auth">
                <Button variant="ghost" className="text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-all duration-300">
                  Iniciar Sesión
                </Button>
              </Link>
              <Link to="/auth">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-glow">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Empezar Gratis
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Advanced Animations */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Badge variant="outline" className="mb-8 px-6 py-3 text-purple-600 border-purple-200 bg-purple-50/80 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                <Zap className="h-5 w-5 mr-2 animate-pulse" />
                🚀 La revolución que Inkoru no vio venir
              </Badge>
              
              <h1 className="text-7xl md:text-8xl font-black mb-8 leading-tight">
                <span className="block gradient-text animate-bounce-in">
                  FlowInk hace que
                </span>
                <span className="block text-gray-900 animate-bounce-in" style={{ animationDelay: '0.2s' }}>
                  <span className="relative">
                    Inkoru parezca
                    <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-400 opacity-30 blur transform -skew-y-1 animate-pulse"></div>
                  </span>
                </span>
                <span className="block gradient-text animate-bounce-in text-6xl" style={{ animationDelay: '0.4s' }}>
                  del siglo pasado
                </span>
              </h1>
              
              <p className="text-2xl md:text-3xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: '0.6s' }}>
                <span className="font-bold text-purple-600">TODO lo que hace Inkoru</span> + 
                <span className="font-bold text-pink-600"> gestión inteligente de leads</span> + 
                <span className="font-bold text-blue-600"> formularios multiidioma</span> + 
                <span className="font-bold text-green-600"> IA predictiva</span>
                <span className="block mt-3 text-xl text-gray-500">
                  La plataforma que los estudios modernos necesitan
                </span>
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 animate-scale-in" style={{ animationDelay: '0.8s' }}>
                <Link to="/auth">
                  <Button size="lg" className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 text-white px-10 py-5 text-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 animate-pulse-glow group">
                    <Rocket className="h-6 w-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                    Superar a Inkoru GRATIS
                    <ChevronRight className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="px-10 py-5 text-xl border-purple-200 text-purple-600 hover:bg-purple-50 hover-lift group">
                  <Play className="h-6 w-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  Ver Por Qué Somos Mejores
                </Button>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center animate-fade-up" style={{ animationDelay: '1s' }}>
                <div className="glass p-6 rounded-2xl hover-lift">
                  <div className="text-3xl font-black text-purple-600">500+</div>
                  <div className="text-sm text-gray-500">Estudios migrando de Inkoru</div>
                </div>
                <div className="glass p-6 rounded-2xl hover-lift">
                  <div className="text-3xl font-black text-pink-600">10x</div>
                  <div className="text-sm text-gray-500">Más funciones que Inkoru</div>
                </div>
                <div className="glass p-6 rounded-2xl hover-lift">
                  <div className="text-3xl font-black text-blue-600">5min</div>
                  <div className="text-sm text-gray-500">Setup vs 2h de Inkoru</div>
                </div>
                <div className="glass p-6 rounded-2xl hover-lift">
                  <div className="text-3xl font-black text-green-600">€0</div>
                  <div className="text-sm text-gray-500">Empezar (Inkoru cobra desde día 1)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Feature Showcase */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-50/50 to-pink-50/30 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              Características que <span className="gradient-text">Inkoru no tiene</span>
            </h2>
            <p className="text-xl text-gray-600">Y que están revolucionando la industria</p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                {createElement(animatedFeatures[currentFeature].icon, {
                  className: `h-12 w-12 text-purple-600 transition-all duration-500 ${currentFeature === 0 ? 'animate-bounce' : ''}`
                })}
              </div>
              <h3 className="text-2xl font-bold text-center mb-2">
                {animatedFeatures[currentFeature].title}
              </h3>
              <p className="text-gray-600 text-center">
                {animatedFeatures[currentFeature].description}
              </p>
            </div>
          </div>

          <div className="flex justify-center space-x-2">
            {animatedFeatures.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentFeature === index ? 'bg-purple-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => setCurrentFeature(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison with Inkoru */}
      <section id="comparison" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-purple-600 border-purple-200 bg-purple-50/50">
              <Target className="h-4 w-4 mr-2" />
              FlowInk vs Inkoru
            </Badge>
            <h2 className="text-5xl font-bold mb-6">
              <span className="gradient-text">¿Por qué cambiar</span> de Inkoru?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Porque hacer lo mismo de siempre no te diferencia de la competencia
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid grid-cols-3 gap-0">
                <div className="p-6 text-center bg-gray-50">
                  <h3 className="font-bold text-gray-600">Funcionalidad</h3>
                </div>
                <div className="p-6 text-center bg-red-50">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-8 h-8 bg-gray-400 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">I</span>
                    </div>
                    <span className="font-bold text-gray-600">Inkoru</span>
                  </div>
                </div>
                <div className="p-6 text-center bg-gradient-to-r from-purple-50 to-pink-50">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                      <Palette className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-bold gradient-text">FlowInk</span>
                  </div>
                </div>
              </div>

              {competitorComparison.map((item, index) => (
                <div key={index} className={`grid grid-cols-3 gap-0 border-t border-gray-100 ${index % 2 === 0 ? 'bg-white/50' : 'bg-gray-50/50'} hover:bg-purple-50/30 transition-colors duration-300`}>
                  <div className="p-6">
                    <div className="font-semibold text-gray-900">{item.feature}</div>
                    <div className="text-sm text-gray-500">{item.description}</div>
                  </div>
                  <div className="p-6 text-center">
                    {item.inkoru ? (
                      <CheckCircle className="h-6 w-6 text-green-500 mx-auto" />
                    ) : (
                      <div className="w-6 h-6 rounded-full bg-red-100 mx-auto flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      </div>
                    )}
                  </div>
                  <div className="p-6 text-center">
                    <div className="flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-green-500" />
                      {!item.inkoru && (
                        <Badge className="ml-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs">
                          EXCLUSIVO
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link to="/auth">
                <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
                  <UserCheck className="h-5 w-5 mr-2" />
                  Migrar de Inkoru es GRATIS
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Advanced Animations */}
      <section id="features" className="py-20 px-6 bg-gradient-to-br from-purple-50/30 to-pink-50/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-purple-600 border-purple-200 bg-purple-50/50">
              <Sparkles className="h-4 w-4 mr-2" />
              Funciones Revolucionarias
            </Badge>
            <h2 className="text-5xl font-bold mb-6">
              Lo que realmente <span className="gradient-text">diferencia a FlowInk</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mientras la competencia hace lo básico, nosotros redefinimos la gestión de estudios
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index} 
                  className="group hover-lift border-0 shadow-soft hover:shadow-strong bg-white/80 backdrop-blur-sm animate-fade-up overflow-hidden relative"
                  style={{ animationDelay: feature.delay }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  <CardHeader className="text-center pb-4 relative">
                    <div className={`w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br ${feature.color} bg-opacity-10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <Icon className="h-10 w-10 text-white drop-shadow-lg" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:gradient-text transition-all duration-300">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative">
                    <p className="text-gray-600 text-center leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="mt-4 text-center">
                      <Badge variant="outline" className="text-xs text-purple-600 border-purple-200">
                        EXCLUSIVO DE FLOWINK
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advanced Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-purple-50/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-purple-600 border-purple-200 bg-white/50">
              <Crown className="h-4 w-4 mr-2" />
              Planes que se Adaptan a Ti
            </Badge>
            <h2 className="text-5xl font-bold mb-6">
              Desde empezar <span className="gradient-text">gratis</span> hasta dominar el mercado
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sin ataduras, sin permanencia. Paga solo por lo que necesitas cuando lo necesitas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => {
              const IconComponent = plan.icon;
              return (
                <Card 
                  key={index}
                  className={`relative group hover-lift transition-all duration-500 border-0 shadow-medium hover:shadow-strong bg-white/90 backdrop-blur-sm ${
                    plan.popular ? 'scale-105 ring-4 ring-purple-500/30 shadow-glow' : ''
                  } animate-scale-in overflow-hidden`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 text-sm font-bold shadow-xl animate-bounce">
                        <Crown className="h-4 w-4 mr-1" />
                        MÁS POPULAR
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-4 relative">
                    <div className={`w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br ${plan.color} flex items-center justify-center text-white shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <IconComponent className="h-10 w-10" />
                    </div>
                    <CardTitle className="text-3xl font-black">{plan.name}</CardTitle>
                    <div className="flex items-baseline justify-center gap-2 mb-2">
                      <span className="text-5xl font-black gradient-text">{plan.price}</span>
                      <span className="text-gray-500 text-lg">{plan.period}</span>
                    </div>
                    <CardDescription className="text-gray-600 font-medium">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-6 relative">
                    <ul className="space-y-4">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3 group/item">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200" />
                          <span className="text-gray-600 group-hover/item:text-gray-900 transition-colors duration-200">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link to="/auth" className="block mt-8">
                      <Button 
                        className={`w-full py-4 text-lg font-bold transition-all duration-500 hover:scale-105 ${
                          plan.popular 
                            ? 'bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 text-white shadow-xl hover:shadow-2xl animate-pulse-glow' 
                            : 'bg-gray-900 hover:bg-gray-800 text-white shadow-lg hover:shadow-xl'
                        }`}
                      >
                        {plan.ctaText}
                        <Rocket className="h-5 w-5 ml-2" />
                      </Button>
                    </Link>
                    
                    <p className="text-xs text-center text-gray-500">
                      {plan.name === "FREE" ? "Gratis para siempre" : "Prueba gratis 14 días • Sin permanencia"}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">¿Vienes de Inkoru? Te ayudamos a migrar</p>
            <Button variant="outline" size="lg" className="border-purple-200 text-purple-600 hover:bg-purple-50">
              <Headphones className="h-5 w-5 mr-2" />
              Migración Gratuita desde Inkoru
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section id="testimonials" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-purple-600 border-purple-200 bg-purple-50/50">
              <Heart className="h-4 w-4 mr-2" />
              Historias de Éxito Reales
            </Badge>
            <h2 className="text-5xl font-bold mb-6">
              <span className="gradient-text">Estudios reales</span> con resultados reales
            </h2>
            <p className="text-xl text-gray-600">
              Más de 500 estudios ya migraron de Inkoru a FlowInk
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="border-0 shadow-soft hover:shadow-medium transition-all duration-500 bg-white/90 backdrop-blur-sm animate-fade-up hover-lift group overflow-hidden relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                      <Badge variant="outline" className="mt-1 text-xs">
                        {testimonial.stats}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="relative">
                  <p className="text-gray-600 italic text-lg leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <Badge className="bg-green-100 text-green-700 text-xs">
                      ✓ Migrado desde Inkoru
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Epic CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-black/20" />
          <div className="absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-float" />
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-pink-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-300/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-8 px-6 py-3 border-white/30 text-white bg-white/10 backdrop-blur-sm">
              <Rocket className="h-5 w-5 mr-2" />
              El Momento es AHORA
            </Badge>
            
            <h2 className="text-6xl md:text-7xl font-black mb-8 animate-bounce-in">
              ¿Listo para dejar atrás
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                la era Inkoru?
              </span>
            </h2>
            
            <p className="text-2xl mb-12 opacity-90 max-w-3xl mx-auto animate-fade-up leading-relaxed" style={{ animationDelay: '0.2s' }}>
              Únete a los <span className="font-bold text-yellow-300">500+ estudios</span> que ya están 
              <span className="font-bold text-pink-300"> dominando su mercado</span> con FlowInk
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <Link to="/auth">
                <Button size="lg" variant="secondary" className="bg-white text-purple-900 hover:bg-gray-100 px-12 py-6 text-2xl font-black shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 group">
                  <Sparkles className="h-7 w-7 mr-3 group-hover:rotate-180 transition-transform duration-500" />
                  EMPEZAR GRATIS AHORA
                  <ArrowRight className="h-7 w-7 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="border-white/50 text-white hover:bg-white/10 px-12 py-6 text-2xl font-bold backdrop-blur-sm">
                <MonitorSpeaker className="h-7 w-7 mr-3" />
                Ver Demo en Vivo
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-lg opacity-90 animate-fade-up" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center justify-center gap-3">
                <CheckCircle className="h-6 w-6 text-green-400" />
                <span>Setup en 5 minutos</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <CheckCircle className="h-6 w-6 text-green-400" />
                <span>Migración desde Inkoru gratis</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <CheckCircle className="h-6 w-6 text-green-400" />
                <span>Soporte 24/7 en español</span>
              </div>
            </div>
            
            <p className="text-sm opacity-75 mt-8 animate-pulse">
              ⚡ Los primeros 100 estudios reciben configuración VIP gratuita ⚡
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-16 px-6 bg-gray-900 text-gray-300">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                  <Palette className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">FlowInk</span>
              </div>
              <p className="text-gray-400">
                Revolucionando la gestión de estudios de tatuaje en todo el mundo.
              </p>
              <div className="flex gap-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-yellow-400 font-bold">4.9/5</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Producto</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="hover:text-white transition-colors">Características</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Precios</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integraciones</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Empresa</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Sobre nosotros</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carreras</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Migración</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Desde Inkoru</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Desde TattooNet</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Guías de migración</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Soporte técnico</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-6 text-sm mb-4 md:mb-0">
              <a href="#" className="hover:text-white transition-colors">Privacidad</a>
              <a href="#" className="hover:text-white transition-colors">Términos</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
            <div className="text-sm text-gray-500">
              © 2024 FlowInk. Transformando la industria del tatuaje.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;