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

      this._onFullScreenButtonClick = this._onFullScreenButtonClick.bind(this);
      this._onPlayButtonClick = this._onPlayButtonClick.bind(this);
      this._onPauseButtonClick = this._onPauseButtonClick.bind(this);
      this._onTimeUpdate = this._onTimeUpdate.bind(this);
      this._onProgressBarClick = this._onProgressBarClick.bind(this);
      this._onCanPlayThrough = this._onCanPlayThrough.bind(this);
      this._onVideoEnded = this._onVideoEnded.bind(this);
      this._destroy = this._destroy.bind(this);
    }

    componentDidMount() {
      this.setState({
        isPlaying: true
      });
    }

    _onFullScreenButtonClick() {
      if (this.state.isFullscreenMode) {
        exitFullscreen();

        this.setState({isFullscreenMode: false});
      } else {
        launchIntoFullscreen(this._containerRef.current);

        this.setState({isFullscreenMode: true});
      }
    }

    _onPlayButtonClick() {
      this._videoRef.current.play();

      this.setState({
        isPlaying: true
      });
    }

    _onPauseButtonClick() {
      this._videoRef.current.pause();

      this.setState({
        isPlaying: false
      });
    }

    _destroy() {
      const videoElement = this._videoRef.current;

      videoElement.pause();
      videoElement.removeAttribute(`src`);
      videoElement.load();
    }

    _onTimeUpdate(evt) {
      this.setState({
        playbackTime: evt.target.currentTime
      });
    }

    _onProgressBarClick(evt) {
      const {width, left} = evt.target.getBoundingClientRect();

      const currentTime = ((evt.clientX - left) / width) * this.state.duration;

      this._videoRef.current.currentTime = currentTime;

      this.setState({
        playbackTime: currentTime,
      });
    }

    _onCanPlayThrough(evt) {
      this.setState({
        duration: evt.target.duration,
      });
    }

    _onVideoEnded(evt) {
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
          containerForwardRef={this._containerRef}
          videoForwardRef={this._videoRef}
          onFullScreenButtonClick={this._onFullScreenButtonClick}
          onPlayButtonClick={this._onPlayButtonClick}
          onPauseButtonClick={this._onPauseButtonClick}
          onTimeUpdate={this._onTimeUpdate}
          onProgressBarClick={this._onProgressBarClick}
          onCanPlayThrough={this._onCanPlayThrough}
          onVideoEnded={this._onVideoEnded}
          destroy={this._destroy}
        />
      );
    }
  }

  return WithPlayerManager;
};

export default withPlayerManager;
