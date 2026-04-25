import './About.css';

const stack = [
  { category: 'Frontend',     items: ['React', 'TypeScript', 'Vite', 'CSS Modules'] },
  { category: 'Backend',      items: ['Java', 'Spring Boot', 'REST APIs', 'Maven'] },
  { category: 'Cloud & Infra',items: ['AWS EC2', 'AWS RDS', 'AWS S3', 'Docker'] },
  { category: 'Databases',    items: ['PostgreSQL', 'MySQL', 'Redis'] },
  { category: 'Tools',        items: ['Git', 'IntelliJ', 'Postman', 'n8n'] },
];

export default function About() {
  return (
    <section className="about">
      <header className="page-header">
        <h1>About Me</h1>
        <p className="page-subtitle">
          Full-stack developer based in Ontario, Canada, focused on building clean,
          performant web applications from database to UI.
        </p>
      </header>

      <div className="about-body">
        <div className="about-bio">
          <h2>Background</h2>
          <p>
            I enjoy working across the full stack — designing REST APIs in Spring Boot,
            connecting them to React frontends, and deploying the whole thing on AWS.
            I care about code that's readable, systems that scale, and interfaces that
            feel good to use.
          </p>
          <p>
            Outside of work I prototype game ideas, automate workflows with n8n,
            and try to stay consistent at the gym.
          </p>
        </div>

        <div className="about-stack">
          <h2>Tech Stack</h2>
          <div className="stack-grid">
            {stack.map(({ category, items }) => (
              <div key={category} className="stack-group">
                <span className="stack-category">{category}</span>
                <div className="stack-items">
                  {items.map(item => (
                    <span key={item} className="stack-tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
