import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CompanyBanner from "@/components/CompanyBanner";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <CompanyBanner />
      <About />
      <Experience />
      <Certifications />
      <Contact />
    </div>
  );
};

export default Index;
