import { TranslatedText } from "../i18n/translated-text";
export function SubsidySection() {
    return <>
      <section className="section subsidy" id="subsidy">
        <div className="container subsidy-grid">
          <div>
            <div className="kicker">
              <TranslatedText en="Government subsidy guide" ta="அரசு மானிய வழிகாட்டி"/>
            </div>
            <h2>
              <TranslatedText en="Know the support available before you invest." ta="முதலீடு செய்வதற்கு முன் கிடைக்கக்கூடிய மானியத்தை அறியுங்கள்."/>
            </h2>
            <p>
              <TranslatedText en="For eligible domestic rooftop solar consumers in Tamil Nadu, the official state portal currently lists central assistance plus proposed state assistance. Benefits depend on eligibility, approved components, vendor empanelment and completion of the required process." ta="தமிழ்நாட்டில் தகுதியுள்ள வீட்டு மின்நுகர்வோருக்கு, மத்திய அரசின் உதவியுடன் மாநில அரசின் உதவியும் கிடைக்கலாம் என அதிகாரப்பூர்வ மாநில இணையதளம் குறிப்பிடுகிறது. தகுதி, அங்கீகரிக்கப்பட்ட உபகரணங்கள், அங்கீகரிக்கப்பட்ட நிறுவனம் மற்றும் நடைமுறைகள் பூர்த்தி செய்யப்படுதல் அவசியம்."/>
            </p>
            <a className="btn btn-outline" href="https://www.tnebltd.gov.in/usrp/" target="_blank" rel="noopener">
              <TranslatedText en="Open Tamil Nadu Solar Portal ↗" ta="தமிழ்நாடு சோலார் இணையதளத்தைத் திறக்க ↗"/>
            </a>
          </div>
          <div className="subsidy-card">
            <span className="smallcap">
              <TranslatedText en="Residential rooftop solar · indicative subsidy" ta="வீட்டு மாடி சோலார் · வழிகாட்டும் மானியத் தொகை"/>
            </span>
            <div className="subsidy-table-wrap">
              <table className="subsidy-table">
                <thead>
                  <tr>
                    <th>
                      <TranslatedText en="System size" ta="அமைப்பு திறன்"/>
                    </th>
                    <th>
                      <TranslatedText en="Central" ta="மத்திய அரசு"/>
                    </th>
                    <th>
                      <TranslatedText en="TN state*" ta="தமிழ்நாடு*"/>
                    </th>
                    <th>
                      <TranslatedText en="Total*" ta="மொத்தம்*"/>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{"1 kW"}</td>
                    <td>{"₹30,000"}</td>
                    <td>{"₹5,000"}</td>
                    <td>
                      <b>{"₹35,000"}</b>
                    </td>
                  </tr>
                  <tr>
                    <td>{"2 kW"}</td>
                    <td>{"₹60,000"}</td>
                    <td>{"₹10,000"}</td>
                    <td>
                      <b>{"₹70,000"}</b>
                    </td>
                  </tr>
                  <tr>
                    <td>{"3 kW"}</td>
                    <td>{"₹78,000"}</td>
                    <td>{"₹22,000"}</td>
                    <td>
                      <b>{"₹1,00,000"}</b>
                    </td>
                  </tr>
                  <tr>
                    <td>{"Above 3 kW"}</td>
                    <td>{"₹78,000 max"}</td>
                    <td>{"₹22,000 max"}</td>
                    <td>
                      <b>{"₹1,00,000 max"}</b>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="disclaimer">
              <TranslatedText en="*Based on the Tamil Nadu state portal's published subsidy structure checked in October 2026. State assistance is subject to scheme conditions and disbursal sequence. Residential grid-connected systems, DCR-compliant/ALMM-listed modules and a TEDA-empanelled vendor may be required. Confirm current terms directly with the official portals; subsidy is not guaranteed." ta="*அக்டோபர் 2026-இல் தமிழ்நாடு மாநில இணையதளத்தில் வெளியிடப்பட்ட மானிய விவரங்களின் அடிப்படையில். மாநில மானியம் திட்ட விதிமுறைகள் மற்றும் பணம் வழங்கும் நடைமுறைகளுக்கு உட்பட்டது. வீட்டு மின்கட்டமைப்புடன் இணைக்கப்பட்ட அமைப்பு, DCR/ALMM விதிகளுக்கு இணங்கும் பேனல்கள் மற்றும் TEDA அங்கீகரித்த நிறுவனம் தேவைப்படலாம். தற்போதைய விதிகளை அதிகாரப்பூர்வ இணையதளங்களில் உறுதிப்படுத்தவும்; மானியம் உறுதியானது அல்ல."/>
            </p>
            <a className="btn btn-primary" style={{ "width": "100%", "marginTop": "15px" }} href="https://pmsuryaghar.gov.in/" target="_blank" rel="noopener">
              <TranslatedText en="Apply / check national portal ↗" ta="தேசிய இணையதளத்தில் விண்ணப்பிக்க / சரிபார்க்க ↗"/>
            </a>
            <a className="textlink" style={{ "display": "inline-block", "marginTop": "15px" }} href="https://www.tnebltd.gov.in/usrp/faq.xhtml" target="_blank" rel="noopener">
              <TranslatedText en="Read official FAQs and process →" ta="அதிகாரப்பூர்வ கேள்விகள் மற்றும் நடைமுறையைப் படிக்க →"/>
            </a>
          </div>
        </div>
      </section>
    </>;
}
