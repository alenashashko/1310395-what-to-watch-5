import dayjs from 'dayjs';
import {MillisecondsInTimePeriod} from './const';
import {getMovie} from './store/selectors';

import {MINUTES_IN_HOUR, EMAIL_REGEXP} from './const';

export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
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

export const formatMovieRunTime = (durationInMin) => {
  const hours = Math.floor(durationInMin / MINUTES_IN_HOUR);
  const minutes = durationInMin % MINUTES_IN_HOUR;

  return [
    hours > 0 ? `${hours}h` : undefined,
    `${minutes}m`
  ].filter(Boolean).join(` `);
};

export const formatMovieRating = (rating) => {
  const ratingString = String(rating);

  return ratingString.indexOf(`.`) === -1 ? `${ratingString}.0` : ratingString;
};

export const formatCommentRating = (rating) => {
  const formatedRating = String(rating).replace(`.`, `,`);

  return formatedRating.indexOf(`,`) === -1 ? `${formatedRating},0` : formatedRating;
};

export const formatCommentDate = (date) => {
  return dayjs(date).format(`MMMM DD, YYYY`);
};

export const formatCommentDateTime = (date) => {
  return dayjs(date).format(`YYYY-MM-DD`);
};

export function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}

export function launchIntoFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}

export const checkMovieIsLoaded = (state, props) => {
  const movie = getMovie(state);

  return !!movie && movie.id === props.id;
};

export const checkEmailValidity = (email) => {
  return EMAIL_REGEXP.test(email);
};

// https://stackoverflow.com/questions/6443990/javascript-calculate-brighter-colour
export const increaseBrightness = (hex, percent) => {
  // strip the leading # if it's there
  hex = hex.replace(/^\s*#|\s*$/g, ``);

  // convert 3 char codes --> 6, e.g. `E0F` --> `EE00FF`
  if (hex.length === 3) {
    hex = hex.replace(/(.)/g, `$1$1`);
  }

  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);

  return `#` +
     ((0 | (1 << 8) + r + (256 - r) * percent / 100).toString(16)).substr(1) +
     ((0 | (1 << 8) + g + (256 - g) * percent / 100).toString(16)).substr(1) +
     ((0 | (1 << 8) + b + (256 - b) * percent / 100).toString(16)).substr(1);
};
