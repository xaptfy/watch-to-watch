import PropTypes from 'prop-types';

const PLAY_DELAY_IN_MS = 1000;
const MINUTES_IN_HOUR = 60;
const SIMILAR_FILMS_MAX_COUNT = 4;
const BACKEND_URL = `https://6.react.pages.academy/wtw`;
const REQUEST_TIMEOUT = 5000;
const MAX_GENRES_COUNT = 10;
const FILMS_IN_LIST_LIMIT_MIN = 8;
const FILMS_IN_LIST_OFFSET = 8;
const REFRESH_INTERVAL_IN_SECOND = 1;
const HUNDRED_PERCENT = 100;
const RATING_STARS_COUNT = 10;

const HttpCode = {
  UNAUTHORIZED: 401
};

const TabType = {
  OVERVIEW: `OVERVIEW`,
  DETAILS: `DETAILS`,
  REVIEWS: `REVIEWS`,
};

const filmPropValidation = PropTypes.shape({
  backgroundColor: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  posterImage: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  previewVideoLink: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  released: PropTypes.number.isRequired,
  runTime: PropTypes.number.isRequired,
  scoresCount: PropTypes.number.isRequired,
  starring: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  title: PropTypes.string.isRequired,
  videoLink: PropTypes.string.isRequired,
}).isRequired;

const reviewPropValidation = PropTypes.shape({
  id: PropTypes.number.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
}).isRequired;

const AuthorizationStatus = {
  UNKNOWN: `UNKNOWN`,
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
  ERROR: `ERROR`,
};

const AppRoute = {
  ROOT: `/`,
  LOGIN: `/login`,
  MY_LIST: `/mylist`,
  FILM_INFO: `/films/:id`,
  FILM_PLAYER: `/player/:id`,
  FILM_ADD_REVIEW: `/films/:id/review`,
};

const APIRoute = {
  LOGIN: `/login`,
  FILMS: `/films`,
  PROMO: `/films/promo`,
  FAVORITE: `/favorite`,
  LOGOUT: `/logout`,
};

const Genre = {
  ALL: `all genres`,
};

const ReviewTextValidation = {
  MIN_TEXT_LENGTH: 50,
  MAX_TEXT_LENGTH: 400,
};

export {
  PLAY_DELAY_IN_MS,
  MINUTES_IN_HOUR,
  SIMILAR_FILMS_MAX_COUNT,
  REQUEST_TIMEOUT,
  BACKEND_URL,
  MAX_GENRES_COUNT,
  FILMS_IN_LIST_LIMIT_MIN,
  FILMS_IN_LIST_OFFSET,
  REFRESH_INTERVAL_IN_SECOND,
  HUNDRED_PERCENT,
  RATING_STARS_COUNT,
  filmPropValidation,
  reviewPropValidation,
  TabType,
  AuthorizationStatus,
  AppRoute,
  APIRoute,
  Genre,
  HttpCode,
  ReviewTextValidation,
};
