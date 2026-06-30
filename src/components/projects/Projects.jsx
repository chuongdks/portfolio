import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import projects from '../../data/projects';
import './Projects.css';

export default function Projects() {
  const [activeLang, setActiveLang] = useState('All');

  const languages = useMemo(() => {
    const set = new Set();
    projects.forEach(p => p.languages.forEach(l => set.add(l)));
    return ['All', ...Array.from(set).sort()];
  }, []);

  const filtered = useMemo(() => {
    if (activeLang === 'All') return projects;
    return projects.filter(p => p.languages.includes(activeLang));
  }, [activeLang]);

  return (
    <section className="projects">
      <header className="page-header">
        <h1>Projects</h1>
        <p className="page-subtitle">
          A mix of full-stack apps, local-first tools, and learning prototypes.
        </p>
      </header>

      <div className="lang-filter" role="group" aria-label="Filter projects by language">
        {languages.map(lang => (
          <button
            key={lang}
            className={`lang-pill ${activeLang === lang ? 'active' : ''}`}
            onClick={() => setActiveLang(lang)}
          >
            {lang}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filtered.map(project => (
          <Link key={project.slug} to={`/projects/${project.slug}`} className="project-card">
            <div className="project-card-top">
              <span className={`status-badge status-${project.status === 'Completed' ? 'done' : 'progress'}`}>
                {project.status}
              </span>
              <div className="project-langs">
                {project.languages.map(l => (
                  <span key={l} className="lang-chip">{l}</span>
                ))}
              </div>
            </div>

            <h2 className="project-title">{project.title}</h2>
            <p className="project-blurb">{project.blurb}</p>

            <span className="project-readmore">
              Read more
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="projects-empty">No projects match that filter yet.</p>
      )}
    </section>
  );
}
