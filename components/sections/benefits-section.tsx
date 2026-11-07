import { SectionLink } from "../navigation/section-navigation";
import { TranslatedText } from "../i18n/translated-text";
export function BenefitsSection() {
    return <>
      <section className="section section-soft" id="benefits">
        <div className="container why-grid">
          <div className="why-photo">
            <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1000&q=85" alt="Rooftop solar panels in bright daylight" loading="lazy"/>
            <div className="why-stamp">
              <b>{"Clean energy, long-term thinking."}</b>
              <small>{"Start with a site assessment and a clear quotation."}</small>
            </div>
          </div>
          <div className="why-copy">
            <div className="kicker">
              <TranslatedText en="Why consider solar?"/>
            </div>
            <h2>
              <span>
                <TranslatedText en="A smarter way to power everyday life." ta="அன்றாட மின்சாரத்திற்கு புத்திசாலித்தனமான தீர்வு."/>
              </span>
            </h2>
            <p>
              <TranslatedText en="Solar can help you make better use of your roof and reduce how much electricity you need to buy from the grid. Actual savings depend on system size, sunlight, usage and your tariff."/>
            </p>
            <div className="benefits">
              <div className="benefit">
                <div className="benefit-icon">{"✓"}</div>
                <div>
                  <b>{"Potential bill savings"}</b>
                  <small>{"Match the system to your real consumption."}</small>
                </div>
              </div>
              <div className="benefit">
                <div className="benefit-icon">{"⌂"}</div>
                <div>
                  <b>{"Designed for your roof"}</b>
                  <small>{"Consider roof space, shade and orientation."}</small>
                </div>
              </div>
              <div className="benefit">
                <div className="benefit-icon">{"☀"}</div>
                <div>
                  <b>{"Cleaner electricity"}</b>
                  <small>{"Use a renewable source of energy."}</small>
                </div>
              </div>
              <div className="benefit">
                <div className="benefit-icon">{"↗"}</div>
                <div>
                  <b>{"Guided next steps"}</b>
                  <small>{"Ask about equipment, approvals and upkeep."}</small>
                </div>
              </div>
            </div>
            <div style={{ "marginTop": "28px" }}>
              <SectionLink className="btn btn-dark" href="/contact">{"Check solar for my property ↗"}</SectionLink>
            </div>
          </div>
        </div>
      </section>
    </>;
}
