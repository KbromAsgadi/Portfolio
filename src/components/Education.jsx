import TimelineColumns from './TimelineColumns.jsx';
import { education } from '../data/education.js';

export default function Education() {
  return (
    <section id="education" className="section" aria-labelledby="education-title">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Education and background</p>
          <h2 id="education-title">Education and Experience.</h2>
          <p className="section-note">
            Engineering background is a strength: it taught me to plan, check my work and
            solve problems under real constraints.
          </p>
        </div>

        <TimelineColumns items={education} />
      </div>
    </section>
  );
}
