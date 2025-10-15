import { Badge } from "@/components/ui/badge";
import { Cloud, Code2, Database, Wrench, Sparkles } from "lucide-react";
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

export default function Skills() {
  return (
    <section className="py-20 px-4 scroll-mt-16 bg-gradient-to-b from-white/80 to-white/10">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-secondary">Technical Skills</h2>
        <div className="w-28 h-1 mx-auto mb-12 rounded-full bg-[linear-gradient(var(--gradient-primary))] relative">
          <motion.div
            className="absolute inset-0 rounded-full opacity-30"
            animate={{ x: [0, 8, 0], opacity: [0.6, 0.2, 0.6] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {skillCategories.map((category, i) => (
            <FloatingCard key={i} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FloatingCard({ category }: { category: Category }) {
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
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateY, rotateX, perspective: 900 }}
      whileHover={{ scale: 1.03 }}
      className={`relative p-6 rounded-[40px] ${styles.bg} backdrop-blur-[10px] shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-visible`}
    >
      {/* Blob accent */}
      <motion.div
        className="absolute -top-8 -right-8 w-36 h-36 rounded-full bg-white/10 filter blur-2xl animate-[blob_12s_ease-in-out_infinite]"
        style={{ zIndex: 0 }}
      />
      <div className="flex items-center gap-4 mb-4 relative z-10">
        <div className={`w-16 h-16 rounded-full flex items-center justify-center ${styles.text}/10`}>
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${styles.bg}`}>
            <Icon className={`h-6 w-6 ${styles.text}`} />
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-extrabold text-secondary tracking-tight">{category.title}</h3>
          <div className="text-xs text-muted-foreground mt-1 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-primary/60" />
            <span className="opacity-80">Curated set of strengths</span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mt-3 relative z-10">
        {category.skills.map((skill, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -6, 0], rotate: [-1, 0, 1] }}
            transition={{ duration: 3 + (i % 3) * 0.4, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.08, y: -8 }}
            className={`px-4 py-2 text-sm font-semibold text-white/90 rounded-full shadow-md ${styles.badgeGradient} backdrop-blur-sm`}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

