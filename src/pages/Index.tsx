import { ArrowRight, Coffee } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-16 min-h-screen flex items-center bg-coffee-light">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fadeIn">
              <h1 className="text-4xl md:text-6xl font-bold text-coffee-dark">
                Descubra o verdadeiro sabor do café artesanal
              </h1>
              <p className="text-coffee-medium text-lg md:text-xl">
                Selecionamos os melhores grãos e produzimos café com paixão e excelência
              </p>
              <Button
                asChild
                className="bg-coffee-dark hover:bg-coffee-medium text-white px-6 py-3 rounded-full inline-flex items-center space-x-2 transition-colors"
              >
                <Link to="/produtos">
                  <span>Conheça nossos cafés especiais</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative animate-fadeIn">
              <img
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
                alt="Grãos de café selecionados"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-coffee-cream p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Coffee className="h-8 w-8 text-coffee-dark" />
                  <div>
                    <p className="font-medium text-coffee-dark">Café Premium</p>
                    <p className="text-sm text-coffee-medium">100% Arábica</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-coffee-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-coffee-dark text-center mb-12">
            Por que escolher sóCafé?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <feature.icon className="h-10 w-10 text-coffee-accent mb-4" />
                <h3 className="text-xl font-semibold text-coffee-dark mb-2">{feature.title}</h3>
                <p className="text-coffee-medium">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

const features = [
  {
    icon: Coffee,
    title: "Qualidade Premium",
    description: "Selecionamos apenas os melhores grãos de café para nossos produtos.",
  },
  {
    icon: Coffee,
    title: "Produção Artesanal",
    description: "Cada lote é produzido com cuidado e atenção aos detalhes.",
  },
  {
    icon: Coffee,
    title: "Sustentabilidade",
    description: "Comprometidos com práticas sustentáveis e comércio justo.",
  },
];

export default Index;