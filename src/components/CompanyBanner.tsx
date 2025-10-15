import { Building2 } from "lucide-react";

const companies = [
  { name: "Salesforce", role: "Specialist Software Engineer" },
  { name: "Rithub Inc", role: "Software Engineering Intern" },
  { name: "University of Texas at San Antonio", role: "Multiple Roles" },
];

const CompanyBanner = () => {
  return (
    <section className="py-12 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">
          Trusted Experience With
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity"
            >
              <div className="w-16 h-16 rounded-lg bg-card border border-border flex items-center justify-center shadow-sm">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <div className="text-center">
                <p className="text-sm font-semibold text-foreground">{company.name}</p>
                <p className="text-xs text-muted-foreground">{company.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyBanner;
