"use client";

import { useEffect } from "react";
import { pageMarkup } from "./content";

const translations: Record<string, string> = {
  "Home Rooftop Solar":"வீட்டு மாடி சோலார்", "Commercial Solar":"வணிக சோலார்",
  "On-grid, Off-grid & Hybrid":"ஆன்-கிரிட், ஆஃப்-கிரிட் மற்றும் ஹைப்ரிட்",
  "Solar inspiration":"சோலார் வடிவமைப்பு உதாரணங்கள்", "See what solar can look like.":"சோலார் அமைப்பு எப்படி இருக்கும் என்று பாருங்கள்.",
  "Use this gallery as a design preview. Replace these sample images with VAANAM's real installation photos before publishing.":"இவை வடிவமைப்பு மாதிரி படங்கள். வெளியிடுவதற்கு முன் VAANAM நிறுவிய உண்மையான படங்களால் மாற்றவும்.",
  "Our solar solutions":"எங்கள் சோலார் தீர்வுகள்", "Why consider solar?":"சோலாரை ஏன் தேர்வு செய்ய வேண்டும்?",
  "Solar can help you make better use of your roof and reduce how much electricity you need to buy from the grid. Actual savings depend on system size, sunlight, usage and your tariff.":"சோலார் உங்கள் கூரையை சிறப்பாகப் பயன்படுத்தவும், மின்வாரியத்திலிருந்து வாங்கும் மின்சாரத்தை குறைக்கவும் உதவும். உண்மையான சேமிப்பு அமைப்பு திறன், சூரிய ஒளி, பயன்பாடு மற்றும் மின்கட்டணத்தைப் பொறுத்தது.",
  "Home Solar":"வீட்டு சோலார்", "Business Solar":"வணிக சோலார்", "Bill Savings":"மின்கட்டண சேமிப்பு", "Local Enquiries":"உள்ளூர் விசாரணைகள்",
  "Rooftop solutions":"மாடி சோலார் தீர்வுகள்", "Commercial needs":"வணிகத் தேவைகள்", "Use solar energy":"சூரிய மின்சாரத்தைப் பயன்படுத்துங்கள்", "Aruppukottai, TN":"அருப்புக்கோட்டை, தமிழ்நாடு",
  "Tell us your needs":"உங்கள் தேவைகளைச் சொல்லுங்கள்", "Assess the site":"இடத்தை மதிப்பீடு செய்யுங்கள்", "Review your quote":"விலைப்பட்டியலைப் பாருங்கள்", "Plan installation":"நிறுவலைத் திட்டமிடுங்கள்",
  "Share your location, property type and recent electricity bill.":"உங்கள் பகுதி, சொத்து வகை மற்றும் சமீபத்திய மின்கட்டண விவரத்தைப் பகிருங்கள்.",
  "Review roof space, shade, usage and suitable system capacity.":"கூரை இடம், நிழல், மின்பயன்பாடு மற்றும் பொருத்தமான திறனை மதிப்பிடுங்கள்.",
  "Understand the proposed equipment, price, inclusions and terms.":"பரிந்துரைக்கப்பட்ட உபகரணங்கள், விலை மற்றும் விதிமுறைகளைப் புரிந்துகொள்ளுங்கள்.",
  "Confirm applicable approvals, installation schedule and after-sales support.":"தேவையான அனுமதிகள், நிறுவல் அட்டவணை மற்றும் விற்பனைக்குப் பிந்தைய சேவையை உறுதிசெய்யுங்கள்.",
  "Your name *":"உங்கள் பெயர் *", "Phone number *":"தொலைபேசி எண் *", "Property type":"சொத்து வகை", "Monthly electricity bill":"மாத மின்கட்டணம்", "Your area / town":"உங்கள் பகுதி / நகரம்",
  "House / Residential":"வீடு / குடியிருப்பு", "Shop / Office":"கடை / அலுவலகம்", "Factory / Industrial":"தொழிற்சாலை / தொழில்", "Other":"மற்றவை", "Not sure":"தெரியவில்லை",
  "Below ₹1,500":"₹1,500-க்கு கீழ்", "₹1,500 – ₹3,000":"₹1,500 – ₹3,000", "₹3,000 – ₹6,000":"₹3,000 – ₹6,000", "Above ₹6,000":"₹6,000-க்கு மேல்",
  "Anything else you'd like us to know?":"வேறு ஏதேனும் தெரிவிக்க விரும்புகிறீர்களா?", "Enter your name":"உங்கள் பெயரை உள்ளிடுங்கள்", "Your contact number":"உங்கள் தொலைபேசி எண்", "e.g. Aruppukottai":"உதா. அருப்புக்கோட்டை",
  "From first enquiry to solar-ready.":"முதல் விசாரணையிலிருந்து சோலார் நிறுவல் வரை."
};

export default function Home() {
  useEffect(() => {
    const root = document.documentElement;
    const setLanguage = (lang: string) => {
      const language = lang === "ta" ? "ta" : "en";
      root.lang = language;
      document.querySelectorAll<HTMLElement>("[data-en][data-ta]").forEach((el) => {
        el.textContent = language === "ta" ? el.dataset.ta ?? "" : el.dataset.en ?? "";
      });
      document.querySelectorAll<HTMLButtonElement>(".lang-btn").forEach((button) => {
        button.classList.toggle("active", button.dataset.lang === language);
      });
      document.querySelectorAll<HTMLElement>("h1,h2,h3,p,summary,a,button,label,small,b").forEach((el) => {
        if (el.children.length === 0 && !el.hasAttribute("data-en")) {
          const original = el.dataset.originalText || el.textContent?.trim() || "";
          if (!el.dataset.originalText) el.dataset.originalText = original;
          const translated = translations[original];
          if (language === "ta" && translated) el.textContent = translated;
          else if (language === "en") el.textContent = el.dataset.originalText;
        }
      });
      try { window.localStorage.setItem("vaanam-lang", language); } catch {}
    };

    const langButtons = Array.from(document.querySelectorAll<HTMLButtonElement>(".lang-btn"));
    const languageHandlers = langButtons.map((button) => {
      const handler = () => setLanguage(button.dataset.lang || "en");
      button.addEventListener("click", handler);
      return { button, handler };
    });

    const form = document.getElementById("quoteForm") as HTMLFormElement | null;
    const formHandler = (event: Event) => {
      event.preventDefault();
      if (!form) return;
      const data = new FormData(form);
      const lines = [
        "Hi VAANAM Solar Solutions, I'd like a solar consultation.", "",
        `Name: ${data.get("name") || ""}`,
        `Phone: ${data.get("phone") || ""}`,
        `Property: ${data.get("property") || ""}`,
        `Monthly bill: ${data.get("bill") || ""}`,
        `Area: ${data.get("location") || "Not provided"}`,
        `Message: ${data.get("message") || "Not provided"}`
      ];
      window.open(`https://wa.me/918428420505?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener,noreferrer");
    };
    form?.addEventListener("submit", formHandler);
    const year = document.getElementById("year");
    if (year) year.textContent = String(new Date().getFullYear());
    let initial = "en";
    try { initial = window.localStorage.getItem("vaanam-lang") || "en"; } catch {}
    setLanguage(initial);

    return () => {
      languageHandlers.forEach(({ button, handler }) => button.removeEventListener("click", handler));
      form?.removeEventListener("submit", formHandler);
    };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: pageMarkup }} />;
}
