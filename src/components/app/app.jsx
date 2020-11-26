import React from 'react';
import {Switch, Route, Router} from 'react-router-dom';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';

import MainPageWrapped from '../main-page/main-page';
import AuthPage from '../auth-page/auth-page';
import MyListPage from '../my-list-page/my-list-page';
import MoviePage from '../movie-page/movie-page';
import AddReviewPage from '../add-review-page/add-review-page';
import PlayerPageWrapped from '../player-page/player-page';
import PrivateRoute from '../private-route/private-route';
import {AuthorizationStatus, AppRoute} from '../../const';
import {getAuthorizationStatus} from '../../store/selectors';
import browserHistory from '../../browser-history';

const App = (props) => {
  const {authorizationStatus} = props;

  if (authorizationStatus === AuthorizationStatus.UNKNOWN) {
    return null;
  }

  return (
    <Router history={browserHistory} basename={AppRoute.ROOT}>
      <Switch>
        <Route exact path={AppRoute.ROOT} >
          <MainPageWrapped />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <AuthPage />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MY_LIST}
          render={() => (
            <MyListPage />
          )}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.MOVIE} render={(routeProps) => {
          const {id} = routeProps.match.params;

          return (
            <MoviePage
              id={id}
              key={id}
            />
          );
        }}>
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.REVIEW}
          render={(routeProps) => {
            return (
              <AddReviewPage
                id={routeProps.match.params.id}
              />
            );
          }}>
        </PrivateRoute>
        <Route exact path={AppRoute.PLAYER} render={(routeProps) => (
          <PlayerPageWrapped id={routeProps.match.params.id} />
        )}>
        </Route>
      </Switch>
    </Router>
  );
};

App.propTypes = {
  authorizationStatus: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state)
});

export {App};
export default connect(mapStateToProps)(React.memo(App));
