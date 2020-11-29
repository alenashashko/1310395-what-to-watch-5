import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import {PrivateRoute} from './private-route';
import {AuthorizationStatus, AppRoute} from '../../const';

describe(`Should PrivateRoute render correctly`, () => {
  it(`when user authorised`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.AUTH}
              path={AppRoute.ROOT}
              exact={true}
              render={() => <div>private div</div>}
            />
          </BrowserRouter>).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`when user unauthorised`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NO_AUTH}
              path={AppRoute.ROOT}
              exact={true}
              render={() => <div>private div</div>}
            />
          </BrowserRouter>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
