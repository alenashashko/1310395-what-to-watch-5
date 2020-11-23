import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import proptypes from '../../type';
import MoviesList from '../movies-list/movies-list';
import {fetchFavoriteMoviesList} from '../../store/api-actions';

class MyListPage extends PureComponent {
  componentDidMount() {
    const {fetchFavoriteMoviesListAction} = this.props;

    fetchFavoriteMoviesListAction();
  }

  render() {
    const {cinemaName, favoriteMovies} = this.props;

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

          <MoviesList movies={favoriteMovies}/>
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
  }
}

MyListPage.propTypes = {
  cinemaName: proptypes.cinemaName,
  favoriteMovies: proptypes.movies,
  fetchFavoriteMoviesListAction: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  favoriteMovies: state.DATA.favoriteMovies
});

const mapDispatchToProps = (dispatch) => ({
  fetchFavoriteMoviesListAction() {
    dispatch(fetchFavoriteMoviesList());
  }
});

export {MyListPage};
export default connect(mapStateToProps, mapDispatchToProps)(MyListPage);
