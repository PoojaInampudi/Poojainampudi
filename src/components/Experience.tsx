import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, ArrowRight } from "lucide-react";

const experiences = [
  {
    company: "Forsys Inc",
    role: "Software Developer",
    location: "Austin, Texas",
    period: "July 2024 - Present",
    color: "primary",
    skills: [
      "Salesforce Health Cloud",
      "Salesforce CPQ",
      "OmniStudio",
      "Apex",
      "LWC",
      "RESTful APIs",
      "Flows",
      "Agent Force",
    ],
    achievements: [
      "Designed and maintained Salesforce applications using Apex and Lightning Web Components",
      "Configured Conga CPQ with focus on pricing engines and contract lifecycle management",
      "Built OmniScripts, DataRaptors, and Integration Procedures for data flow optimization",
      "Developed RESTful APIs using C# and .NET for Conga CPQ integration",
      "Implemented CI/CD pipelines using Git, Bitbucket, and Jenkins",
    ],
  },
  {
    company: "TraxContents",
    role: "Full Stack Developer (Founding Engineer)",
    location: "Remote, Texas USA",
    period: "Nov 2023 - Oct 2024",
    color: "accent",
    skills: [
      "Web Scraping",
      "Node.js",
      "React.js",
      "Python",
      "AWS (EC2, Lambda, S3)",
      "MongoDB",
      "Tailwind CSS",
    ],
    achievements: [
      "Developed product from 0 to 1 as founding engineer with equity stake",
      "Integrated SERP API for price comparison across multiple e-commerce platforms",
      "Automated web scraping pipelines reducing manual work by 70%",
      "Deployed scalable applications on AWS infrastructure",
      "Built dynamic dashboards for pricing trends and depreciation analysis",
    ],
  },
  {
    company: "Cognizant",
    role: "Full Stack Developer",
    location: "India",
    period: "Jun 2021 - Jun 2022",
    color: "primary",
    skills: ["JavaScript", "Java", "Python", "MS SQL", "HTML/CSS", "RESTful APIs"],
    achievements: [
      "Designed and developed full-stack web applications",
      "Implemented server-side logic and back-end APIs using Java and Python",
      "Built and maintained relational databases using MS SQL",
      "Optimized website performance and cross-platform compatibility",
      "Developed RESTful APIs for seamless client-server communication",
    ],
  },
];

const Experience = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden scroll-mt-16" id="experience">
      {/* Diagonal section background */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-background to-muted/20" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-[linear-gradient(var(--gradient-accent))]">
              Professional Experience
            </span>
          </h2>
          <div className="w-32 h-1.5 mx-auto rounded-full bg-[linear-gradient(var(--gradient-accent))]" />
        </div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary transform -translate-x-1/2" />
          
          <div className="space-y-16">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`relative ${isLeft ? 'md:pr-[52%]' : 'md:pl-[52%]'}`}
                  style={{ 
                    animationDelay: `${index * 0.2}s`,
                    animation: `${isLeft ? 'slideInLeft' : 'slideInRight'} 0.8s ease-out ${index * 0.2}s both`
                  }}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute top-8 left-1/2 w-6 h-6 rounded-full bg-primary border-4 border-background transform -translate-x-1/2 z-10 animate-pulse-glow" />
                  
                  <Card className="group relative p-8 border-2 border-transparent hover:border-primary/30 transition-all duration-500 bg-card/80 backdrop-blur-sm hover:shadow-[var(--shadow-xl)] hover:-translate-y-2">
                    <div className="absolute inset-0 bg-[linear-gradient(var(--gradient-accent))] opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-lg" />
                    
                    <div className="relative z-10">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-14 h-14 rounded-2xl bg-${exp.color}/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                          <Building2 className={`h-7 w-7 text-${exp.color}`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-secondary mb-1">{exp.company}</h3>
                          <p className="text-xl font-semibold text-primary mb-2">{exp.role}</p>
                          <div className="flex flex-wrap items-center gap-2 text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm font-medium">{exp.period}</span>
                            <span className="text-sm">•</span>
                            <span className="text-sm">{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, skillIndex) => (
                            <Badge
                              key={skillIndex}
                              variant="secondary"
                              className="px-3 py-1 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border border-primary/20 hover:border-primary transition-all duration-300"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-3">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <div key={achievementIndex} className="flex items-start gap-3 group/item">
                            <ArrowRight className="h-5 w-5 text-accent mt-0.5 flex-shrink-0 group-hover/item:translate-x-1 transition-transform" />
                            <span className="text-muted-foreground text-sm leading-relaxed">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
