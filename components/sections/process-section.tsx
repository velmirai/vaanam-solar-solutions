import { TranslatedText } from "../i18n/translated-text";
export function ProcessSection() {
    return <>
      <section className="section" id="process">
        <div className="container">
          <div className="section-head">
            <div className="kicker">{"Simple process"}</div>
            <h2>
              <span>
                <TranslatedText en="From first enquiry to solar-ready." ta="முதல் விசாரணையிலிருந்து சோலார் நிறுவல் வரை."/>
              </span>
            </h2>
            <p>{"A clear process helps you understand the scope, cost and next steps before you commit."}</p>
          </div>
          <div className="steps">
            <div className="step">
              <div className="step-no">{"01"}</div>
              <h3>
                <TranslatedText en="Tell us your needs"/>
              </h3>
              <p>
                <TranslatedText en="Share your location, property type and recent electricity bill."/>
              </p>
            </div>
            <div className="step">
              <div className="step-no">{"02"}</div>
              <h3>
                <TranslatedText en="Assess the site"/>
              </h3>
              <p>
                <TranslatedText en="Review roof space, shade, usage and suitable system capacity."/>
              </p>
            </div>
            <div className="step">
              <div className="step-no">{"03"}</div>
              <h3>
                <TranslatedText en="Review your quote"/>
              </h3>
              <p>
                <TranslatedText en="Understand the proposed equipment, price, inclusions and terms."/>
              </p>
            </div>
            <div className="step">
              <div className="step-no">{"04"}</div>
              <h3>
                <TranslatedText en="Plan installation"/>
              </h3>
              <p>
                <TranslatedText en="Confirm applicable approvals, installation schedule and after-sales support."/>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>;
}
