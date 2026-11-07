import { TranslatedText } from "../i18n/translated-text";
export function FaqSection() {
    return <>
      <section className="section" id="faq">
        <div className="container">
          <div className="section-head">
            <div className="kicker">{"Questions, answered"}</div>
            <h2>
              <span>
                <TranslatedText en="Things to know before going solar." ta="சோலார் அமைப்பதற்கு முன் தெரிந்துகொள்ள வேண்டியவை."/>
              </span>
            </h2>
          </div>
          <div className="faq">
            <details>
              <summary>{"How do I know what system size I need?"}</summary>
              <p>{"Start with your recent electricity bills and daytime usage. Roof area, shading, sanctioned load and your utility's requirements also affect the suitable size. A site assessment can help determine a realistic recommendation."}</p>
            </details>
            <details>
              <summary>{"Can I get a government subsidy?"}</summary>
              <p>{"Some residential rooftop systems may qualify under current government schemes. Check the official Tamil Nadu rooftop solar portal for the latest eligibility, application steps and vendor requirements before relying on a subsidy amount."}</p>
            </details>
            <details>
              <summary>{"What is the difference between on-grid, off-grid and hybrid?"}</summary>
              <p>{"On-grid systems work alongside the electricity grid; off-grid systems rely on local generation and storage; hybrid systems combine grid connection with battery capability. Backup behavior depends on the design and equipment."}</p>
            </details>
            <details>
              <summary>{"How much can I save on my electricity bill?"}</summary>
              <p>{"Savings depend on your monthly consumption, tariff, system size, solar generation, self-consumption and applicable net-metering rules. Ask for an estimate based on your bill rather than relying on a universal percentage."}</p>
            </details>
            <details>
              <summary>{"What should be included in a quotation?"}</summary>
              <p>{"Ask for panel and inverter make/model, system capacity, mounting structure, wiring and protection equipment, installation, approvals, net-metering scope, warranties, payment milestones and after-sales terms."}</p>
            </details>
          </div>
        </div>
      </section>
    </>;
}
