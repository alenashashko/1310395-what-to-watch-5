import React from 'react';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import browserHistory from '../../browser-history';

import {movie} from '../../test-mock-data/movie';

import {MovieCard} from './movie-card';

configure({adapter: new Adapter()});

it(`should call onMouseEnter on mouse enter article element`, () => {
  const onMouseEnter = jest.fn();

  const wrapper = shallow(
      <MovieCard
        movie={movie}
        history={browserHistory}
        isVideoPlaying={false}
        onMouseEnter={onMouseEnter}
        onMouseLeave={jest.fn()}
      />
  );

  const articleElement = wrapper.find(`article`);

  articleElement.simulate(`mouseenter`);

  expect(onMouseEnter).toHaveBeenCalledTimes(1);
});

it(`should call onMouseLeave on mouse leaving article element`, () => {
  const onMouseLeave = jest.fn();

  const wrapper = shallow(
      <MovieCard
        movie={movie}
        history={browserHistory}
        isVideoPlaying={false}
        onMouseEnter={jest.fn()}
        onMouseLeave={onMouseLeave}
      />
  );

  const articleElement = wrapper.find(`article`);

  articleElement.simulate(`mouseleave`);

  expect(onMouseLeave).toHaveBeenCalledTimes(1);
});
