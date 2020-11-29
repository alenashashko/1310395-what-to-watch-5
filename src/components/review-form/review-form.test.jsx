import React from 'react';
import renderer from 'react-test-renderer';

import {ReviewForm} from './review-form';
import {review} from '../../test-mock-data/review';
import {movie} from '../../test-mock-data/movie';

const noop = () => {};

describe(`Should ReviewForm render correctly`, () => {
  it(`with save error text`, () => {
    const tree = renderer
      .create(
          <ReviewForm
            movieBackgroundColor={movie.backgroundColor}
            ratingValue={4}
            reviewText={review.text}
            onFormSubmit={noop}
            onTextChange={noop}
            onRatingChange={noop}
            saveErrorText="Lorem ipsum"
            isLoading={false}
          />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`without save error text`, () => {
    const tree = renderer
      .create(
          <ReviewForm
            movieBackgroundColor={movie.backgroundColor}
            ratingValue={4}
            reviewText={review.text}
            onFormSubmit={noop}
            onTextChange={noop}
            onRatingChange={noop}
            saveErrorText={null}
            isLoading={false}
          />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`with loading status`, () => {
    const tree = renderer
      .create(
          <ReviewForm
            movieBackgroundColor={movie.backgroundColor}
            ratingValue={4}
            reviewText={review.text}
            onFormSubmit={noop}
            onTextChange={noop}
            onRatingChange={noop}
            saveErrorText={null}
            isLoading={true}
          />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
