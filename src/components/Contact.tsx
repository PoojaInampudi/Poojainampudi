import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-4" id="contact">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-secondary">
          Get In Touch
        </h2>
        <div className="w-24 h-1 mx-auto mb-6 rounded-full bg-[linear-gradient(var(--gradient-primary))]" />
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, interesting projects, or potential collaborations.
        </p>

        <Card className="p-8 bg-[linear-gradient(var(--gradient-card))] border-2">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary mb-1">Email</h3>
                  <a
                    href="mailto:inampudipooja.work@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    inampudipooja.work@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary mb-1">Phone</h3>
                  <a
                    href="tel:+18302257893"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +1 (830) 225-7893
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary mb-1">Location</h3>
                  <p className="text-muted-foreground">Austin, Texas, USA</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-4">
              <h3 className="font-semibold text-secondary mb-2">Connect with me</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/PoojaInampudi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button
                    variant="outline"
                    className="w-full border-2 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </a>
                <a
                  href="https://linkedin.com/in/poojainampudi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button
                    variant="outline"
                    className="w-full border-2 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </Button>
                </a>
              </div>

              <Button
                asChild
                className="w-full bg-primary hover:bg-primary-dark text-primary-foreground shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-glow)] transition-all duration-300"
              >
                <a href="mailto:inampudipooja.work@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Send me an email
                </a>
              </Button>
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
