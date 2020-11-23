export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`
};

export const changeGenre = (genre) => {
  return {
    type: ActionType.CHANGE_GENRE,
    payload: genre
  };
};

