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
    <section className="py-20 px-4 scroll-mt-16 relative overflow-hidden" id="skills">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-primary/20 rounded-full animate-float-slow" />
        <div className="absolute bottom-20 right-10 w-40 h-40 border-2 border-accent/20 rounded-full animate-float-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border-2 border-primary/20 rounded-full animate-float-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-[linear-gradient(var(--gradient-accent))]">
              Technical Skills
            </span>
          </h2>
          <div className="w-32 h-1.5 mx-auto rounded-full bg-[linear-gradient(var(--gradient-accent))]" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const isEven = index % 2 === 0;
            return (
              <Card
                key={index}
                className={`group relative p-8 border-2 border-transparent hover:border-primary/30 transition-all duration-700 bg-card/50 backdrop-blur-sm hover:shadow-[var(--shadow-xl)] hover:-translate-y-2 ${
                  isEven ? 'animate-slide-in-left' : 'animate-slide-in-right'
                }`}
                style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'both' }}
              >
                <div className="absolute inset-0 bg-[linear-gradient(var(--gradient-accent))] opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-lg" />
                
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-${category.color}/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                    <Icon className={`h-8 w-8 text-${category.color}`} />
                  </div>
                  <h3 className="text-3xl font-bold text-secondary">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-3 relative z-10">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="outline"
                      className="px-4 py-2 text-sm bg-card hover:bg-primary hover:text-primary-foreground hover:border-primary border-2 transition-all duration-300 hover:scale-110 cursor-default"
                      style={{ 
                        animationDelay: `${(index * 0.15) + (skillIndex * 0.05)}s`,
                        animation: `reveal 0.5s ease-out ${(index * 0.15) + (skillIndex * 0.05)}s both`
                      }}
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
