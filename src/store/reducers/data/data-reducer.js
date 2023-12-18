import {createReducer} from '@reduxjs/toolkit';
import {FILMS_IN_LIST_LIMIT_MIN, Genre} from '../../../consts';
import {
  loadFilms,
  loadPromo,
  loadFavorites,
  changeGenre,
  collectGenres,
  increaseFilmsLimit,
  setShownFilmsCount,
  resetFilmsLimit,
  loadReviewsById,
} from './action';

const initialState = {
  films: [],
  genres: [],
  promo: {},
  favorites: [],
  reviewsForSelectedFilm: [],
  isFilmsLoaded: false,
  isPromoLoaded: false,
  isFavoritesLoaded: false,
  isReviewsLoaded: false,
  selectedGenre: Genre.ALL,
  filmsLimit: FILMS_IN_LIST_LIMIT_MIN,
  shownFilmsCount: 0,
};

const data = createReducer(initialState, (builder) => {
  builder.addCase(loadFilms, (state, action) => {
    state.isFilmsLoaded = true;
    state.films = action.payload;
  });
  builder.addCase(loadPromo, (state, action) => {
    state.isPromoLoaded = true;
    state.promo = action.payload;
  });
  builder.addCase(loadFavorites, (state, action) => {
    state.isFavoritesLoaded = true;
    state.favorites = action.payload;
  });
  builder.addCase(loadReviewsById, (state, action) => {
    state.isReviewsLoaded = true;
    state.reviewsForSelectedFilm = action.payload;
  });
  builder.addCase(changeGenre, (state, action) => {
    state.selectedGenre = action.payload;
  });
  builder.addCase(collectGenres, (state, action) => {
    state.genres = action.payload;
  });
  builder.addCase(increaseFilmsLimit, (state, action) => {
    state.filmsLimit = state.filmsLimit + action.payload;
  });
  builder.addCase(resetFilmsLimit, (state, action) => {
    state.filmsLimit = action.payload;
  });
  builder.addCase(setShownFilmsCount, (state, action) => {
    state.shownFilmsCount = action.payload;
  });
});

export {data};
