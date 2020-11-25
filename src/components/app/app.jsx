import React from 'react';
import {Switch, Route, Router} from 'react-router-dom';
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
import {AuthorizationStatus, AppRoute} from '../../const';
import {getAuthorizationStatus} from '../../store/selectors';
import browserHistory from '../../browser-history';

const App = (props) => {
  const {cinemaName, authorizationStatus} = props;

  if (authorizationStatus === AuthorizationStatus.UNKNOWN) {
    return null;
  }

  return (
    <Router history={browserHistory} basename={AppRoute.ROOT}>
      <Switch>
        <Route exact path={AppRoute.ROOT} render={() => {
          return (
            <MainPage
              cinemaName={cinemaName}
            />
          );
        }}>
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <AuthPage cinemaName={cinemaName} />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MY_LIST}
          render={() => (
            <MyListPage cinemaName={cinemaName} />
          )}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.MOVIE} render={(routeProps) => {
          const {id} = routeProps.match.params;

          return (
            <MoviePage
              id={id}
              key={id}
              cinemaName={cinemaName}
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
                cinemaName={cinemaName}
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
  cinemaName: proptypes.cinemaName,
  authorizationStatus: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state)
});

export {App};
export default connect(mapStateToProps)(React.memo(App));
