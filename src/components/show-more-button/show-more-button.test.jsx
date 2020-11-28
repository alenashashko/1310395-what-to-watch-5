import React from 'react';
import renderer from 'react-test-renderer';

import ShowMoreButton from './show-more-button';

const noop = () => {};

it(`Should ShowMoreButton render correctly`, () => {
  const tree = renderer
    .create(
        <ShowMoreButton
          onButtonClick={noop}
        />).toJSON();

  expect(tree).toMatchSnapshot();
});

