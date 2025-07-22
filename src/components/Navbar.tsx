import { Button } from "@/components/ui/button";
import { CheckCircle, LogOut, User, Upload, Home } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    // Navigate to login page
    navigate("/login");
  };

  const isPublicProfile = location.pathname.startsWith("/public/");

  return (
    <header className="border-b bg-card">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <CheckCircle className="h-6 w-6 text-primary" />
          <h1 
            className="text-xl font-bold text-foreground cursor-pointer hover:text-primary transition-colors"
            onClick={() => navigate("/")}
          >
            Verifolio
          </h1>
        </div>

        {!isPublicProfile && (
          <nav className="hidden md:flex items-center space-x-6">
            <Button
              variant="ghost"
              onClick={() => navigate("/dashboard")}
              className={`rounded-xl ${location.pathname === "/dashboard" ? "bg-accent" : ""}`}
            >
              <Home className="h-4 w-4 mr-2" />
              Dashboard
            </Button>
            <Button
              variant="ghost"
              onClick={() => navigate("/upload")}
              className={`rounded-xl ${location.pathname === "/upload" ? "bg-accent" : ""}`}
            >
              <Upload className="h-4 w-4 mr-2" />
              Upload
            </Button>
            <Button
              variant="ghost"
              onClick={() => navigate("/profile")}
              className={`rounded-xl ${location.pathname === "/profile" ? "bg-accent" : ""}`}
            >
              <User className="h-4 w-4 mr-2" />
              Profile
            </Button>
          </nav>
        )}

        <div className="flex items-center space-x-4">
          {!isPublicProfile && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2 hover:bg-accent rounded-xl">
                  <span className="text-sm text-foreground">Dina</span>
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-primary">D</span>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem onClick={() => navigate("/profile")}>
                  <User className="h-4 w-4 mr-2" />
                  Profile Saya
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/public/dina")}>
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Lihat Public Profile
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="text-destructive">
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;