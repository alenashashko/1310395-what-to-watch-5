import React from 'react';
import renderer from 'react-test-renderer';

import {MovieReviews} from './movie-reviews';
import {reviews} from '../../test-mock-data/review';

const noop = () => {};

it(`Should MovieReviews render correctly`, () => {
  const tree = renderer
    .create(
        <MovieReviews
          id="1"
          comments={reviews}
          fetchCommentsListByIDAction={noop}
        />).toJSON();

  expect(tree).toMatchSnapshot();
});
