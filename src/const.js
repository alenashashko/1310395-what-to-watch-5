export const CINEMA_NAME = `WTW`;
export const MS_IN_SEC = 1000;
export const ABSENT_PROGRESS_IN_PERSENT = 0;
export const FULL_PROGRESS_IN_PERCENT = 100;
export const DEFAULT_MOVIES_FILTER_VALUE = `All genres`;
export const MOVIES_PER_PAGE = 8;
export const MINUTES_IN_HOUR = 60;

export const MillisecondsInTimePeriod = {
  SECOND: 1000,
  MINUTE: 60000,
  HOUR: 3600000,
};

export const TextRatingToNubmer = {
  BAD: 3,
  NORMAL: 5,
  GOOD: 8,
  AWESOME: 10
};

export const TabType = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`
};

export const AuthorizationStatus = {
  UNKNOWN: `UNKNOWN`,
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const AppRoute = {
  ROOT: `/`,
  LOGIN: `/login`,
  MY_LIST: `/mylist`,
  MOVIE: `/films/:id`,
  REVIEW: `/films/:id/review`,
  PLAYER: `/player/:id`
};

export const APIRoute = {
  MOVIES: `/films`,
  FAVORITE_MOVIES: `/favorite`,
  PROMO_MOVIE: `/films/promo`,
  LOGIN: `/login`
};

export const TAB_NAMES = Object.values(TabType);

export const MovieChangeStatus = {
  ADD_TO_FAVORITE: 1,
  DELETE_FROM_FAVORITE: 0
};
