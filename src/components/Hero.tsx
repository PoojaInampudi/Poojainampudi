import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/10" />
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--primary) / 0.15) 0%, transparent 50%),
                           radial-gradient(circle at 80% 50%, hsl(var(--accent) / 0.15) 0%, transparent 50%)`
        }}
      />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDE0YzAtMy4zMTQgMi42ODYtNiA2LTZzNi0yLjY4NiA2LTYtMi42ODYtNi02LTYtNiAyLjY4Ni02IDYtMi42ODYgNi02IDZ6TTAgMTRjMC0zLjMxNCAyLjY4Ni02IDYtNnM2LTIuNjg2IDYtNi0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNi0yLjY4NiA2LTYgNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ top: '10%', left: '5%', animationDelay: '0s', animationDuration: '20s' }} />
        <div className="absolute w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ top: '50%', right: '5%', animationDelay: '5s', animationDuration: '25s' }} />
        <div className="absolute w-2 h-2 bg-primary/30 rounded-full animate-float" style={{ top: '20%', left: '15%', animationDelay: '0s' }} />
        <div className="absolute w-3 h-3 bg-accent/30 rounded-full animate-float" style={{ top: '70%', left: '75%', animationDelay: '3s' }} />
        <div className="absolute w-2 h-2 bg-primary/30 rounded-full animate-float" style={{ top: '40%', right: '20%', animationDelay: '6s' }} />
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col items-center text-center gap-10 max-w-5xl mx-auto">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-3 mb-6">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight">
                <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary animate-fade-in">
                  Pooja Inampudi
                </span>
              </h1>
              <div className="flex items-center justify-center gap-3">
                <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-primary to-primary rounded-full" />
                <div className="h-1 w-8 bg-primary rounded-full" />
                <div className="h-0.5 w-16 bg-gradient-to-l from-transparent via-primary to-primary rounded-full" />
              </div>
            </div>
            <div className="space-y-4 mb-8">
              <p className="text-2xl md:text-4xl font-bold text-secondary">
                Software Developer <span className="text-primary">|</span> Salesforce Specialist
              </p>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
                Architecting scalable enterprise solutions from concept to production. 
                <span className="text-secondary font-semibold"> Expert in Salesforce CPQ, OmniStudio</span>, 
                and full-stack development with cloud technologies.
              </p>
            </div>
            
            <div className="px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-border text-muted-foreground">
              📍 Austin, Texas
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-border">
              <a
                href="https://github.com/PoojaInampudi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com/in/poojainampudi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="mailto:inampudipooja.work@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 text-base px-10 py-7 font-semibold rounded-full"
            >
              <a href="mailto:inampudipooja.work@gmail.com" className="flex items-center gap-2">
                <Mail className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                Get In Touch
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToAbout}
              className="group border-2 border-primary/50 bg-background/50 backdrop-blur-md text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-500 hover:scale-105 text-base px-10 py-7 font-semibold rounded-full shadow-md"
            >
              <span className="flex items-center gap-2">
                View My Work
                <ChevronDown className="h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
              </span>
            </Button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
