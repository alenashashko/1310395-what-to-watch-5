import React from 'react';
import renderer from 'react-test-renderer';

import MovieOverview from './movie-overview';
import {movie} from '../../test-mock-data/movie';

it(`Should MovieOverview render correctly`, () => {
  const tree = renderer
    .create(
        <MovieOverview
          movie={movie}
        />).toJSON();

  expect(tree).toMatchSnapshot();
});
