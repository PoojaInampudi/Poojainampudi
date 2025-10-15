import { Badge } from "@/components/ui/badge";
import { Award, Star } from "lucide-react";

const certifications = [
  {
    name: "Salesforce Certified Platform Developer I",
    issuer: "Salesforce",
    date: "2024",
    link: "https://trailhead.salesforce.com/credentials/platformdeveloperi",
  },
  {
    name: "Salesforce Certified AI Associate",
    issuer: "Salesforce",
    date: "2024",
    link: "https://trailhead.salesforce.com/credentials/aiassociate",
  },
  {
    name: "Salesforce Certified AI Specialist",
    issuer: "Salesforce",
    date: "2024",
    link: "https://trailhead.salesforce.com/credentials/aispecialist",
  },
  {
    name: "Salesforce Certified Data Cloud Consultant",
    issuer: "Salesforce",
    date: "2024",
    link: "https://trailhead.salesforce.com/credentials/datacloudconsultant",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2023",
    link: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
  },
  {
    name: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services",
    date: "2023",
    link: "https://aws.amazon.com/certification/certified-developer-associate/",
  },
];

const Certifications = () => {
  return (
    <section className="py-20 px-4 bg-background scroll-mt-16" id="certifications">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 space-y-6">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm animate-fade-in">
            <Award className="h-5 w-5 text-primary animate-pulse" />
            <span className="text-sm font-semibold text-primary tracking-wider">CERTIFICATIONS</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold animate-slide-in-left">
            <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">
              Professional Credentials
            </span>
          </h2>
          
          <div className="flex items-center justify-center gap-3 animate-fade-in">
            <div className="h-0.5 w-20 bg-gradient-to-r from-transparent via-primary to-primary rounded-full" />
            <Star className="h-5 w-5 text-primary fill-primary animate-pulse" />
            <div className="h-0.5 w-20 bg-gradient-to-l from-transparent via-primary to-primary rounded-full" />
          </div>
        </div>


        {/* Certifications List */}
        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group p-6 border-l-4 border-primary/50 bg-gradient-to-r from-primary/5 to-transparent hover:from-primary/10 transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                <Award className="h-6 w-6 text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-2">{cert.issuer}</p>
                  <Badge variant="outline" className="bg-primary/5 border-primary/20 text-primary">
                    {cert.date}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
