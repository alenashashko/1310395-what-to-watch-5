import React from 'react';
import renderer from 'react-test-renderer';

import MovieDetails from './movie-details';
import {movie} from '../../test-mock-data/movie';

it(`Should MovieDetails render correctly`, () => {
  const tree = renderer
    .create(
        <MovieDetails
          movie={movie}
        />).toJSON();

  expect(tree).toMatchSnapshot();
});
