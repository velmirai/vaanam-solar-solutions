import { HeroSection } from "../../components/sections/hero-section";
import { TrustBar } from "../../components/sections/trust-bar";
import { ServicesSection } from "../../components/sections/services-section";
import { BenefitsSection } from "../../components/sections/benefits-section";
import { SubsidySection } from "../../components/sections/subsidy-section";
import { ProcessSection } from "../../components/sections/process-section";
import { ProjectsSection } from "../../components/sections/projects-section";
import { GreenLivingSection } from "../../components/sections/green-living-section";
import { FaqSection } from "../../components/sections/faq-section";
import { ContactSection } from "../../components/sections/contact-section";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <BenefitsSection />
      <SubsidySection />
      <ProcessSection />
      <ProjectsSection />
      <GreenLivingSection />
      <FaqSection />
      <ContactSection />
    </main>
  );
}
