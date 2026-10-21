import Icon from './Icon.jsx';
import SocialLinks from './SocialLinks.jsx';
import { navLinks, profile } from '../data/profile.js';
import { projects } from '../data/projects.js';

function ContactLine({ icon, value, href, placeholder }) {
  return (
    <li>
      <Icon name={icon} size={18} />
      {value ? (
        href ? (
          <a href={href}>{value}</a>
        ) : (
          <span>{value}</span>
        )
      ) : (
        <span className="placeholder">{placeholder}</span>
      )}
    </li>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col">
          <h3>About</h3>
          <p>
            Civil engineer turned full-stack developer. I build web applications with React, Node.js
            and MySQL, and add AI features with the Gemini API.
          </p>
          <SocialLinks variant="icon" />
        </div>

        <div className="footer-col">
          <h3>Links</h3>
          <nav aria-label="Footer">
            <ul className="footer-links">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <a href={`#${l.id}`}>
                    <Icon name="arrow" size={16} /> {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="footer-col">
          <h3>Projects</h3>
          <ul className="footer-links">
            {projects.map((p) => (
              <li key={p.id}>
                <a href="#projects">
                  <Icon name="arrow" size={16} /> {p.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h3>Have a question?</h3>
          <ul className="footer-contact">
            <ContactLine icon="pin" value={profile.address} placeholder="[your address to add]" />
            <ContactLine
              icon="phone"
              value={profile.phone}
              href={profile.phone ? `tel:${profile.phone.replace(/\s+/g, '')}` : undefined}
              placeholder="[your phone number to add]"
            />
            <ContactLine
              icon="mail"
              value={profile.email}
              href={profile.email ? `mailto:${profile.email}` : undefined}
              placeholder="[your email to add]"
            />
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
