import { TranslatedText } from "../i18n/translated-text";
export function ProjectsSection() {
    return <>
      <section className="section section-soft" id="projects">
        <div className="container">
          <div className="section-head">
            <div className="kicker">
              <TranslatedText en="Solar inspiration"/>
            </div>
            <h2>
              <TranslatedText en="See what solar can look like."/>
            </h2>
            <p>
              <TranslatedText en="Use this gallery as a design preview. Replace these sample images with VAANAM's real installation photos before publishing."/>
            </p>
          </div>
          <div className="gallery">
            <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1000&q=85" alt="Sample rooftop solar installation" loading="lazy"/>
            <img src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=85" alt="Sample solar panel array" loading="lazy"/>
            <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=85" alt="Sample solar modules" loading="lazy"/>
            <img src="https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=1000&q=85" alt="Sample solar panels on a building" loading="lazy"/>
          </div>
          <p className="gallery-note">{"Sample imagery only — not represented as completed VAANAM projects."}</p>
        </div>
      </section>
    </>;
}
