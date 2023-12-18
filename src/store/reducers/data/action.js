import {createAction} from '@reduxjs/toolkit';
import {adaptToClient} from '../../../services/adapter';
import {
  MAX_GENRES_COUNT,
  FILMS_IN_LIST_OFFSET,
  FILMS_IN_LIST_LIMIT_MIN,
  Genre,
} from '../../../consts';

const ActionType = {
  CHANGE_GENRE: `data/changeGenre`,
  LOAD_FILMS: `data/loadFilms`,
  LOAD_PROMO: `data/loadPromo`,
  LOAD_FAVORITES: `data/loadFavorites`,
  COLLECT_GENRES: `data/collectGenres`,
  INCREASE_FILMS_LIMIT: `data/increaseFilmsLimit`,
  RESET_FILMS_LIMIT: `data/resetFilmsLimit`,
  INCREASE_SHOWN_FILMS_COUNT: `data/setShownFilmsCount`,
  LOAD_REVIEWS_BY_ID: `data/loadReviewsById`,
};

const loadFilms = createAction(ActionType.LOAD_FILMS, (films) => {
  return {
    payload: films.map(adaptToClient),
  };
});

const loadPromo = createAction(ActionType.LOAD_PROMO, (promo) => {
  return {
    payload: adaptToClient(promo),
  };
});

const loadFavorites = createAction(ActionType.LOAD_FAVORITES, (favorites) => {
  const loadedFavorites = favorites.length ? favorites.map(adaptToClient) : favorites;

  return {
    payload: loadedFavorites,
  };
});

const loadReviewsById = createAction(ActionType.LOAD_REVIEWS_BY_ID, (reviews) => {
  return {
    payload: reviews,
  };
});

const collectGenres = createAction(ActionType.COLLECT_GENRES, (films) => {
  const genresFromFilms = new Set(films.map((film) => film.genre.toLowerCase()));

  return {
    payload: [Genre.ALL, ...genresFromFilms].slice(0, MAX_GENRES_COUNT),
  };
});

const changeGenre = createAction(ActionType.CHANGE_GENRE, (genre) => {
  return {
    payload: genre,
  };
});

const increaseFilmsLimit = createAction(ActionType.INCREASE_FILMS_LIMIT, () => {
  return {
    payload: FILMS_IN_LIST_OFFSET,
  };
});

const resetFilmsLimit = createAction(ActionType.RESET_FILMS_LIMIT, () => {
  return {
    payload: FILMS_IN_LIST_LIMIT_MIN,
  };
});

const setShownFilmsCount = createAction(ActionType.INCREASE_SHOWN_FILMS_COUNT, (count) => {
  return {
    payload: count,
  };
});

export {
  ActionType,
  changeGenre,
  loadFilms,
  loadPromo,
  loadFavorites,
  loadReviewsById,
  collectGenres,
  increaseFilmsLimit,
  resetFilmsLimit,
  setShownFilmsCount,
};
