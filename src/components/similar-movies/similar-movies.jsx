import {connect} from 'react-redux';

import proptypes from '../../type';
import MoviesList from '../movies-list/movies-list';
import {filterSimilarMovies} from '../../core';
import {generateWithFetchedData} from '../../hocs/with-fetched-data/with-fetched-data';

const mapStateToProps = (state, props) => {
  const similarMovies = filterSimilarMovies(state.DATA.movies, props.movie);

  return {
    movies: similarMovies
  };
};

const SimilarMovies = generateWithFetchedData(
    (state) => !!state.DATA.movies
)(
    connect(mapStateToProps)(MoviesList)
);

SimilarMovies.propTypes = {
  movie: proptypes.movie
};

export default SimilarMovies;
