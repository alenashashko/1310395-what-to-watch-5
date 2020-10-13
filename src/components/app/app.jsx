import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MainPage from '../main-page/main-page';
import AuthPage from '../auth-page/auth-page';
import MyListPage from '../my-list-page/my-list-page';
import MoviePage from '../movie-page/movie-page';
import AddReviewPage from '../add-review-page/add-review-page';
import PlayerPage from '../player-page/player-page';

const App = (props) => {
  const {cinemaName, promoMovie, movies, reviews, ratings} = props;

  return (
    <BrowserRouter basename='/'>
      <Switch>
        <Route exact path='/'>
          <MainPage cinemaName={cinemaName} promoMovie={promoMovie} movies={movies} />
        </Route>
        <Route exact path='/login'>
          <AuthPage cinemaName={cinemaName} />
        </Route>
        <Route exact path='/mylist'>
          <MyListPage cinemaName={cinemaName} movies={movies} />
        </Route>
        <Route exact path='/films/:id' render={(routeProps) => (
          <MoviePage cinemaName={cinemaName} movie={movies[0]} reviews={reviews} movies={movies}
            id={routeProps.match.params.id}
          />
        )}>
        </Route>
        <Route exact path='/films/:id/review' render={(routeProps) => (
          <AddReviewPage cinemaName={cinemaName} ratings={ratings} id={routeProps.match.params.id}
            movie={movies[0]}
          />
        )}>
        </Route>
        <Route exact path='/player/:id' render={(routeProps) => (
          <PlayerPage id={routeProps.match.params.id} movie={movies[0]} />
        )}>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = { // date: PropTypes.object.isRequired ?
  cinemaName: PropTypes.string.isRequired,
  promoMovie: PropTypes.shape({
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
  }).isRequired,
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
  reviews: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        date: PropTypes.instanceOf(Date).isRequired,
        rating: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired
      })
  ).isRequired,
  ratings: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default App;
