import { Award, Briefcase, GraduationCap, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const text = "Get to Know Me";

  return (
    <section
      id="about"
      className="relative py-28 px-6 overflow-hidden bg-[radial-gradient(circle_at_top_left,var(--primary)/10,transparent_70%)] scroll-mt-16"
    >
      {/* Floating gradient orbs */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Animated About Me Title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative"
        >
          {/* Sparkles floating */}
          <div className="flex justify-center mb-4 relative">
            <Sparkles className="text-primary h-8 w-8 animate-spin-slow absolute -left-6" />
            <Sparkles className="text-primary h-8 w-8 animate-spin-slow absolute -right-6" />
          </div>

          {/* Animated "Get to Know Me" letters */}
          <h2 className="text-5xl md:text-6xl font-extrabold text-secondary tracking-tight inline-block">
            {text.split("").map((char, i) => (
              <motion.span
                key={i}
                className="inline-block"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: i * 0.05,
                  type: "spring",
                  stiffness: 120,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h2>

          {/* Animated gradient underline */}
          <motion.div
            className="h-1 w-28 mx-auto mt-6 rounded-full bg-gradient-to-r from-primary via-accent to-secondary"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />

          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto relative z-10">
            A passionate engineer blending creativity, technology, and business logic to
            build impactful digital experiences.
          </p>
        </motion.div>

        {/* Fancy Cards */}
        <div className="grid md:grid-cols-3 gap-10 mb-24">
          {[
            {
              icon: <GraduationCap className="h-8 w-8 text-primary" />,
              title: "Education",
              content: (
                <>
                  <div>
                    <p className="font-semibold text-foreground">M.S. Computer Science</p>
                    <p className="text-muted-foreground">University of Texas at San Antonio</p>
                    <p className="text-primary font-medium">GPA: 3.8/4.0</p>
                  </div>
                  <div className="pt-3">
                    <p className="font-semibold text-foreground">B.Tech CS & Engineering</p>
                    <p className="text-muted-foreground">R.V.R & J.C College of Engineering</p>
                    <p className="text-primary font-medium">GPA: 8.7/10</p>
                  </div>
                </>
              ),
            },
            {
              icon: <Briefcase className="h-8 w-8 text-accent" />,
              title: "Experience",
              content: (
                <>
                  <div>
                    <p className="font-semibold text-foreground">Software Developer</p>
                    <p className="text-muted-foreground">Forsys Inc</p>
                    <p className="text-primary font-medium">July 2024 - Present</p>
                  </div>
                  <div className="pt-3">
                    <p className="font-semibold text-foreground">Full Stack Developer</p>
                    <p className="text-muted-foreground">TraxContents (Founding Engineer)</p>
                    <p className="text-primary font-medium">Nov 2023 - Oct 2024</p>
                  </div>
                </>
              ),
            },
            {
              icon: <Award className="h-8 w-8 text-primary" />,
              title: "Highlights",
              content: (
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✨</span>
                    <span>Founding Engineer at TraxContents with equity stake</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">💡</span>
                    <span>Salesforce CPQ & Health Cloud Specialist</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">⚙️</span>
                    <span>Full-stack expertise across React, Node.js, Python</span>
                  </li>
                </ul>
              ),
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.6 }}
              className="p-10 rounded-[2rem] bg-gradient-to-br from-background/60 via-background/30 to-background/10 
                         border border-primary/20 hover:border-primary/60 hover:shadow-[0_0_40px_-10px_var(--primary)] 
                         backdrop-blur-md transition-all duration-500 text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-secondary">{item.title}</h3>
              <div className="text-sm leading-relaxed">{item.content}</div>
            </motion.div>
          ))}
        </div>

        {/* Professional Summary */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 p-12 rounded-[3rem] text-center shadow-2xl backdrop-blur-lg border border-primary/20"
        >
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-20 h-20 bg-primary/20 blur-3xl rounded-full" />
          <h3 className="text-4xl font-bold text-secondary mb-6">Professional Journey</h3>
            <p className="text-muted-foreground leading-relaxed text-lg max-w-4xl mx-auto">
              I’m a <b>full-stack engineer</b> who loves transforming <b>complex ideas</b> into seamless digital experiences.
              I build <b>scalable applications</b> from the ground up, blending robust <b>backend architecture</b> with intuitive,
              engaging <b>front-end designs</b>. From designing <b>efficient workflows</b> to optimizing <b>performance</b>,
              I focus on creating software that’s not only <b>functional</b> but also <b>elegant</b> and <b>maintainable</b>.
              Driven by <b>curiosity</b> and a passion for <b>problem-solving</b>, I thrive on turning <b>challenges</b> into
              <b>innovative solutions</b> that make a real impact for <b>users</b> and <b>businesses</b> alike.
            </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
