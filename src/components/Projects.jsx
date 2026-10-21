import Icon from './Icon.jsx';
import { projects } from '../data/projects.js';

function CodeLink({ href }) {
  if (href) {
    return (
      <a className="btn btn-small" href={href} target="_blank" rel="noopener noreferrer">
        <Icon name="github" size={16} /> Code
      </a>
    );
  }
  return (
    <span
      className="btn btn-small is-disabled"
      aria-disabled="true"
      title="Add the repository URL in src/data/projects.js"
    >
      <Icon name="github" size={16} /> Code (not added yet)
    </span>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Featured projects</p>
          <h2 id="projects-title">Web Related Projects.</h2>
          <p className="section-note">Click a project to open its live demo.</p>
        </div>

        <div className="projects-grid">
          {projects.map((p) => (
            <article className={`card project-card${p.demo ? ' is-clickable' : ''}`} key={p.id}>
              <div className="project-media">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={`Screenshot of ${p.title}`}
                    loading="lazy"
                    width="640"
                    height="360"
                  />
                ) : (
                  <div
                    className="media-placeholder"
                    role="img"
                    aria-label={`Screenshot placeholder for ${p.title}`}
                  >
                    <Icon name="image" size={32} />
                    <span>Screenshot placeholder</span>
                  </div>
                )}
              </div>

              <div className="project-body">
                {/* With a demo URL, the title link stretches over the whole card, so a click anywhere opens the demo. */}
                <h3>
                  {p.demo ? (
                    <a className="card-link" href={p.demo} target="_blank" rel="noopener noreferrer">
                      {p.title}
                      <span className="sr-only"> (opens the live demo in a new tab)</span>
                    </a>
                  ) : (
                    p.title
                  )}
                </h3>
                <p>{p.description}</p>

                <ul className="tags" aria-label="Technology stack">
                  {p.stack.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>

                <ul className="features">
                  {p.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>

                <div className="project-links">
                  <CodeLink href={p.github} />
                  {/* The demo button only appears when a real URL is set, so nothing is claimed as deployed. */}
                  {p.demo && (
                    <a
                      className="btn btn-small btn-primary"
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon name="external" size={16} /> Live demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
