import { propertyServices, constructionServices } from "../../data/site";
import { Icon } from "./Icons";

function ServiceCards({ items }) {
  return (
    <div className="cards">
      {items.map((s) => (
        <div className="card" key={s.title}>
          <div className="card__icon">
            <Icon name={s.icon} />
          </div>
          <h4>{s.title}</h4>
          <p>{s.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default function Services() {
  return (
    <section className="section section--soft" id="services">
      <div className="container">
        <div className="center">
          <span className="eyebrow">What We Do</span>
          <h2 className="section-title">
            Everything from the first plot to the final brick
          </h2>
          <p className="section-lead">
            Two complete service lines under one roof — so you never need a
            second agency.
          </p>
        </div>

        <div className="services-block" style={{ marginTop: 48 }}>
          <div className="services-head">
            <h3>Property Dealing</h3>
            <span className="chip">Buy · Sell · Rent</span>
          </div>
          <ServiceCards items={propertyServices} />
        </div>

        <div className="services-block">
          <div className="services-head">
            <h3>Construction</h3>
            <span className="chip">Design · Build · Handover</span>
          </div>
          <ServiceCards items={constructionServices} />
        </div>
      </div>
    </section>
  );
}
