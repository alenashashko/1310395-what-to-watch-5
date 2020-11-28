import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import MoviesList from './movies-list';
import {movies} from '../../test-mock-data/movie';

it(`Should MoviesList render correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <MoviesList
            movies={movies}
          />
        </BrowserRouter>).toJSON();

  expect(tree).toMatchSnapshot();
});
