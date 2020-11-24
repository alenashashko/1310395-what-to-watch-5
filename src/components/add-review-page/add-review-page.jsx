import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import proptypes from '../../type';
import ReviewFormWrapped from '../review-form/review-form';
import {fetchMovieByID} from '../../store/api-actions';

class AddReviewPage extends PureComponent {
  componentDidMount() {
    const {id, fetchMovieByIDAction} = this.props;

    fetchMovieByIDAction(id);
  }

  render() {
    const {cinemaName, movie} = this.props;

    if (!movie) {
      return null;
    }

    return ( // bg picture ?
      <section className="movie-card movie-card--full">
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={movie.picture} alt={movie.title} />
          </div>

          <h1 className="visually-hidden">{cinemaName}</h1>

          <header className="page-header">
            <div className="logo">
              <Link to="/" className="logo__link">
                {cinemaName.split(``).map((character, index) => {
                  return (
                    <span key={index} className={`logo__letter logo__letter--${index + 1}`}>{character}</span>
                  );
                })}
              </Link>
            </div>

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to={`/films/${movie.id}`} className="breadcrumbs__link">{movie.title}</Link>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="/img/avatar.jpg" alt="User avatar" width="63" height="63" />
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
  }
}

AddReviewPage.propTypes = {
  cinemaName: proptypes.cinemaName,
  id: proptypes.id,
  movie: proptypes.movie,
  fetchMovieByIDAction: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  movie: state.DATA.currentMovie
});

const mapDispatchToProps = (dispatch) => ({
  fetchMovieByIDAction(id) {
    dispatch(fetchMovieByID(id));
  }
});

export {AddReviewPage};
export default connect(mapStateToProps, mapDispatchToProps)(AddReviewPage);
