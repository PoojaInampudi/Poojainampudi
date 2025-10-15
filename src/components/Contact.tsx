import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-4 scroll-mt-16 relative overflow-hidden" id="contact">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-[linear-gradient(var(--gradient-accent))]">
              Get In Touch
            </span>
          </h2>
          <div className="w-32 h-1.5 mx-auto mb-6 rounded-full bg-[linear-gradient(var(--gradient-accent))]" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or potential collaborations.
          </p>
        </div>

        <Card className="relative p-10 md:p-14 bg-card/70 backdrop-blur-xl border-2 border-transparent hover:border-primary/30 transition-all duration-500 overflow-hidden group animate-reveal">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,hsl(var(--primary)/0.05)_100%)] group-hover:opacity-100 opacity-50 transition-opacity duration-500" />
          
          <div className="grid md:grid-cols-5 gap-10 relative z-10">
            <div className="md:col-span-2 space-y-8">
              <div className="space-y-6">
                <div className="group/item flex items-start gap-4 p-4 rounded-2xl hover:bg-primary/5 transition-colors duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 group-hover/item:rotate-6 transition-all duration-300">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-secondary mb-2">Email</h3>
                    <a
                      href="mailto:inampudipooja.work@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors break-all"
                    >
                      inampudipooja.work@gmail.com
                    </a>
                  </div>
                </div>

                <div className="group/item flex items-start gap-4 p-4 rounded-2xl hover:bg-accent/5 transition-colors duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 group-hover/item:rotate-6 transition-all duration-300">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-secondary mb-2">Location</h3>
                    <p className="text-muted-foreground">Austin, Texas, USA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-3 flex flex-col justify-center space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-[linear-gradient(var(--gradient-accent))]">
                  Let's Connect
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Available for Salesforce development opportunities and consulting projects. 
                  Let's build something amazing together!
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://github.com/PoojaInampudi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full border-2 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300 h-14"
                  >
                    <Github className="mr-2 h-5 w-5" />
                    GitHub
                  </Button>
                </a>
                <a
                  href="https://linkedin.com/in/poojainampudi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full border-2 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300 h-14"
                  >
                    <Linkedin className="mr-2 h-5 w-5" />
                    LinkedIn
                  </Button>
                </a>
              </div>

              <Button
                asChild
                size="lg"
                className="w-full bg-[linear-gradient(var(--gradient-accent))] hover:opacity-90 text-primary-foreground shadow-[var(--shadow-lg)] hover:shadow-[var(--shadow-xl)] hover:scale-105 transition-all duration-500 h-16 text-lg font-semibold"
              >
                <a href="mailto:inampudipooja.work@gmail.com">
                  <Send className="mr-2 h-6 w-6" />
                  Send Me an Email
                </a>
              </Button>
            </div>
          </div>
        </Card>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Pooja Inampudi. Crafted with passion and precision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
