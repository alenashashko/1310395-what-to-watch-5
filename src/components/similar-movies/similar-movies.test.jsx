import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import SimilarMovies from './similar-movies';
import {movies} from '../../test-mock-data/movie';
import {extend} from '../../utils';

it(`Should SimilarMovies render correctly`, () => {
  const movieToFindSimilar = extend({}, movies[0]);

  movieToFindSimilar.name = `Test`;
  movieToFindSimilar.id = `100`;

  const initialState = {
    DATA: {
      movies
    },
  };

  const tree = renderer
    .create(
        <Provider store={createStore((state = initialState) => state)}>
          <BrowserRouter>
            <SimilarMovies
              movie={movieToFindSimilar}
            />
          </BrowserRouter>
        </Provider>).toJSON();

  expect(tree).toMatchSnapshot();
});
