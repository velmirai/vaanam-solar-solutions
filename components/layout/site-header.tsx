import { SectionLink } from "../navigation/section-navigation";
import { TranslatedText } from "../i18n/translated-text";
import { LanguageSwitcher } from "../i18n/language-switcher";
export function SiteHeader() {
    return <>
      <div className="topbar">
        <div className="container">
          <span>{"☀ Clean energy. Smarter savings."}</span>
          <span>{"Serving Aruppukottai & nearby areas · Tamil Nadu"}</span>
        </div>
      </div>
      <header className="nav">
        <div className="container navin">
          <SectionLink className="brand" href="/" aria-label="VAANAM Solar Solutions home">
            <img src="/images/logo.png" alt="VAANAM Solar Solutions logo" loading="lazy"/>
          </SectionLink>
          <LanguageSwitcher />
          <nav className="navlinks" aria-label="Main navigation">
            <SectionLink href="/services">
              <span>
                <TranslatedText en="Solutions" ta="சேவைகள்"/>
              </span>
            </SectionLink>
            <SectionLink href="/benefits">
              <span>
                <TranslatedText en="Why Solar" ta="சோலார் ஏன்?"/>
              </span>
            </SectionLink>
            <SectionLink href="/subsidy">
              <span>
                <TranslatedText en="Subsidy" ta="மானியம்"/>
              </span>
            </SectionLink>
            <SectionLink href="/projects">
              <span>
                <TranslatedText en="Projects" ta="திட்டங்கள்"/>
              </span>
            </SectionLink>
            <SectionLink href="/contact">
              <span>
                <TranslatedText en="Contact" ta="தொடர்பு"/>
              </span>
            </SectionLink>
            <SectionLink className="btn btn-primary" href="/contact">
              <span>
                <TranslatedText en="Get a Quote ↗" ta="விலை விவரம் ↗"/>
              </span>
            </SectionLink>
          </nav>
        </div>
      </header>
    </>;
}
