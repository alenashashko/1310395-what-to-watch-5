import React from 'react';
import renderer from 'react-test-renderer';

import {AddToMyListButton} from './add-to-my-list-button';
import {AuthorizationStatus} from '../../const';

const noop = () => {};

describe(`Should AddToMyListButton render correctly`, () => {
  it(`With favorite movie and AUTH authorization status`, () => {
    const tree = renderer
      .create(
          <AddToMyListButton
            id={`1`}
            isMovieFavorite={true}
            changeFavoriteMovieByIDAction={noop}
            redirectToAuthPage={noop}
            authorizationStatus={AuthorizationStatus.AUTH}
          />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With favorite movie and NO_AUTH authorization status`, () => {
    const tree = renderer
      .create(
          <AddToMyListButton
            id={`1`}
            isMovieFavorite={true}
            changeFavoriteMovieByIDAction={noop}
            redirectToAuthPage={noop}
            authorizationStatus={AuthorizationStatus.NO_AUTH}
          />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With not favorite movie and AUTH authorization status`, () => {
    const tree = renderer
      .create(
          <AddToMyListButton
            id={`1`}
            isMovieFavorite={false}
            changeFavoriteMovieByIDAction={noop}
            redirectToAuthPage={noop}
            authorizationStatus={AuthorizationStatus.AUTH}
          />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With not favorite movie and NO_AUTH authorization status`, () => {
    const tree = renderer
      .create(
          <AddToMyListButton
            id={`1`}
            isMovieFavorite={false}
            changeFavoriteMovieByIDAction={noop}
            redirectToAuthPage={noop}
            authorizationStatus={AuthorizationStatus.NO_AUTH}
          />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With UNKNOWN authorization status`, () => {
    const tree = renderer
      .create(
          <AddToMyListButton
            id={`1`}
            isMovieFavorite={false}
            changeFavoriteMovieByIDAction={noop}
            redirectToAuthPage={noop}
            authorizationStatus={AuthorizationStatus.UNKNOWN}
          />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
