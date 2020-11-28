import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import {PrivateRoute} from './private-route';
import {AuthorizationStatus, AppRoute} from '../../const';

const noop = () => {};

describe(`Should PrivateRoute render correctly`, () => {
  it(`with AUTH auth status`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.AUTH}
              path={AppRoute.MY_LIST}
              exact={true}
              render={noop}
            />
          </BrowserRouter>).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`with NO_AUTH auth status`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NO_AUTH}
              path={AppRoute.MY_LIST}
              exact={true}
              render={noop}
            />
          </BrowserRouter>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
