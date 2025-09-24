import { Button } from "@/components/ui/button";
import { ArrowRight, Users, BookOpen, Target } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-illustration.jpg";

const HeroSection = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient opacity-5" />
      
      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-8">
              Conecte, Aprenda e{" "}
              <span className="bg-hero-gradient bg-clip-text text-transparent">
                Compartilhe Conhecimento
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              A plataforma que conecta universitários para trocar habilidades de forma colaborativa. 
              Encontre quem pode te ensinar e compartilhe o que você sabe melhor.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link to="/register">
                <Button size="lg" className="gap-2 min-w-[200px]">
                  Começar Agora
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" size="lg" className="min-w-[200px]">
                  Já tenho conta
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={heroImage} 
              alt="Estudantes universitários colaborando e compartilhando conhecimento"
              className="w-full h-auto rounded-2xl shadow-card"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="bg-card-gradient p-8 rounded-xl shadow-card border transition-transform hover:scale-105">
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Conecte-se</h3>
            <p className="text-muted-foreground">
              Encontre colegas universitários com habilidades complementares às suas
            </p>
          </div>
          
          <div className="bg-card-gradient p-8 rounded-xl shadow-card border transition-transform hover:scale-105">
            <BookOpen className="h-12 w-12 text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Aprenda</h3>
            <p className="text-muted-foreground">
              Desenvolva novas competências através de trocas de conhecimento
            </p>
          </div>
          
          <div className="bg-card-gradient p-8 rounded-xl shadow-card border transition-transform hover:scale-105">
            <Target className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Compartilhe</h3>
            <p className="text-muted-foreground">
              Ensine suas habilidades e fortaleça seu networking universitário
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;