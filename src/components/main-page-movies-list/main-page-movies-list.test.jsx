import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import {MainPageMoviesList} from './main-page-movies-list';
import {DEFAULT_MOVIES_FILTER_VALUE} from '../../const';
import {movies} from '../../test-mock-data/movie';

const visibleMovies = movies.slice(0, 1);

const noop = () => {};

describe(`Should MainPageMoviesList render correctly`, () => {
  it(`when movies.length and visibleMovies.length are equal`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <MainPageMoviesList
              movies={movies}
              visibleMovies={movies}
              onButtonClick={noop}
              resetPageNumber={noop}
              currentGenre={DEFAULT_MOVIES_FILTER_VALUE}
            />
          </BrowserRouter>).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`when movies.length more than visibleMovies.length`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <MainPageMoviesList
              movies={movies}
              visibleMovies={visibleMovies}
              onButtonClick={noop}
              resetPageNumber={noop}
              currentGenre={DEFAULT_MOVIES_FILTER_VALUE}
            />
          </BrowserRouter>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
