import { site } from "../../data/site";
import { Icon } from "./Icons";

export default function Contact() {
  const { address } = site;
  const fullAddress = [
    address.line1,
    address.line2,
    address.city,
    address.state,
    address.pincode,
  ]
    .filter(Boolean)
    .join(", ");

  // Keyless embed using the address as a search query.
  const mapEmbed = `https://www.google.com/maps?q=${encodeURIComponent(
    fullAddress
  )}&output=embed`;

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="center">
          <span className="eyebrow">Get In Touch</span>
          <h2 className="section-title">Let&apos;s talk about your next move</h2>
          <p className="section-lead">
            Visit the office, call, or send a message on WhatsApp — we&apos;re
            happy to help.
          </p>
        </div>

        <div className="contact__grid" style={{ marginTop: 48 }}>
          <div className="contact__panel">
            <h3>Contact {site.name}</h3>
            <p>Reach out and we&apos;ll respond as soon as we can.</p>

            <div className="contact-list">
              <div className="contact-item">
                <span className="ci-icon">
                  <Icon name="phone" />
                </span>
                <div>
                  <div className="label">Phone</div>
                  <a className="value" href={`tel:${site.phone}`}>
                    {site.phone}
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <span className="ci-icon">
                  <Icon name="mail" />
                </span>
                <div>
                  <div className="label">Email</div>
                  <a className="value" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <span className="ci-icon">
                  <Icon name="pin" />
                </span>
                <div>
                  <div className="label">Office</div>
                  <span className="value">{fullAddress}</span>
                </div>
              </div>

              <div className="contact-item">
                <span className="ci-icon">
                  <Icon name="clock" />
                </span>
                <div>
                  <div className="label">Working Hours</div>
                  <span className="value">{site.hours}</span>
                </div>
              </div>
            </div>

            <div className="contact__cta">
              <a
                className="btn btn--gold"
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Message on WhatsApp
              </a>
              <a
                className="btn btn--ghost"
                href={site.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </a>
            </div>
          </div>

          <div className="map-wrap">
            <iframe
              title={`${site.name} location`}
              src={mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
