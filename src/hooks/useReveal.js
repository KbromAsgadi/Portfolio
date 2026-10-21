import { useEffect, useRef } from 'react';

// Everything on the page that moves in as it scrolls into view.
const SELECTOR = [
  '[data-reveal]',
  '.section-head',
  '.about-grid > *',
  '.marquee',
  '.skill-card',
  '.project-card',
  '.edu-col-title',
  '.timeline-item',
  '.contact-heading',
  '.contact-item',
  '.contact-form',
  '.footer-col',
  '.footer-bottom',
].join(', ');

// Slides matching elements into view as they scroll on screen.
// Nothing is hidden if IntersectionObserver is missing or the visitor prefers reduced motion.
export default function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root || !('IntersectionObserver' in window)) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          el.classList.add('is-in');
          observer.unobserve(el);
          // Once settled, drop the animation classes so normal hover styles work again.
          window.setTimeout(() => el.classList.remove('reveal', 'is-in'), 1400);
        });
      },
      { threshold: 0.12 }
    );

    root.querySelectorAll(SELECTOR).forEach((el) => {
      el.classList.add('reveal');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return ref;
}
