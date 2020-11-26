import React from 'react';

import proptypes from '../../type';
import {TextRatingToNubmer} from '../../const';
import {formatMovieRating} from '../../utils';

const createRatingTextVersion = (ratingScore) => {
  if (ratingScore < TextRatingToNubmer.BAD) {
    return `Bad`;
  } else if (ratingScore < TextRatingToNubmer.NORMAL) {
    return `Normal`;
  } else if (ratingScore < TextRatingToNubmer.GOOD) {
    return `Good`;
  } else if (ratingScore < TextRatingToNubmer.AWESOME) {
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
        <div className="movie-rating__score">{formatMovieRating(movie.ratingScore)}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">
            {createRatingTextVersion(movie.ratingScore)}
          </span>
          <span className="movie-rating__count">{movie.ratingCount} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{movie.description}</p>

        <p className="movie-card__director"><strong>Director: {movie.director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {movie.starring.join(`, `)}</strong></p>
      </div>
    </React.Fragment>
  );
};

MovieOverview.propTypes = {
  movie: proptypes.movie
};

export default MovieOverview;
