import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import MoviesList from '../movies-list/movies-list';

const MyListPage = (props) => {
  const {cinemaName, movies} = props;

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to="/" className="logo__link">
            {cinemaName.split(``).map((character, index) => {
              return (
                <span key={index} className={`logo__letter logo__letter--${index + 1}`}>{character}</span>
              );
            })}
          </Link>
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

        <MoviesList movies={movies}/>
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
  );
};

MyListPage.propTypes = {
  cinemaName: PropTypes.string.isRequired,
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
        ratingScore: PropTypes.number.isRequired,
        ratingCount: PropTypes.number.isRequired,
        src: PropTypes.string.isRequired,
        duration: PropTypes.string.isRequired,
        description: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        director: PropTypes.string.isRequired,
        starring: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      })
  ).isRequired,
};

export default MyListPage;
