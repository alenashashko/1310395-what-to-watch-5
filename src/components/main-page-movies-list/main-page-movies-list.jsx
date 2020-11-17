import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import proptypes from '../../type';
import MoviesList from '../movies-list/movies-list';
import ShowMoreButton from '../show-more-button/show-more-button';
import withPageNumber from '../../hocs/with-page-number/with-page-number';

class MainPageMoviesList extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {
    const {resetPageNumber, currentGenre} = this.props;
    const {currentGenre: previousGenre} = prevProps;

    if (previousGenre !== currentGenre) {
      resetPageNumber();
    }
  }

  render() {
    const {movies, visibleMovies, onButtonClick} = this.props;

    return (
      <React.Fragment>
        <MoviesList movies={visibleMovies} />

        {visibleMovies.length < movies.length ?
          <ShowMoreButton onButtonClick={onButtonClick} /> :
          null}
      </React.Fragment>
    );
  }
}

MainPageMoviesList.propTypes = {
  movies: proptypes.movies,
  visibleMovies: proptypes.movies,
  onButtonClick: PropTypes.func.isRequired,
  resetPageNumber: PropTypes.func.isRequired,
  currentGenre: proptypes.genre
};

const mapStateToProps = (state) => ({
  movies: state.moviesByGenre,
  currentGenre: state.genre
});

export default connect(mapStateToProps)(withPageNumber(MainPageMoviesList));
