import { useState } from 'react';
import Icon from './Icon.jsx';
import { profile } from '../data/profile.js';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(values) {
  const errors = {};
  if (values.name.trim().length < 2) errors.name = 'Please enter your name (at least 2 characters).';
  if (!emailPattern.test(values.email.trim())) errors.email = 'Please enter a valid email address.';
  if (values.subject.trim().length < 3) errors.subject = 'Please add a subject (at least 3 characters).';
  if (values.message.trim().length < 10) errors.message = 'Please write a message of at least 10 characters.';
  return errors;
}

// One contact detail: round icon, uppercase label, value (or a visible placeholder).
function InfoItem({ icon, label, value, href, placeholder }) {
  return (
    <li className="contact-item">
      <span className="contact-icon" aria-hidden="true">
        <Icon name={icon} size={24} />
      </span>
      <div>
        <h3>{label}</h3>
        {value ? (
          href ? (
            <a
              href={href}
              {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              {value}
            </a>
          ) : (
            <p>{value}</p>
          )
        ) : (
          <p className="placeholder">{placeholder}</p>
        )}
      </div>
    </li>
  );
}

export default function Contact() {
  const [values, setValues] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | invalid | ready

  const onChange = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors((er) => ({ ...er, [e.target.name]: undefined }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus('invalid');
      return;
    }
    // No backend or email service is connected, so nothing is sent.
    // To send real messages, connect a service (for example Formspree or EmailJS) here.
    setStatus('ready');
  };

  const field = (name, label, props = {}) => (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      {props.rows ? (
        <textarea
          id={name}
          name={name}
          value={values[name]}
          onChange={onChange}
          aria-invalid={Boolean(errors[name])}
          aria-describedby={errors[name] ? `${name}-error` : undefined}
          {...props}
        />
      ) : (
        <input
          id={name}
          name={name}
          value={values[name]}
          onChange={onChange}
          aria-invalid={Boolean(errors[name])}
          aria-describedby={errors[name] ? `${name}-error` : undefined}
          {...props}
        />
      )}
      {errors[name] && (
        <p className="error" id={`${name}-error`}>
          {errors[name]}
        </p>
      )}
    </div>
  );

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact-heading">
          <span className="watermark" aria-hidden="true">
            Contact
          </span>
          <h2 id="contact-title">Contact Me</h2>
          <p>Open to internships, junior roles and practical web projects.</p>
        </div>

        <div className="contact-grid">
          <ul className="contact-info">
            <InfoItem
              icon="pin"
              label="Address"
              value={profile.address}
              placeholder="[your address to add]"
            />
            <InfoItem
              icon="phone"
              label="Contact number"
              value={profile.phone}
              href={profile.phone ? `tel:${profile.phone.replace(/\s+/g, '')}` : undefined}
              placeholder="[your phone number to add]"
            />
            <InfoItem
              icon="send"
              label="Email address"
              value={profile.email}
              href={profile.email ? `mailto:${profile.email}` : undefined}
              placeholder="[your email to add]"
            />
            <InfoItem
              icon="globe"
              label="GitHub"
              value={profile.github.replace(/^https?:\/\//, '')}
              href={profile.github || undefined}
              placeholder="[your GitHub URL to add]"
            />
          </ul>

          <form className="card form contact-form" onSubmit={onSubmit} noValidate aria-describedby="form-status">
            {field('name', 'Your name', { type: 'text', autoComplete: 'name' })}
            {field('email', 'Your email', { type: 'email', autoComplete: 'email' })}
            {field('subject', 'Subject', { type: 'text' })}
            {field('message', 'Message', { rows: 5 })}

            <button className="btn btn-primary" type="submit">
              Send message
            </button>

            <p id="form-status" className={`form-status ${status}`} role="status" aria-live="polite">
              {status === 'invalid' && 'Please fix the highlighted fields and try again.'}
              {status === 'ready' &&
                'Your details look valid, but this form is not connected to an email service yet, so no message was sent. Please use the email or phone details instead.'}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
