import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';

import proptypes from '../../type';
import VideoPlayerWrapped from '../video-player/video-player';
import withVideoPlayingStatus from '../../hocs/with-video-playing-status/with-video-playing-status';

const MovieCard = (props) => {
  const {movie, history, isVideoPlaying, onMouseEnter, onMouseLeave} = props;

  return ( // picture video?
    <article className="small-movie-card catalog__movies-card"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={() => history.push(`/films/${movie.id}`)}>
      <div className="small-movie-card__image">
        {isVideoPlaying ? (
          <VideoPlayerWrapped videoSrc={movie.previewSrc} pictureSrc={movie.picture} />
        ) : (
          <img src={movie.picture} alt={movie.title} width="280" height="175" />
        )}
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${movie.id}`}>{movie.title}</Link>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  movie: proptypes.movie,
  history: proptypes.history,
  isVideoPlaying: PropTypes.bool.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired
};

export {MovieCard};
export default withRouter(withVideoPlayingStatus(MovieCard));
