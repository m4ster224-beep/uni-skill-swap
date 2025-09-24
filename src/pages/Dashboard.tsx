import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  User, 
  Search, 
  Plus, 
  BookOpen, 
  Users, 
  MessageCircle,
  Star,
  GraduationCap,
  Calendar
} from "lucide-react";
import Header from "@/components/Header";

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Dados mock do usuário
  const currentUser = {
    name: "João Silva",
    course: "Ciência da Computação",
    period: "6º Período",
    avatar: "JS",
    skillsOffered: ["JavaScript", "Python", "React"],
    skillsWanted: ["Machine Learning", "Docker", "AWS"],
  };

  // Dados mock de outros usuários
  const users = [
    {
      id: 1,
      name: "Maria Santos",
      course: "Engenharia de Software",
      period: "7º Período",
      avatar: "MS",
      skills: ["Machine Learning", "TensorFlow", "Data Science"],
      rating: 4.8,
      matches: ["Machine Learning"],
    },
    {
      id: 2,
      name: "Pedro Costa",
      course: "Sistemas de Informação",
      period: "5º Período", 
      avatar: "PC",
      skills: ["Docker", "Kubernetes", "DevOps"],
      rating: 4.6,
      matches: ["Docker"],
    },
    {
      id: 3,
      name: "Ana Oliveira",
      course: "Ciência da Computação",
      period: "8º Período",
      avatar: "AO", 
      skills: ["AWS", "Cloud Computing", "Serverless"],
      rating: 4.9,
      matches: ["AWS"],
    },
  ];

  const filteredUsers = users.filter(user => 
    user.skills.some(skill => 
      skill.toLowerCase().includes(searchTerm.toLowerCase())
    ) || 
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        <div className="container py-8">
          {/* Header do Dashboard */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">
              Olá, {currentUser.name}! 👋
            </h1>
            <p className="text-muted-foreground">
              Explore novos conhecimentos e compartilhe suas habilidades
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Coluna Principal */}
            <div className="lg:col-span-2 space-y-6">
              {/* Barra de Busca */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Search className="h-5 w-5" />
                    Buscar Habilidades
                  </CardTitle>
                  <CardDescription>
                    Encontre colegas que podem te ensinar algo novo
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Ex: Machine Learning, Design, Marketing..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Resultados da Busca / Matches */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">
                  {searchTerm ? `Resultados para "${searchTerm}"` : "Matches Recomendados"}
                </h2>
                
                {filteredUsers.map((user) => (
                  <Card key={user.id} className="transition-all hover:shadow-card">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4 flex-1">
                          <Avatar className="h-12 w-12">
                            <AvatarFallback>{user.avatar}</AvatarFallback>
                          </Avatar>
                          
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-semibold">{user.name}</h3>
                              <div className="flex items-center gap-1">
                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                <span className="text-sm text-muted-foreground">{user.rating}</span>
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                              <div className="flex items-center gap-1">
                                <GraduationCap className="h-4 w-4" />
                                {user.course}
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                {user.period}
                              </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-2 mb-3">
                              {user.skills.map((skill) => (
                                <Badge 
                                  key={skill} 
                                  variant={user.matches?.includes(skill) ? "default" : "secondary"}
                                  className={user.matches?.includes(skill) ? "bg-secondary" : ""}
                                >
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        <Button size="sm" className="gap-2">
                          <MessageCircle className="h-4 w-4" />
                          Conectar
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Perfil do Usuário */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Meu Perfil
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback>{currentUser.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{currentUser.name}</p>
                      <p className="text-sm text-muted-foreground">{currentUser.course}</p>
                      <p className="text-sm text-muted-foreground">{currentUser.period}</p>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full gap-2">
                    <Plus className="h-4 w-4" />
                    Editar Perfil
                  </Button>
                </CardContent>
              </Card>

              {/* Minhas Habilidades */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Minhas Habilidades
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2 text-secondary">Posso ensinar:</p>
                    <div className="flex flex-wrap gap-2">
                      {currentUser.skillsOffered.map((skill) => (
                        <Badge key={skill} className="bg-secondary">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium mb-2 text-primary">Quero aprender:</p>
                    <div className="flex flex-wrap gap-2">
                      {currentUser.skillsWanted.map((skill) => (
                        <Badge key={skill} variant="outline">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full gap-2">
                    <Plus className="h-4 w-4" />
                    Gerenciar Habilidades
                  </Button>
                </CardContent>
              </Card>

              {/* Estatísticas */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Minhas Conexões
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Conexões ativas</span>
                    <span className="font-semibold">12</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Sessões de ensino</span>
                    <span className="font-semibold">8</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Avaliação média</span>
                    <span className="font-semibold flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      4.7
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;