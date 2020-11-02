import {
  number,
  shape,
  func,
  arrayOf,
  string,
  bool,
  instanceOf
} from 'prop-types';

// date: PropTypes.object.isRequired ?
export default {
  id: string.isRequired,
  cinemaName: string.isRequired,
  movie: shape({
    id: string.isRequired,
    title: string.isRequired,
    picture: string.isRequired,
    poster: string.isRequired,
    genre: string.isRequired,
    year: number.isRequired,
    ratingScore: number.isRequired,
    ratingCount: number.isRequired,
    src: string.isRequired,
    duration: number.isRequired,
    description: arrayOf(string.isRequired).isRequired,
    director: string.isRequired,
    starring: arrayOf(string.isRequired).isRequired,
  }).isRequired,
  movies: arrayOf(
      shape({
        id: string.isRequired,
        title: string.isRequired,
        picture: string.isRequired,
        poster: string.isRequired,
        genre: string.isRequired,
        year: number.isRequired,
        ratingScore: number.isRequired,
        ratingCount: number.isRequired,
        src: string.isRequired,
        duration: number.isRequired,
        description: arrayOf(string.isRequired).isRequired,
        director: string.isRequired,
        starring: arrayOf(string.isRequired).isRequired,
      })
  ).isRequired,
  reviews: arrayOf(
      shape({
        id: string.isRequired,
        author: string.isRequired,
        date: instanceOf(Date).isRequired,
        rating: number.isRequired,
        text: string.isRequired
      })
  ).isRequired,
  onMovieHover: func.isRequired,
  isVideoPlaying: bool.isRequired
};


