import React from 'react';
import PropTypes from 'prop-types';

const createRatingTextVersion = (ratingScore) => {
  if (ratingScore < 3) {
    return `Bad`;
  } else if (ratingScore < 5) {
    return `Normal`;
  } else if (ratingScore < 8) {
    return `Good`;
  } else if (ratingScore < 10) {
    return `Very good`;
  } else {
    return `Awesome`;
  }
};

const MovieOverview = (props) => {
  const {movie} = props;

  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{movie.ratingScore}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">
            {createRatingTextVersion(movie.ratingScore)}
          </span>
          <span className="movie-rating__count">{movie.ratingCount} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        {movie.description.map((it) => {
          return (
            <p key={it}>{it}</p>
          );
        })}

        <p className="movie-card__director"><strong>Director: {movie.director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {movie.starring.join(`, `)}</strong></p>
      </div>
    </React.Fragment>
  );
};

MovieOverview.propTypes = {
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
  }).isRequired
};

export default MovieOverview;
