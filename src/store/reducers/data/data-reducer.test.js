
import {data} from './data-reducer';
import {ActionType} from './action';
import {favoritesMock, filmsMocks, promoMock, reviewsMocks, storeInitialMock} from '../../../test-mocks';
import {FILMS_IN_LIST_LIMIT_MIN, FILMS_IN_LIST_OFFSET, Genre} from '../../../consts';

describe(`Data-reducer works correctly`, () => {
  it(`without parameters should return initial state`, () => {
    const initialState = storeInitialMock.DATA;
    expect(data(undefined, {}))
      .toEqual(initialState);
  });

  it(`should update films and isFilmsLoaded by the received value`, () => {
    const state = {
      films: [],
      isFilmsLoaded: false,
    };

    const action = {
      type: ActionType.LOAD_FILMS,
      payload: filmsMocks,
    };

    expect(data(state, action))
      .toEqual({films: filmsMocks, isFilmsLoaded: true});
  });

  it(`should update promo and isPromoLoaded by the received value`, () => {
    const state = {
      promo: {},
      isPromoLoaded: false,
    };

    const action = {
      type: ActionType.LOAD_PROMO,
      payload: promoMock,
    };

    expect(data(state, action))
      .toEqual({promo: promoMock, isPromoLoaded: true});
  });

  it(`should update favorites and isFavoritesLoaded by the received value`, () => {
    const state = {
      favorites: [],
      isFavoritesLoaded: false,
    };

    const action = {
      type: ActionType.LOAD_FAVORITES,
      payload: favoritesMock,
    };

    expect(data(state, action))
      .toEqual({favorites: favoritesMock, isFavoritesLoaded: true});
  });

  it(`should update reviewsForSelectedFilm and isReviewsLoaded by the received value`, () => {
    const state = {
      reviewsForSelectedFilm: [],
      isReviewsLoaded: false,
    };

    const action = {
      type: ActionType.LOAD_REVIEWS_BY_ID,
      payload: reviewsMocks,
    };

    expect(data(state, action))
      .toEqual({reviewsForSelectedFilm: reviewsMocks, isReviewsLoaded: true});
  });

  it(`should update selectedGenre by the received value`, () => {
    const randomGenre = `randomGenre`;

    const state = {
      selectedGenre: Genre.ALL,
    };

    const action = {
      type: ActionType.CHANGE_GENRE,
      payload: randomGenre,
    };

    expect(data(state, action))
      .toEqual({selectedGenre: randomGenre});
  });

  it(`should update genres by the received value`, () => {
    const genresMock = [`randomGenreOne`, `randomGenreTwo`, `randomGenreThree`];

    const state = {
      genres: [],
    };

    const action = {
      type: ActionType.COLLECT_GENRES,
      payload: genresMock,
    };

    expect(data(state, action))
      .toEqual({genres: genresMock});
  });

  it(`should update filmsLimit by the received value`, () => {
    const targetValue = FILMS_IN_LIST_LIMIT_MIN + FILMS_IN_LIST_OFFSET;

    const state = {
      filmsLimit: FILMS_IN_LIST_LIMIT_MIN,
    };

    const action = {
      type: ActionType.INCREASE_FILMS_LIMIT,
      payload: FILMS_IN_LIST_OFFSET,
    };

    expect(data(state, action))
      .toEqual({filmsLimit: targetValue});
  });

  it(`should update filmsLimit by the received value (reset)`, () => {
    const targetValue = FILMS_IN_LIST_LIMIT_MIN;

    const state = {
      filmsLimit: FILMS_IN_LIST_LIMIT_MIN,
    };

    const action = {
      type: ActionType.RESET_FILMS_LIMIT,
      payload: FILMS_IN_LIST_LIMIT_MIN,
    };

    expect(data(state, action))
      .toEqual({filmsLimit: targetValue});
  });

  it(`should update filmsLimit by the received value (reset)`, () => {
    const targetValue = 10;

    const state = {
      shownFilmsCount: 0,
    };

    const action = {
      type: ActionType.INCREASE_SHOWN_FILMS_COUNT,
      payload: targetValue,
    };

    expect(data(state, action))
      .toEqual({shownFilmsCount: targetValue});
  });
});
