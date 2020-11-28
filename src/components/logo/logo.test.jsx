import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import Logo from './logo';
import {CLASSNAME_FOR_LIGHT_LOGO_LINK} from '../../const';

describe(`Should Logo render correctly`, () => {
  it(`with className prop`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <Logo
              className={CLASSNAME_FOR_LIGHT_LOGO_LINK}
            />
          </BrowserRouter>).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`without className prop`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <Logo />
          </BrowserRouter>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
