export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  LOAD_MOVIES: `LOAD_MOVIES`,
  CHANGE_AUTHORIZATION_STATUS: `CHANGE_AUTHORIZATION_STATUS`
};

export const changeGenre = (genre) => {
  return {
    type: ActionType.CHANGE_GENRE,
    payload: genre
  };
};

export const loadMovies = (movies) => {
  return {
    type: ActionType.LOAD_MOVIES,
    payload: movies
  };
};

export const changeAuthorizationStatus = (status) => {
  return {
    type: ActionType.CHANGE_AUTHORIZATION_STATUS,
    payload: status
  };
};

