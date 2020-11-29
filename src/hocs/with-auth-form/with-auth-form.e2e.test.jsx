import React from 'react';
import PropTypes from 'prop-types';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import withAuthForm from './with-auth-form';


configure({adapter: new Adapter()});

const MockComponent = ({loginForwardRef, passwordForwardRef}) => (
  <form>
    <input type="email" ref={loginForwardRef} />
    <input type="password" ref={passwordForwardRef} />
  </form>
);

MockComponent.propTypes = {
  loginForwardRef: PropTypes.object.isRequired,
  passwordForwardRef: PropTypes.object.isRequired,
};

const MockComponentWrapped = withAuthForm(MockComponent);

it(`should check if changed email is not valid`, () => {
  const wrapper = mount((
    <Provider store={createStore((state = {}) => state)}>
      <MockComponentWrapped />
    </Provider>
  ));

  const getWrappedComponentProps = () => wrapper.find(`MockComponent`).props();

  wrapper.find(`input[type="email"]`).instance().value = `foo`;

  getWrappedComponentProps().handleEmailInput();

  wrapper.update();

  expect(getWrappedComponentProps().isValidEmail).toBe(false);
});

it(`should check if changed email is valid`, () => {
  const wrapper = mount((
    <Provider store={createStore((state = {}) => state)}>
      <MockComponentWrapped />
    </Provider>
  ));

  const getWrappedComponentProps = () => wrapper.find(`MockComponent`).props();

  wrapper.find(`input[type="email"]`).instance().value = `alena@mail.com`;

  getWrappedComponentProps().handleEmailInput();

  wrapper.update();

  expect(getWrappedComponentProps().isValidEmail).toBe(true);
});
