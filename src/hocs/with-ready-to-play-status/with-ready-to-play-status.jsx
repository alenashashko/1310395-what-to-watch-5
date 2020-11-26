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

      this._onCanPlayThrough = this._onCanPlayThrough.bind(this);
    }

    componentDidMount() {
      const video = this._videoRef.current;

      video.src = this.props.videoSrc;

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
      clearTimeout(this._timerId);
    }

    _onCanPlayThrough() {
      this.setState({
        isVideoReadyToPlay: true
      });
    }

    render() {
      const restProps = extend({}, this.props);
      delete restProps.videoSrc;

      return (
        <Component
          {...restProps}
          videoRef={this._videoRef}
          onCanPlayThrough={this._onCanPlayThrough}/>
      );
    }
  }

  WithReadyToPlayStatus.propTypes = {
    videoSrc: proptypes.src,
  };

  return WithReadyToPlayStatus;
};

export default withReadyToPlayStatus;

