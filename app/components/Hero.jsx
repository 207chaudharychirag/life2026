import { site } from "../../data/site";
import { Icon } from "./Icons";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <span className="hero__badge">
          <span>●</span> Property Dealing &amp; Construction
        </span>
        <h1>
          Find the right property. <br />
          <em>Build</em> the right future.
        </h1>
        <p className="hero__sub">{site.heroSubtitle}</p>
        <div className="hero__cta">
          <a className="btn btn--gold" href="#contact">
            Get a Free Consultation <Icon name="arrow" />
          </a>
          <a className="btn btn--ghost" href="#services">
            Our Services
          </a>
        </div>
      </div>

      <div className="stats">
        <div className="container stats__grid">
          {site.stats.map((s) => (
            <div className="stat" key={s.label}>
              <div className="stat__value">{s.value}</div>
              <div className="stat__label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
