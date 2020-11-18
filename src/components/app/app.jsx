import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import proptypes from '../../type';
import MainPage from '../main-page/main-page';
import AuthPage from '../auth-page/auth-page';
import MyListPage from '../my-list-page/my-list-page';
import MoviePage from '../movie-page/movie-page';
import AddReviewPage from '../add-review-page/add-review-page';
import PlayerPageWrapped from '../player-page/player-page';

const App = (props) => {
  const {cinemaName, promoMovie, movies, reviews} = props;

  return ( // movies
    <BrowserRouter basename='/'>
      <Switch>
        <Route exact path='/'>
          <MainPage cinemaName={cinemaName} promoMovie={promoMovie} />
        </Route>
        <Route exact path='/login'>
          <AuthPage cinemaName={cinemaName} />
        </Route>
        <Route exact path='/mylist'>
          <MyListPage cinemaName={cinemaName} movies={movies} />
        </Route>
        <Route exact path='/films/:id' render={(routeProps) => (
          <MoviePage cinemaName={cinemaName} movie={movies[0]} reviews={reviews}
            id={routeProps.match.params.id}
          />
        )}>
        </Route>
        <Route exact path='/films/:id/review' render={(routeProps) => (
          <AddReviewPage cinemaName={cinemaName} id={routeProps.match.params.id}
            movie={movies[0]}
          />
        )}>
        </Route>
        <Route exact path='/player/:id' render={(routeProps) => (
          <PlayerPageWrapped id={routeProps.match.params.id} movie={movies[0]} />
        )}>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  cinemaName: proptypes.cinemaName,
  promoMovie: proptypes.movie,
  movies: proptypes.movies,
  reviews: proptypes.reviews
};

export default App;
