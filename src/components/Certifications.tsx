import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink, Cloud, Sparkles } from "lucide-react";
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
    icon: Sparkles,
  },
  {
    name: "Salesforce Certified AI Specialist",
    issuer: "Salesforce",
    description: "Certifies advanced expertise in implementing and optimizing Salesforce AI solutions",
    skills: ["Einstein GPT", "AI Models", "Predictive Analytics", "AI Integration"],
    badgeUrl: "https://trailhead.salesforce.com/credentials/aispecialist",
    icon: Sparkles,
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
    <section className="py-20 px-4 scroll-mt-16 relative overflow-hidden" id="certifications">
      {/* Diagonal background */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/40 via-background to-muted/30" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-[linear-gradient(var(--gradient-accent))]">
              Certifications
            </span>
          </h2>
          <div className="w-32 h-1.5 mx-auto mb-6 rounded-full bg-[linear-gradient(var(--gradient-accent))]" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications demonstrating expertise in Salesforce platform development and cloud technologies
          </p>
        </div>

        <div className="mb-16 rounded-3xl overflow-hidden border-2 border-primary/20 shadow-[var(--shadow-xl)] hover:shadow-[var(--shadow-glow)] transition-all duration-500 hover:scale-[1.02] animate-reveal">
          <img 
            src={certificationsBanner} 
            alt="Certification Badges - Salesforce and AWS Certifications" 
            className="w-full h-auto"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <Card
                key={index}
                className="group relative p-7 border-2 border-transparent hover:border-primary/30 transition-all duration-500 bg-card/70 backdrop-blur-sm hover:shadow-[var(--shadow-xl)] hover:-translate-y-3 flex flex-col"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animation: `reveal 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="absolute inset-0 bg-[linear-gradient(var(--gradient-accent))] opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-lg" />
                
                <div className="flex items-start justify-between mb-5 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <IconComponent className="h-7 w-7 text-primary" />
                  </div>
                  <a
                    href={cert.badgeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-accent transition-all duration-300 hover:scale-125"
                    title="View credential"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>

                <h3 className="text-xl font-bold text-secondary mb-3 leading-tight relative z-10 group-hover:text-primary transition-colors duration-300">
                  {cert.name}
                </h3>
                <p className="text-sm font-semibold text-accent mb-4 relative z-10">{cert.issuer}</p>
                <p className="text-sm text-muted-foreground mb-5 flex-grow relative z-10 leading-relaxed">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50 relative z-10">
                  {cert.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-xs px-3 py-1 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border border-primary/20 hover:border-primary transition-all duration-300 hover:scale-110"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center animate-fade-in">
          <Card className="p-10 bg-card/70 backdrop-blur-sm border-2 border-transparent hover:border-primary/30 transition-all duration-500 inline-block hover:shadow-[var(--shadow-xl)] hover:-translate-y-1 relative overflow-hidden group">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,hsl(var(--primary)/0.05)_100%)] group-hover:opacity-100 opacity-50 transition-opacity duration-500" />
            <div className="flex items-center justify-center gap-6 flex-wrap relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                <Award className="h-9 w-9 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-3xl font-bold text-secondary mb-1">
                  {certifications.length} Professional Certifications
                </p>
                <p className="text-lg text-muted-foreground">
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
