function TimelineList({ items }) {
  return (
    <ol className="timeline">
      {items.map((item, index) => (
        <li className="timeline-item" key={item.id} style={{ '--i': index }}>
          <span className="timeline-kind">{item.kind}</span>
          <h4>{item.title}</h4>
          <p className="timeline-meta">
            {item.place || <span className="placeholder">[institution or company to add]</span>}
            {' · '}
            {item.period || <span className="placeholder">[period to add]</span>}
          </p>
          <p>{item.detail}</p>
        </li>
      ))}
    </ol>
  );
}

// Left column: education and training. Right column: professional experience.
// The scroll-in movement comes from the page-wide useReveal hook in App.jsx.
export default function TimelineColumns({ items }) {
  const experience = items.filter((i) => i.kind === 'Experience');
  const learning = items.filter((i) => i.kind !== 'Experience');

  return (
    <div className="edu-grid">
      <div className="edu-col">
        <h3 className="edu-col-title">Education and training</h3>
        <TimelineList items={learning} />
      </div>
      <div className="edu-col">
        <h3 className="edu-col-title">Professional experience</h3>
        <TimelineList items={experience} />
      </div>
    </div>
  );
}
