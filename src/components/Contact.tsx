import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Github, Linkedin, MessageSquare, Download } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background scroll-mt-16" id="contact">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 space-y-6">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <MessageSquare className="h-5 w-5 text-primary animate-pulse" />
            <span className="text-sm font-semibold text-primary tracking-wider">LET'S CONNECT</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold">
            <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">
              Get In Touch
            </span>
          </h2>
          
          <div className="flex items-center justify-center gap-3">
            <div className="h-0.5 w-20 bg-gradient-to-r from-transparent via-primary to-primary rounded-full" />
            <div className="h-1 w-10 bg-primary rounded-full" />
            <div className="h-0.5 w-20 bg-gradient-to-l from-transparent via-primary to-primary rounded-full" />
          </div>
          
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Open to <span className="text-primary font-semibold">new opportunities</span>, collaborations, and conversations about technology
          </p>
        </div>

        <Card className="p-8 md:p-12 bg-[linear-gradient(var(--gradient-card))] border-2 hover:shadow-2xl transition-all duration-500 overflow-hidden relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="grid md:grid-cols-2 gap-10 relative z-10">
            <div className="space-y-6">
              <div className="flex items-start gap-4 group/item">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-primary/20 group-hover/item:scale-110 transition-all duration-300">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-secondary mb-2 text-lg">Email</h3>
                  <a
                    href="mailto:inampudipooja.work@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors break-all"
                  >
                    inampudipooja.work@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group/item">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-accent/20 group-hover/item:scale-110 transition-all duration-300">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-secondary mb-2 text-lg">Location</h3>
                  <p className="text-muted-foreground">Austin, Texas, USA</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-6">
              <div>
                <h3 className="font-bold text-secondary mb-3 text-2xl">Let's Collaborate</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Available for Salesforce development opportunities, consulting projects, and technical collaborations.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-2 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300"
                >
                  <a
                    href="https://github.com/PoojaInampudi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-2 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300"
                >
                  <a
                    href="https://linkedin.com/in/poojainampudi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
              </div>
              <div className="grid grid-cols-1 gap-3">
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-95 text-primary-foreground shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold btn-shine"
                >
                  <a href="mailto:inampudipooja.work@gmail.com" className="flex items-center justify-center gap-2">
                    <Mail className="h-5 w-5" />
                    Send Email
                  </a>
                </Button>

                <Button
                  asChild
                  variant="default"
                  className="w-full bg-white/5 border-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300 shadow-sm"
                >
                  <a
                    href="https://drive.google.com/file/d/18UCiF0_7s_lfBKYU9fLUFIyk0m98TSHY/view"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Card>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Pooja Inampudi. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
