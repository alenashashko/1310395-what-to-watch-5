import React from 'react';

import proptypes from '../../type';
import MovieCardWithHOC from '../movie-card/movie-card';

const MoviesList = (props) => {
  const {movies} = props;

  return (
    <div className="catalog__movies-list">
      {movies.map((movie) => {
        return (
          <MovieCardWithHOC key={movie.id} movie={movie} />
        );
      })}
    </div>
  );
};

MoviesList.propTypes = {
  movies: proptypes.movies
};

export default MoviesList;
