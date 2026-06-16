import { projects } from "../../data/site";

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="center">
          <span className="eyebrow">Our Work</span>
          <h2 className="section-title">Recent properties &amp; projects</h2>
          <p className="section-lead">
            A snapshot of what we deal in and what we build. Replace these with
            your own photos and listings anytime.
          </p>
        </div>

        <div className="projects__grid" style={{ marginTop: 48 }}>
          {projects.map((p) => (
            <article className="project" key={p.title}>
              <div className="project__body">
                <span className="project__tag">{p.tag}</span>
                <h4>{p.title}</h4>
                <p>{p.location}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
