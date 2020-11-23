import React from 'react';
import PropTypes from 'prop-types';

import proptypes from '../../type';
import {DEFAULT_MOVIES_FILTER_VALUE} from '../../const';
import {changeGenre} from '../../store/action';
import {connect} from 'react-redux';

const GenresList = (props) => {
  const {currentGenre, genres, changeGenreAction} = props;

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => {
        return (
          <li key={genre} className={`catalog__genres-item ${genre === currentGenre ? `catalog__genres-item--active` : ``}`}>
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
};

GenresList.propTypes = {
  genres: proptypes.genres,
  currentGenre: proptypes.genre,
  changeGenreAction: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  const genresWithRepeating = state.movies.map((movie) => movie.genre);
  const genres = Array.from(new Set(genresWithRepeating));

  genres.unshift(DEFAULT_MOVIES_FILTER_VALUE);

  return {
    currentGenre: state.genre,
    genres
  };
};

const mapDispatchToProps = (dispatch) => ({
  changeGenreAction(genre) {
    dispatch(changeGenre(genre));
  },

});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
