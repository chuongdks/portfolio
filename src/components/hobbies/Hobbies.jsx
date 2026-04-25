import './Hobbies.css';

const hobbies = [
  {
    icon: '🎮',
    title: 'Game Prototyping',
    description:
      'I enjoy designing small game mechanics and building quick prototypes — mostly as a way to explore systems thinking and interaction design.',
  },
  {
    icon: '🤖',
    title: 'Automation with n8n',
    description:
      'I use n8n to automate repetitive workflows: syncing data between services, sending alerts, and building no-code pipelines for side projects.',
  },
  {
    icon: '🏋️',
    title: 'Gym & Fitness',
    description:
      'Consistent training keeps me focused. I treat programming and lifting similarly — both reward showing up and progressive overload.',
  },
];

export default function Hobbies() {
  return (
    <section className="hobbies">
      <header className="page-header">
        <h1>Hobbies</h1>
        <p className="page-subtitle">
          What I do when I'm not writing code — though some of it still involves code.
        </p>
      </header>

      <div className="hobbies-grid">
        {hobbies.map(({ icon, title, description }) => (
          <div key={title} className="hobby-card">
            <div className="hobby-icon">{icon}</div>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
