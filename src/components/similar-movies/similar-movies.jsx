import {connect} from 'react-redux';

import proptypes from '../../type';
import MoviesList from '../movies-list/movies-list';
import {filterSimilarMovies} from '../../core';

const mapStateToProps = (state, props) => {
  const similarMovies = filterSimilarMovies(state.allMovies, props.movie);

  return {
    movies: similarMovies
  };
};

const SimilarMovies = connect(mapStateToProps)(MoviesList);

SimilarMovies.propTypes = {
  movie: proptypes.movie
};

export default SimilarMovies;
