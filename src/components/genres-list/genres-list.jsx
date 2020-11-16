import React from 'react';
import PropTypes from 'prop-types';

import proptypes from '../../type';
import {DEFAULT_MOVIES_FILTER_VALUE} from '../../const';
import {ActionCreator} from '../../store/actions';
import {connect} from 'react-redux';

const GenresList = (props) => {
  const {currentGenre, genres, changeGenre} = props;

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => {
        return (
          <li key={genre} className={`catalog__genres-item ${genre === currentGenre ? `catalog__genres-item--active` : ``}`}>
            <a
              onClick={(evt) => {
                evt.preventDefault();
                changeGenre(genre);
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
};

GenresList.propTypes = {
  genres: proptypes.genres,
  currentGenre: proptypes.genre,
  changeGenre: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  const genresWithRepeating = state.allMovies.map((movie) => movie.genre);
  const genres = Array.from(new Set(genresWithRepeating));

  genres.unshift(DEFAULT_MOVIES_FILTER_VALUE);

  return {
    currentGenre: state.genre,
    genres
  };
};

const mapDispatchToProps = (dispatch) => ({
  changeGenre(genre) {
    dispatch(ActionCreator.changeGenre(genre));
    dispatch(ActionCreator.filterMoviesByGenre());
  },

});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
