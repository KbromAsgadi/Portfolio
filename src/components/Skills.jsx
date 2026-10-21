import Icon from './Icon.jsx';
import { skillGroups } from '../data/skills.js';

const civilTools = skillGroups.find((g) => g.marquee).items.map((i) => i.name);

export default function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Technical skills</p>
          <h2 id="skills-title">The tools I work with.</h2>
          <p className="section-note">
            <span className="dot dot-project" aria-hidden="true" /> Used in my projects
            <span className="dot dot-studied" aria-hidden="true" /> Studied and practised
            <span className="dot dot-civil" aria-hidden="true" /> Civil engineering software
          </p>
        </div>

        {/* Moving strip. The text is repeated once so the loop is seamless; screen readers get the plain list. */}
        {/* <div className="marquee" role="group" aria-label="Civil engineering software">
          <div className="marquee-track" aria-hidden="true">
            {civilTools.map((t) => (
              <span key={t}>{t}</span>
            ))}
            {civilTools.map((t) => (
              <span key={`${t}-copy`} className="is-copy">
                {t}
              </span>
            ))}
          </div>
        </div> */}

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="card skill-card" key={group.title}>
              <h3>
                <Icon name={group.icon} />
                {group.title}
              </h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item.name}>
                    <span
                      className={`dot dot-${item.status}`}
                      aria-hidden="true"
                    />
                    {item.name}
                    <span className="sr-only">
                      {{
                        project: ' (used in projects)',
                        studied: ' (studied)',
                        civil: ' (civil engineering software)',
                      }[item.status]}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
