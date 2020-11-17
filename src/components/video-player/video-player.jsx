import React from 'react';
import PropTypes from 'prop-types';

import proptypes from '../../type';
import withReadyToPlayStatus from '../../hocs/with-readiness-status/with-readiness-status';

const VideoPlayer = (props) => {
  const {videoRef, pictureSrc} = props;

  return (
    <video width="280" height="175"
      ref={videoRef}
      muted
      poster={pictureSrc}>
    </video>
  );
};

VideoPlayer.propTypes = {
  videoRef: PropTypes.object.isRequired,
  pictureSrc: proptypes.src,

};

export default withReadyToPlayStatus(VideoPlayer);
