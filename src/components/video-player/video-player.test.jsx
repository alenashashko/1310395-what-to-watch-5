import React from 'react';
import renderer from 'react-test-renderer';

import {VideoPlayer} from './video-player';
import {movie} from '../../test-mock-data/movie';

const noop = () => {};

it(`Should VideoPlayer render correctly`, () => {
  const tree = renderer
    .create(
        <VideoPlayer
          videoRef={React.createRef()}
          pictureSrc={movie.picture}
          onCanPlayThrough={noop}
        />).toJSON();

  expect(tree).toMatchSnapshot();
});
