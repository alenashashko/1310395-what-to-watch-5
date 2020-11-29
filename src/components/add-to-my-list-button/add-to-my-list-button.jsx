import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import proptypes from '../../type';
import {getAuthorizationStatus} from '../../store/selectors';
import {MovieChangeStatus, AppRoute, AuthorizationStatus} from '../../const';
import {changeFavoriteMovieByID} from '../../store/api-actions';
import {redirectToRoute} from '../../store/actions';

const AddToMyListButton = (props) => {
  const {id, isMovieFavorite, changeFavoriteMovieByIDAction} = props;

  const handleAddToFavoriteButtonClick = () => {
    const {authorizationStatus, redirectToAuthPage} = props;

    if (authorizationStatus !== AuthorizationStatus.AUTH) {
      redirectToAuthPage();

      return false;
    }

    return true;
  };

  return (
    isMovieFavorite
      ? <button
        onClick={
          () => {
            const isLoggedIn = handleAddToFavoriteButtonClick();

            if (isLoggedIn) {
              changeFavoriteMovieByIDAction(id, MovieChangeStatus.DELETE_FROM_FAVORITE);
            }
          }
        }
        className="btn btn--list movie-card__button"
        type="button">
        <svg viewBox="0 0 18 14" width="18" height="14">
          <use xlinkHref="#in-list"></use>
        </svg>
        <span>My list</span>
      </button>
      : <button
        onClick={
          () => {
            const isLoggedIn = handleAddToFavoriteButtonClick();

            if (isLoggedIn) {
              changeFavoriteMovieByIDAction(id, MovieChangeStatus.ADD_TO_FAVORITE);
            }
          }
        }
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
  changeFavoriteMovieByIDAction: PropTypes.func.isRequired,
  redirectToAuthPage: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  changeFavoriteMovieByIDAction(id, status) {
    dispatch(changeFavoriteMovieByID(id, status));
  },
  redirectToAuthPage() {
    dispatch(redirectToRoute(AppRoute.LOGIN));
  }
});

export {AddToMyListButton};
export default connect(mapStateToProps, mapDispatchToProps)(AddToMyListButton);
