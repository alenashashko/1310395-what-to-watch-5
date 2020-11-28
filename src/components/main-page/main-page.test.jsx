import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import {MainPage} from './main-page';
import {movie} from '../../test-mock-data/movie';

jest.mock(`../user-block/user-block`, () => {
  const UserBlockMock = () => <p>UserBlockMock</p>;

  return {
    __esModule: true,
    default: UserBlockMock
  };
});

jest.mock(`../add-to-my-list-button/add-to-my-list-button`, () => {
  const AddToMyListButtonMock = () => <p>AddToMyListButtonMock</p>;

  return {
    __esModule: true,
    default: AddToMyListButtonMock
  };
});

jest.mock(`../genres-list/genres-list`, () => {
  const GenresListMock = () => <p>GenresListMock</p>;

  return {
    __esModule: true,
    default: GenresListMock
  };
});

jest.mock(`../main-page-movies-list/main-page-movies-list`, () => {
  const MainPageMoviesListMock = () => <p>MainPageMoviesListMock</p>;

  return {
    __esModule: true,
    default: MainPageMoviesListMock
  };
});

describe(`Should MainPage render correctly`, () => {
  it(`with loaded movie`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <MainPage
              promoMovie={movie}
              wasPromoLoaded={true}
            />
          </BrowserRouter>).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`without loaded movie`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <MainPage
              promoMovie={null}
              wasPromoLoaded={false}
            />
          </BrowserRouter>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
