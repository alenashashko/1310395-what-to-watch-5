import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import proptypes from '../../type';
import {MovieChangeStatus} from '../../const';
import {changeFavoriteMovieByID} from '../../store/api-actions';

const AddToMyListButton = (props) => {
  const {id, isMovieFavorite, changeFavoriteMovieByIDAction} = props;

  return (
    isMovieFavorite
      ? <button
        onClick={() => changeFavoriteMovieByIDAction(id, MovieChangeStatus.DELETE_FROM_FAVORITE)}
        className="btn btn--list movie-card__button"
        type="button">
        <svg viewBox="0 0 18 14" width="18" height="14">
          <use xlinkHref="#in-list"></use>
        </svg>
        <span>My list</span>
      </button>
      : <button
        onClick={() => changeFavoriteMovieByIDAction(id, MovieChangeStatus.ADD_TO_FAVORITE)}
        className="btn btn--list movie-card__button"
        type="button">
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>
        <span>My list</span>
      </button>
  );
};

AddToMyListButton.propTypes = {
  id: proptypes.id,
  isMovieFavorite: PropTypes.bool.isRequired,
  changeFavoriteMovieByIDAction: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  changeFavoriteMovieByIDAction(id, status) {
    dispatch(changeFavoriteMovieByID(id, status));
  }
});

export {AddToMyListButton};
export default connect(null, mapDispatchToProps)(AddToMyListButton);
