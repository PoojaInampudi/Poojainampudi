import { Badge } from "@/components/ui/badge";
import { 
  Cloud, Code2, Database, Wrench, Sparkles, Heart, Layers, Zap, 
  Workflow, Bot, FileText, CloudCog, FileCode, Palette, Wind, 
  Monitor, Server, Coffee, Package, Beaker, Webhook, Network, 
  GitBranch, Cog, GitPullRequest, Play, Search, Component
} from "lucide-react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";
import type { ComponentType, SVGProps } from "react";

const skillCategories = [
  {
    title: "Salesforce",
    icon: Cloud,
    color: "primary",
    skills: ["Salesforce CPQ", "Health Cloud", "OmniStudio", "Apex", "LWC", "SOQL", "Flows", "Agent Force", "Conga CPQ", "Data Cloud"],
  },
  {
    title: "Frontend",
    icon: Code2,
    color: "accent",
    skills: ["React.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Aura Components", "Responsive Design"],
  },
  {
    title: "Backend & Cloud",
    icon: Database,
    color: "primary",
    skills: ["Node.js", "Python", "Java", "C#", ".NET", "Flask", "Django", "REST APIs", "SOAP APIs", "AWS (EC2, Lambda, S3)", "MongoDB", "MS SQL"],
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    color: "accent",
    skills: ["Git", "Bitbucket", "Jenkins", "CI/CD", "Playwright", "BeautifulSoup", "SERP API", "IBM Cloud"],
  },
];

type Category = { title: string; icon: ComponentType<SVGProps<SVGSVGElement>>; color: string; skills: string[] };

const colorStyles = {
  primary: {
    bg: "bg-gradient-to-tr from-primary/30 to-primary/10",
    text: "text-primary",
    badgeGradient: "bg-gradient-to-r from-primary/50 via-primary/40 to-primary/30",
  },
  accent: {
    bg: "bg-gradient-to-tr from-accent/30 to-accent/10",
    text: "text-accent",
    badgeGradient: "bg-gradient-to-r from-accent/50 via-accent/40 to-accent/30",
  },
};

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
    "Aura Components": Sparkles,
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
    <section className="py-20 px-4 scroll-mt-16 bg-gradient-to-b from-white/80 to-white/10 relative overflow-hidden">
      {/* Floating background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/10 blur-3xl"
          animate={{ x: [0, -40, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-secondary">Technical Skills</h2>
          <div className="w-28 h-1 mx-auto mb-12 rounded-full bg-[linear-gradient(var(--gradient-primary))] relative">
            <motion.div
              className="absolute inset-0 rounded-full opacity-30"
              animate={{ x: [0, 8, 0], opacity: [0.6, 0.2, 0.6] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {skillCategories.map((category, i) => (
            <FloatingCard key={i} category={category} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FloatingCard({ category, index }: { category: Category; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateY = useTransform(x, [-100, 100], [8, -8]);
  const rotateX = useTransform(y, [-60, 60], [-6, 6]);

  function handleMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = e.clientX - rect.left - rect.width / 2;
    const py = e.clientY - rect.top - rect.height / 2;
    x.set(px);
    y.set(py);
  }
  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  const styles = colorStyles[category.color] ?? colorStyles.primary;
  const Icon = category.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateY, rotateX, perspective: 1200 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="relative group"
    >
      {/* Gradient border wrapper */}
      <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${styles.badgeGradient} opacity-60 blur-xl group-hover:opacity-100 transition-opacity duration-500`} />
      
      {/* Main card with organic shape */}
      <div className={`relative p-8 rounded-full ${styles.bg} backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden`}>
        {/* Animated gradient orbs */}
        <motion.div
          className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${styles.badgeGradient} opacity-20 blur-3xl`}
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-white/10 opacity-30 blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Header with icon */}
        <div className="flex items-center gap-4 mb-6 relative z-10">
          <motion.div 
            className="relative"
            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 blur-lg" />
            <div className={`relative w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-br ${styles.badgeGradient} backdrop-blur-sm shadow-lg`}>
              <Icon className={`h-10 w-10 ${styles.text}`} />
            </div>
          </motion.div>
          <div>
            <h3 className="text-2xl font-extrabold text-secondary tracking-tight">{category.title}</h3>
            <div className="text-xs text-muted-foreground mt-1 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary/60" />
              <span className="opacity-80">Expert proficiency</span>
            </div>
          </div>
        </div>

        {/* Skills with logo bubbles */}
        <div className="flex flex-wrap gap-4 relative z-10">
          {category.skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              animate={{ 
                y: [0, -4, 0],
              }}
              transition={{ 
                delay: 0.3 + i * 0.05,
                y: { duration: 3 + (i % 3) * 0.5, repeat: Infinity, ease: "easeInOut" }
              }}
              whileHover={{ scale: 1.15, y: -12 }}
              className="group/badge relative"
            >
              {/* Circular badge with gradient */}
              <div className={`relative w-14 h-14 rounded-full ${styles.badgeGradient} backdrop-blur-md shadow-lg flex items-center justify-center border border-white/30`}>
                {/* Shine effect on hover */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover/badge:translate-x-[100%] transition-transform duration-700" />
                
                {/* Skill icon */}
                {(() => {
                  const SkillIcon = getSkillIcon(skill);
                  return <SkillIcon className="relative z-10 text-white w-6 h-6" />;
                })()}
                
                {/* Hover tooltip */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-secondary text-white text-xs font-semibold rounded-lg opacity-0 group-hover/badge:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none shadow-lg z-20">
                  {skill}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

