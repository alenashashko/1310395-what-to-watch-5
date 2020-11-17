import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

import proptypes from '../../type';
import MoviesList from '../movies-list/movies-list';
import ShowMoreButton from '../show-more-button/show-more-button';
import {MOVIES_PER_PAGE} from '../../const';

class MainPageMoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      pageNumber: 1
    };

    this._handleButtonClick = this._handleButtonClick.bind(this);
  }

  _getVisibleMovies() {
    const {movies} = this.props;

    return movies.slice(0, this.state.pageNumber * MOVIES_PER_PAGE);
  }

  _handleButtonClick() {
    this.setState((prevState) => ({
      pageNumber: prevState.pageNumber + 1
    }));
  }

  render() {
    const {movies} = this.props;
    const visibleMovies = this._getVisibleMovies();

    return (
      <React.Fragment>
        <MoviesList movies={visibleMovies} />

        {visibleMovies.length < movies.length ?
          <ShowMoreButton onButtonClick={this._handleButtonClick} /> :
          null}
      </React.Fragment>
    );
  }
}

MainPageMoviesList.propTypes = {
  movies: proptypes.movies
};

const mapStateToProps = (state) => ({
  movies: state.moviesByGenre
});

export default connect(mapStateToProps)(MainPageMoviesList);
