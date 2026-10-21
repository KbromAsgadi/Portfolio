import Icon from './Icon.jsx';
import SocialLinks from './SocialLinks.jsx';
import { profile } from '../data/profile.js';

export default function Hero() {
  const initials = profile.name
    .split(' ')
    .map((p) => p[0])
    .join('')
    .slice(0, 2);

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">
            {profile.name} · {profile.role}
          </p>
          <h1 id="hero-title">{profile.headline}</h1>
          <p className="lede">{profile.intro}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View My Projects <Icon name="arrow" size={18} />
            </a>
            <a className="btn btn-ghost" href="#contact">
              Contact Me
            </a>
            {profile.cv ? (
              <a className="btn btn-ghost" href={profile.cv} download>
                <Icon name="download" size={18} /> Download CV
              </a>
            ) : (
              <span
                className="btn btn-ghost is-disabled"
                aria-disabled="true"
                title="Add your CV file and set its path in src/data/profile.js"
              >
                <Icon name="download" size={18} /> Download CV (file not added yet)
              </span>
            )}
          </div>
          <SocialLinks />
        </div>

        <div className="hero-visual">
          <div className="portrait">
            {profile.photo ? (
              <img src={profile.photo} alt={`Portrait of ${profile.name}`} width="360" height="420" />
            ) : (
              <div className="portrait-placeholder" role="img" aria-label="Profile photo placeholder">
                <span>{initials}</span>
                <small>Add your photo in src/data/profile.js</small>
              </div>
            )}
          </div>
          <dl className="hero-facts">
            <div>
              <dt>Background</dt>
              <dd>Engineering</dd>
            </div>
            <div>
              <dt>Now building</dt>
              <dd>Engineering based Digital Solutions</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
