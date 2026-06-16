import { site } from "../../data/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <span className="brand__name">{site.name}</span>
            <p>
              {site.tagline}. Helping you buy, sell and build with confidence in{" "}
              {site.address.city}.
            </p>
          </div>

          <div className="footer__links">
            <div className="footer__col">
              <h5>Company</h5>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#projects">Projects</a>
              <a href="#why">Why Us</a>
            </div>
            <div className="footer__col">
              <h5>Services</h5>
              <a href="#services">Property Dealing</a>
              <a href="#services">Construction</a>
              <a href="#services">Rentals</a>
              <a href="#contact">Consultation</a>
            </div>
            <div className="footer__col">
              <h5>Contact</h5>
              <a href={`tel:${site.phone}`}>{site.phone}</a>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <a href={site.mapsLink} target="_blank" rel="noopener noreferrer">
                {site.address.city}, {site.address.state}
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            © {year} {site.name}. All rights reserved.
          </span>
          <span>Property Dealing &amp; Construction</span>
        </div>
      </div>
    </footer>
  );
}
