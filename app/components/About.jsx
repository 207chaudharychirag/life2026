import { site } from "../../data/site";

const points = [
  {
    title: "Two businesses, one trusted name",
    text: "Property dealing and construction handled in-house — no middlemen, no run-around.",
  },
  {
    title: "Clear-title, verified deals",
    text: "Every property is checked for clear titles and proper documentation before we deal.",
  },
  {
    title: "Quality you can stand on",
    text: "We build with proven materials and skilled teams, on time and on budget.",
  },
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container about__grid">
        <div>
          <span className="eyebrow">About {site.name}</span>
          <h2 className="section-title">
            Your local partner for property and construction
          </h2>
          <p className="section-lead">
            {site.name} has been helping families and businesses buy, sell and
            build with confidence. From finding the perfect plot to handing over
            the keys of a finished home, we stay with you at every step.
          </p>

          <div className="about__points">
            {points.map((p) => (
              <div className="about__point" key={p.title}>
                <span className="tick">✓</span>
                <div>
                  <h4>{p.title}</h4>
                  <p>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="about__card">
          <h3>Looking to buy, sell, or build?</h3>
          <p>
            Tell us what you need and our team will get back to you with honest
            advice and the best options available — no pressure.
          </p>
          <a className="btn btn--gold" href="#contact">
            Talk to us today
          </a>
        </aside>
      </div>
    </section>
  );
}
