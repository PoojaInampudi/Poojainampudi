import { 
  Cloud, Code2, Database, Wrench, Heart, Layers, Zap, 
  Workflow, Bot, FileText, CloudCog, FileCode, Palette, Wind, 
  Monitor, Server, Coffee, Package, Beaker, Webhook, Network, 
  GitBranch, Cog, GitPullRequest, Play, Search, Component
} from "lucide-react";
import { motion } from "framer-motion";
import type { ComponentType, SVGProps } from "react";

const skillCategories = [
  {
    title: "Salesforce",
    icon: Cloud,
    skills: ["Salesforce CPQ", "Health Cloud", "OmniStudio", "Apex", "LWC", "SOQL", "Flows", "Agent Force", "Conga CPQ", "Data Cloud"],
  },
  {
    title: "Frontend",
    icon: Code2,
    skills: ["React.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Aura Components", "Responsive Design"],
  },
  {
    title: "Backend & Cloud",
    icon: Database,
    skills: ["Node.js", "Python", "Java", "C#", ".NET", "Flask", "Django", "REST APIs", "SOAP APIs", "AWS (EC2, Lambda, S3)", "MongoDB", "MS SQL"],
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    skills: ["Git", "Bitbucket", "Jenkins", "CI/CD", "Playwright", "BeautifulSoup", "SERP API", "IBM Cloud"],
  },
];

type Category = { title: string; icon: ComponentType<SVGProps<SVGSVGElement>>; skills: string[] };

function getSkillIcon(skill: string): ComponentType<SVGProps<SVGSVGElement>> {
  const iconMap: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
    "Salesforce CPQ": Cloud,
    "Health Cloud": Heart,
    "OmniStudio": Layers,
    "Apex": Code2,
    "LWC": Zap,
    "SOQL": Database,
    "Flows": Workflow,
    "Agent Force": Bot,
    "Conga CPQ": FileText,
    "Data Cloud": CloudCog,
    "React.js": Component,
    "JavaScript": FileCode,
    "TypeScript": FileCode,
    "HTML5": FileCode,
    "CSS3": Palette,
    "Tailwind CSS": Wind,
    "Aura Components": Layers,
    "Responsive Design": Monitor,
    "Node.js": Server,
    "Python": Code2,
    "Java": Coffee,
    "C#": Code2,
    ".NET": Package,
    "Flask": Beaker,
    "Django": Server,
    "REST APIs": Webhook,
    "SOAP APIs": Network,
    "AWS (EC2, Lambda, S3)": Cloud,
    "MongoDB": Database,
    "MS SQL": Database,
    "Git": GitBranch,
    "Bitbucket": GitBranch,
    "Jenkins": Cog,
    "CI/CD": GitPullRequest,
    "Playwright": Play,
    "BeautifulSoup": Code2,
    "SERP API": Search,
    "IBM Cloud": Cloud,
  };
  return iconMap[skill] || Code2;
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-3">Technical Skills</h2>
          <div className="w-20 h-1 mx-auto bg-primary rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, i) => (
            <SkillCard key={i} category={category} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ category, index }: { category: Category; index: number }) {
  const Icon = category.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-xl font-bold text-secondary">{category.title}</h3>
      </div>

      <div className="flex flex-wrap gap-3">
        {category.skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.03 }}
            className="group/badge relative"
          >
            <div className="relative w-11 h-11 rounded-full bg-muted hover:bg-primary/20 flex items-center justify-center border border-border hover:border-primary transition-all duration-200 cursor-pointer">
              {(() => {
                const SkillIcon = getSkillIcon(skill);
                return <SkillIcon className="w-5 h-5 text-muted-foreground group-hover/badge:text-primary transition-colors" />;
              })()}
              
              <div className="absolute -bottom-9 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-secondary text-white text-xs font-medium rounded opacity-0 group-hover/badge:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-10">
                {skill}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
