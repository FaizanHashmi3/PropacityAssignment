

import React from 'react';
import { Link } from 'react-router-dom';

function FilmCard({ film }) {
  return (
    <div className="film-card">
      <Link to={`/films/${film.episode_id}`}>
        <img src={`https://picsum.photos/200/300?random=${film.episode_id}`} alt={film.title} />
        <h3>{film.title}</h3>
      </Link>
    </div>
  );
}

export default FilmCard;
