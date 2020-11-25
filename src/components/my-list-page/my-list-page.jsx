import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import proptypes from '../../type';
import Logo from '../logo/logo';
import Footer from '../footer/footer';
import MoviesList from '../movies-list/movies-list';
import UserBlock from '../user-block/user-block';
import {fetchFavoriteMoviesList} from '../../store/api-actions';
import {generateWithFetchedData} from '../../hocs/with-fetched-data/with-fetched-data';
import {getFavoriteMovies} from '../../store/selectors';

const MyListPage = (props) => {
  const {favoriteMovies} = props;

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list</h1>

        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <MoviesList movies={favoriteMovies}/>
      </section>

      <Footer />
    </div>
  );
};

MyListPage.propTypes = {
  favoriteMovies: proptypes.movies,
  fetchFavoriteMoviesListAction: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  favoriteMovies: getFavoriteMovies(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchFavoriteMoviesListAction() {
    dispatch(fetchFavoriteMoviesList());
  }
});

export {MyListPage};
export default connect(mapStateToProps, mapDispatchToProps)(
    generateWithFetchedData(
        (state) => !!getFavoriteMovies(state),
        (props) => props.fetchFavoriteMoviesListAction()
    )(
        MyListPage
    )
);
