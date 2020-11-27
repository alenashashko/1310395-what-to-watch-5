export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  LOAD_MOVIES: `LOAD_MOVIES`,
  LOAD_MOVIE: `LOAD_MOVIE`,
  LOAD_FAVORITE_MOVIES: `LOAD_FAVORITE_MOVIES`,
  CHANGE_AUTHORIZATION_STATUS: `CHANGE_AUTHORIZATION_STATUS`,
  LOAD_AUTHORIZATION_INFO: `LOAD_AUTHORIZATION_INFO`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  SAVE_ERROR_TEXT: `SAVE_ERROR_TEXT`,
  SET_LOGIN_HAS_ERROR: `SET_LOGIN_HAS_ERROR`,
  CHANGE_COMMENT_LOADING_STATUS: `CHANGE_COMMENT_LOADING_STATUS`
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

export const loadMovieByID = (movie) => {
  return {
    type: ActionType.LOAD_MOVIE,
    payload: movie
  };
};

export const loadFavoriteMovies = (favoriteMovies) => {
  return {
    type: ActionType.LOAD_FAVORITE_MOVIES,
    payload: favoriteMovies
  };
};

export const changeAuthorizationStatus = (status) => {
  return {
    type: ActionType.CHANGE_AUTHORIZATION_STATUS,
    payload: status
  };
};

export const loadAuthorizationInfo = (info) => {
  return {
    type: ActionType.LOAD_AUTHORIZATION_INFO,
    payload: info
  };
};

export const loadCommentsByID = (comments) => {
  return {
    type: ActionType.LOAD_COMMENTS,
    payload: comments
  };
};

export const redirectToRoute = (url) => {
  return {
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url
  };
};

export const saveErrorText = (errorText) => {
  return {
    type: ActionType.SAVE_ERROR_TEXT,
    payload: errorText
  };
};


export const setAuthHasError = (isError) => {
  return {
    type: ActionType.SET_LOGIN_HAS_ERROR,
    payload: isError
  };
};

export const changeCommentLoadingStatus = (status) => {
  return {
    type: ActionType.CHANGE_COMMENT_LOADING_STATUS,
    payload: status
  };
};
