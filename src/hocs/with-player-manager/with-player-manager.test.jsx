import React from 'react';
import renderer from 'react-test-renderer';
import PropTypes from 'prop-types';

import withPlayerManager from './with-player-manager';

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

const MockComponentWrapped = withPlayerManager(MockComponent);

it(`withPlayerManager is rendered correctly`, () => {
  const tree = renderer.create(
      <MockComponentWrapped>
        <React.Fragment />
      </MockComponentWrapped>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
