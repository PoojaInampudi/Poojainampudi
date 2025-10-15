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
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-br from-background via-muted/30 to-background"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE0YzAtMy4zMTQgMi42ODYtNiA2LTZzNi0yLjY4NiA2LTYtMi42ODYtNi02LTYtNiAyLjY4Ni02IDYtMi42ODYgNi02IDZ6TTAgMTRjMC0zLjMxNCAyLjY4Ni02IDYtNnM2LTIuNjg2IDYtNi0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNi0yLjY4NiA2LTYgNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40" />
      <div className="absolute inset-0 bg-[linear-gradient(var(--gradient-hero))]" />
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float" style={{ top: '20%', left: '10%', animationDelay: '0s' }} />
        <div className="absolute w-3 h-3 bg-accent/20 rounded-full animate-float" style={{ top: '60%', left: '80%', animationDelay: '2s' }} />
        <div className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float" style={{ top: '40%', right: '15%', animationDelay: '4s' }} />
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
          <div 
            className="relative group"
            style={{ 
              animation: 'float 6s ease-in-out infinite'
            }}
          >
            <div 
              className="absolute -inset-1 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-all duration-700"
              style={{ 
                background: 'var(--gradient-accent)',
                transform: 'scale(1.15)'
              }}
            />
            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-primary via-accent to-primary-glow opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
            <img
              src={profilePhoto}
              alt="Pooja Inampudi - Salesforce Developer"
              className="relative w-56 h-56 rounded-full object-cover border-[6px] border-card shadow-[var(--shadow-xl)] ring-2 ring-primary/20"
            />
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
                <span className="bg-clip-text text-transparent bg-[linear-gradient(var(--gradient-accent))]">
                  Pooja Inampudi
                </span>
              </h1>
              <div className="h-1 w-32 mx-auto bg-[linear-gradient(var(--gradient-accent))] rounded-full" />
            </div>
            <p className="text-2xl md:text-3xl text-secondary font-semibold tracking-wide">
              Software Developer | Salesforce Specialist
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Full Stack Engineer with expertise in Salesforce development, building scalable enterprise solutions 
              from concept to production. Specializing in CPQ, Health Cloud, and OmniStudio.
            </p>
          </div>

          <div className="flex flex-wrap gap-5 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[linear-gradient(var(--gradient-accent))] hover:opacity-90 text-primary-foreground shadow-[var(--shadow-lg)] hover:shadow-[var(--shadow-xl)] transition-all duration-500 hover:scale-105 text-base px-8 py-6 font-semibold"
            >
              <a href="mailto:inampudipooja.work@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToAbout}
              className="border-2 border-primary bg-card/50 backdrop-blur-sm text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 hover:scale-105 text-base px-8 py-6 font-semibold shadow-[var(--shadow-md)]"
            >
              View My Work
              <ChevronDown className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="flex gap-5">
            <a
              href="https://github.com/PoojaInampudi"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-card/80 backdrop-blur-sm border-2 border-border flex items-center justify-center hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[var(--shadow-lg)] transition-all duration-500 hover:scale-110 group"
              aria-label="Visit GitHub profile"
            >
              <Github className="h-6 w-6 text-foreground group-hover:text-primary-foreground transition-colors" />
            </a>
            <a
              href="https://linkedin.com/in/poojainampudi"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-card/80 backdrop-blur-sm border-2 border-border flex items-center justify-center hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[var(--shadow-lg)] transition-all duration-500 hover:scale-110 group"
              aria-label="Visit LinkedIn profile"
            >
              <Linkedin className="h-6 w-6 text-foreground group-hover:text-primary-foreground transition-colors" />
            </a>
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
