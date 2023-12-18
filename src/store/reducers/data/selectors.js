import {createSelector} from 'reselect';
import {Genre} from '../../../consts';

const selectAllFilms = (state) => state.DATA.films;
const selectFavorites = (state) => state.DATA.favorites;
const selectPromo = (state) => state.DATA.promo;
const selectGenre = (state) => state.DATA.selectedGenre;
const selectGenres = (state) => state.DATA.genres;
const selectFilmsLimit = (state) => state.DATA.filmsLimit;
const selectFilmsCount = (state) => state.DATA.shownFilmsCount;
const selectReviews = (state) => state.DATA.reviewsForSelectedFilm;
const selectFilmsLoaded = (state) => state.DATA.isFilmsLoaded;
const selectPromoLoaded = (state) => state.DATA.isPromoLoaded;
const selectFavoritesLoaded = (state) => state.DATA.isFavoritesLoaded;
const selectReviewsLoaded = (state) => state.DATA.isReviewsLoaded;

const selectFilmsByGenre = createSelector(
    selectAllFilms,
    selectGenre,
    (films, selectedGenre) =>
      selectedGenre === Genre.ALL ? films : films.filter((film) => film.genre.toLowerCase() === selectedGenre)
);

const selectFilmById = (id) => createSelector(
    selectAllFilms,
    (films) => films.find((film) => film.id === id)
);

const selectFavoriteStatusById = (id) => createSelector(
    selectFavorites,
    (favorites) => favorites.some((item) => item.id === id)
);

export {
  selectAllFilms,
  selectFavorites,
  selectGenre,
  selectFilmsLoaded,
  selectPromoLoaded,
  selectFavoritesLoaded,
  selectReviewsLoaded,
  selectReviews,
  selectGenres,
  selectFilmsLimit,
  selectPromo,
  selectFilmsCount,
  selectFilmById,
  selectFavoriteStatusById,
  selectFilmsByGenre,
};
