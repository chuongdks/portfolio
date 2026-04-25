import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SteamLibrary.css';

const SteamLibrary = () => {
  const [games, setGames]       = useState([]);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState(null);
  const [sortBy, setSortBy]     = useState('playtime'); // 'playtime' | 'name'
  const [search, setSearch]     = useState('');

  useEffect(() => {
    axios
      .post('http://172.21.176.1:8080/api/v1/libraries/sync/76561198038076620')
      .then(response => {
        setGames(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching library:', error);
        setError('Could not connect to the Steam sync API.');
        setLoading(false);
      });
  }, []);

  const filtered = games
    .filter(g => g.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) =>
      sortBy === 'playtime'
        ? b.playtime_forever - a.playtime_forever
        : a.name.localeCompare(b.name)
    );

  const totalHours = Math.round(
    games.reduce((acc, g) => acc + g.playtime_forever, 0) / 60
  );

  if (loading) {
    return (
      <section className="steam-library">
        <div className="steam-loading">
          <div className="steam-spinner" />
          <p>Syncing with Steam API…</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="steam-library">
        <header className="page-header">
          <h1>Steam Library</h1>
        </header>
        <div className="steam-error">
          <span>⚠️</span>
          <p>{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="steam-library">
      <header className="page-header">
        <h1>Steam Library</h1>
        <p className="page-subtitle">
          {games.length} games · {totalHours.toLocaleString()} total hours played
        </p>
      </header>

      <div className="steam-controls">
        <input
          type="text"
          placeholder="Search games…"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="steam-search"
        />
        <div className="sort-buttons">
          <button
            className={`sort-btn ${sortBy === 'playtime' ? 'active' : ''}`}
            onClick={() => setSortBy('playtime')}
          >
            Most Played
          </button>
          <button
            className={`sort-btn ${sortBy === 'name' ? 'active' : ''}`}
            onClick={() => setSortBy('name')}
          >
            A–Z
          </button>
        </div>
      </div>

      <div className="game-grid">
        {filtered.map(game => {
          const hours = Math.round(game.playtime_forever / 60);
          const imgUrl = `https://cdn.akamai.steamstatic.com/steam/apps/${game.appid}/header.jpg`;

          return (
            <a
              key={game.appid}
              href={`https://store.steampowered.com/app/${game.appid}`}
              target="_blank"
              rel="noopener noreferrer"
              className="game-card"
            >
              <div className="game-art">
                <img
                  src={imgUrl}
                  alt={game.name}
                  loading="lazy"
                  onError={e => {
                    e.target.style.display = 'none';
                    e.target.parentElement.classList.add('no-art');
                  }}
                />
              </div>
              <div className="game-info">
                <h3 className="game-name">{game.name}</h3>
                <span className="game-hours">
                  {hours > 0 ? `${hours.toLocaleString()} hrs` : '< 1 hr'}
                </span>
              </div>
            </a>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <p className="steam-empty">No games match "{search}".</p>
      )}
    </section>
  );
};

export default SteamLibrary;
