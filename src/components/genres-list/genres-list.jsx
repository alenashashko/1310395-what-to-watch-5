import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import proptypes from '../../type';
import {DEFAULT_MOVIES_FILTER_VALUE} from '../../const';
import {changeGenre} from '../../store/actions';
import {connect} from 'react-redux';
import {generateWithFetchedData} from '../../hocs/with-fetched-data/with-fetched-data';
import {getGenre, getMovies} from '../../store/selectors';

class GenresList extends PureComponent {
  componentWillUnmount() {
    const {changeGenreAction} = this.props;

    changeGenreAction(DEFAULT_MOVIES_FILTER_VALUE);
  }

  render() {
    const {currentGenre, genres, changeGenreAction} = this.props;

    return (
      <ul className="catalog__genres-list">
        {genres.map((genre) => {
          return (
            <li
              key={genre}
              className={`catalog__genres-item
              ${genre === currentGenre ? `catalog__genres-item--active` : ``}`}>
              <a
                onClick={(evt) => {
                  evt.preventDefault();
                  changeGenreAction(genre);
                }}
                href="#"
                className="catalog__genres-link">
                {genre}
              </a>
            </li>
          );
        })}
      </ul>
    );
  }
}

GenresList.propTypes = {
  genres: proptypes.genres,
  currentGenre: proptypes.genre,
  changeGenreAction: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  const genresWithRepeating = getMovies(state).map((movie) => movie.genre);
  const uniqueGenres = Array.from(new Set(genresWithRepeating));

  const genres = uniqueGenres.slice(0, 9);
  genres.unshift(DEFAULT_MOVIES_FILTER_VALUE);

  return {
    currentGenre: getGenre(state),
    genres
  };
};

const mapDispatchToProps = (dispatch) => ({
  changeGenreAction(genre) {
    dispatch(changeGenre(genre));
  },
});

export {GenresList};
export default generateWithFetchedData(
    (state) => !!getMovies(state)
)(
    connect(mapStateToProps, mapDispatchToProps)(GenresList)
);
