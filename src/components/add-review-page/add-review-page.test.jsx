import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import {AddReviewPage} from './add-review-page';
import {movie} from '../../test-mock-data/movie';

const noop = () => {};

jest.mock(`../user-block/user-block`, () => {
  const UserBlockMock = () => <p>UserBlockMock</p>;

  return {
    __esModule: true,
    default: UserBlockMock
  };
});

jest.mock(`../review-form/review-form`, () => {
  const ReviewFormMock = () => <p>ReviewFormMock</p>;

  return {
    __esModule: true,
    default: ReviewFormMock
  };
});

it(`Should AddReviewPage render correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <AddReviewPage
            id={`1`}
            movie={movie}
            fetchMovieByIDAction={noop}
          />
        </BrowserRouter>).toJSON();

  expect(tree).toMatchSnapshot();
});
