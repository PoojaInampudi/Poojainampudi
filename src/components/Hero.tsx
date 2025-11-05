import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Download, MapPin, Calendar, Briefcase, Users } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";


const roles = [
  "Software Developer",
  "Salesforce CPQ Specialist",
  "Full-Stack Engineer",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [deleting, setDeleting] = useState(false);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      prefersReducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
  }, []);

  

  useEffect(() => {
    if (prefersReducedMotion.current) {
      setTyped(roles[roleIndex]);
      return;
    }

    const currentRole = roles[roleIndex];
    const speed = deleting ? 40 : 90;
    const timeout = setTimeout(() => {
      setTyped((prev) => {
        if (!deleting) {
          const next = currentRole.slice(0, prev.length + 1);
          if (next === currentRole) {
            setTimeout(() => setDeleting(true), 1000);
          }
          return next;
        }
        const next = currentRole.slice(0, prev.length - 1);
        if (next === "") {
          setDeleting(false);
          setRoleIndex((idx) => (idx + 1) % roles.length);
        }
        return next;
      });
    }, speed);

    return () => clearTimeout(timeout);
  }, [typed, deleting, roleIndex]);

  return (
    <section
      id="home"
      aria-label="Intro — Pooja Inampudi"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Layered gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/10 to-accent/20" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 30%, hsl(var(--primary) / 0.25) 0%, transparent 70%),
                           radial-gradient(circle at 80% 60%, hsl(var(--accent) / 0.25) 0%, transparent 70%)`
        }}
      />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDE0YzAtMy4zMTQgMi42ODYtNiA2LTZzNi0yLjY4NiA2LTYtMi42ODYtNi02LTYtNiAyLjY4Ni02IDYtMi42ODYgNi02IDZ6TTAgMTRjMC0zLjMxNCAyLjY4Ni02IDYtNnM2LTIuNjg2IDYtNi0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNi0yLjY4NiA2LTYgNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />

      {/* Floating light orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"
          style={{ top: "15%", left: "10%", animationDelay: "0s", animationDuration: "18s" }}
        />
        <div
          className="absolute w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ bottom: "10%", right: "10%", animationDelay: "5s", animationDuration: "22s" }}
        />
      </div>


      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-10 max-w-6xl mx-auto">
          {/* Text Section */}
          <div className="col-span-2 space-y-6 text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary drop-shadow-sm">
                Pooja Inampudi
              </span>
            </h1>

            <p className="text-2xl md:text-3xl font-semibold text-secondary">
              <span className="mr-3" aria-hidden>💡</span>
              <span aria-live="polite">{typed || roles[roleIndex]}</span>
              <span className="inline-block ml-2 w-1 bg-muted-foreground animate-cursor" aria-hidden />
            </p>

            <div className="relative max-w-3xl">
              <div className="absolute -inset-1 bg-gradient-to-br from-background/30 to-card/20 rounded-2xl blur-lg opacity-60 -z-10" />
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed p-6 rounded-2xl backdrop-blur-sm">
                I build end-to-end web applications that combine <strong className="font-semibold text-secondary">sleek frontends</strong>, <strong className="font-semibold text-secondary">robust backends</strong>, and <strong className="font-semibold text-secondary">seamless user experiences</strong>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-4">
              <div className="flex flex-wrap items-center gap-3">
                {[
                  "React",
                  "TypeScript",
                  "Node.js",
                  "Salesforce",
                  "CPQ",
                  "Python"
                ].map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 rounded-full bg-card/70 border border-border text-sm text-muted-foreground shadow-sm"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-6 py-3 rounded-full shadow-2xl hover:-translate-y-1 transform transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-primary/25"
                >
                  <a href="mailto:inampudipooja.work@gmail.com" className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    Contact
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="px-6 py-3 rounded-full border border-primary/60 bg-card/50 text-primary hover:shadow-md hover:-translate-y-1 transition-transform transition-shadow duration-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/25 btn-shine pulse-ring overflow-hidden relative"
                >
                  <a
                    href="https://drive.google.com/file/d/1nViAnsD9jGjRbUDjq41brMuuU9VAcnid/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open Pooja Inampudi's resume (Google Drive)"
                    className="flex items-center gap-2"
                  >
                    <Download className="h-4 w-4" />
                    Resume
                  </a>
                </Button>

                <Button asChild variant="ghost" size="lg" className="px-4 py-2">
                  <a
                    href="https://calendly.com/inampudipooja/meet-with-pooja-inampudi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full px-4 py-2 bg-primary/10 text-primary border border-primary/30 shadow-sm hover:bg-primary/20 hover:shadow-md transition-all duration-200"
                  >
                    <Calendar className="h-4 w-4" />
                    Schedule
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Profile Section */}
          <div className="col-span-1 flex flex-col items-center gap-6 relative">
            <div className="relative group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-accent to-secondary blur-3xl opacity-40 group-hover:opacity-60 transition-all duration-700" />
              <img
                src={profilePhoto}
                alt="Pooja Inampudi — profile"
                className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover ring-4 ring-card/40 shadow-2xl transform transition-transform duration-700 group-hover:scale-110"
              />
              <a
                href="https://linkedin.com/in/poojainampudi"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
                className="absolute -bottom-3 -right-3 bg-gradient-to-br from-primary to-accent rounded-full w-12 h-12 flex items-center justify-center text-primary-foreground shadow-xl hover:scale-110 transition-all"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>

            {/* Fancy location badge */}
            <div className="flex items-center gap-3 px-6 py-4 rounded-full bg-gradient-to-r from-primary/20 via-accent/15 to-secondary/10 border border-primary/40 shadow-xl backdrop-blur-md hover:scale-105 transition-all duration-300">
              <MapPin className="h-6 w-6 text-primary drop-shadow-sm" />
              <div className="text-left">
                <div className="text-base md:text-lg font-semibold text-secondary">
                  Austin, Texas
                </div>
                {/* <div className="text-sm md:text-base text-muted-foreground font-normal tracking-wide bg-transparent">
                  Open to Relocate
                </div> */}
            </div>
          </div>

          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-25px); }
        }
        .animate-float { animation: float 7s ease-in-out infinite; }

        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        .animate-cursor {
          display: inline-block;
          width: 8px;
          height: 1.2em;
          background: currentColor;
          vertical-align: middle;
          margin-left: 6px;
          animation: blink 1s steps(2, start) infinite;
        }

        /* Button shine and pulse for Resume buttons */
        .btn-shine::after {
          content: '';
          position: absolute;
          top: 0;
          left: -75%;
          width: 50%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.14), transparent);
          transform: skewX(-20deg);
          filter: blur(6px);
          pointer-events: none;
          animation: shine 2400ms linear infinite;
        }

        @keyframes shine {
          0% { left: -75%; }
          100% { left: 125%; }
        }

        @keyframes pulseRing {
          0% {
            box-shadow: 0 0 0 0 rgba(99,102,241, 0.18);
          }
          70% {
            box-shadow: 0 0 0 12px rgba(99,102,241, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(99,102,241, 0);
          }
        }

        .pulse-ring {
          animation: pulseRing 2.5s ease-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-float, .animate-cursor, .btn-shine::after, .pulse-ring { animation: none !important; }
          * { transition: none !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
