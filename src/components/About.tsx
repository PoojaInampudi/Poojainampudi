import { Card } from "@/components/ui/card";
import { Award, Briefcase, GraduationCap } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 px-4 scroll-mt-16 relative overflow-hidden" id="about">
      {/* Diagonal background shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-[linear-gradient(var(--gradient-accent))]">
              About Me
            </span>
          </h2>
          <div className="w-32 h-1.5 mx-auto rounded-full bg-[linear-gradient(var(--gradient-accent))]" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: GraduationCap,
              title: "Education",
              color: "primary",
              delay: "0s",
              content: (
                <div className="space-y-4">
                  <div className="relative pl-4 border-l-2 border-primary/30">
                    <p className="font-bold text-lg text-foreground">M.S. Computer Science</p>
                    <p className="text-muted-foreground">University of Texas at San Antonio</p>
                    <p className="text-primary font-semibold text-lg mt-1">GPA: 3.8/4.0</p>
                  </div>
                  <div className="relative pl-4 border-l-2 border-primary/30">
                    <p className="font-bold text-lg text-foreground">B.Tech CS & Engineering</p>
                    <p className="text-muted-foreground">R.V.R & J.C College of Engineering</p>
                    <p className="text-primary font-semibold text-lg mt-1">GPA: 8.7/10</p>
                  </div>
                </div>
              )
            },
            {
              icon: Briefcase,
              title: "Experience",
              color: "accent",
              delay: "0.2s",
              content: (
                <div className="space-y-4">
                  <div className="relative pl-4 border-l-2 border-accent/30">
                    <p className="font-bold text-lg text-foreground">Software Developer</p>
                    <p className="text-muted-foreground">Forsys Inc</p>
                    <p className="text-primary font-semibold mt-1">July 2024 - Present</p>
                  </div>
                  <div className="relative pl-4 border-l-2 border-accent/30">
                    <p className="font-bold text-lg text-foreground">Full Stack Developer</p>
                    <p className="text-muted-foreground">TraxContents (Founding Engineer)</p>
                    <p className="text-primary font-semibold mt-1">Nov 2023 - Oct 2024</p>
                  </div>
                </div>
              )
            },
            {
              icon: Award,
              title: "Highlights",
              color: "primary",
              delay: "0.4s",
              content: (
                <ul className="space-y-3">
                  {[
                    "Founding Engineer at TraxContents with equity stake",
                    "Salesforce CPQ & Health Cloud Specialist",
                    "Full-stack expertise across React, Node.js, Python"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              )
            }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="group relative p-8 border-2 border-transparent hover:border-primary/30 transition-all duration-500 bg-card/50 backdrop-blur-sm hover:shadow-[var(--shadow-xl)] hover:-translate-y-2"
                style={{ animationDelay: item.delay, animation: `reveal 0.8s ease-out ${item.delay} both` }}
              >
                <div className="absolute inset-0 bg-[linear-gradient(var(--gradient-accent))] opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-lg" />
                <div className={`w-16 h-16 rounded-2xl bg-${item.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                  <Icon className={`h-8 w-8 text-${item.color}`} />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-secondary relative z-10">{item.title}</h3>
                <div className="relative z-10">{item.content}</div>
              </Card>
            );
          })}
        </div>

        <Card className="relative p-10 bg-card/50 backdrop-blur-sm border-2 border-transparent hover:border-primary/30 transition-all duration-500 overflow-hidden group">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,hsl(var(--primary)/0.05)_100%)]" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-[linear-gradient(var(--gradient-accent))]">
              Professional Summary
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Founding Full Stack Engineer at TraxContents, where I developed a product from 0 to 1 and hold equity in the company. 
              Experienced in full-stack development, web scraping, backend systems, and real-time data integration. 
              Currently specializing as a Software Developer at Forsys Inc, focusing on Salesforce CPQ, Data Cloud, Apex, Flows, 
              and Conga customization. Proficient in Python, JavaScript, Node.js, React.js, Flask, Django, and cloud platforms 
              like AWS and IBM Cloud.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
