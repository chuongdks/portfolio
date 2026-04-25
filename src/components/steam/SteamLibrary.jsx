import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SteamLibrary = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Calling your Spring Boot API endpoint
    axios.post('http://172.21.176.1:8080/api/v1/libraries/sync/76561198038076620')
      .then(response => {
        setGames(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching library:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Syncing with Steam API...</p>;

  return (
    <section>
      <h2>My Steam Library</h2>
      <div className="game-grid">
        {games.map(game => (
          <div key={game.appid} className="game-card">
            <h3>{game.name}</h3>
            <p>Playtime: {Math.round(game.playtime_forever / 60)} hours</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SteamLibrary;