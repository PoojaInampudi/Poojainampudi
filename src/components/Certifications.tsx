import { Award, Star, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const certifications = [
  {
    name: "Salesforce Certified Platform Developer I",
    issuer: "Salesforce",
    date: "2024",
  },
  {
    name: "Salesforce Certified AI Associate",
    issuer: "Salesforce",
    date: "2024",
  },
  {
    name: "Salesforce Certified AI Specialist",
    issuer: "Salesforce",
    date: "2024",
  },
  {
    name: "Salesforce Certified Data Cloud Consultant",
    issuer: "Salesforce",
    date: "2024",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2023",
  },
  {
    name: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services",
    date: "2023",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="relative py-24 px-6 overflow-hidden bg-gradient-to-br from-background via-background/95 to-background"
    >
      {/* Floating sparkles */}
      <motion.div
        className="absolute top-10 left-12 text-primary/30"
        animate={{ y: [0, -10, 0], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <Sparkles className="w-8 h-8" />
      </motion.div>
      <motion.div
        className="absolute bottom-12 right-10 text-accent/30"
        animate={{ y: [0, 10, 0], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 7, repeat: Infinity }}
      >
        <Sparkles className="w-10 h-10" />
      </motion.div>

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Animated Header */}
        <motion.div
          className="text-center mb-16 space-y-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md shadow-[0_0_15px_-3px_var(--primary)]"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Award className="h-5 w-5 text-primary animate-pulse" />
            <span className="text-sm font-semibold text-primary tracking-wider">
              CERTIFICATIONS
            </span>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ backgroundSize: "200% auto" }}
          >
            Professional Credentials
          </motion.h2>

          <motion.div
            className="flex items-center justify-center gap-3"
            animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="h-0.5 w-20 bg-gradient-to-r from-transparent via-primary to-primary rounded-full" />
            <Star className="h-5 w-5 text-primary fill-primary animate-spin-slow" />
            <div className="h-0.5 w-20 bg-gradient-to-l from-transparent via-primary to-primary rounded-full" />
          </motion.div>
        </motion.div>

        {/* Certifications List */}
        <div className="grid sm:grid-cols-2 gap-8">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group relative p-6 rounded-2xl border border-primary/20 bg-gradient-to-br from-background/60 via-background/40 to-background/20 backdrop-blur-md shadow-[0_0_15px_-5px_var(--primary)] hover:shadow-[0_0_25px_-5px_var(--primary)] hover:scale-[1.02] transition-all duration-500 overflow-hidden"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-primary/5 via-accent/10 to-primary/5 blur-xl transition-opacity duration-700" />

              <div className="relative z-10 flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary/20 transition-colors duration-500">
                  <Award className="h-6 w-6" />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-secondary group-hover:text-primary transition-colors duration-300">
                    {cert.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {cert.issuer}
                  </p>

                  {/* Clean date style */}
                  <div className="inline-block px-3 py-1 text-sm font-medium text-primary/80 border border-primary/20 rounded-md bg-primary/5">
                    {cert.date}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
