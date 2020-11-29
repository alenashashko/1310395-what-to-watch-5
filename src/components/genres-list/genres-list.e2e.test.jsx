import React from 'react';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {genres} from '../../test-mock-data/movie';

import {GenresList} from './genres-list';

configure({adapter: new Adapter()});

it(`should call changeGenreAction on genre link click`, () => {
  const changeGenreAction = jest.fn();

  const wrapper = shallow(
      <GenresList
        genres={genres}
        currentGenre="All genres"
        changeGenreAction={changeGenreAction}
      />
  );

  const genresItems = wrapper.find(`.catalog__genres-item`);

  const clickEvent = {preventDefault: () => {}};

  genresItems.at(0).find(`a`).simulate(`click`, clickEvent);

  expect(changeGenreAction).toHaveBeenCalledTimes(1);
  expect(changeGenreAction).toHaveBeenNthCalledWith(1, `Comedies`);
});
