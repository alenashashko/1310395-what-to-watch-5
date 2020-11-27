import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';

import proptypes from '../../type';
import {formatMovieDuration, checkMovieIsLoaded} from '../../utils';
import withPlayerManager from '../../hocs/with-player-manager/with-player-manager';
import {MS_IN_SEC, ABSENT_PROGRESS_IN_PERSENT, FULL_PROGRESS_IN_PERCENT} from '../../const';
import {fetchMovieByID} from '../../store/api-actions';
import {generateWithFetchedData} from '../../hocs/with-fetched-data/with-fetched-data';
import {getMovie} from '../../store/selectors';

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
      containerForwardRef,
      videoForwardRef,
      onCanPlayThrough,
      onTimeUpdate,
      onVideoEnded,
      onPauseButtonClick,
      onPlayButtonClick,
      onFullScreenButtonClick,
      onProgressBarClick
    } = this.props;

    const msLeft = (duration - playbackTime) * MS_IN_SEC;
    const progressInPercent = duration === ABSENT_PROGRESS_IN_PERSENT ?
      ABSENT_PROGRESS_IN_PERSENT : (playbackTime / duration) * FULL_PROGRESS_IN_PERCENT;

    return (
      <div className="player" ref={containerForwardRef}>
        <video
          ref={videoForwardRef}
          onCanPlayThrough={onCanPlayThrough}
          onTimeUpdate={onTimeUpdate}
          onEnded={onVideoEnded}
          className="player__video"
          src={movie.src}
          poster={movie.backgroundPicture}
          autoPlay
        />

        <button
          onClick={this._onExitClick}
          type="button"
          className="player__exit">
            Exix
        </button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress
                onClick={onProgressBarClick}
                className="player__progress"
                value={progressInPercent}
                max="100"
              />
              <div
                className="player__toggler"
                style={{left: `${progressInPercent}%`}}>
                Toggler
              </div>
            </div>
            <div className="player__time-value">{formatMovieDuration(msLeft)}</div>
          </div>

          <div className="player__controls-row">
            {isPlaying ? (
              <button onClick={onPauseButtonClick} type="button" className="player__play">
                <svg viewBox="0 0 14 21" width="14" height="21">
                  <use xlinkHref="#pause"></use>
                </svg>
                <span>Pause</span>
              </button>
            ) : (
              <button onClick={onPlayButtonClick} type="button" className="player__play">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
            )}

            <div className="player__name">{movie.title}</div>

            <button
              onClick={onFullScreenButtonClick}
              type="button"
              className="player__full-screen">
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
  containerForwardRef: PropTypes.object.isRequired,
  videoForwardRef: PropTypes.object.isRequired,
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
  destroy: PropTypes.func.isRequired,
  fetchMovieByIDAction: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  movie: getMovie(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchMovieByIDAction(id) {
    dispatch(fetchMovieByID(id));
  }
});

export {PlayerPage};
export default connect(mapStateToProps, mapDispatchToProps)(withPlayerManager(withRouter(
    generateWithFetchedData(
        (state, props) => checkMovieIsLoaded(state, props),
        (props) => props.fetchMovieByIDAction(props.id)
    )(PlayerPage)
))
);
