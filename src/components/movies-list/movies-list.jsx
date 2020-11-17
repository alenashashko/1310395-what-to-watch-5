import React from 'react';

import proptypes from '../../type';
import MovieCardWrapped from '../movie-card/movie-card';

const MoviesList = (props) => {
  const {movies} = props;

  return (
    <div className="catalog__movies-list">
      {movies.map((movie) => {
        return (
          <MovieCardWrapped key={movie.id} movie={movie} />
        );
      })}
    </div>
  );
};

MoviesList.propTypes = {
  movies: proptypes.movies
};

export default MoviesList;
