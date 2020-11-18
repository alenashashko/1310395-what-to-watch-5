import React, {PureComponent} from 'react';

import proptypes from '../../type';
import {MOVIES_PER_PAGE} from '../../const';

const withPageNumber = (Component) => {
  class WithPageNumber extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        pageNumber: 1
      };

      this.handleButtonClick = this.handleButtonClick.bind(this);
      this.resetPageNumber = this.resetPageNumber.bind(this);
    }

    _getVisibleMovies() {
      const {pageNumber} = this.state;
      const {movies} = this.props;

      return movies.slice(0, pageNumber * MOVIES_PER_PAGE);
    }

    handleButtonClick() {
      this.setState((prevState) => ({
        pageNumber: prevState.pageNumber + 1
      }));
    }

    resetPageNumber() {
      this.setState({
        pageNumber: 1
      });
    }

    render() {
      const visibleMovies = this._getVisibleMovies();

      return (
        <Component
          {...this.props}
          pageNumber={this.state.pageNumber}
          onButtonClick={this.handleButtonClick}
          visibleMovies={visibleMovies}
          resetPageNumber={this.resetPageNumber}
        />
      );
    }
  }

  WithPageNumber.propTypes = {
    movies: proptypes.movies
  };

  return WithPageNumber;
};

export default withPageNumber;
