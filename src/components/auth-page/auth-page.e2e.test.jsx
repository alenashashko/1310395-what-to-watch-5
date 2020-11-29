import React from 'react';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {AuthPage} from './auth-page';
import {AuthorizationStatus} from '../../const';

configure({adapter: new Adapter()});

const mockedRef = {current: {}};

it(`should call onEmailInput on email input change`, () => {
  const onEmailInput = jest.fn();

  const wrapper = shallow(
      <AuthPage
        redirectToMainPage={jest.fn()}
        authorizationStatus={AuthorizationStatus.NO_AUTH}
        isAuthError={false}
        loginForwardRef={mockedRef}
        passwordForwardRef={mockedRef}
        isValidEmail={true}
        onEmailInput={onEmailInput}
        onSubmit={jest.fn()}
      />
  );

  const emailInput = wrapper.find(`input.sign-in__input[type="email"]`);

  const inputEvent = {target: {value: `text`}};

  emailInput.simulate(`input`, inputEvent);

  expect(onEmailInput).toHaveBeenCalledTimes(1);
  expect(onEmailInput).toHaveBeenNthCalledWith(1, inputEvent);
});

it(`should call onSubmit on form submit`, () => {
  const onSubmit = jest.fn();

  const wrapper = shallow(
      <AuthPage
        redirectToMainPage={jest.fn()}
        authorizationStatus={AuthorizationStatus.NO_AUTH}
        isAuthError={false}
        loginForwardRef={mockedRef}
        passwordForwardRef={mockedRef}
        isValidEmail={true}
        onEmailInput={jest.fn()}
        onSubmit={onSubmit}
      />
  );

  const emailInput = wrapper.find(`form`);

  emailInput.simulate(`submit`);

  expect(onSubmit).toHaveBeenCalledTimes(1);
});

it(`should call onSubmit on form submit`, () => {
  const redirectToMainPage = jest.fn();

  shallow(
      <AuthPage
        redirectToMainPage={redirectToMainPage}
        authorizationStatus={AuthorizationStatus.AUTH}
        isAuthError={false}
        loginForwardRef={mockedRef}
        passwordForwardRef={mockedRef}
        isValidEmail={true}
        onEmailInput={jest.fn()}
        onSubmit={jest.fn()}
      />
  );

  expect(redirectToMainPage).toHaveBeenCalledTimes(1);
});
