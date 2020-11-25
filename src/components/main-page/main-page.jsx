import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';

import proptypes from '../../type';
import GenresList from '../genres-list/genres-list';
import MainPageMoviesListWrapped from '../main-page-movies-list/main-page-movies-list';
import UserBlock from '../user-block/user-block';
import {fetchPromoMovie} from '../../store/api-actions';
import {generateWithFetchedData} from '../../hocs/with-fetched-data/with-fetched-data';
import {getPromoMovie} from '../../store/selectors';

const MainPage = (props) => {
  const {cinemaName, promoMovie, history} = props;

  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={promoMovie.backgroundPicture} alt={promoMovie.title} />
        </div>

        <h1 className="visually-hidden">{cinemaName}</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a className="logo__link">
              {cinemaName.split(``).map((character, index) => {
                return (
                  <span key={index} className={`logo__letter logo__letter--${index + 1}`}>{character}</span>
                );
              })}
            </a>
          </div>

          <UserBlock />
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={promoMovie.poster} alt={`${promoMovie.title} poster`} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{promoMovie.title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{promoMovie.genre}</span>
                <span className="movie-card__year">{promoMovie.year}</span>
              </p>

              <div className="movie-card__buttons">
                <button onClick={() => history.push(`/player/${promoMovie.id}`)} className="btn btn--play movie-card__button" type="button">
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList />
          <MainPageMoviesListWrapped />

        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              {cinemaName.split(``).map((character, index) => {
                return (
                  <span key={index} className={`logo__letter logo__letter--${index + 1}`}>{character}</span>
                );
              })}
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

MainPage.propTypes = {
  cinemaName: proptypes.cinemaName,
  promoMovie: proptypes.movie,
  history: proptypes.history,
  fetchPromoMovieAction: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  promoMovie: getPromoMovie(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchPromoMovieAction() {
    dispatch(fetchPromoMovie());
  }
});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(
    withRouter(
        generateWithFetchedData(
            (state) => !!getPromoMovie(state),
            (props) => props.fetchPromoMovieAction()
        )(
            MainPage
        )
    )
);
