import React from 'react';
import {Link} from 'react-router-dom';

import proptypes from '../../type';

const MovieCard = (props) => {
  const {movie, onMovieHover, isVideoPlaying} = props;
  // onMouseLeave ?

  return (
    <article className="small-movie-card catalog__movies-card" onMouseEnter={onMovieHover}>
      <div className="small-movie-card__image">
        {isVideoPlaying ? (
          <video src={movie.src} controls></video>
        ) : (
          <img src={movie.picture} alt={movie.title} width="280" height="175" />
        )}
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${movie.id}`}>{movie.title}</Link>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  movie: proptypes.movie,
  onMovieHover: proptypes.onMovieHover,
  isVideoPlaying: proptypes.isVideoPlaying
};

export default MovieCard;
