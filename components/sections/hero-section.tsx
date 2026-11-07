import { SectionLink } from "../navigation/section-navigation";
import { TranslatedText } from "../i18n/translated-text";
export function HeroSection() {
    return <>
      <section className="hero" id="home">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">{"VAANAM Solar Solutions · Aruppukottai"}</div>
            <h1>
              <span>
                <TranslatedText en="Let the sun power your home." ta="சூரியன் உங்கள் வீட்டிற்கு மின்சாரம் தரட்டும்."/>
              </span>{" "}
              <span>
                <TranslatedText en="Not your bills." ta="மின்கட்டணத்தை குறைக்க உதவட்டும்."/>
              </span>
            </h1>
            <p>{"Make the switch to clean, dependable solar energy with a solution designed around your roof, electricity usage and budget."}</p>
            <div className="hero-actions">
              <SectionLink className="btn btn-primary" href="/contact">
                <span>
                  <TranslatedText en="Get a Free Consultation" ta="இலவச ஆலோசனை பெறுங்கள்"/>
                </span>
                <span>{"↗"}</span>
              </SectionLink>
              <a className="btn btn-outline" href="https://wa.me/918428420505?text=Hi%20VAANAM%20Solar%20Solutions%2C%20I%20would%20like%20to%20know%20about%20rooftop%20solar." target="_blank" rel="noopener">
                <span>
                  <TranslatedText en="☏ WhatsApp Us" ta="☏ வாட்ஸ்அப் செய்யுங்கள்"/>
                </span>
              </a>
            </div>
            <div className="hero-notes">
              <span>
                <i className="check">{"✓"}</i>
              {" Solutions for homes & businesses"}</span>
              <span>
                <i className="check">{"✓"}</i>
              {" Consultation-led recommendations"}</span>
            </div>
          </div>
          <div className="hero-photo">
            <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1100&q=90" alt="Solar panels generating clean energy under the sun" fetchPriority="high"/>
            <div className="sun-icon">{"☀"}</div>
            <div className="photo-tag">
              <strong>{"Make sunlight work for you."}</strong>
              <small>{"Explore a solar system suited to your needs."}</small>
            </div>
          </div>
        </div>
      </section>
    </>;
}
