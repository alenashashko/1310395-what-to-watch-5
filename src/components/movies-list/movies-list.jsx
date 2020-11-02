import React, {PureComponent} from 'react';

import proptypes from '../../type';
import MovieCard from '../movie-card/movie-card';

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeMovieCard: ``
    };
  }

  render() {
    const {movies} = this.props;

    return (
      <div className="catalog__movies-list">
        {movies.map((movie) => {
          return (
            <MovieCard key={movie.id} movie={movie}
              onMovieHover={() => this.setState({
                activeMovieCard: movie.id
              })}
              isVideoPlaying={movie.id === this.state.activeMovieCard}
            />
          );
        })}
      </div>
    );
  }
}

MoviesList.propTypes = {
  movies: proptypes.movies
};

export default MoviesList;
