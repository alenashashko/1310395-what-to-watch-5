import React from 'react';
import renderer from 'react-test-renderer';
import browserHistory from '../../browser-history';

import {UserBlock} from './user-block';
import {AuthorizationStatus} from '../../const';

describe(`Should UserBlock render correctly`, () => {
  it(`with AUTH auth status`, () => {
    const tree = renderer
      .create(
          <UserBlock
            history={browserHistory}
            authorizationStatus={AuthorizationStatus.AUTH}
            avatarUrl={`https://assets.htmlacademy.ru/intensives/javascript-3/avatar/7.jpg`}
          />).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`with NO_AUTH auth status`, () => {
    const tree = renderer
      .create(
          <UserBlock
            history={browserHistory}
            authorizationStatus={AuthorizationStatus.NO_AUTH}
            avatarUrl={undefined}
          />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
