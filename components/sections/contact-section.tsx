import { TranslatedText } from "../i18n/translated-text";
import { QuoteForm } from "../forms/quote-form";
export function ContactSection() {
    return <>
      <section className="section contact" id="contact">
        <div className="container contact-grid">
          <div className="contact-copy">
            <div className="kicker">{"Let's talk solar"}</div>
            <h2>
              <span>
                <TranslatedText en="Your solar journey starts with one conversation." ta="உங்கள் சோலார் பயணம் ஒரு உரையாடலிலிருந்து தொடங்குகிறது."/>
              </span>
            </h2>
            <p>{"Tell us a little about your property and electricity usage. We'll help you identify the right questions and next steps."}</p>
            <div className="contact-row">
              <div className="contact-icon">{"⌖"}</div>
              <div>
                <b>{"Visit our location"}</b>
                  <small>{"2-18-4/2, Postal Colony,"}<br />{"Near Union Office, Aruppukottai – 626101,"}<br />{"Tamil Nadu, India"}</small>
              </div>
            </div>
            <div className="contact-row">
              <div className="contact-icon">{"☎"}</div>
              <div>
                <b>{"Call / WhatsApp"}</b>
                <small>
                  <a href="tel:+918428420505">{"84284 20505"}</a>
                  <br />
                  <a href="tel:+918668051108">{"86680 51108 · Balaji"}</a>
                </small>
              </div>
            </div>
            <a className="map-link" href="https://www.google.com/maps/search/?api=1&query=2-18-4%2F2%2C+Postal+Colony%2C+Near+Union+Office%2C+Aruppukottai+626101" target="_blank" rel="noopener">{"Get directions on Google Maps ↗"}</a>
          </div>
          <QuoteForm />
        </div>
      </section>
    </>;
}
