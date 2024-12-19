import "../css/contactme.css";

import { ContactInfo } from "./contact-info";

export function Contact() {
  return (
    <div>
      <div className="contactme" id="contact">
        <div className="contactme-title">
          <h2>CONTACT ME</h2>
        </div>
        <div className="contactme-content">
          <div className="contactme-info">
            <div className="contactme-info-text">
              <p>
                Let's connect and get to know each other better! Follow me on my
                social media to stay updated and join the conversation!
              </p>
            </div>
            <div className="contactme-info-sosmed">
              <ContactInfo
                name="instagram"
                link="https://www.instagram.com/herry_liukae?igsh=YnU0ZXJ0bXJjM2hl"
              />
              <ContactInfo name="github" link="https://github.com/Gutema19" />
              <ContactInfo
                name="youtube"
                link="https://youtube.com/@herrydanielprasetialiukae8669?si=r_j3j4OIRZnFm0wA"
              />
            </div>
          </div>
          <div className="contactme-choice">
            <span>OR</span>
          </div>
          <div className="contactme-form">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Message"></textarea>
            <button className="btn btn-primary">Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
}
