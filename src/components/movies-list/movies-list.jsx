import React from 'react';

import proptypes from '../../type';
import MovieCard from '../movie-card/movie-card';

const MoviesList = (props) => {
  const {movies} = props;

  return (
    <div className="catalog__movies-list">
      {movies.map((movie) => {
        return (
          <MovieCard key={movie.id} movie={movie} />
        );
      })}
    </div>
  );
};

MoviesList.propTypes = {
  movies: proptypes.movies
};

export default MoviesList;
