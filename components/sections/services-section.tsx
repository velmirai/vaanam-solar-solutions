import { TranslatedText } from "../i18n/translated-text";
export function ServicesSection() {
    return <>
      <section className="section" id="services">
        <div className="container">
          <div className="section-head">
            <div className="kicker">
              <TranslatedText en="Our solar solutions"/>
            </div>
            <h2>
              <span>
                <TranslatedText en="The right solar setup starts with the right advice." ta="சரியான ஆலோசனையிலிருந்து சரியான சோலார் அமைப்பு தொடங்குகிறது."/>
              </span>
            </h2>
            <p>{"Every property is different. Explore the main system types, then contact us to discuss what fits your needs."}</p>
          </div>
          <div className="services">
            <article className="service">
              <img src="https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=900&q=85" alt="Solar panels on a home roof" loading="lazy"/>
              <div className="service-body">
                <span className="service-num">{"01 / RESIDENTIAL"}</span>
                <h3>
                  <TranslatedText en="Home Rooftop Solar" ta="வீட்டு மாடி சோலார்"/>
                </h3>
                <p>
                  <TranslatedText en="Generate power at home, use more of the sunlight available to you and explore eligibility for applicable residential subsidy schemes." ta="வீட்டிலேயே சூரிய மின்சாரம் உற்பத்தி செய்து, மின்கட்டணத்தை குறைக்கும் வாய்ப்புகளை அறியுங்கள். பொருந்தக்கூடிய வீட்டு மானியத் தகுதியையும் சரிபார்க்கலாம்."/>
                </p>
                <a className="textlink" href="#contact">
                  <span>
                    <TranslatedText en="Discuss home solar" ta="வீட்டு சோலார் பற்றி பேசுங்கள்"/>
                  </span>
                  <span>{"↗"}</span>
                </a>
              </div>
            </article>
            <article className="service">
              <img src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=900&q=85" alt="Large-scale solar panels" loading="lazy"/>
              <div className="service-body">
                <span className="service-num">{"02 / COMMERCIAL"}</span>
                <h3>
                  <TranslatedText en="Commercial Solar" ta="வணிக சோலார்"/>
                </h3>
                <p>
                  <TranslatedText en="Explore rooftop solar for shops, offices, warehouses and other businesses looking to manage daytime electricity consumption." ta="கடைகள், அலுவலகங்கள், கிடங்குகள் மற்றும் தொழில்களுக்கான மாடி சோலார் தீர்வுகளை அறியுங்கள்."/>
                </p>
                <a className="textlink" href="#contact">
                  <span>
                    <TranslatedText en="Discuss business solar" ta="வணிக சோலார் பற்றி பேசுங்கள்"/>
                  </span>
                  <span>{"↗"}</span>
                </a>
              </div>
            </article>
            <article className="service">
              <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=900&q=85" alt="Solar energy equipment in sunlight" loading="lazy"/>
              <div className="service-body">
                <span className="service-num">{"03 / SYSTEM OPTIONS"}</span>
                <h3>
                  <TranslatedText en="On-grid, Off-grid & Hybrid" ta="ஆன்-கிரிட், ஆஃப்-கிரிட் மற்றும் ஹைப்ரிட்"/>
                </h3>
                <p>{"Understand grid-connected systems, battery backup options and hybrid setups before choosing equipment for your property."}</p>
                  <a className="textlink" href="#contact">{"Find your system "}<span>{"↗"}</span>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>;
}
