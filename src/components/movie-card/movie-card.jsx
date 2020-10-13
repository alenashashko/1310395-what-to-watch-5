import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = (props) => {
  const {movie, onMovieImageHover} = props;

  return ( // onMouseOver ?
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={movie.picture} alt={movie.title} width="280" height="175"
          onClick={onMovieImageHover()} />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{movie.title}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    ratingScore: PropTypes.number.isRequired,
    ratingCount: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string.isRequired),
  }).isRequired,
  onMovieImageHover: PropTypes.func.isRequired
};

export default MovieCard;
