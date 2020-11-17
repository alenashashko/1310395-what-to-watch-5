import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';

import proptypes from '../../type';
import VideoPlayerWrapped from '../video-player/video-player';

class MovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isVideoPlaying: false
    };

    this._handleMouseEnter = this._handleMouseEnter.bind(this);
    this._handleMouseLeave = this._handleMouseLeave.bind(this);
  }

  _handleMouseEnter() {
    this.setState({
      isVideoPlaying: true
    });
  }

  _handleMouseLeave() {
    this.setState({
      isVideoPlaying: false
    });
  }

  render() {
    const {movie, history} = this.props;

    return (
      <article className="small-movie-card catalog__movies-card"
        onMouseEnter={this._handleMouseEnter}
        onMouseLeave={this._handleMouseLeave}
        onClick={() => history.push(`/films/${movie.id}`)}>
        <div className="small-movie-card__image">
          {this.state.isVideoPlaying ? (
            <VideoPlayerWrapped videoSrc={movie.src} pictureSrc={movie.picture} />
          ) : (
            <img src={movie.picture} alt={movie.title} width="280" height="175" />
          )}
        </div>
        <h3 className="small-movie-card__title">
          <Link className="small-movie-card__link" to={`/films/${movie.id}`}>{movie.title}</Link>
        </h3>
      </article>
    );
  }
}

MovieCard.propTypes = {
  movie: proptypes.movie,
  history: proptypes.history
};

export default withRouter(MovieCard);
