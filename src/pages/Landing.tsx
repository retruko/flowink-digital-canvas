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
  MonitorSpeaker,
  AlertTriangle,
  X,
  User,
  Bot
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState, createElement } from "react";

const Landing = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);
  const [currentConversation, setCurrentConversation] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate features every 3 seconds
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % 6);
    }, 3000);

    // Auto-rotate conversations every 5 seconds
    const conversationInterval = setInterval(() => {
      setCurrentConversation((prev) => (prev + 1) % 3);
    }, 5000);
    
    return () => {
      clearInterval(interval);
      clearInterval(conversationInterval);
    };
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
      price: "€12",
      period: "/mes",
      originalPrice: "€15",
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
      icon: Crown,
      annualDiscount: "20% OFF anual"
    },
    {
      name: "ESTUDIO",
      price: "€45",
      period: "/mes",
      originalPrice: "€56",
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
      icon: Rocket,
      annualDiscount: "20% OFF anual"
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

  const conversations = [
    {
      problem: "¿Cómo hago para llevar control de mi inventario?",
      user: "Artista desesperado",
      messages: [
        { type: "user", text: "Tío no puedo más... ¿cómo hago para llevar control de todas las tintas y agujas?" },
        { type: "bot", text: "¡Te entiendo perfectamente! 😅 Con FlowInk el inventario se controla automáticamente" },
        { type: "user", text: "¿Automáticamente? No me jodas..." },
        { type: "bot", text: "¡En serio! Cuando usas un material, automáticamente se descuenta. Te avisa cuando se acaba todo 🔥" },
        { type: "user", text: "Hostia... eso me ahorraría tanto tiempo" },
        { type: "bot", text: "¡Y no solo eso! También te predice cuándo necesitarás comprar más según tu ritmo de trabajo 🚀" }
      ]
    },
    {
      problem: "Me vino una inspección y no encuentro los consentimientos",
      user: "Dueño estresado", 
      messages: [
        { type: "user", text: "AYUDA! Me vino una inspección de sanidad y no encuentro los consentimientos de los clientes 😰" },
        { type: "bot", text: "¡Tranquilo! Con FlowInk todos los consentimientos están organizados automáticamente" },
        { type: "user", text: "Pero tengo como 200 clientes, es imposible..." },
        { type: "bot", text: "FlowInk busca por cliente, fecha, tipo de trabajo... ¡Lo encuentras en 2 segundos! 📋" },
        { type: "user", text: "Y además están firmados digitalmente?" },
        { type: "bot", text: "¡Claro! Con firma digital válida legalmente. Los inspectores alucinarán con tu organización 😎" }
      ]
    },
    {
      problem: "Pierdo muchos clientes turistas porque no me entienden",
      user: "Artista frustrado",
      messages: [
        { type: "user", text: "Pierdo muchísimos clientes turistas porque no hablo sus idiomas..." },
        { type: "bot", text: "¡Eso se acabó! FlowInk tiene formularios automáticos en 15+ idiomas 🌍" },
        { type: "user", text: "¿Pero cómo? ¿Tengo que traducir todo yo?" },
        { type: "bot", text: "¡Para nada! FlowInk detecta automáticamente el idioma del cliente y adapta todo" },
        { type: "user", text: "Hasta los consentimientos?" },
        { type: "bot", text: "¡Todo! Formularios, consentimientos, emails... El cliente se siente como en casa 🏠" },
        { type: "user", text: "Esto me puede cambiar la vida... vivo en zona turística" }
      ]
    }
  ];

  const testimonials = [
    {
      name: "Carlos Martinez",
      role: "Dueño - InkFlow Studio Madrid",
      content: "FlowInk me salvó cuando vino la inspección. Todo perfectamente organizado en segundos. Los inspectores dijeron que nunca habían visto algo tan profesional.",
      rating: 5,
      avatar: "CM",
      stats: "100% sin multas"
    },
    {
      name: "Ana Rodriguez", 
      role: "Artista Independiente Barcelona",
      content: "Antes perdía 3 horas al día buscando papeles. Ahora FlowInk lo hace todo automático. Solo me enfoco en tatuar y ganar dinero.",
      rating: 5,
      avatar: "AR",
      stats: "3h/día ahorradas"
    },
    {
      name: "David Garcia",
      role: "Manager - TattooVibe Valencia",
      content: "Los formularios en 15 idiomas son una locura. Ahora captamos turistas que antes se iban. Hemos triplicado ingresos en verano.",
      rating: 5,
      avatar: "DG",
      stats: "300% más turistas"
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
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden relative">
      {/* Manychat-style Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-bounce" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl animate-spin" style={{ animationDelay: '2s', animationDuration: '10s' }} />
        <div className="absolute top-10 right-1/4 w-32 h-32 bg-gradient-to-br from-green-400/15 to-emerald-400/15 rounded-full blur-2xl animate-bounce" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-br from-rose-400/15 to-pink-400/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }} />
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-20 animate-float">
          <div className="w-4 h-4 bg-purple-400 rounded-full opacity-60"></div>
        </div>
        <div className="absolute top-1/3 right-32 animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-6 h-6 bg-cyan-400 rounded-full opacity-50"></div>
        </div>
        <div className="absolute bottom-1/3 left-1/3 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-3 h-3 bg-yellow-400 rounded-full opacity-70"></div>
        </div>
      </div>

      {/* Navigation with Manychat style */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/95 border-b border-purple-200/50 transition-all duration-300 shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 animate-pulse">
                <Palette className="h-7 w-7 text-white drop-shadow-lg" />
              </div>
              <span className="text-3xl font-black bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">FlowInk</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#problemas" className="text-gray-600 hover:text-purple-600 transition-all duration-300 story-link">Problemas Reales</a>
              <a href="#features" className="text-gray-600 hover:text-purple-600 transition-all duration-300 story-link">Soluciones</a>
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

      {/* Hero Section with Problem-Solution Focus */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Badge variant="outline" className="mb-8 px-6 py-3 text-red-600 border-red-200 bg-red-50/80 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                <AlertTriangle className="h-5 w-5 mr-2 animate-pulse" />
                🚨 ¿Cansado de perder tiempo con papeleos infinitos?
              </Badge>
              
              <h1 className="text-7xl md:text-8xl font-black mb-8 leading-tight">
                <span className="block text-gray-900 animate-bounce-in">
                  Basta de
                </span>
                <span className="block text-red-600 animate-bounce-in" style={{ animationDelay: '0.2s' }}>
                  <span className="relative">
                    CAOS
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-400 to-orange-400 opacity-30 blur transform -skew-y-1 animate-pulse"></div>
                  </span>
                </span>
                <span className="block gradient-text animate-bounce-in text-6xl" style={{ animationDelay: '0.4s' }}>
                  en tu estudio
                </span>
              </h1>
              
              <p className="text-2xl md:text-3xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: '0.6s' }}>
                <span className="font-bold text-red-600">¿Papeles perdidos?</span> 
                <span className="font-bold text-orange-600"> ¿Inspecciones que te dan ansiedad?</span> 
                <span className="font-bold text-purple-600"> ¿Clientes que se van porque no los entiendes?</span>
                <span className="block mt-3 text-xl text-gray-500">
                  <span className="font-bold text-green-600">FlowInk resuelve TODO</span> eso automáticamente
                </span>
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 animate-scale-in" style={{ animationDelay: '0.8s' }}>
                <Link to="/auth">
                  <Button size="lg" className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 hover:from-green-700 hover:via-emerald-700 hover:to-teal-700 text-white px-10 py-5 text-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 animate-pulse-glow group">
                    <CheckCircle className="h-6 w-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
                    RESOLVER MIS PROBLEMAS GRATIS
                    <ChevronRight className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="px-10 py-5 text-xl border-purple-200 text-purple-600 hover:bg-purple-50 hover-lift group">
                  <Play className="h-6 w-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  Ver Cómo Funciona
                </Button>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center animate-fade-up" style={{ animationDelay: '1s' }}>
                <div className="glass p-6 rounded-2xl hover-lift">
                  <div className="text-3xl font-black text-green-600">0</div>
                  <div className="text-sm text-gray-500">Papeles perdidos</div>
                </div>
                <div className="glass p-6 rounded-2xl hover-lift">
                  <div className="text-3xl font-black text-blue-600">5min</div>
                  <div className="text-sm text-gray-500">Setup total</div>
                </div>
                <div className="glass p-6 rounded-2xl hover-lift">
                  <div className="text-3xl font-black text-purple-600">15+</div>
                  <div className="text-sm text-gray-500">Idiomas automáticos</div>
                </div>
                <div className="glass p-6 rounded-2xl hover-lift">
                  <div className="text-3xl font-black text-orange-600">100%</div>
                  <div className="text-sm text-gray-500">Legal y seguro</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Conversations Section */}
      <section id="problemas" className="py-20 px-6 bg-gradient-to-r from-green-50/50 to-emerald-50/30 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-green-600 border-green-200 bg-green-50/50">
              <MessageSquare className="h-4 w-4 mr-2" />
              Problemas Reales • Soluciones Reales
            </Badge>
            <h2 className="text-5xl font-bold mb-6">
              ¿Te suena <span className="text-red-600">familiar</span>?
            </h2>
            <p className="text-xl text-gray-600">Estas son conversaciones REALES de tatuadores desesperados</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
              {/* WhatsApp Header */}
              <div className="bg-green-600 text-white p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold">{conversations[currentConversation].user}</h3>
                  <p className="text-sm opacity-80">En línea</p>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="p-6 space-y-4 bg-gray-50 min-h-[400px]">
                {conversations[currentConversation].messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} animate-fade-up`}
                    style={{ animationDelay: `${index * 0.3}s` }}
                  >
                    <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl relative ${
                      message.type === 'user' 
                        ? 'bg-green-500 text-white rounded-br-sm' 
                        : 'bg-white text-gray-800 rounded-bl-sm shadow-sm border'
                    }`}>
                      {message.type === 'bot' && (
                        <div className="flex items-center gap-2 mb-2">
                          <Bot className="h-4 w-4 text-purple-600" />
                          <span className="text-xs font-bold text-purple-600">FlowInk</span>
                        </div>
                      )}
                      <p className="text-sm leading-relaxed">{message.text}</p>
                      <div className={`text-xs mt-1 ${message.type === 'user' ? 'text-green-100' : 'text-gray-500'}`}>
                        {`${Math.floor(Math.random() * 12) + 1}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Problem solved indicator */}
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <CheckCircle className="h-6 w-6" />
                  <span className="font-bold">¡PROBLEMA RESUELTO!</span>
                </div>
                <p className="text-sm opacity-90">{conversations[currentConversation].problem}</p>
              </div>
            </div>

            {/* Conversation indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {conversations.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentConversation === index ? 'bg-green-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  onClick={() => setCurrentConversation(index)}
                />
              ))}
            </div>

            <div className="text-center mt-8">
              <Link to="/auth">
                <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
                  <Zap className="h-5 w-5 mr-2" />
                  ¡QUIERO RESOLVER MIS PROBLEMAS YA!
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Problem-Solution Focus */}
      <section id="features" className="py-20 px-6 bg-gradient-to-br from-purple-50/30 to-pink-50/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-purple-600 border-purple-200 bg-purple-50/50">
              <Rocket className="h-4 w-4 mr-2" />
              El Software Tatuador Definitivo
            </Badge>
            <h2 className="text-5xl font-bold mb-6">
              Por fin un software hecho <span className="gradient-text">POR tatuadores, PARA tatuadores</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cansados de software genérico, creamos la solución específica que necesitas
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
                      <Badge variant="outline" className="text-xs text-green-600 border-green-200 bg-green-50">
                        ✅ PROBLEMA RESUELTO
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
              <DollarSign className="h-4 w-4 mr-2" />
              Precios Honestos
            </Badge>
            <h2 className="text-5xl font-bold mb-6">
              Sin <span className="text-red-600">chorradas</span>, sin letra pequeña
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Planes transparentes diseñados para que ganes más y gastes menos
            </p>
            
            <div className="mt-8 inline-flex items-center gap-4 bg-white rounded-full p-2 shadow-lg">
              <Button variant="outline" size="sm" className="rounded-full">
                Mensual
              </Button>
              <Button size="sm" className="rounded-full bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                Anual (20% OFF)
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => {
              const IconComponent = plan.icon;
              return (
                <Card 
                  key={index}
                  className={`relative group hover-lift transition-all duration-500 border-0 shadow-medium hover:shadow-strong bg-white/90 backdrop-blur-sm ${
                    plan.popular ? 'scale-105 ring-4 ring-green-500/30 shadow-glow' : ''
                  } animate-scale-in overflow-hidden`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <Badge className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-2 text-sm font-bold shadow-xl animate-bounce">
                        <Crown className="h-4 w-4 mr-1" />
                        MÁS ELEGIDO
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
                      {plan.originalPrice && (
                        <span className="text-red-500 line-through text-lg">{plan.originalPrice}</span>
                      )}
                    </div>
                    {plan.annualDiscount && (
                      <Badge className="bg-green-100 text-green-700 text-xs mb-2">
                        {plan.annualDiscount}
                      </Badge>
                    )}
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
                            ? 'bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 hover:from-green-700 hover:via-emerald-700 hover:to-teal-700 text-white shadow-xl hover:shadow-2xl animate-pulse-glow' 
                            : 'bg-gray-900 hover:bg-gray-800 text-white shadow-lg hover:shadow-xl'
                        }`}
                      >
                        {plan.ctaText}
                        <Rocket className="h-5 w-5 ml-2" />
                      </Button>
                    </Link>
                    
                    <p className="text-xs text-center text-gray-500">
                      {plan.name === "FREE" ? "Gratis para siempre • Sin tarjeta" : "Prueba gratis 14 días • Cancela cuando quieras"}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">💰 Garantía de devolución 30 días | 🔒 Datos 100% seguros | 📞 Soporte en español</p>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section id="testimonials" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-purple-600 border-purple-200 bg-purple-50/50">
              <Heart className="h-4 w-4 mr-2" />
              Tatuadores Felices
            </Badge>
            <h2 className="text-5xl font-bold mb-6">
              <span className="gradient-text">Dejaron de sufrir</span> y ahora solo se enfocan en tatuar
            </h2>
            <p className="text-xl text-gray-600">
              Historias reales de tatuadores que recuperaron su tiempo y cordura
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
                      <Badge variant="outline" className="mt-1 text-xs text-green-600 border-green-200 bg-green-50">
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
                      ✓ Problema resuelto con FlowInk
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
              Es AHORA o NUNCA
            </Badge>
            
            <h2 className="text-6xl md:text-7xl font-black mb-8 animate-bounce-in">
              ¿Vas a seguir 
              <span className="block bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                sufriendo
              </span>
              <span className="block text-white">
                o lo solucionas YA?
              </span>
            </h2>
            
            <p className="text-2xl mb-12 opacity-90 max-w-3xl mx-auto animate-fade-up leading-relaxed" style={{ animationDelay: '0.2s' }}>
              Miles de tatuadores ya <span className="font-bold text-green-300">resolvieron sus problemas</span> con FlowInk.
              <span className="block font-bold text-yellow-300">¿Cuánto tiempo más vas a perder?</span>
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <Link to="/auth">
                <Button size="lg" variant="secondary" className="bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600 px-12 py-6 text-2xl font-black shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 group">
                  <CheckCircle className="h-7 w-7 mr-3 group-hover:scale-110 transition-transform duration-500" />
                  SÍ, QUIERO DEJAR DE SUFRIR
                  <ArrowRight className="h-7 w-7 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="border-white/50 text-white hover:bg-white/10 px-12 py-6 text-2xl font-bold backdrop-blur-sm">
                <X className="h-7 w-7 mr-3" />
                No, prefiero seguir sufriendo
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-lg opacity-90 animate-fade-up" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center justify-center gap-3">
                <CheckCircle className="h-6 w-6 text-green-400" />
                <span>Setup en 5 minutos</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <CheckCircle className="h-6 w-6 text-green-400" />
                <span>14 días gratis • Sin compromisos</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <CheckCircle className="h-6 w-6 text-green-400" />
                <span>Soporte tatuador 24/7</span>
              </div>
            </div>
            
            <p className="text-sm opacity-75 mt-8 animate-pulse">
              ⚡ Oferta especial: Los primeros 100 estudios reciben configuración GRATIS ⚡
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
                El software que finalmente entiende a los tatuadores.
              </p>
              <div className="flex gap-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-yellow-400 font-bold">4.9/5</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Soluciones</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="hover:text-white transition-colors">Gestión automática</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Precios transparentes</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Soporte tatuador</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Formación gratis</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Empresa</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Nuestra historia</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog tatuador</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Únete al equipo</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Ayuda</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Centro de ayuda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Guías paso a paso</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Video tutoriales</a></li>
                <li><a href="#" className="hover:text-white transition-colors">WhatsApp soporte</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-6 text-sm mb-4 md:mb-0">
              <a href="#" className="hover:text-white transition-colors">Privacidad</a>
              <a href="#" className="hover:text-white transition-colors">Términos</a>
              <a href="#" className="hover:text-white transition-colors">Legal</a>
            </div>
            <div className="text-sm text-gray-500">
              © 2024 FlowInk. Hecho con ❤️ por tatuadores, para tatuadores.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;