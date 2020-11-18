import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router';

import proptypes from '../../type';
import {formatMovieDuration} from '../../utils';
import withPlayerManager from '../../hocs/with-player-manager/with-player-manager';
import {MS_IN_SEC, ABSENT_PROGRESS_IN_PERSENT, FULL_PROGRESS_IN_PERCENT} from '../../const';

class PlayerPage extends PureComponent {
  constructor(props) {
    super(props);

    this._onExitClick = this._onExitClick.bind(this);
  }

  _onExitClick() {
    const {movie, destroy, history} = this.props;

    destroy();

    history.push(`/films/${movie.id}`);
  }

  render() {
    const {
      movie,
      duration,
      playbackTime,
      isPlaying,
      forwardContainerRef,
      forwardVideoRef,
      onCanPlayThrough,
      onTimeUpdate,
      onVideoEnded,
      onPauseButtonClick,
      onPlayButtonClick,
      onFullScreenButtonClick,
      onProgressBarClick
    } = this.props; // id

    const msLeft = (duration - playbackTime) * MS_IN_SEC;
    const progressInPercent = duration === ABSENT_PROGRESS_IN_PERSENT ?
      ABSENT_PROGRESS_IN_PERSENT : (playbackTime / duration) * FULL_PROGRESS_IN_PERCENT;

    return (
      <div className="player" ref={forwardContainerRef}>
        <video
          ref={forwardVideoRef}
          className="player__video"
          src={movie.src}
          poster={movie.poster}
          onCanPlayThrough={onCanPlayThrough}
          onTimeUpdate={onTimeUpdate}
          onEnded={onVideoEnded}
        />

        <button type="button" className="player__exit" onClick={this._onExitClick}>Exit</button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress
                className="player__progress"
                value={progressInPercent}
                max="100"
                onClick={onProgressBarClick}
              />
              <div className="player__toggler" style={{left: `${progressInPercent}%`}}>Toggler</div>
            </div>
            <div className="player__time-value">{formatMovieDuration(msLeft)}</div>
          </div>

          <div className="player__controls-row">
            {isPlaying ? (
              <button type="button" className="player__play" onClick={onPauseButtonClick}>
                <svg viewBox="0 0 14 21" width="14" height="21">
                  <use xlinkHref="#pause"></use>
                </svg>
                <span>Pause</span>
              </button>
            ) : (
              <button type="button" className="player__play" onClick={onPlayButtonClick}>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
            )}

            <div className="player__name">{movie.title}</div>

            <button type="button" className="player__full-screen" onClick={onFullScreenButtonClick}>
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
  history: proptypes.history,
  forwardContainerRef: PropTypes.object.isRequired,
  forwardVideoRef: PropTypes.object.isRequired,
  duration: PropTypes.number.isRequired,
  playbackTime: PropTypes.number.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onFullScreenButtonClick: PropTypes.func.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  onPauseButtonClick: PropTypes.func.isRequired,
  onTimeUpdate: PropTypes.func.isRequired,
  onProgressBarClick: PropTypes.func.isRequired,
  onCanPlayThrough: PropTypes.func.isRequired,
  onVideoEnded: PropTypes.func.isRequired,
  destroy: PropTypes.func.isRequired
};

export default withPlayerManager(withRouter(PlayerPage));
