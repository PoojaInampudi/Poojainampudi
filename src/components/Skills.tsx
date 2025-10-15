import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Cloud, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Salesforce",
    icon: Cloud,
    color: "primary",
    skills: [
      "Salesforce CPQ",
      "Health Cloud",
      "OmniStudio",
      "Apex",
      "Lightning Web Components",
      "SOQL",
      "Flows",
      "Agent Force",
      "Conga CPQ",
      "Data Cloud",
    ],
  },
  {
    title: "Frontend",
    icon: Code2,
    color: "accent",
    skills: [
      "React.js",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Lightning Aura Components",
      "Responsive Design",
    ],
  },
  {
    title: "Backend & Cloud",
    icon: Database,
    color: "primary",
    skills: [
      "Node.js",
      "Python",
      "Java",
      "C#",
      ".NET",
      "Flask",
      "Django",
      "RESTful APIs",
      "SOAP APIs",
      "AWS (EC2, Lambda, S3)",
      "MongoDB",
      "MS SQL",
    ],
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    color: "accent",
    skills: [
      "Git",
      "Bitbucket",
      "Jenkins",
      "CI/CD",
      "Playwright",
      "BeautifulSoup",
      "SERP API",
      "IBM Cloud",
    ],
  },
];

const Skills = () => {
  return (
    <section className="py-20 px-4 scroll-mt-16" id="skills">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-secondary">
          Technical Skills
        </h2>
        <div className="w-24 h-1 mx-auto mb-12 rounded-full bg-[linear-gradient(var(--gradient-primary))]" />

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-[var(--shadow-lg)] transition-all duration-300 border-2 hover:border-primary/50 bg-[linear-gradient(var(--gradient-card))]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-${category.color}/10 flex items-center justify-center`}>
                    <Icon className={`h-6 w-6 text-${category.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="outline"
                      className="bg-card hover:bg-primary/10 hover:text-primary hover:border-primary transition-colors duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
