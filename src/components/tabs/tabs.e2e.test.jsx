import React from 'react';

import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {movie} from '../../test-mock-data/movie';
import {TabType} from '../../const';

import {Tabs} from './tabs';

configure({adapter: new Adapter()});

it(`should call onTabClick on tab link click`, () => {
  const onTabClick = jest.fn();

  const wrapper = shallow(
      <Tabs
        activeTab={TabType.DETAILS}
        onTabClick={onTabClick}
        movie={movie}
      />
  );

  const clickEventMock = {preventDefault: () => {}};

  wrapper.find(`.movie-nav__link`).at(2).simulate(`click`, clickEventMock);

  expect(onTabClick).toHaveBeenCalledTimes(1);
  expect(onTabClick).toHaveBeenNthCalledWith(1, `Reviews`);
});
