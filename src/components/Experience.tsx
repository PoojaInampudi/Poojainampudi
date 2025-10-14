import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";

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
    <section className="py-20 px-4 bg-muted/30" id="experience">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-secondary">
          Professional Experience
        </h2>
        <div className="w-24 h-1 mx-auto mb-12 rounded-full bg-[linear-gradient(var(--gradient-primary))]" />

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-6 md:p-8 hover:shadow-[var(--shadow-lg)] transition-all duration-300 border-2 hover:border-primary/50 bg-[linear-gradient(var(--gradient-card))]"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Building2 className="h-5 w-5 text-primary" />
                    <h3 className="text-2xl font-bold text-secondary">{exp.company}</h3>
                  </div>
                  <p className="text-xl font-semibold text-primary mb-1">{exp.role}</p>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{exp.period}</span>
                    <span className="text-sm">• {exp.location}</span>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-secondary mb-2">Skills Utilized:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-secondary mb-3">Key Achievements:</h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start text-muted-foreground">
                      <span className="text-primary mr-2 mt-1">▸</span>
                      <span className="text-sm">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
