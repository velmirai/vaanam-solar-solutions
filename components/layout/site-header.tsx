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
          <a className="brand" href="#home" aria-label="VAANAM Solar Solutions home">
            <img src="/images/logo.png" alt="VAANAM Solar Solutions logo" loading="lazy"/>
          </a>
          <LanguageSwitcher />
          <nav className="navlinks" aria-label="Main navigation">
            <a href="#services">
              <span>
                <TranslatedText en="Solutions" ta="சேவைகள்"/>
              </span>
            </a>
            <a href="#benefits">
              <span>
                <TranslatedText en="Why Solar" ta="சோலார் ஏன்?"/>
              </span>
            </a>
            <a href="#subsidy">
              <span>
                <TranslatedText en="Subsidy" ta="மானியம்"/>
              </span>
            </a>
            <a href="#projects">
              <span>
                <TranslatedText en="Projects" ta="திட்டங்கள்"/>
              </span>
            </a>
            <a href="#contact">
              <span>
                <TranslatedText en="Contact" ta="தொடர்பு"/>
              </span>
            </a>
            <a className="btn btn-primary" href="#contact">
              <span>
                <TranslatedText en="Get a Quote ↗" ta="விலை விவரம் ↗"/>
              </span>
            </a>
          </nav>
        </div>
      </header>
    </>;
}
