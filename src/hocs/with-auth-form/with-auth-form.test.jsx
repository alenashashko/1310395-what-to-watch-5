import React from 'react';
import renderer from 'react-test-renderer';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import withAuthForm from './with-auth-form';

const noop = () => {};

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

const MockComponentWrapped = withAuthForm(MockComponent);

it(`withAuthForm is rendered correctly`, () => {
  const tree = renderer.create(
      <Provider store={createStore((state = {}) => state)}>
        <MockComponentWrapped
          onSubmit={noop}
        >
          <React.Fragment />
        </MockComponentWrapped>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
