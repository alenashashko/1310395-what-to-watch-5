import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import proptypes from '../../type';
import SimilarMovies from '../similar-movies/similar-movies';
import TabsWrapped from '../tabs/tabs';
import {fetchMovieByID} from '../../store/api-actions';
import {generateWithFetchedData} from '../../hocs/with-fetched-data/with-fetched-data';
import {getCurrentMovie} from '../../store/selectors';
import {getAuthorizationStatus, getAvatarURL} from '../../store/selectors';
import {AuthorizationStatus, AppRoute} from '../../const';

const MoviePage = (props) => {
  const {cinemaName, movie, history, authorizationStatus, onAvatarClick, avatarUrl} = props;

  return (
    <React.Fragment>
      <section
        className="movie-card movie-card--full"
        style={{backgroundColor: `${movie.backgroundColor}`}}>
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={movie.backgroundPicture} alt={movie.title} />
          </div>

          <h1 className="visually-hidden">{cinemaName}</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <Link to="/" className="logo__link">
                {cinemaName.split(``).map((character, index) => {
                  return (
                    <span key={index} className={`logo__letter logo__letter--${index + 1}`}>{character}</span>
                  );
                })}
              </Link>
            </div>

            <div className="user-block">
              {authorizationStatus === AuthorizationStatus.AUTH
                ? <div onClick={onAvatarClick} className="user-block__avatar">
                  <img src={avatarUrl} alt="User avatar" width="63" height="63" />
                </div>
                : <Link to={AppRoute.LOGIN} className="user-block__link">Sign in</Link>
              }
            </div>
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

        <footer className="page-footer">
          <div className="logo">
            <Link to="/" className="logo__link logo__link--light">
              {cinemaName.split(``).map((character, index) => {
                return (
                  <span key={index} className={`logo__letter logo__letter--${index + 1}`}>{character}</span>
                );
              })}
            </Link>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

MoviePage.propTypes = {
  cinemaName: proptypes.cinemaName,
  movie: proptypes.movie,
  id: proptypes.id,
  history: proptypes.history,
  fetchMovieByIDAction: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  onAvatarClick: PropTypes.func.isRequired,
  avatarUrl: PropTypes.string
};

const mapStateToProps = (state) => ({
  movie: getCurrentMovie(state),
  authorizationStatus: getAuthorizationStatus(state),
  avatarUrl: getAvatarURL(state)
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
