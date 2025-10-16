import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";
import { motion } from "framer-motion";

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
    company: "The University of Texas at San Antonio",
    role: "Student Volunteer | UTS Infrastructure Services",
    location: "United States · Remote",
    period: "Aug 2023 - Dec 2023",
    color: "primary",
    skills: ["Windows", "Skill Development", "Performance Analysis"],
    achievements: [
      "Analyzed large datasets to uncover trends, patterns, and insights, enabling data-driven decision-making",
      "Established performance metrics and KPIs to assess the effectiveness of various business processes",
      "Conducted detailed performance evaluations and compiled comprehensive reports to communicate findings to stakeholders",
      "Employed statistical tools and software to perform complex data analysis, enhancing the precision and reliability of results",
      "Collaborated with cross-functional teams to identify areas for improvement and implement performance-enhancing strategies",
      "Designed and maintained dashboards to facilitate real-time performance monitoring and reporting",
    ],
  },
  {
    company: "The University of Texas at San Antonio",
    role: "Performance Analyst",
    location: "San Antonio, Texas Metropolitan Area · Remote",
    period: "May 2023 - Aug 2023",
    color: "accent",
    skills: ["Performance Analysis", "Skill Development", "ServiceNow"],
    achievements: [
      "Earned ServiceNow certification, mastering platform functionality",
      "Collaborated with teams to design tailored dashboards",
      "Created interactive reports for performance analysis using ServiceNow",
      "Analyzed data to identify performance trends and improvement areas",
      "Helped develop performance metrics and KPIs for goal tracking",
      "Presented findings and recommendations in meetings",
    ],
  },
  {
    company: "The University of Texas at San Antonio",
    role: "Student Grader",
    location: "San Antonio, Texas, United States · On-site",
    period: "Aug 2022 - May 2023",
    color: "primary",
    skills: ["Python", "C", "Java", "C++", "Debugging", "Code Review"],
    achievements: [
      "Reviewed over 100 student programming assignments in Python, Java, and C++",
      "Delivered detailed feedback on code quality, efficiency, and adherence to best practices",
      "Guided students in debugging code, resulting in a 20% decrease in assignment errors",
      "Evaluated assignments according to specific criteria and rubrics, ensuring consistency",
      "Oversaw grading deadlines, enhancing turnaround time by 15%",
      "Collaborated with instructors to uphold grading standards",
    ],
  },
  {
    company: "Cognizant",
    role: "Full Stack Developer",
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
    <section className="py-20 px-4 bg-muted/30 scroll-mt-16 relative overflow-hidden" id="experience">
      {/* Decorative background lines */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-secondary">
          Professional Experience & Skills
        </h2>
        <div className="w-24 h-1 mx-auto mb-4 rounded-full bg-[linear-gradient(var(--gradient-primary))]" />
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Full-stack expertise across Salesforce ecosystem, modern web technologies, and cloud platforms
        </p>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20 -translate-x-1/2" />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className="relative grid md:grid-cols-2 gap-8">
                <div className="absolute left-4 md:left-1/2 w-6 h-6 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary via-accent to-primary/50 border-4 border-background shadow-[0_0_20px_var(--primary)] z-10" />

                {index % 2 === 0 ? (
                  <>
                    <div className="ml-12 md:ml-0">
                      <div className="relative p-6 md:p-8 rounded-2xl border border-primary/20 bg-gradient-to-br from-background/60 via-background/30 to-background/10 backdrop-blur-md hover:border-primary/60 hover:shadow-[0_0_30px_-10px_var(--primary)] transition-all duration-500">
                        {/* Removed the left connecting line */}
                        <div className="flex flex-col gap-4">
                          <div>
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

                          <div>
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
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:block" />
                  </>
                ) : (
                  <>
                    <div className="hidden md:block" />
                    <div className="ml-12 md:ml-0">
                      <div className="relative p-6 md:p-8 rounded-2xl border border-accent/20 bg-gradient-to-br from-background/60 via-background/30 to-background/10 backdrop-blur-md hover:border-accent/60 hover:shadow-[0_0_30px_-10px_var(--accent)] transition-all duration-500">
                        {/* Removed the right connecting line */}
                        <div className="flex flex-col gap-4">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <Building2 className="h-5 w-5 text-accent" />
                              <h3 className="text-2xl font-bold text-secondary">{exp.company}</h3>
                            </div>
                            <p className="text-xl font-semibold text-accent mb-1">{exp.role}</p>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              <span className="text-sm">{exp.period}</span>
                              <span className="text-sm">• {exp.location}</span>
                            </div>
                          </div>

                          <div>
                            <h4 className="text-sm font-semibold text-secondary mb-2">Skills Utilized:</h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.skills.map((skill, skillIndex) => (
                                <Badge
                                  key={skillIndex}
                                  variant="secondary"
                                  className="bg-accent/10 text-accent hover:bg-accent/20 border border-accent/20"
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
                                  <span className="text-accent mr-2 mt-1">▸</span>
                                  <span className="text-sm">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
