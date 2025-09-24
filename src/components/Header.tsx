import { Button } from "@/components/ui/button";
import { LogIn, UserPlus, GraduationCap } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === "/login" || location.pathname === "/register";

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <GraduationCap className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold bg-hero-gradient bg-clip-text text-transparent">
            Skill Swap
          </span>
        </Link>
        
        {!isAuthPage && (
          <nav className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline" size="sm" className="gap-2">
                <LogIn className="h-4 w-4" />
                Entrar
              </Button>
            </Link>
            <Link to="/register">
              <Button size="sm" className="gap-2">
                <UserPlus className="h-4 w-4" />
                Cadastrar
              </Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;