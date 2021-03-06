import {connect} from 'react-redux';

import proptypes from '../../type';
import MoviesList from '../movies-list/movies-list';
import {generateWithFetchedData} from '../../hocs/with-fetched-data/with-fetched-data';
import {getMovies, getSimilarMovies} from '../../store/selectors';

const SimilarMovies = generateWithFetchedData(
    (state) => !!getMovies(state)
)(
    connect(mapStateToProps)(MoviesList)
);

SimilarMovies.propTypes = {
  movie: proptypes.movie
};

function mapStateToProps(state, props) {
  const similarMovies = getSimilarMovies(state, props.movie);

  return {
    movies: similarMovies
  };
}

export default SimilarMovies;
