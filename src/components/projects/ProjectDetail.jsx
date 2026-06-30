import { Link, useParams } from 'react-router-dom';
import projects from '../../data/projects';
import './ProjectDetail.css';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <section className="project-detail">
        <p className="not-found">Project not found.</p>
        <Link to="/projects" className="back-link">← Back to Projects</Link>
      </section>
    );
  }

  const { title, description, languages, tech, status, github, demo } = project;

  return (
    <section className="project-detail">
      <Link to="/projects" className="back-link">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
        All Projects
      </Link>

      <header className="detail-header">
        <span className={`status-badge status-${status === 'Completed' ? 'done' : 'progress'}`}>
          {status}
        </span>
        <h1>{title}</h1>

        <div className="detail-tags">
          {languages.map(l => (
            <span key={l} className="lang-chip lang-chip-solid">{l}</span>
          ))}
          {tech.map(t => (
            <span key={t} className="lang-chip">{t}</span>
          ))}
        </div>
      </header>

      <p className="detail-description">{description}</p>

      <div className="detail-actions">
        {demo ? (
          <a href={demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            Live Demo
          </a>
        ) : (
          <span className="btn btn-disabled" title="No live demo for this project yet">
            No Live Demo
          </span>
        )}

        {github ? (
          <a href={github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
            View on GitHub
          </a>
        ) : (
          <span className="btn btn-disabled" title="Source not public yet">
            Source Private
          </span>
        )}
      </div>
    </section>
  );
}
