import { Link } from 'react-router-dom';

export default function Layout({ children, theme, toggleTheme }) {
  return (
    <div className={`app-container ${theme}`}>
      <header style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h1>CP.</h1>
        <button onClick={toggleTheme}>
          {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
        </button>
      </header>
      <nav>
        <ul style={{ display: 'flex', gap: '15px', listStyle: 'none', padding: 0 }}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/hobbies">Hobbies</Link></li>
          <li><Link to="/library">Steam Library</Link></li>
        </ul>
      </nav>
      <main>{children}</main>
      <footer><hr /><p>© 2026 Chuong Pham</p></footer>
    </div>
  );
}