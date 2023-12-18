import {Genre, FILMS_IN_LIST_LIMIT_MIN} from "../../../consts";
import {
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
} from "./action";

describe(`Data-reducer actions work correctly`, () => {

  it(`Action 'changeGenre' returns correct action with payload`, () => {
    const genre = `genre`;

    const expectedAction = {
      type: ActionType.CHANGE_GENRE,
      payload: genre,
    };

    expect(changeGenre(genre)).toEqual(expectedAction);
  });

  it(`Action 'loadFilms' returns correct action with payload`, () => {
    const someFilms = [];

    const expectedAction = {
      type: ActionType.LOAD_FILMS,
      payload: someFilms,
    };

    expect(loadFilms(someFilms)).toEqual(expectedAction);
  });

  it(`Action 'loadPromo' returns correct action with payload`, () => {
    const promo = {};

    const expectedAction = {
      type: ActionType.LOAD_PROMO,
      payload: promo,
    };

    expect(loadPromo(promo)).toEqual(expectedAction);
  });

  it(`Action 'loadFavorites' returns correct action with payload`, () => {
    const favorites = [];

    const expectedAction = {
      type: ActionType.LOAD_FAVORITES,
      payload: favorites,
    };

    expect(loadFavorites(favorites)).toEqual(expectedAction);
  });

  it(`Action 'loadReviewsById' returns correct action with payload`, () => {
    const review = {};

    const expectedAction = {
      type: ActionType.LOAD_REVIEWS_BY_ID,
      payload: review,
    };

    expect(loadReviewsById(review)).toEqual(expectedAction);
  });

  it(`Action 'collectGenres' returns correct action with payload`, () => {
    const films = [{genre: `genre`}];
    const genres = [Genre.ALL, `genre`];

    const expectedAction = {
      type: ActionType.COLLECT_GENRES,
      payload: genres,
    };

    expect(collectGenres(films)).toEqual(expectedAction);
  });

  it(`Action 'increaseFilmsLimit' returns correct action with payload`, () => {
    const increasedLimit = FILMS_IN_LIST_LIMIT_MIN;

    const expectedAction = {
      type: ActionType.INCREASE_FILMS_LIMIT,
      payload: increasedLimit,
    };

    expect(increaseFilmsLimit(increasedLimit)).toEqual(expectedAction);
  });

  it(`Action 'resetFilmsLimit' returns correct action with payload`, () => {
    const resetedLimit = FILMS_IN_LIST_LIMIT_MIN;

    const expectedAction = {
      type: ActionType.RESET_FILMS_LIMIT,
      payload: resetedLimit,
    };

    expect(resetFilmsLimit(resetedLimit)).toEqual(expectedAction);
  });

  it(`Action 'setShownFilmsCount' returns correct action with payload`, () => {
    const count = 0;

    const expectedAction = {
      type: ActionType.INCREASE_SHOWN_FILMS_COUNT,
      payload: count,
    };

    expect(setShownFilmsCount(count)).toEqual(expectedAction);
  });
});
