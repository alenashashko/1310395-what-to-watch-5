import React from 'react';
import PropTypes from 'prop-types';

import proptypes from '../../type';
import withReadyToPlayStatus from '../../hocs/with-ready-to-play-status/with-ready-to-play-status';

const VideoPlayer = (props) => {
  const {videoRef, pictureSrc, onCanPlayThrough} = props;

  return (
    <video width="280" height="175"
      ref={videoRef}
      onCanPlayThrough={onCanPlayThrough}
      muted
      poster={pictureSrc}>
    </video>
  );
};

VideoPlayer.propTypes = {
  videoRef: PropTypes.object.isRequired,
  pictureSrc: proptypes.src,
  onCanPlayThrough: PropTypes.func.isRequired,
};

export {VideoPlayer};
export default withReadyToPlayStatus(VideoPlayer);
