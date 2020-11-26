import React, {PureComponent, createRef} from 'react';
import {exitFullscreen, launchIntoFullscreen} from '../../utils';

const withPlayerManager = (Component) => {
  class WithPlayerManager extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isFullscreenMode: false,
        isPlaying: false,
        playbackTime: 0,
        duration: 0
      };

      this._containerRef = createRef();
      this._videoRef = createRef();

      this.onFullScreenButtonClick = this.onFullScreenButtonClick.bind(this);
      this.onPlayButtonClick = this.onPlayButtonClick.bind(this);
      this.onPauseButtonClick = this.onPauseButtonClick.bind(this);
      this.onTimeUpdate = this.onTimeUpdate.bind(this);
      this.onProgressBarClick = this.onProgressBarClick.bind(this);
      this.onCanPlayThrough = this.onCanPlayThrough.bind(this);
      this.onVideoEnded = this.onVideoEnded.bind(this);
      this.destroy = this.destroy.bind(this);
    }

    componentDidMount() {
      this.setState({
        isPlaying: true
      });
    }

    onFullScreenButtonClick() {
      if (this.state.isFullscreenMode) {
        exitFullscreen();

        this.setState({isFullscreenMode: false});
      } else {
        launchIntoFullscreen(this._containerRef.current);

        this.setState({isFullscreenMode: true});
      }
    }

    onPlayButtonClick() {
      this._videoRef.current.play();

      this.setState({
        isPlaying: true
      });
    }

    onPauseButtonClick() {
      this._videoRef.current.pause();

      this.setState({
        isPlaying: false
      });
    }

    destroy() {
      const videoElement = this._videoRef.current;

      videoElement.pause();
      videoElement.removeAttribute(`src`);
      videoElement.load();
    }

    onTimeUpdate(evt) {
      this.setState({
        playbackTime: evt.target.currentTime
      });
    }

    onProgressBarClick(evt) {
      const {width, left} = evt.target.getBoundingClientRect();

      const currentTime = ((evt.clientX - left) / width) * this.state.duration;

      this._videoRef.current.currentTime = currentTime;

      this.setState({
        playbackTime: currentTime,
      });
    }

    onCanPlayThrough(evt) {
      this.setState({
        duration: evt.target.duration,
      });
    }

    onVideoEnded(evt) {
      const videoElement = evt.target;

      videoElement.load();

      this.setState({
        isPlaying: false,
        playbackTime: 0,
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          {...this.state}
          forwardContainerRef={this._containerRef}
          forwardVideoRef={this._videoRef}
          onFullScreenButtonClick={this.onFullScreenButtonClick}
          onPlayButtonClick={this.onPlayButtonClick}
          onPauseButtonClick={this.onPauseButtonClick}
          onTimeUpdate={this.onTimeUpdate}
          onProgressBarClick={this.onProgressBarClick}
          onCanPlayThrough={this.onCanPlayThrough}
          onVideoEnded={this.onVideoEnded}
          destroy={this.destroy}
        />
      );
    }
  }

  return WithPlayerManager;
};

export default withPlayerManager;
