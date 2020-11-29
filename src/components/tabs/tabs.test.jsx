import React from 'react';
import renderer from 'react-test-renderer';

import {Tabs} from './tabs';
import {movie} from '../../test-mock-data/movie';
import {TabType} from '../../const';

const noop = () => {};

jest.mock(`../movie-reviews/movie-reviews`, () => {
  const MovieReviewsMock = () => <p>MovieReviewsMock</p>;

  return {
    __esModule: true,
    default: MovieReviewsMock
  };
});

describe(`Should Tabs render correctly`, () => {
  it(`with DETAILS active tab`, () => {
    const tree = renderer
      .create(
          <Tabs
            activeTab={TabType.DETAILS}
            onTabClick={noop}
            movie={movie}
          />).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`with OVERVIEW active tab`, () => {
    const tree = renderer
      .create(
          <Tabs
            activeTab={TabType.OVERVIEW}
            onTabClick={noop}
            movie={movie}
          />).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`with REVIEWS active tab`, () => {
    const tree = renderer
      .create(
          <Tabs
            activeTab={TabType.REVIEWS}
            onTabClick={noop}
            movie={movie}
          />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
