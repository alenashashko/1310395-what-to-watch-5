import React, {createRef} from 'react';
import {withRouter} from 'react-router';

import proptypes from '../../type';
import {formatMovieDuration} from '../../utils';

class PlayerPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
      playbackTime: 0,
      duration: 0
    };

    this._videoRef = createRef();

    this._onFullscreenClick = this._onFullscreenClick.bind(this);
    this._onPlayClick = this._onPlayClick.bind(this);
    this._onPauseClick = this._onPauseClick.bind(this);
    this._onExitClick = this._onExitClick.bind(this);
    this._onTimeUpdate = this._onTimeUpdate.bind(this);
    this._onProgressClick = this._onProgressClick.bind(this);
    this._onCanPlayThrough = this._onCanPlayThrough.bind(this);
    this._onEnded = this._onEnded.bind(this);
  }

  _onFullscreenClick() {
    this._videoRef.current.requestFullscreen();
  }

  _onPlayClick() {
    this._videoRef.current.play();

    this.setState({
      isPlaying: true
    });
  }

  _onPauseClick() {
    this._videoRef.current.pause();

    this.setState({
      isPlaying: false
    });
  }

  _onExitClick() {
    const {movie, history} = this.props;

    const videoElement = this._videoRef.current;

    videoElement.pause();
    videoElement.removeAttribute(`src`);
    videoElement.load();

    history.push(`/films/${movie.id}`);
  }

  _onTimeUpdate(evt) {
    this.setState({
      playbackTime: evt.target.currentTime
    });
  }

  _onProgressClick(evt) {
    const {width, left} = evt.target.getBoundingClientRect();

    const currentTime = ((evt.clientX - left) / width) * this.state.duration;

    this._videoRef.current.currentTime = currentTime;

    this.setState({
      playbackTime: currentTime,
    });
  }

  _onCanPlayThrough(e) {
    this.setState({
      duration: e.target.duration,
    });
  }

  _onEnded(e) {
    const videoElement = e.target;

    videoElement.load();

    this.setState({
      isPlaying: false,
      playbackTime: 0,
    });
  }

  render() {
    const {movie} = this.props;// id
    const {duration, playbackTime} = this.state;

    const msLeft = (duration - playbackTime) * 1000;
    const progressPercent = duration === 0 ? 0 : (playbackTime / duration) * 100;

    return (
      <div className="player">
        <video
          ref={this._videoRef}
          className="player__video"
          src={movie.src}
          poster={movie.poster}
          onCanPlayThrough={this._onCanPlayThrough}
          onTimeUpdate={this._onTimeUpdate}
          onEnded={this._onEnded}
        />

        <button type="button" className="player__exit" onClick={this._onExitClick}>Exit</button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value={progressPercent} max="100" onClick={this._onProgressClick}></progress>
              <div className="player__toggler" style={{left: `${progressPercent}%`}}>Toggler</div>
            </div>
            <div className="player__time-value">{formatMovieDuration(msLeft)}</div>
          </div>

          <div className="player__controls-row">
            {this.state.isPlaying ? (
              <button type="button" className="player__play" onClick={this._onPauseClick}>
                <svg viewBox="0 0 14 21" width="14" height="21">
                  <use xlinkHref="#pause"></use>
                </svg>
                <span>Pause</span>
              </button>
            ) : (
              <button type="button" className="player__play" onClick={this._onPlayClick}>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
            )}

            <div className="player__name">{movie.title}</div>

            <button type="button" className="player__full-screen" onClick={this._onFullscreenClick}>
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

PlayerPage.propTypes = {
  id: proptypes.id,
  movie: proptypes.movie,
  history: proptypes.history
};

export default withRouter(PlayerPage);
