import { RouteSectionScroll } from "../navigation/section-navigation";
import { HeroSection } from "./hero-section";
import { TrustBar } from "./trust-bar";
import { ServicesSection } from "./services-section";
import { BenefitsSection } from "./benefits-section";
import { SubsidySection } from "./subsidy-section";
import { ProcessSection } from "./process-section";
import { ProjectsSection } from "./projects-section";
import { GreenLivingSection } from "./green-living-section";
import { FaqSection } from "./faq-section";
import { ContactSection } from "./contact-section";

export function LandingPage() {
  return (
    <main>
      <RouteSectionScroll />
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
