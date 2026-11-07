import { TranslatedText } from "../i18n/translated-text";
export function TrustBar() {
    return <>
      <div className="trustbar">
        <div className="container trustgrid">
          <div className="trustitem">
            <div className="trusticon">{"⌂"}</div>
            <div>
              <b>
                <TranslatedText en="Home Solar"/>
              </b>
              <small>
                <TranslatedText en="Rooftop solutions"/>
              </small>
            </div>
          </div>
          <div className="trustitem">
            <div className="trusticon">{"▦"}</div>
            <div>
              <b>
                <TranslatedText en="Business Solar"/>
              </b>
              <small>
                <TranslatedText en="Commercial needs"/>
              </small>
            </div>
          </div>
          <div className="trustitem">
            <div className="trusticon">{"↗"}</div>
            <div>
              <b>
                <TranslatedText en="Bill Savings"/>
              </b>
              <small>
                <TranslatedText en="Use solar energy"/>
              </small>
            </div>
          </div>
          <div className="trustitem">
            <div className="trusticon">{"☏"}</div>
            <div>
              <b>
                <TranslatedText en="Local Enquiries"/>
              </b>
              <small>
                <TranslatedText en="Aruppukottai, TN"/>
              </small>
            </div>
          </div>
        </div>
      </div>
    </>;
}
