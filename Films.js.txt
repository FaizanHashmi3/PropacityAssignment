// Films.js

import React, { useState, useEffect } from 'react';
import FilmCard from './FilmCard';


function Films() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    // Fetch films when the component mounts
    getFilms().then((data) => setFilms(data.results));
  }, []);

  return (
    <div>
      <h2>Films</h2>
      <div className="film-list">
        {films.map((film) => (
          <FilmCard key={film.episode_id} film={film} />
        ))}
      </div>
    </div>
  );
}

export default Films;
