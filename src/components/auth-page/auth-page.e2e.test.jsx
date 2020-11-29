import React from 'react';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {AuthPage} from './auth-page';
import {AuthorizationStatus} from '../../const';

configure({adapter: new Adapter()});

const mockedRef = {current: {}};

it(`should call handleEmailInput on email input change`, () => {
  const handleEmailInput = jest.fn();

  const wrapper = shallow(
      <AuthPage
        redirectToMainPage={jest.fn()}
        authorizationStatus={AuthorizationStatus.NO_AUTH}
        isAuthError={false}
        loginForwardRef={mockedRef}
        passwordForwardRef={mockedRef}
        isValidEmail={true}
        handleEmailInput={handleEmailInput}
        handleSubmit={jest.fn()}
      />
  );

  const emailInput = wrapper.find(`input.sign-in__input[type="email"]`);

  const inputEvent = {target: {value: `text`}};

  emailInput.simulate(`input`, inputEvent);

  expect(handleEmailInput).toHaveBeenCalledTimes(1);
  expect(handleEmailInput).toHaveBeenNthCalledWith(1, inputEvent);
});

it(`should call handleSubmit on form submit`, () => {
  const handleSubmit = jest.fn();

  const wrapper = shallow(
      <AuthPage
        redirectToMainPage={jest.fn()}
        authorizationStatus={AuthorizationStatus.NO_AUTH}
        isAuthError={false}
        loginForwardRef={mockedRef}
        passwordForwardRef={mockedRef}
        isValidEmail={true}
        handleEmailInput={jest.fn()}
        handleSubmit={handleSubmit}
      />
  );

  const emailInput = wrapper.find(`form`);

  emailInput.simulate(`submit`);

  expect(handleSubmit).toHaveBeenCalledTimes(1);
});

it(`should call handleSubmit on form submit`, () => {
  const redirectToMainPage = jest.fn();

  shallow(
      <AuthPage
        redirectToMainPage={redirectToMainPage}
        authorizationStatus={AuthorizationStatus.AUTH}
        isAuthError={false}
        loginForwardRef={mockedRef}
        passwordForwardRef={mockedRef}
        isValidEmail={true}
        handleEmailInput={jest.fn()}
        handleSubmit={jest.fn()}
      />
  );

  expect(redirectToMainPage).toHaveBeenCalledTimes(1);
});
