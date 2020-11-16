export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  FILTER_MOVIES_BY_GENRE: `FILTER_MOVIES_BY_GENRE`
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre
  }),
  filterMoviesByGenre: () => {
    return {
      type: ActionType.FILTER_MOVIES_BY_GENRE
    };
  }
};
