import React from 'react';
import renderer from 'react-test-renderer';

import Logo from './logo';
import {CLASSNAME_FOR_LIGHT_LOGO_LINK} from '../../const';

describe(`Should Logo render correctly`, () => {
  it(`with className prop`, () => {
    const tree = renderer
      .create(
          <Logo
            className={CLASSNAME_FOR_LIGHT_LOGO_LINK}
          />).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`without className prop`, () => {
    const tree = renderer
      .create(
          <Logo />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
