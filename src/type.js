import {
  number,
  shape,
  arrayOf,
  string,
  object,
  bool
} from 'prop-types';

export default {
  id: string.isRequired,
  src: string.isRequired,
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
  movieNotRequired: shape({
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
  }),
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
  comments: arrayOf(
      shape({
        id: string.isRequired,
        author: string.isRequired,
        date: string.isRequired,
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

