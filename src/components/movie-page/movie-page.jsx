import React from 'react';
import {Link} from 'react-router-dom';

import proptypes from '../../type';
import MoviesList from '../movies-list/movies-list';
import Tabs from '../tabs/tabs';

const MoviePage = (props) => {
  const {cinemaName, movie, movies, reviews, id} = props;

  const filterSimilarMovies = (allMovies) => {
    const similarMovies = allMovies.filter((it) => it.genre === movie.genre && it.id !== movie.id);

    return similarMovies.slice(0, 4);
  };

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={movie.picture} alt={movie.title} />
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
              <div className="user-block__avatar">
                <img src="/img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
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
                <button className="btn btn--play movie-card__button" type="button">
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
                <Link to={`/films/${movie.id}/review`} className="btn movie-card__button">Add review</Link>
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
              <Tabs movie={movie} reviews={reviews} id={id}/>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <MoviesList movies={filterSimilarMovies(movies)} />
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
  reviews: proptypes.reviews,
  movies: proptypes.movies,
  id: proptypes.id
};

export default MoviePage;
