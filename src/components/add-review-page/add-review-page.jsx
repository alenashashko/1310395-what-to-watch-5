import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import proptypes from '../../type';
import ReviewFormWrapped from '../review-form/review-form';
import UserBlock from '../user-block/user-block';
import Logo from '../logo/logo';
import {fetchMovieByID} from '../../store/api-actions';
import {generateWithFetchedData} from '../../hocs/with-fetched-data/with-fetched-data';
import {CINEMA_NAME} from '../../const';
import {getMovie} from '../../store/selectors';
import {checkMovieIsLoaded} from '../../utils';

const AddReviewPage = (props) => {
  const {movie} = props;

  return (
    <section
      className="movie-card movie-card--full"
      style={{backgroundColor: `${movie.backgroundColor}`}}>
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={movie.backgroundPicture} alt={movie.title} />
        </div>

        <h1 className="visually-hidden">{CINEMA_NAME}</h1>

        <header className="page-header">
          <Logo />
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
          <UserBlock />
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
  id: proptypes.id,
  movie: proptypes.movie,
  fetchMovieByIDAction: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  movie: getMovie(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchMovieByIDAction(id) {
    dispatch(fetchMovieByID(id));
  }
});

export {AddReviewPage};
export default connect(mapStateToProps, mapDispatchToProps)(
    generateWithFetchedData(
        (state, props) => checkMovieIsLoaded(state, props),
        (props) => props.fetchMovieByIDAction(props.id)
    )(
        AddReviewPage
    )
);
