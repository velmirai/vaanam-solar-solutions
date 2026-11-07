import { SectionLink } from "../navigation/section-navigation";
import { TranslatedText } from "../i18n/translated-text";
export function GreenLivingSection() {
    return <>
      <section className="section green-section" id="green-living">
        <div className="container green-grid">
          <div className="green-copy">
            <div className="kicker">
              <TranslatedText en="Power the future. Keep it green." ta="எதிர்காலத்திற்கு மின்சாரம் · பசுமையைப் பாதுகாப்போம்."/>
            </div>
            <h2>
              <TranslatedText en="Clean energy belongs in a greener home." ta="பசுமையான வீட்டிற்கு தூய்மையான சூரிய மின்சாரம்."/>
            </h2>
            <p>
              <TranslatedText en="Pair smart energy choices with greener surroundings. Solar panels generate electricity from sunlight, while native plants and shade trees can make outdoor spaces more inviting. Plan tree placement so branches and shade do not block your solar panels." ta="சூரிய ஒளியிலிருந்து மின்சாரம் உருவாக்கும் சோலார் அமைப்புடன், உள்ளூர் தாவரங்கள் மற்றும் நிழல் தரும் மரங்களையும் இணைத்து பசுமையான சூழலை உருவாக்குங்கள். சோலார் பேனல்களுக்கு நிழல் விழாதபடி மரங்கள் மற்றும் கிளைகளின் இடத்தைத் திட்டமிடுங்கள்."/>
            </p>
            <div className="green-points">
                <span>{"🌱 "}<b>
                  <TranslatedText en="Greener spaces" ta="பசுமையான சூழல்"/>
                </b>
              </span>
                <span>{"☀️ "}<b>
                  <TranslatedText en="Renewable energy" ta="புதுப்பிக்கத்தக்க ஆற்றல்"/>
                </b>
              </span>
                <span>{"💧 "}<b>
                  <TranslatedText en="Mindful water use" ta="நீர் சிக்கனம்"/>
                </b>
              </span>
            </div>
            <SectionLink className="btn btn-dark" href="/contact">
              <TranslatedText en="Plan my solar setup ↗" ta="எனது சோலார் அமைப்பைத் திட்டமிட ↗"/>
            </SectionLink>
          </div>
          <div className="green-images">
            <img src="/images/garden.jpg" alt="Gardening tools and soil for planting a greener home" loading="lazy"/>
            <img src="https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=700&q=85" alt="Lush green houseplants" loading="lazy"/>
            <div className="green-note">
              <b>
                <TranslatedText en="A brighter, greener tomorrow" ta="ஒளிமயமான பசுமையான நாளை"/>
              </b>
              <small>
                <TranslatedText en="Solar + thoughtful greenery" ta="சோலார் + கவனமான பசுமை"/>
              </small>
            </div>
          </div>
        </div>
      </section>
    </>;
}
