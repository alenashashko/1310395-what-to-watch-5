import {
  number,
  shape,
  arrayOf,
  string,
  instanceOf,
  object,
  bool
} from 'prop-types';

// date: PropTypes.object.isRequired ?
export default {
  id: string.isRequired,
  src: string.isRequired,
  cinemaName: string.isRequired,
  movie: shape({
    id: string.isRequired,
    title: string.isRequired,
    picture: string.isRequired,
    backgroundPicture: string.isRequired,
    backgroundColor: string.isRequired,
    poster: string.isRequired,
    genre: string.isRequired,
    year: number.isRequired,
    ratingScore: number.isRequired,
    ratingCount: number.isRequired,
    src: string.isRequired,
    previewSrc: string.isRequired,
    duration: number.isRequired,
    description: string.isRequired,
    director: string.isRequired,
    starring: arrayOf(string.isRequired).isRequired,
    isFavorite: bool.isRequired
  }).isRequired,
  movies: arrayOf(
      shape({
        id: string.isRequired,
        title: string.isRequired,
        picture: string.isRequired,
        backgroundPicture: string.isRequired,
        backgroundColor: string.isRequired,
        poster: string.isRequired,
        genre: string.isRequired,
        year: number.isRequired,
        ratingScore: number.isRequired,
        ratingCount: number.isRequired,
        src: string.isRequired,
        previewSrc: string.isRequired,
        duration: number.isRequired,
        description: string.isRequired,
        director: string.isRequired,
        starring: arrayOf(string.isRequired).isRequired,
        isFavorite: bool.isRequired
      })
  ).isRequired,
  comments: arrayOf( // change
      shape({
        id: string.isRequired,
        author: string.isRequired,
        date: instanceOf(Date).isRequired,
        rating: number.isRequired,
        text: string.isRequired
      })
  ).isRequired,
  history: object.isRequired,
  genre: string.isRequired,
  genres: arrayOf(string.isRequired).isRequired,
  ratingValue: number.isRequired,
  reviewText: string.isRequired,
  pageNumber: number.isRequired
};

