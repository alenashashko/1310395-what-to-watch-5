import {filterMoviesByGenre} from '../core';

export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  GET_MOVIES_BY_GENRE: `GET_MOVIES_BY_GENRE`
};

export const ActionCreator = { // ?
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre
  }),
  getMoviesByGenre: (movies, genre) => {
    const moviesByGenre = filterMoviesByGenre(movies, genre);

    return {
      type: ActionType.GET_MOVIES_BY_GENRE,
      payload: moviesByGenre
    };
  }
};
