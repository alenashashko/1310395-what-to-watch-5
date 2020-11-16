import {MillisecondsInTimePeriod} from './const';
import {DEFAULT_MOVIES_FILTER_VALUE} from './const';

export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const formatDurationDisplaying = (duration) => {
  if (duration > 0 && duration < 10) {
    return `0${duration}`;
  } else if (duration === 0) {
    return `00`;
  }

  return duration;
};

export const formatMovieDuration = (duration) => {
  const secondsInMs = MillisecondsInTimePeriod.SECOND;
  const minuteInMs = MillisecondsInTimePeriod.MINUTE;
  const hourInMs = MillisecondsInTimePeriod.HOUR;

  const hours = Math.floor(duration / hourInMs);
  const minutes = Math.floor((duration % hourInMs) / minuteInMs);
  const seconds = Math.floor((duration % minuteInMs) / secondsInMs);

  return [
    hours > 0 ? hours : undefined,
    formatDurationDisplaying(minutes),
    formatDurationDisplaying(seconds)
  ].filter(Boolean).join(`:`);
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getMoviesByGenre = (allMovies, genre) => {
  return genre === DEFAULT_MOVIES_FILTER_VALUE ?
    allMovies :
    allMovies.filter((movie) => movie.genre === genre);
};
