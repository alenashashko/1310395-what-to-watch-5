import React from 'react';

import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {UserBlock} from './user-block';
import {AppRoute, AuthorizationStatus} from '../../const';

configure({adapter: new Adapter()});

it(`should call history.push() with correct params`, () => {
  const historyMock = {push: jest.fn()};

  const wrapper = shallow(
      <UserBlock
        history={historyMock}
        authorizationStatus={AuthorizationStatus.AUTH}
        avatarUrl="/url"
      />
  );

  wrapper.find(`.user-block__avatar`).simulate(`click`);

  expect(historyMock.push).toHaveBeenCalledTimes(1);
  expect(historyMock.push).toHaveBeenNthCalledWith(1, AppRoute.MY_LIST);
});
