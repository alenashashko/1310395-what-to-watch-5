import React from 'react';
import {connect} from 'react-redux';

import proptypes from '../../type';
import MovieCard from '../movie-card/movie-card';

const MoviesList = (props) => {
  const {moviesByGenre} = props;

  return (
    <div className="catalog__movies-list">
      {moviesByGenre.map((movie) => {
        return (
          <MovieCard key={movie.id} movie={movie} />
        );
      })}
    </div>
  );
};

MoviesList.propTypes = {
  moviesByGenre: proptypes.movies
};

const mapStateToProps = (state) => ({
  moviesByGenre: state.moviesByGenre
});

export {MoviesList};
export default connect(mapStateToProps)(MoviesList);
