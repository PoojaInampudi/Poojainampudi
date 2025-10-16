import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Github, Linkedin, MessageSquare, Download, Send, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden scroll-mt-16" id="contact">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-primary/5 to-background" />
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 30%, hsl(var(--primary) / 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 70%, hsl(var(--accent) / 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 30%, hsl(var(--primary) / 0.15) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          className="text-center mb-16 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md shadow-[0_0_20px_-5px_var(--primary)]"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <MessageSquare className="h-5 w-5 text-primary animate-pulse" />
            <span className="text-sm font-semibold text-primary tracking-wider">LET'S CONNECT</span>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-7xl font-bold"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span
              className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary animate-gradient-flow"
              style={{ backgroundSize: "200% auto" }}
            >
              Get In Touch
            </span>
          </motion.h2>

          <motion.div
            className="flex items-center justify-center gap-3"
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "auto" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="h-0.5 w-20 bg-gradient-to-r from-transparent via-primary to-primary rounded-full" />
            <div className="h-1 w-10 bg-primary rounded-full" />
            <div className="h-0.5 w-20 bg-gradient-to-l from-transparent via-primary to-primary rounded-full" />
          </motion.div>

          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Open to <span className="text-primary font-semibold">new opportunities</span>, collaborations, and
            conversations about technology
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Card className="p-8 md:p-12 bg-[linear-gradient(var(--gradient-card))] border-2 border-primary/30 hover:border-primary/60 hover:shadow-[0_0_50px_-10px_var(--primary)] transition-all duration-500 overflow-hidden relative group">
            {/* Animated gradient overlay */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{
                background: "linear-gradient(135deg, hsl(var(--primary) / 0.08), hsl(var(--accent) / 0.08))",
              }}
            />

            {/* Floating orbs inside card */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-accent/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="grid md:grid-cols-2 gap-10 relative z-10">
              <div className="space-y-6">
                <motion.div
                  className="flex items-start gap-4 group/item"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0 shadow-lg"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Mail className="h-7 w-7 text-primary" />
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-secondary mb-2 text-lg">Email</h3>
                    <a
                      href="mailto:inampudipooja.work@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors break-all inline-flex items-center gap-2 group"
                    >
                      inampudipooja.work@gmail.com
                      {/* <Send className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" /> */}
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4 group/item"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center flex-shrink-0 shadow-lg"
                    whileHover={{ scale: 1.15, rotate: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <MapPin className="h-7 w-7 text-accent" />
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-secondary mb-2 text-lg">Location</h3>
                    <p className="text-muted-foreground">Austin, Texas, USA</p>
                    <p className="text-sm text-primary mt-1"> 🌎 Open to Relocate</p>
                  </div>
                </motion.div>
              </div>

              <motion.div
                className="flex flex-col justify-center space-y-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div>
                  <h3 className="font-bold text-secondary mb-3 text-3xl bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary">
                    Let's Collaborate
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Open to innovative projects, technical collaborations, and problem-solving opportunities.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <motion.div whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-2 border-primary/30 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_20px_-5px_var(--primary)] transition-all duration-300"
                    >
                      <a href="https://github.com/PoojaInampudi" target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-2 border-primary/30 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_20px_-5px_var(--primary)] transition-all duration-300"
                    >
                      <a href="https://linkedin.com/in/poojainampudi" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="mr-2 h-4 w-4" />
                        LinkedIn
                      </a>
                    </Button>
                  </motion.div>
                </div>

                <div className="space-y-3">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Button
                      asChild
                      size="lg"
                      className="w-full bg-gradient-to-r from-primary via-primary-glow to-accent hover:shadow-[0_0_30px_-5px_var(--primary)] text-primary-foreground shadow-lg transition-all duration-300 font-semibold relative overflow-hidden group"
                    >
                      <a href="mailto:inampudipooja.work@gmail.com" className="flex items-center justify-center gap-2">
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.6 }}
                        />
                        <Send className="h-5 w-5" />
                        Send Email
                      </a>
                    </Button>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="w-full bg-gradient-to-r from-background/50 to-primary/5 border-2 border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_20px_-5px_var(--primary)] transition-all duration-300 font-medium"
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
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card/50 border border-border backdrop-blur-sm">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Pooja Inampudi. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes gradient-flow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-flow {
          animation: gradient-flow 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Contact;
