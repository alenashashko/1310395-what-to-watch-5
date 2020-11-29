import React from 'react';
import renderer from 'react-test-renderer';

import {App} from './app';
import {AuthorizationStatus} from '../../const';

jest.mock(`../main-page/main-page`, () => {
  const MainPageMock = () => <p>MainPageMock</p>;

  return {
    __esModule: true,
    default: MainPageMock
  };
});

describe(`Should App render correctly`, () => {
  it(`when user authorised`, () => {
    const tree = renderer
      .create(
          <App
            authorizationStatus={AuthorizationStatus.AUTH}
          />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`when user unauthorised`, () => {
    const tree = renderer
      .create(
          <App
            authorizationStatus={AuthorizationStatus.NO_AUTH}
          />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With UNKNOWN authorization status`, () => {
    const tree = renderer
      .create(
          <App
            authorizationStatus={AuthorizationStatus.UNKNOWN}
          />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
