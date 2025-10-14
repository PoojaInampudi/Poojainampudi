import { Card } from "@/components/ui/card";
import { Award, Briefcase, GraduationCap } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 px-4" id="about">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-secondary">
          About Me
        </h2>
        <div className="w-24 h-1 mx-auto mb-12 rounded-full bg-[linear-gradient(var(--gradient-primary))]" />

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 hover:shadow-[var(--shadow-lg)] transition-all duration-300 border-2 hover:border-primary/50 bg-[linear-gradient(var(--gradient-card))]">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-secondary">Education</h3>
            <div className="space-y-2 text-sm">
              <div>
                <p className="font-semibold text-foreground">M.S. Computer Science</p>
                <p className="text-muted-foreground">University of Texas at San Antonio</p>
                <p className="text-primary font-medium">GPA: 3.8/4.0</p>
              </div>
              <div className="pt-2">
                <p className="font-semibold text-foreground">B.Tech CS & Engineering</p>
                <p className="text-muted-foreground">R.V.R & J.C College of Engineering</p>
                <p className="text-primary font-medium">GPA: 8.7/10</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-[var(--shadow-lg)] transition-all duration-300 border-2 hover:border-primary/50 bg-[linear-gradient(var(--gradient-card))]">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <Briefcase className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-secondary">Experience</h3>
            <div className="space-y-2 text-sm">
              <div>
                <p className="font-semibold text-foreground">Software Developer</p>
                <p className="text-muted-foreground">Forsys Inc</p>
                <p className="text-primary font-medium">July 2024 - Present</p>
              </div>
              <div className="pt-2">
                <p className="font-semibold text-foreground">Full Stack Developer</p>
                <p className="text-muted-foreground">TraxContents (Founding Engineer)</p>
                <p className="text-primary font-medium">Nov 2023 - Oct 2024</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-[var(--shadow-lg)] transition-all duration-300 border-2 hover:border-primary/50 bg-[linear-gradient(var(--gradient-card))]">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-secondary">Highlights</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Founding Engineer at TraxContents with equity stake</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Salesforce CPQ & Health Cloud Specialist</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Full-stack expertise across React, Node.js, Python</span>
              </li>
            </ul>
          </Card>
        </div>

        <Card className="p-8 bg-[linear-gradient(var(--gradient-card))] border-2">
          <h3 className="text-2xl font-bold mb-4 text-secondary">Professional Summary</h3>
          <p className="text-muted-foreground leading-relaxed">
            Founding Full Stack Engineer at TraxContents, where I developed a product from 0 to 1 and hold equity in the company. 
            Experienced in full-stack development, web scraping, backend systems, and real-time data integration. 
            Currently specializing as a Software Developer at Forsys Inc, focusing on Salesforce CPQ, Data Cloud, Apex, Flows, 
            and Conga customization. Proficient in Python, JavaScript, Node.js, React.js, Flask, Django, and cloud platforms 
            like AWS and IBM Cloud.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default About;
