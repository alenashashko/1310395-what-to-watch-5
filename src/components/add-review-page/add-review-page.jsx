import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import proptypes from '../../type';
import ReviewFormWrapped from '../review-form/review-form';
import {fetchMovieByID} from '../../store/api-actions';
import {generateWithFetchedData} from '../../hocs/with-fetched-data/with-fetched-data';
import {getCurrentMovie, getAvatarURL} from '../../store/selectors';

const AddReviewPage = (props) => {
  const {cinemaName, movie, avatarUrl, onAvatarClick} = props;

  return (
    <section
      className="movie-card movie-card--full"
      style={{backgroundColor: `${movie.backgroundColor}`}}>
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={movie.backgroundPicture} alt={movie.title} />
        </div>

        <h1 className="visually-hidden">{cinemaName}</h1>

        <header className="page-header">
          <div className="logo">
            <Link to="/" className="logo__link">
              {cinemaName.split(``).map((character, index) => {
                return (
                  <span key={index} className={`logo__letter logo__letter--${index + 1}`}>
                    {character}
                  </span>
                );
              })}
            </Link>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${movie.id}`} className="breadcrumbs__link">{movie.title}
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <div className="user-block">
            <div onClick={onAvatarClick} className="user-block__avatar">
              <img src={avatarUrl} alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={movie.poster} alt={`${movie.title} poster`} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <ReviewFormWrapped />
      </div>
    </section>
  );
};

AddReviewPage.propTypes = {
  cinemaName: proptypes.cinemaName,
  id: proptypes.id,
  movie: proptypes.movie,
  fetchMovieByIDAction: PropTypes.func.isRequired,
  onAvatarClick: PropTypes.func.isRequired,
  avatarUrl: PropTypes.string
};

const mapStateToProps = (state) => ({
  movie: getCurrentMovie(state),
  avatarUrl: getAvatarURL(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchMovieByIDAction(id) {
    dispatch(fetchMovieByID(id));
  }
});

export {AddReviewPage};
export default connect(mapStateToProps, mapDispatchToProps)(
    generateWithFetchedData(
        (state) => !!getCurrentMovie(state),
        (props) => props.fetchMovieByIDAction(props.id)
    )(
        AddReviewPage
    )
);
