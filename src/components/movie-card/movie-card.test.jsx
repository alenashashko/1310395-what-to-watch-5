import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import browserHistory from '../../browser-history';

import {MovieCard} from './movie-card';
import {movie} from '../../test-mock-data/movie';

const noop = () => {};

describe(`Should MovieCard render correctly`, () => {
  it(`with playing video`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <MovieCard
              movie={movie}
              isVideoPlaying={true}
              history={browserHistory}
              onMouseEnter={noop}
              onMouseLeave={noop}
            />
          </BrowserRouter>,
          {
            createNodeMock: () => {
              return {};
            }
          }).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`without playing video`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <MovieCard
              movie={movie}
              isVideoPlaying={false}
              history={browserHistory}
              onMouseEnter={noop}
              onMouseLeave={noop}
            />
          </BrowserRouter>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
