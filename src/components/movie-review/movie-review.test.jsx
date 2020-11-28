import React from 'react';
import renderer from 'react-test-renderer';

import MovieReview from './movie-review';
import {review} from '../../test-mock-data/review';

it(`Should MovieReview render correctly`, () => {
  const tree = renderer
    .create(
        <MovieReview
          review={review}
        />).toJSON();

  expect(tree).toMatchSnapshot();
});
