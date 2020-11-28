import React from 'react';
import renderer from 'react-test-renderer';
import PropTypes from 'prop-types';

import withPageNumber from './with-page-number';
import {movies} from '../../test-mock-data/movie';

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

const MockComponentWrapped = withPageNumber(MockComponent);

it(`withPageNumber is rendered correctly`, () => {
  const tree = renderer.create(
      <MockComponentWrapped
        movies={movies}
      >
        <React.Fragment />
      </MockComponentWrapped>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
