import {
  number,
  shape,
  arrayOf,
  string,
  object,
  bool
} from 'prop-types';

const movie = shape({
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
});

const comment = shape({
  id: string.isRequired,
  author: string.isRequired,
  date: string.isRequired,
  rating: number.isRequired,
  text: string.isRequired
});

const genre = string.isRequired;

export default {
  movie: movie.isRequired,
  movieNotRequired: movie,
  movies: arrayOf(
      movie
  ).isRequired,
  comment: comment.isRequired,
  comments: arrayOf(
      comment
  ).isRequired,
  genre,
  genres: arrayOf(genre).isRequired,
  history: object.isRequired,
  id: string.isRequired,
  src: string.isRequired
};

