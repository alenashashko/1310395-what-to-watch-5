import React from 'react';
import PropTypes from 'prop-types';

const MyListPage = (props) => {
  const {cinemaName, movies} = props;

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <a href="main.html" className="logo__link">
            {cinemaName.split(``).map((character, index) => {
              return (
                <span key={index} className={`logo__letter logo__letter--${index + 1}`}>{character}</span>
              );
            })}
          </a>
        </div>

        <h1 className="page-title user-page__title">My list</h1>

        <div className="user-block">
          <div className="user-block__avatar">
            <img src="/img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </div>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__movies-list">
          {movies.map((movie) => {
            return (
              <article key={movie.title} className="small-movie-card catalog__movies-card">
                <div className="small-movie-card__image">
                  <img src={movie.picture} alt={movie.title} width="280" height="175" />
                </div>
                <h3 className="small-movie-card__title">
                  <a className="small-movie-card__link" href="movie-page.html">{movie.title}</a>
                </h3>
              </article>
            );
          })}
        </div>
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
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
  );
};

MyListPage.propTypes = {
  cinemaName: PropTypes.string.isRequired,
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired
      })
  ).isRequired
};

export default MyListPage;
