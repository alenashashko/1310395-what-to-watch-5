import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import {AuthPage} from './auth-page';
import {AuthorizationStatus} from '../../const';

const noop = () => {};

describe(`Should AuthPage render correctly`, () => {
  it(`With AUTH authorization status, with auth error and invalid email`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <AuthPage
              id={`1`}
              isMovieFavorite={true}
              changeFavoriteMovieByIDAction={noop}
              redirectToAuthPage={noop}
              redirectToMainPage={noop}
              authorizationStatus={AuthorizationStatus.AUTH}
              isAuthError={true}
              loginForwardRef={React.createRef()}
              passwordForwardRef={React.createRef()}
              isValidEmail={false}
              handleEmailInput={noop}
              handleSubmit={noop}
            />
          </BrowserRouter>).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With NO_AUTH authorization status, without auth error and with valid email`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <AuthPage
              id={`1`}
              isMovieFavorite={true}
              changeFavoriteMovieByIDAction={noop}
              redirectToAuthPage={noop}
              redirectToMainPage={noop}
              authorizationStatus={AuthorizationStatus.NO_AUTH}
              isAuthError={false}
              loginForwardRef={React.createRef()}
              passwordForwardRef={React.createRef()}
              isValidEmail={true}
              handleEmailInput={noop}
              handleSubmit={noop}
            />
          </BrowserRouter>).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With NO_AUTH authorization status, with auth error and invalid email`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <AuthPage
              id={`1`}
              isMovieFavorite={true}
              changeFavoriteMovieByIDAction={noop}
              redirectToAuthPage={noop}
              redirectToMainPage={noop}
              authorizationStatus={AuthorizationStatus.NO_AUTH}
              isAuthError={true}
              loginForwardRef={React.createRef()}
              passwordForwardRef={React.createRef()}
              isValidEmail={false}
              handleEmailInput={noop}
              handleSubmit={noop}
            />
          </BrowserRouter>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
