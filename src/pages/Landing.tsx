import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Users, Calendar, Shield, Palette, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Landing = () => {
  const services = [
    {
      title: "Tatuajes Personalizados",
      description: "Diseños únicos creados especialmente para ti por nuestros artistas expertos",
      price: "Desde €80",
      features: ["Consulta gratuita", "Diseño personalizado", "Materiales premium"]
    },
    {
      title: "Tatuajes Tradicionales",
      description: "Estilos clásicos y tradicionales con técnicas perfeccionadas",
      price: "Desde €60",
      features: ["Estilos clásicos", "Técnica tradicional", "Garantía de calidad"]
    },
    {
      title: "Tatuajes Realistas",
      description: "Arte hiperrealista que cobra vida en tu piel",
      price: "Desde €120",
      features: ["Técnica avanzada", "Detalle excepcional", "Portfolio extenso"]
    }
  ];

  const artists = [
    {
      name: "Carlos Martinez",
      specialty: "Realismo",
      experience: "8 años",
      rating: 4.9
    },
    {
      name: "Ana Rodriguez",
      specialty: "Tradicional",
      experience: "6 años",
      rating: 4.8
    },
    {
      name: "David Garcia",
      specialty: "Geometrico",
      experience: "5 años",
      rating: 4.9
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Palette className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">FlowInk Studio</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/auth">
              <Button variant="outline">Iniciar Sesión</Button>
            </Link>
            <Link to="/auth">
              <Button>Registrarse</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            🎨 Estudio Profesional de Tatuajes
          </Badge>
          <h1 className="text-5xl font-bold mb-6 gradient-text">
            Tu Arte, Nuestra Pasión
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transforma tus ideas en arte permanente con nuestros artistas expertos. 
            Calidad garantizada, higiene impecable y diseños únicos.
          </p>
          <div className="flex items-center gap-4 justify-center">
            <Link to="/auth">
              <Button size="lg" className="gap-2">
                Reservar Cita <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Button variant="outline" size="lg">
              Ver Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Tatuajes Realizados</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">4.9</div>
              <div className="text-muted-foreground">Calificación Promedio</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">3</div>
              <div className="text-muted-foreground">Artistas Expertos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground">Años de Experiencia</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nuestros Servicios</h2>
            <p className="text-xl text-muted-foreground">
              Ofrecemos una amplia gama de estilos y técnicas de tatuaje
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="relative group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <Badge variant="outline">{service.price}</Badge>
                  </div>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-primary rounded-full" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/auth" className="block mt-4">
                    <Button className="w-full">Reservar Ahora</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Artists Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nuestros Artistas</h2>
            <p className="text-xl text-muted-foreground">
              Conoce a nuestro equipo de artistas profesionales
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {artists.map((artist, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle>{artist.name}</CardTitle>
                  <CardDescription>
                    Especialista en {artist.specialty}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                    <span>{artist.experience}</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span>{artist.rating}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">¿Por Qué Elegirnos?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Higiene Garantizada</h3>
              <p className="text-muted-foreground">
                Cumplimos con todos los estándares de salud y seguridad
              </p>
            </div>
            <div className="text-center">
              <Award className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Artistas Certificados</h3>
              <p className="text-muted-foreground">
                Nuestro equipo cuenta con certificaciones profesionales
              </p>
            </div>
            <div className="text-center">
              <Calendar className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Citas Flexibles</h3>
              <p className="text-muted-foreground">
                Horarios convenientes que se adaptan a tu agenda
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">¿Listo Para Tu Próximo Tatuaje?</h2>
          <p className="text-xl mb-8 opacity-90">
            Únete a nuestra comunidad y convierte tu visión en realidad
          </p>
          <div className="flex items-center gap-4 justify-center">
            <Link to="/auth">
              <Button size="lg" variant="secondary">
                Crear Cuenta Gratis
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Contactar Ahora
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t">
        <div className="container mx-auto text-center text-muted-foreground">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Palette className="h-6 w-6" />
            <span className="font-semibold">FlowInk Studio</span>
          </div>
          <p>© 2024 FlowInk Studio. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;