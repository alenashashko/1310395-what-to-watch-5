import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import browserHistory from '../../browser-history';

import PlayButton from './play-button';

it(`Should PlayButton render correctly)`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <PlayButton
            id={`1`}
            history={browserHistory}
          />
        </BrowserRouter>).toJSON();

  expect(tree).toMatchSnapshot();
});
