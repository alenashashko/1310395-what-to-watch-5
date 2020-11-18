import React, {PureComponent, createRef} from 'react';

import proptypes from '../../type';
import {extend} from '../../utils';

const withReadyToPlayStatus = (Component) => {
  class WithReadyToPlayStatus extends PureComponent {
    constructor(props) {
      super(props);

      this._timerId = null;
      this._videoRef = createRef();

      this.state = {
        isDelayCompleted: false,
        isVideoReadyToPlay: false
      };
    }

    componentDidMount() {
      const video = this._videoRef.current;

      video.src = this.props.videoSrc;

      video.oncanplaythrough = () => {
        this.setState({
          isVideoReadyToPlay: true
        });
      };

      this._timerId = setTimeout(() => this.setState({
        isDelayCompleted: true
      }), 1000);
    }

    componentDidUpdate() {
      const video = this._videoRef.current;

      if (this.state.isDelayCompleted && this.state.isVideoReadyToPlay) {
        video.play();
      }
    }

    componentWillUnmount() {
      const video = this._videoRef.current;

      video.oncanplaythrough = null;

      clearTimeout(this._timerId);
    }

    render() {
      const restProps = extend({}, this.props);
      delete restProps.videoSrc;

      return (
        <Component
          {...restProps}
          videoRef={this._videoRef}/>
      );
    }
  }

  WithReadyToPlayStatus.propTypes = {
    videoSrc: proptypes.src,
  };

  return WithReadyToPlayStatus;
};

export default withReadyToPlayStatus;

