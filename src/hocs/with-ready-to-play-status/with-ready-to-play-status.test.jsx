import React from 'react';
import renderer from 'react-test-renderer';
import PropTypes from 'prop-types';

import withReadyToPlayStatus from './with-ready-to-play-status';
import {movie} from '../../test-mock-data/movie';

const MockComponent = (props) => {
  const {videoRef} = props;

  return (
    <div>
      <video ref={videoRef} />
    </div>
  );
};

MockComponent.propTypes = {
  videoRef: PropTypes.object.isRequired,
};

const MockComponentWrapped = withReadyToPlayStatus(MockComponent);

it(`withReadyToPlayStatus is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      videoSrc={movie.previewSrc}
    />
  ), {
    createNodeMock: () => {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
