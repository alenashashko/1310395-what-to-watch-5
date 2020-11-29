import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import {AuthPage} from './auth-page';
import {AuthorizationStatus} from '../../const';

const noop = () => {};

describe(`Should AuthPage render correctly`, () => {
  it(`when user authorised with auth error and invalid email`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <AuthPage
              id="1"
              isMovieFavorite={true}
              changeFavoriteMovieByIDAction={noop}
              redirectToAuthPage={noop}
              redirectToMainPage={noop}
              authorizationStatus={AuthorizationStatus.AUTH}
              isAuthError={true}
              loginForwardRef={React.createRef()}
              passwordForwardRef={React.createRef()}
              isValidEmail={false}
              onEmailInput={noop}
              onSubmit={noop}
            />
          </BrowserRouter>).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`when user unauthorised without auth error and with valid email`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <AuthPage
              id="1"
              isMovieFavorite={true}
              changeFavoriteMovieByIDAction={noop}
              redirectToAuthPage={noop}
              redirectToMainPage={noop}
              authorizationStatus={AuthorizationStatus.NO_AUTH}
              isAuthError={false}
              loginForwardRef={React.createRef()}
              passwordForwardRef={React.createRef()}
              isValidEmail={true}
              onEmailInput={noop}
              onSubmit={noop}
            />
          </BrowserRouter>).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`when user unauthorised, with auth error and invalid email`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <AuthPage
              id="1"
              isMovieFavorite={true}
              changeFavoriteMovieByIDAction={noop}
              redirectToAuthPage={noop}
              redirectToMainPage={noop}
              authorizationStatus={AuthorizationStatus.NO_AUTH}
              isAuthError={true}
              loginForwardRef={React.createRef()}
              passwordForwardRef={React.createRef()}
              isValidEmail={false}
              onEmailInput={noop}
              onSubmit={noop}
            />
          </BrowserRouter>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
