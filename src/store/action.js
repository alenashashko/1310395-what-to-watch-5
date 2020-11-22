export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  FILTER_MOVIES_BY_GENRE: `FILTER_MOVIES_BY_GENRE`
};

export const changeGenre = (genre) => {
  return {
    type: ActionType.CHANGE_GENRE,
    payload: genre
  };
};

export const filterMoviesByGenre = () => {
  return {
    type: ActionType.FILTER_MOVIES_BY_GENRE
  };
};

