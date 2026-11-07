import { TranslatedText } from "../i18n/translated-text";
import { CopyrightYear } from "./copyright-year";
export function SiteFooter() {
    return <>
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div>
              <img src="/images/logo.png" alt="VAANAM Solar Solutions" loading="lazy"/>
              <p>{"Helping homes and businesses explore practical solar energy solutions in Aruppukottai and nearby areas."}</p>
            </div>
            <div className="footer-links">
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
              <a href="#projects">{"Gallery"}</a>
              <a href="#contact">
                <span>
                  <TranslatedText en="Contact" ta="தொடர்பு"/>
                </span>
              </a>
            </div>
          </div>
          <div className="copyright">
              <span>{"© "}<CopyrightYear />{" VAANAM Solar Solutions. All rights reserved."}</span>
            <span>{"Solar information is indicative; confirm system design, pricing and eligibility directly."}</span>
          </div>
        </div>
      </footer>
    </>;
}
