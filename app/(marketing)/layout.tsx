import { LanguageProvider } from "../../components/i18n/language-provider";
import { SiteHeader } from "../../components/layout/site-header";
import { SiteFooter } from "../../components/layout/site-footer";
import { ContactActions } from "../../components/layout/contact-actions";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <SiteHeader />
      {children}
      <SiteFooter />
      <ContactActions />
    </LanguageProvider>
  );
}
