import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import Footer from './footer';
import {movie} from '../../test-mock-data/movie';

const noop = () => {};

it(`Should Footer render correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <Footer
            id={`1`}
            movie={movie}
            fetchMovieByIDAction={noop}
          />
        </BrowserRouter>).toJSON();

  expect(tree).toMatchSnapshot();
});
