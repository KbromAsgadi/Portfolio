import Icon from './Icon.jsx';
import { profile } from '../data/profile.js';

// Shows a real link when the URL is filled in, otherwise a visibly disabled placeholder.
// variant "pill" = icon with label (hero), variant "icon" = round icon button (footer).
function SocialItem({ icon, label, href, placeholder, variant }) {
  const round = variant === 'icon';
  const base = round ? 'social-circle' : 'social';

  if (href) {
    return (
      <a
        className={base}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={round ? label : undefined}
      >
        <Icon name={icon} />
        {!round && <span>{label}</span>}
      </a>
    );
  }
  return (
    <span
      className={`${base} is-placeholder`}
      title={placeholder}
      role={round ? 'img' : undefined}
      aria-label={round ? `${label} (not added yet)` : undefined}
    >
      <Icon name={icon} />
      {!round && <span>{label}</span>}
    </span>
  );
}

export default function SocialLinks({ variant = 'pill' }) {
  return (
    <div className={variant === 'icon' ? 'socials-icons' : 'socials'}>
      <SocialItem
        variant={variant}
        icon="github"
        label="GitHub"
        href={profile.github}
        placeholder="Add your GitHub URL in src/data/profile.js"
      />
      <SocialItem
        variant={variant}
        icon="linkedin"
        label="LinkedIn"
        href={profile.linkedin}
        placeholder="Add your LinkedIn URL in src/data/profile.js"
      />
    </div>
  );
}
