import React from 'react';
import PropTypes from 'prop-types';

import proptypes from '../../type';
// import GenresList from '../genres-list/genres-list';
import MainPageMoviesListWrapped from '../main-page-movies-list/main-page-movies-list';
import UserBlock from '../user-block/user-block';
import Logo from '../logo/logo';
import Footer from '../footer/footer';
import AddToMyListButton from '../add-to-my-list-button/add-to-my-list-button';
import PlayButton from '../play-button/play-button';
import withPromoLoaded from '../../hocs/with-promo-loaded/with-promo-loaded';
import {CINEMA_NAME} from '../../const';

const MainPage = (props) => {
  const {promoMovie, wasPromoLoaded} = props;

  if (wasPromoLoaded === false) {
    return null;
  }

  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={promoMovie.backgroundPicture} alt={promoMovie.title} />
        </div>

        <h1 className="visually-hidden">{CINEMA_NAME}</h1>

        <header className="page-header movie-card__head">
          <Logo />
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
                <PlayButton id={promoMovie.id} />
                <AddToMyListButton id={promoMovie.id} isMovieFavorite={promoMovie.isFavorite} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          {/* <GenresList /> */}
          <MainPageMoviesListWrapped />
        </section>

        <Footer />
      </div>
    </React.Fragment>
  );
};

MainPage.propTypes = {
  promoMovie: proptypes.movieNotRequired,
  wasPromoLoaded: PropTypes.bool.isRequired
};

export {MainPage};
export default withPromoLoaded(MainPage);
