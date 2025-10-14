import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(220, 225, 232, 0.9), rgba(220, 225, 232, 0.95)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(var(--gradient-hero))] opacity-10" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
          <div 
            className="relative group"
            style={{ 
              animation: 'float 6s ease-in-out infinite'
            }}
          >
            <div 
              className="absolute inset-0 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"
              style={{ 
                background: 'var(--gradient-primary)',
                transform: 'scale(1.1)'
              }}
            />
            <img
              src={profilePhoto}
              alt="Pooja Inampudi"
              className="relative w-48 h-48 rounded-full object-cover border-4 border-white shadow-[var(--shadow-lg)]"
            />
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-[linear-gradient(var(--gradient-primary))]">
              Pooja Inampudi
            </h1>
            <p className="text-xl md:text-2xl text-secondary font-medium">
              Software Developer | Salesforce Specialist
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Full Stack Engineer with expertise in Salesforce development, building scalable solutions 
              from concept to production. Specializing in CPQ, Health Cloud, and OmniStudio.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              asChild
              className="bg-primary hover:bg-primary-dark text-primary-foreground shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-glow)] transition-all duration-300"
            >
              <a href="mailto:inampudipooja.work@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Email Me
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary/10 transition-all duration-300"
            >
              <a href="tel:+18302257893">
                <Phone className="mr-2 h-4 w-4" />
                Call Me
              </a>
            </Button>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/PoojaInampudi"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-card border-2 border-border flex items-center justify-center hover:border-primary hover:shadow-[var(--shadow-md)] transition-all duration-300"
            >
              <Github className="h-5 w-5 text-foreground" />
            </a>
            <a
              href="https://linkedin.com/in/poojainampudi"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-card border-2 border-border flex items-center justify-center hover:border-primary hover:shadow-[var(--shadow-md)] transition-all duration-300"
            >
              <Linkedin className="h-5 w-5 text-foreground" />
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
      `}</style>
    </section>
  );
};

export default Hero;
