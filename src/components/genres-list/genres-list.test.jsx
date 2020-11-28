import React from 'react';
import renderer from 'react-test-renderer';

import {GenresList} from './genres-list';
import {genres, genre} from '../../test-mock-data/movie';

const noop = () => {};

it(`Should GenresList render correctly`, () => {
  const tree = renderer
    .create(
        <GenresList
          genres={genres}
          currentGenre={genre}
          changeGenreAction={noop}
        />).toJSON();

  expect(tree).toMatchSnapshot();
});
