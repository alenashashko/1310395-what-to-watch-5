import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import proptypes from '../../type';
import Logo from '../logo/logo';
import Footer from '../footer/footer';
import SimilarMovies from '../similar-movies/similar-movies';
import TabsWrapped from '../tabs/tabs';
import UserBlock from '../user-block/user-block';
import {fetchMovieByID} from '../../store/api-actions';
import {generateWithFetchedData} from '../../hocs/with-fetched-data/with-fetched-data';
import {getCurrentMovie} from '../../store/selectors';
import {getAuthorizationStatus} from '../../store/selectors';
import {AuthorizationStatus, CINEMA_NAME} from '../../const';

const MoviePage = (props) => {
  const {movie, history, authorizationStatus} = props;

  return (
    <React.Fragment>
      <section
        className="movie-card movie-card--full"
        style={{backgroundColor: `${movie.backgroundColor}`}}>
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={movie.backgroundPicture} alt={movie.title} />
          </div>

          <h1 className="visually-hidden">{CINEMA_NAME}</h1>

          <header className="page-header movie-card__head">
            <Logo />

            <UserBlock />
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{movie.title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{movie.genre}</span>
                <span className="movie-card__year">{movie.year}</span>
              </p>

              <div className="movie-card__buttons">
                <button onClick={() => history.push(`/player/${movie.id}`)} className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                {authorizationStatus === AuthorizationStatus.AUTH
                  ? <Link to={`/films/${movie.id}/review`} className="btn movie-card__button">
                  Add review
                  </Link>
                  : null
                }
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={movie.poster} alt={`${movie.title} poster`} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <TabsWrapped movie={movie} />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <SimilarMovies movie={movie} />
        </section>

        <Footer />
      </div>
    </React.Fragment>
  );
};

MoviePage.propTypes = {
  movie: proptypes.movie,
  id: proptypes.id,
  history: proptypes.history,
  fetchMovieByIDAction: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  movie: getCurrentMovie(state),
  authorizationStatus: getAuthorizationStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchMovieByIDAction(id) {
    dispatch(fetchMovieByID(id));
  }
});

export {MoviePage};
export default connect(mapStateToProps, mapDispatchToProps)(
    withRouter(
        generateWithFetchedData(
            (state) => !!getCurrentMovie(state),
            (props) => props.fetchMovieByIDAction(props.id)
        )(
            MoviePage
        )
    )
);
