import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';

import proptypes from '../../type';
import MainPage from '../main-page/main-page';
import AuthPage from '../auth-page/auth-page';
import MyListPage from '../my-list-page/my-list-page';
import MoviePage from '../movie-page/movie-page';
import AddReviewPage from '../add-review-page/add-review-page';
import PlayerPageWrapped from '../player-page/player-page';
import PrivateRoute from '../private-route/private-route';
import {AuthorizationStatus} from '../../const';
import {getAuthorizationStatus} from '../../store/selectors';

const App = (props) => {
  const {cinemaName, reviews, authorizationStatus} = props;

  if (authorizationStatus === AuthorizationStatus.UNKNOWN) {
    return null;
  }

  return (
    <BrowserRouter basename='/'>
      <Switch>
        <Route exact path='/'>
          <MainPage cinemaName={cinemaName} />
        </Route>
        <Route exact path='/login'>
          <AuthPage cinemaName={cinemaName} />
        </Route>
        <PrivateRoute
          exact
          path='/mylist'
          render={() => (
            <MyListPage cinemaName={cinemaName} />
          )}
        >
        </PrivateRoute>
        <Route exact path='/films/:id' render={(routeProps) => {
          const {id} = routeProps.match.params;

          return (
            <MoviePage
              id={id}
              key={id}
              cinemaName={cinemaName}
              reviews={reviews}
            />
          );
        }}>
        </Route>
        <PrivateRoute
          exact
          path='/films/:id/review'
          render={(routeProps) => (
            <AddReviewPage cinemaName={cinemaName} id={routeProps.match.params.id} />
          )}
        >
        </PrivateRoute>
        <Route exact path='/player/:id' render={(routeProps) => (
          <PlayerPageWrapped id={routeProps.match.params.id} />
        )}>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  cinemaName: proptypes.cinemaName,
  reviews: proptypes.reviews,
  authorizationStatus: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state)
});

export {App};
export default connect(mapStateToProps)(React.memo(App));
