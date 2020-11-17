import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import proptypes from '../../type';
import MoviesList from '../movies-list/movies-list';
import ShowMoreButton from '../show-more-button/show-more-button';
import {MOVIES_PER_PAGE} from '../../const';
import withPageNumber from '../../hocs/with-page-number/with-page-number';

const MainPageMoviesList = (props) => {
  const {movies, pageNumber, onButtonClick} = props;

  const getVisibleMovies = () => {
    return movies.slice(0, pageNumber * MOVIES_PER_PAGE);
  };

  const visibleMovies = getVisibleMovies();

  return (
    <React.Fragment>
      <MoviesList movies={visibleMovies} />

      {visibleMovies.length < movies.length ?
        <ShowMoreButton onButtonClick={onButtonClick} /> :
        null}
    </React.Fragment>
  );
};

MainPageMoviesList.propTypes = {
  movies: proptypes.movies,
  pageNumber: proptypes.pageNumber,
  onButtonClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  movies: state.moviesByGenre
});

export default connect(mapStateToProps)(withPageNumber(MainPageMoviesList));
