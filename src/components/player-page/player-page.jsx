import React, {createRef} from 'react';

import proptypes from '../../type';
import {formatMovieDuration} from '../../utils';

class PlayerPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
    };

    this._videoRef = createRef();

    this._onFullscreenClick = this._onFullscreenClick.bind(this);
    this._onPlayClick = this._onPlayClick.bind(this);
    this._onPauseClick = this._onPauseClick.bind(this);
  }

  _onFullscreenClick() {
    this._videoRef.current.requestFullscreen();
  }

  _onPlayClick() {
    this._videoRef.current.play();

    this.setState({
      isPlaying: true,
    });
  }

  _onPauseClick() {
    this._videoRef.current.pause();

    this.setState({
      isPlaying: false,
    });
  }

  render() {
    const {movie} = this.props;
    // id

    return (
      <div className="player">
        <video ref={this._videoRef} src={movie.src} className="player__video" poster={movie.poster}></video>

        <button type="button" className="player__exit">Exit</button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value="30" max="100"></progress>
              <div className="player__toggler" style={{left: `30%`}}>Toggler</div>
            </div>
            <div className="player__time-value">{formatMovieDuration(movie.duration)}</div>
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

            <div className="player__name">Transpotting</div>

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
  movie: proptypes.movie
};

export default PlayerPage;
