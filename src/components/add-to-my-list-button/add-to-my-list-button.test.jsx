import React from 'react';
import renderer from 'react-test-renderer';

import {AddToMyListButton} from './add-to-my-list-button';
import {AuthorizationStatus} from '../../const';

const noop = () => {};

describe(`Should AddToMyListButton render correctly`, () => {
  it(`With favorite movie when user authorised`, () => {
    const tree = renderer
      .create(
          <AddToMyListButton
            id="1"
            isMovieFavorite={true}
            changeFavoriteMovieByIDAction={noop}
            redirectToAuthPage={noop}
            authorizationStatus={AuthorizationStatus.AUTH}
          />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With favorite movie when user unauthorised`, () => {
    const tree = renderer
      .create(
          <AddToMyListButton
            id="1"
            isMovieFavorite={true}
            changeFavoriteMovieByIDAction={noop}
            redirectToAuthPage={noop}
            authorizationStatus={AuthorizationStatus.NO_AUTH}
          />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With not favorite movie when user authorised`, () => {
    const tree = renderer
      .create(
          <AddToMyListButton
            id="1"
            isMovieFavorite={false}
            changeFavoriteMovieByIDAction={noop}
            redirectToAuthPage={noop}
            authorizationStatus={AuthorizationStatus.AUTH}
          />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With not favorite movie when user unauthorised`, () => {
    const tree = renderer
      .create(
          <AddToMyListButton
            id="1"
            isMovieFavorite={false}
            changeFavoriteMovieByIDAction={noop}
            redirectToAuthPage={noop}
            authorizationStatus={AuthorizationStatus.NO_AUTH}
          />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
