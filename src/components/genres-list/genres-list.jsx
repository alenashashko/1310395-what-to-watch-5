import React from 'react';

import proptypes from '../../type';
import {DEFAULT_MOVIES_FILTER_VALUE} from '../../const';

const GenresList = (props) => {
  const {movies} = props;

  const genresWithRepeating = movies.map((movie) => movie.genre);
  const genres = Array.from(new Set(genresWithRepeating));

  genres.unshift(DEFAULT_MOVIES_FILTER_VALUE);

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => {
        return (
          <li key={genre} className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">{genre}</a>
          </li>
        );
      })}
    </ul>
  );
};

GenresList.propTypes = {
  movies: proptypes.movies
};

export default GenresList;
