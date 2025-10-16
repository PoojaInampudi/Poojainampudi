import { motion } from "framer-motion";
import type { ComponentType, SVGProps } from "react";
import { 
  SiSalesforce, SiJavascript, SiTypescript, SiHtml5, SiCss3, 
  SiTailwindcss, SiReact, SiNodedotjs, SiPython, SiSharp, 
  SiDotnet, SiFlask, SiDjango, SiAmazon, SiMongodb,
  SiGit, SiBitbucket, SiJenkins
} from "react-icons/si";
import { Cloud, Code2, Database, Wrench, Workflow, Coffee } from "lucide-react";
import salesforceCPQIcon from "@/assets/salesforce-cpq-icon.png";
import omnistudioIcon from "@/assets/Omnistudio.png";
import lwcIcon from "@/assets/LWC.png";
import agentforceIcon from "@/assets/Agentforce.png";
import Rest from "@/assets/Rest.png";
import serp from "@/assets/Serp.png";
import { FaRobot } from "react-icons/fa";
const skillCategories = [
  {
    title: "Salesforce",
    icon: Cloud,
    skills: ["Salesforce CPQ", "Health Cloud", "OmniStudio", "Apex", "LWC", "SOQL", "Flows", "Agent Force", "Conga CPQ", "Data Cloud"],
  },
  {
    title: "Frontend",
    icon: Code2,
    skills: ["React.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Aura Components"],
  },
  {
    title: "Backend & Cloud",
    icon: Database,
    skills: ["Node.js", "Python", "Java", "C#", ".NET", "Flask", "Django", "REST APIs","AWS (EC2, Lambda, S3)", "MongoDB", "MS SQL"],
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    skills: ["Git", "Bitbucket", "Jenkins", "CI/CD", "Playwright", "BeautifulSoup"],
  },
];

type Category = { title: string; icon: ComponentType<SVGProps<SVGSVGElement>>; skills: string[] };

function getSkillIcon(skill: string): ComponentType<any> | string {
  const iconMap: Record<string, ComponentType<any> | string> = {
    "Salesforce CPQ": salesforceCPQIcon,
    "OmniStudio": omnistudioIcon,
    "Apex": Code2,
    "LWC": lwcIcon,
    "SOQL": Database,
    "Flows": Workflow,
    "Agent Force": FaRobot,
    "Conga CPQ": Cloud,
    "Data Cloud": SiSalesforce,
    "React.js": SiReact,
    "JavaScript": SiJavascript,
    "TypeScript": SiTypescript,
    "HTML5": SiHtml5,
    "CSS3": SiCss3,
    "Tailwind CSS": SiTailwindcss,
    "Aura Components": SiSalesforce,
    "Node.js": SiNodedotjs,
    "Python": SiPython,
    "Java": Coffee,
    "C#": SiSharp,
    ".NET": SiDotnet,
    "Flask": SiFlask,
    "Django": SiDjango,
    "REST APIs": Rest,
    "SOAP APIs": Cloud,
    "AWS (EC2, Lambda, S3)": SiAmazon,
    "MongoDB": SiMongodb,
    "MS SQL": Database,
    "Git": SiGit,
    "Bitbucket": SiBitbucket,
    "Jenkins": SiJenkins,
    "CI/CD": SiGit,
    "Playwright": Code2,
    "BeautifulSoup": SiPython,
    "SERP API": serp,
    "IBM Cloud": Cloud,
  };
  return iconMap[skill] || Cloud;
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-4 relative overflow-hidden bg-[radial-gradient(circle_at_top_left,var(--primary)/8,transparent_60%)]"
    >
      {/* floating subtle orbs */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-56 h-56 bg-accent/10 rounded-full blur-3xl animate-pulse pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-3">
            Technical Skills
          </h2>
          <div className="w-28 h-1 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary via-accent to-secondary" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A curated set of technologies and tools I use to build solutions — organized by area.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
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
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="relative"
    >
      <div className="p-8 rounded-[2rem] bg-gradient-to-br from-background/60 via-background/30 to-background/10 border border-primary/20 hover:border-primary/60 hover:shadow-[0_0_40px_-10px_var(--primary)] backdrop-blur-md transition-all duration-500 overflow-hidden">
        <div className="flex items-center gap-4 mb-6 relative z-10">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <Icon className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h3 className="text-2xl font-extrabold text-secondary tracking-tight">
              {category.title}
            </h3>
            <p className="text-xs text-muted-foreground mt-1">
              Focused tools and frameworks
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 relative z-10">
          {category.skills.map((skill, i) => {
            const SkillIcon = getSkillIcon(skill);
            const isBottomRow = Math.floor(i / 6) >= 1; // show tooltip below for icons in 2nd+ rows
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.03 }}
                whileHover={{ scale: 1.06, y: -6 }}
                className="group relative w-14 h-14 flex items-center justify-center rounded-lg shadow-md cursor-pointer overflow-visible border border-transparent hover:border-primary transition-all duration-200"
              >
                {/* Tooltip: dynamically positioned */}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-white text-xs font-medium rounded-md opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap pointer-events-none z-50 shadow-lg ${
                    isBottomRow ? "top-[110%]" : "-top-10"
                  }`}
                >
                  {skill}
                </div>

                <div
                  className={`absolute inset-0 ${
                    i % 2 === 0
                      ? "bg-gradient-to-tr from-primary/40 to-primary/20"
                      : "bg-gradient-to-tr from-accent/40 to-accent/20"
                  } opacity-90 rounded-lg`}
                />

                {/* <div className="relative z-10 w-7 h-7 text-white flex items-center justify-center">
                  {typeof SkillIcon === 'string' ? (
                    <img src={SkillIcon} alt={skill} className="w-5 h-5 object-contain invert" />
                  ) : (
                    <SkillIcon size={20} color="white" />
                  )}
                </div> */}
                <div className="relative z-10 w-7 h-7 text-white flex items-center justify-center">
                {typeof SkillIcon === "string" ? (
                  <div className="relative">
                    <img
                      src={SkillIcon}
                      alt={skill}
                      className="w-5 h-5 object-contain invert brightness-200 contrast-125 saturate-0 opacity-90"
                    />
                    <div className="absolute inset-0 bg-white/10 rounded"></div>
                  </div>
                ) : (
                  <SkillIcon size={20} color="white" />
                )}
              </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
