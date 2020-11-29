import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import proptypes from '../../type';
import Logo from '../logo/logo';
import Footer from '../footer/footer';
import AddToMyListButton from '../add-to-my-list-button/add-to-my-list-button';
import PlayButton from '../play-button/play-button';
import SimilarMovies from '../similar-movies/similar-movies';
import TabsWrapped from '../tabs/tabs';
import UserBlock from '../user-block/user-block';
import {fetchMovieByID} from '../../store/api-actions';
import {generateWithFetchedData} from '../../hocs/with-fetched-data/with-fetched-data';
import {getMovie} from '../../store/selectors';
import {getAuthorizationStatus} from '../../store/selectors';
import {AuthorizationStatus, CINEMA_NAME} from '../../const';
import {checkMovieIsLoaded} from '../../utils';

const MoviePage = (props) => {
  const {movie, authorizationStatus} = props;

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
                <PlayButton id={movie.id} />
                <AddToMyListButton id={movie.id} isMovieFavorite={movie.isFavorite} />

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
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  movie: getMovie(state),
  authorizationStatus: getAuthorizationStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchMovieByIDAction(id) {
    dispatch(fetchMovieByID(id));
  },
});

export {MoviePage};
export default connect(mapStateToProps, mapDispatchToProps)(
    generateWithFetchedData(
        (state, props) => checkMovieIsLoaded(state, props),
        (props) => props.fetchMovieByIDAction(props.id)
    )(
        MoviePage
    )
);
