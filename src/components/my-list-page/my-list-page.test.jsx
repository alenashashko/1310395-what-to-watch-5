import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import {MyListPage} from './my-list-page';
import {favoriteMovies} from '../../test-mock-data/movie';

const noop = () => {};

jest.mock(`../user-block/user-block`, () => {
  const UserBlockMock = () => <p>UserBlockMock</p>;

  return {
    __esModule: true,
    default: UserBlockMock
  };
});

describe(`Should MyListPage render correctly`, () => {
  it(`with favoriteMovies`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <MyListPage
              favoriteMovies={favoriteMovies}
              fetchFavoriteMoviesListAction={noop}
            />
          </BrowserRouter>).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`witH empty favoriteMovies array`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <MyListPage
              favoriteMovies={[]}
              fetchFavoriteMoviesListAction={noop}
            />
          </BrowserRouter>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
