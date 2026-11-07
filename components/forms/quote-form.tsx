"use client";
import type { FormEvent } from "react";
import { TranslatedText } from "../i18n/translated-text";
import { buildEnquiryUrl } from "../../lib/whatsapp";
export function QuoteForm() {
    function submitEnquiry(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        window.open(buildEnquiryUrl(new FormData(event.currentTarget)), "_blank", "noopener,noreferrer");
    }
    return (<form className="form-card" onSubmit={submitEnquiry} id="consultation-form">
      <h3>
        <span>
          <TranslatedText en="Request a solar consultation" ta="சோலார் ஆலோசனை கோருங்கள்"/>
        </span>
      </h3>
      <p>{"Fill in the details below. The form opens WhatsApp with your enquiry ready to send."}</p>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="name">
            <TranslatedText en="Your name *"/>
          </label>
          <input id="name" name="name" required placeholder="Enter your name"/>
        </div>
        <div className="field">
          <label htmlFor="phone">
            <TranslatedText en="Phone number *"/>
          </label>
          <input id="phone" name="phone" required inputMode="tel" pattern="[0-9+() -]{8,}" placeholder="Your contact number"/>
        </div>
        <div className="field">
          <label htmlFor="property">
            <TranslatedText en="Property type"/>
          </label>
          <select id="property" name="property">
            <option value="House / Residential">
              <TranslatedText en="House / Residential"/>
            </option>
            <option value="Shop / Office">
              <TranslatedText en="Shop / Office"/>
            </option>
            <option value="Factory / Industrial">
              <TranslatedText en="Factory / Industrial"/>
            </option>
            <option value="Other">
              <TranslatedText en="Other"/>
            </option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="bill">
            <TranslatedText en="Monthly electricity bill"/>
          </label>
          <select id="bill" name="bill">
            <option value="Not sure">
              <TranslatedText en="Not sure"/>
            </option>
            <option value="Below ₹1,500">
              <TranslatedText en="Below ₹1,500"/>
            </option>
            <option value="₹1,500 – ₹3,000">
              <TranslatedText en="₹1,500 – ₹3,000"/>
            </option>
            <option value="₹3,000 – ₹6,000">
              <TranslatedText en="₹3,000 – ₹6,000"/>
            </option>
            <option value="Above ₹6,000">
              <TranslatedText en="Above ₹6,000"/>
            </option>
          </select>
        </div>
        <div className="field full">
          <label htmlFor="location">
            <TranslatedText en="Your area / town"/>
          </label>
          <input id="location" name="location" placeholder="e.g. Aruppukottai"/>
        </div>
        <div className="field full">
          <label htmlFor="message">
            <TranslatedText en="Anything else you'd like us to know?"/>
          </label>
          <textarea id="message" name="message" placeholder="Roof type, backup needs, questions...">
          </textarea>
        </div>
      </div>
      <button className="btn btn-primary" type="submit">
        <span>
          <TranslatedText en="Send enquiry on WhatsApp ↗" ta="வாட்ஸ்அப்பில் விசாரணை அனுப்ப ↗"/>
        </span>
      </button>
      <div className="form-note">{"Your details will be passed to WhatsApp when you press the button."}</div>
    </form>);
}
