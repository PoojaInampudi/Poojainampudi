import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink, Cloud } from "lucide-react";
import certificationsBanner from "@/assets/certifications-banner.png";

const certifications = [
  {
    name: "Salesforce Certified Platform Developer I",
    issuer: "Salesforce",
    description: "Demonstrates knowledge and skills in building custom applications on the Salesforce Platform",
    skills: ["Apex", "Visualforce", "Lightning Components", "SOQL/SOSL"],
    badgeUrl: "https://trailhead.salesforce.com/credentials/platformdeveloperi",
    icon: Cloud,
  },
  {
    name: "Salesforce Certified AI Associate",
    issuer: "Salesforce",
    description: "Validates foundational knowledge of AI concepts and Salesforce AI capabilities",
    skills: ["AI Fundamentals", "Einstein AI", "Prompt Engineering", "AI Ethics"],
    badgeUrl: "https://trailhead.salesforce.com/credentials/aiassociate",
    icon: Cloud,
  },
  {
    name: "Salesforce Certified AI Specialist",
    issuer: "Salesforce",
    description: "Certifies advanced expertise in implementing and optimizing Salesforce AI solutions",
    skills: ["Einstein GPT", "AI Models", "Predictive Analytics", "AI Integration"],
    badgeUrl: "https://trailhead.salesforce.com/credentials/aispecialist",
    icon: Cloud,
  },
  {
    name: "Salesforce Certified Data Cloud Consultant",
    issuer: "Salesforce",
    description: "Validates expertise in designing and implementing Data Cloud solutions",
    skills: ["Data Cloud", "Data Integration", "Segmentation", "Activation"],
    badgeUrl: "https://trailhead.salesforce.com/credentials/datacloudconsultant",
    icon: Cloud,
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    description: "Foundational understanding of AWS Cloud concepts, services, and terminology",
    skills: ["AWS Cloud", "Cloud Computing", "Core Services", "Security"],
    badgeUrl: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
    icon: Cloud,
  },
  {
    name: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services",
    description: "Demonstrates ability to develop and maintain AWS-based applications",
    skills: ["AWS SDK", "Lambda", "DynamoDB", "API Gateway"],
    badgeUrl: "https://aws.amazon.com/certification/certified-developer-associate/",
    icon: Cloud,
  },
];

const Certifications = () => {
  return (
    <section className="py-20 px-4 bg-muted/30 scroll-mt-16" id="certifications">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-secondary">
          Certifications
        </h2>
        <div className="w-24 h-1 mx-auto mb-6 rounded-full bg-[linear-gradient(var(--gradient-primary))]" />
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Professional certifications demonstrating expertise in Salesforce platform development and cloud technologies
        </p>

        <div className="mb-12 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-[var(--shadow-lg)]">
          <img 
            src={certificationsBanner} 
            alt="Certification Badges - Salesforce and AWS Certifications" 
            className="w-full h-auto"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-[var(--shadow-lg)] transition-all duration-300 border-2 hover:border-primary/50 bg-[linear-gradient(var(--gradient-card))] flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <IconComponent className="h-6 w-6 text-primary" />
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
        );
          })}
      </div>

        <div className="mt-12 text-center">
          <Card className="p-8 bg-[linear-gradient(var(--gradient-card))] border-2 inline-block">
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Award className="h-8 w-8 text-primary" />
              <div className="text-left">
                <p className="text-2xl font-bold text-secondary">
                  {certifications.length} Professional Certifications
                </p>
                <p className="text-muted-foreground">
                  Salesforce & AWS Cloud expertise validated through industry certifications
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
