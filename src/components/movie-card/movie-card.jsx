import React from 'react';
import PropTypes from 'prop-types';

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
    description: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
  onMovieHover: PropTypes.func.isRequired,
  isVideoPlaying: PropTypes.bool.isRequired
};

export default MovieCard;
