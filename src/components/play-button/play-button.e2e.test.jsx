import React from 'react';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {PlayButton} from './play-button';

configure({adapter: new Adapter()});

it(`should call history.push() with correct route`, () => {
  const mockedHistory = {
    push: jest.fn()
  };

  const wrapper = shallow(
      <PlayButton
        id="1"
        history={mockedHistory}
      />
  );

  wrapper.find(`button`).simulate(`click`);

  expect(mockedHistory.push).toHaveBeenCalledTimes(1);
  expect(mockedHistory.push).toHaveBeenNthCalledWith(1, `/player/1`);
});
