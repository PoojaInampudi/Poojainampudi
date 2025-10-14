import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    name: "Salesforce Certified Platform Developer I",
    issuer: "Salesforce",
    description: "Demonstrates knowledge and skills in building custom applications on the Salesforce Platform",
    skills: ["Apex", "Visualforce", "Lightning Components", "SOQL/SOSL"],
    badgeUrl: "https://trailhead.salesforce.com/credentials/platformdeveloperi",
  },
  {
    name: "Salesforce Certified Administrator",
    issuer: "Salesforce",
    description: "Validates expertise in Salesforce configuration and administration",
    skills: ["Configuration", "Data Management", "Security", "Automation"],
    badgeUrl: "https://trailhead.salesforce.com/credentials/administrator",
  },
  {
    name: "Salesforce Certified Platform App Builder",
    issuer: "Salesforce",
    description: "Certifies ability to design, build, and deploy custom applications using declarative customization",
    skills: ["App Builder", "Lightning Pages", "Process Automation", "Data Modeling"],
    badgeUrl: "https://trailhead.salesforce.com/credentials/platformappbuilder",
  },
];

const Certifications = () => {
  return (
    <section className="py-20 px-4 bg-muted/30" id="certifications">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-secondary">
          Certifications
        </h2>
        <div className="w-24 h-1 mx-auto mb-6 rounded-full bg-[linear-gradient(var(--gradient-primary))]" />
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Professional certifications demonstrating expertise in Salesforce platform development and administration
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-[var(--shadow-lg)] transition-all duration-300 border-2 hover:border-primary/50 bg-[linear-gradient(var(--gradient-card))] flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <a
                  href={cert.badgeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-dark transition-colors"
                  title="View credential"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              <h3 className="text-lg font-bold text-secondary mb-2 leading-tight">
                {cert.name}
              </h3>
              <p className="text-sm font-medium text-primary mb-3">{cert.issuer}</p>
              <p className="text-sm text-muted-foreground mb-4 flex-grow">
                {cert.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                {cert.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="text-xs bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="p-8 bg-[linear-gradient(var(--gradient-card))] border-2 inline-block">
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Award className="h-8 w-8 text-primary" />
              <div className="text-left">
                <p className="text-2xl font-bold text-secondary">
                  {certifications.length}+ Salesforce Certifications
                </p>
                <p className="text-muted-foreground">
                  Continuously expanding expertise through professional development
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
