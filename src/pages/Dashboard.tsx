import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { FileText, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleStartBuilding = () => {
    navigate("/upload");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Welcome */}
        <div className="text-center space-y-8">
          <h2 className="text-4xl font-bold text-foreground">
            Halo, Dina 👋
          </h2>
          
          {/* Empty State Illustration */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-verified/20 rounded-3xl flex items-center justify-center">
                <FileText className="h-16 w-16 text-primary" />
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-verified rounded-full flex items-center justify-center shadow-lg">
                <Plus className="h-6 w-6 text-verified-foreground" />
              </div>
            </div>
          </div>

          {/* Progress */}
          <Card className="max-w-md mx-auto border-0 shadow-md">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">Progress Resume</span>
                <span className="text-sm text-muted-foreground">0% Complete</span>
              </div>
              <Progress value={0} className="h-2" />
              <p className="text-sm text-muted-foreground text-center">
                Mulai dengan mengunggah sertifikat pertama Anda
              </p>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="space-y-4">
            <Button 
              onClick={handleStartBuilding}
              size="lg"
              className="h-14 px-8 text-lg font-medium rounded-2xl"
            >
              Mulai Bangun Resume Terverifikasi Anda
            </Button>
            
            <p className="text-muted-foreground">
              Unggah sertifikat dan biarkan AI memverifikasi skill Anda
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;