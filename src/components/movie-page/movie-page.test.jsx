import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import {MoviePage} from './movie-page';
import {movie} from '../../test-mock-data/movie';
import {AuthorizationStatus} from '../../const';

const noop = () => {};

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

jest.mock(`../similar-movies/similar-movies`, () => {
  const SimilarMoviesMock = () => <p>SimilarMoviesMock</p>;

  return {
    __esModule: true,
    default: SimilarMoviesMock
  };
});

describe(`Should MoviePage render correctly`, () => {
  it(`with AUTH auth status`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <MoviePage
              movie={movie}
              id={`1`}
              fetchMovieByIDAction={noop}
              authorizationStatus={AuthorizationStatus.AUTH}
              changeFavoriteMovieByIDAction={noop}
            />
          </BrowserRouter>).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`with NO_AUTH auth status`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <MoviePage
              movie={movie}
              id={`1`}
              fetchMovieByIDAction={noop}
              authorizationStatus={AuthorizationStatus.NO_AUTH}
              changeFavoriteMovieByIDAction={noop}
            />
          </BrowserRouter>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
