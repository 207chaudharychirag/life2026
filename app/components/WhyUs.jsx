const reasons = [
  {
    num: "01",
    title: "Honest & Transparent",
    text: "Fair prices, clear paperwork, and straight answers — every single time.",
  },
  {
    num: "02",
    title: "End-to-End Service",
    text: "Property dealing and construction together, so nothing falls through the cracks.",
  },
  {
    num: "03",
    title: "Local Expertise",
    text: "Deep knowledge of the area, rates and regulations that protects your investment.",
  },
];

export default function WhyUs() {
  return (
    <section className="section section--soft" id="why">
      <div className="container">
        <div className="center">
          <span className="eyebrow">Why Choose Us</span>
          <h2 className="section-title">Reasons clients keep coming back</h2>
        </div>

        <div className="why__grid" style={{ marginTop: 48 }}>
          {reasons.map((r) => (
            <div className="why-card" key={r.num}>
              <div className="num">{r.num}</div>
              <h4>{r.title}</h4>
              <p>{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
