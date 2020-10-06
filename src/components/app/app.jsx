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
  const {promoMovie, cinemaName, genres, movies, ratings} = props;

  return (
    <BrowserRouter basename='/'>
      <Switch>
        <Route exact path='/'>
          <MainPage cinemaName={cinemaName} promoMovie={promoMovie} genres={genres} movies={movies}/>
        </Route>
        <Route exact path='/login'>
          <AuthPage cinemaName={cinemaName} />
        </Route>
        <Route exact path='/mylist'>
          <MyListPage cinemaName={cinemaName} movies={movies} />
        </Route>
        <Route exact path='/films/:id' render={(routeProps) => (
          <MoviePage cinemaName={cinemaName} movies={movies} id={routeProps.match.params.id}/>
        )}>
        </Route>
        <Route exact path='/films/:id/review' render={(routeProps) => (
          <AddReviewPage cinemaName={cinemaName} ratings={ratings} id={routeProps.match.params.id} />
        )}>
        </Route>
        <Route exact path='/player/:id' render={(routeProps) => (
          <PlayerPage id={routeProps.match.params.id} />
        )}>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  cinemaName: PropTypes.string.isRequired,
  promoMovie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
  }).isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired
      })
  ).isRequired,
  ratings: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default App;
