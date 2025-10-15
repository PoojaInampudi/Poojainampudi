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
    location: "India",
    period: "Jun 2021 - Jun 2022",
    color: "accent",
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

const allSkills = {
  salesforce: ["Salesforce CPQ", "Health Cloud", "OmniStudio", "Apex", "Lightning Web Components", "SOQL", "Flows", "Agent Force", "Conga CPQ", "Data Cloud", "Lightning Aura Components"],
  frontend: ["React.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"],
  backend: ["Node.js", "Python", "Java", "C#", ".NET", "Flask", "Django", "RESTful APIs", "SOAP APIs", "MongoDB", "MS SQL"],
  cloud: ["AWS (EC2, Lambda, S3)", "IBM Cloud"],
  tools: ["Git", "Bitbucket", "Jenkins", "CI/CD", "Playwright", "BeautifulSoup", "SERP API"],
};

const Experience = () => {
  return (
    <section className="py-20 px-4 bg-muted/30 scroll-mt-16" id="experience">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-secondary">
          Professional Experience & Skills
        </h2>
        <div className="w-24 h-1 mx-auto mb-4 rounded-full bg-[linear-gradient(var(--gradient-primary))]" />
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Full-stack expertise across Salesforce ecosystem, modern web technologies, and cloud platforms
        </p>

        {/* Skills Overview */}
        <Card className="p-6 mb-12 bg-[linear-gradient(var(--gradient-card))] border-2">
          <h3 className="text-2xl font-bold text-center mb-6 text-secondary">Technical Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h4 className="text-sm font-semibold text-primary mb-3 flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                Salesforce
              </h4>
              <div className="flex flex-wrap gap-2">
                {allSkills.salesforce.map((skill, idx) => (
                  <Badge key={idx} variant="outline" className="text-xs bg-primary/5 border-primary/20">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-primary mb-3 flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                Frontend
              </h4>
              <div className="flex flex-wrap gap-2">
                {allSkills.frontend.map((skill, idx) => (
                  <Badge key={idx} variant="outline" className="text-xs bg-primary/5 border-primary/20">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-primary mb-3 flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                Backend & Database
              </h4>
              <div className="flex flex-wrap gap-2">
                {allSkills.backend.map((skill, idx) => (
                  <Badge key={idx} variant="outline" className="text-xs bg-primary/5 border-primary/20">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-primary mb-3 flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                Cloud Platforms
              </h4>
              <div className="flex flex-wrap gap-2">
                {allSkills.cloud.map((skill, idx) => (
                  <Badge key={idx} variant="outline" className="text-xs bg-primary/5 border-primary/20">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="md:col-span-2 lg:col-span-2">
              <h4 className="text-sm font-semibold text-primary mb-3 flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                Tools & DevOps
              </h4>
              <div className="flex flex-wrap gap-2">
                {allSkills.tools.map((skill, idx) => (
                  <Badge key={idx} variant="outline" className="text-xs bg-primary/5 border-primary/20">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 -ml-[7px] rounded-full bg-primary border-4 border-background shadow-lg z-10 animate-pulse" />
                
                {/* Content Card */}
                <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <Card className="p-6 md:p-8 hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/50 bg-[linear-gradient(var(--gradient-card))] hover:scale-105">
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
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
