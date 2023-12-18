import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../services/api';
import {
  fetchFilms,
  fetchPromo,
  fetchFavorites,
  fetchReviewsById,
  login,
  logout,
  checkAuth,
  sendReview,
  changeFilmFavoriteStatus,
} from './api-actions';
import {
  filmsResponseMock,
  adaptedFilmsResponseMock,
  collectedGenresMock,
  promoResponseMock,
  adaptedPromoResponseMock,
  favoritesResponseMock,
  adaptedFavoritesResponseMock,
  reviewsMocks,
  commentToSendMock,
} from '../test-mocks';
import {
  APIRoute,
  AppRoute,
  AuthorizationStatus,
} from '../consts';
import {ActionType as DataActionType} from './reducers/data/action';
import {ActionType as UserActionType} from './reducers/user/action';
import {ActionType as RedirectActionType} from './middleware/action';

const api = createAPI(() => {});

describe(`Api-actions testing`, () => {

  it(`should make a correct call to /films`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoadingAction = fetchFilms();
    const genres = collectedGenresMock;

    apiMock
      .onGet(APIRoute.FILMS)
      .reply(200, filmsResponseMock);

    return filmsLoadingAction(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: DataActionType.LOAD_FILMS,
        payload: adaptedFilmsResponseMock,
      });
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: DataActionType.COLLECT_GENRES,
        payload: genres,
      });
    });
  });

  it(`should make a correct call to /promo`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const promoLoadingAction = fetchPromo();

    apiMock
      .onGet(APIRoute.PROMO)
      .reply(200, promoResponseMock);

    return promoLoadingAction(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: DataActionType.LOAD_PROMO,
        payload: adaptedPromoResponseMock,
      });
    });
  });

  it(`should make a correct call to /favorites`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoritesLoadingAction = fetchFavorites();

    apiMock
      .onGet(APIRoute.FAVORITE)
      .reply(200, favoritesResponseMock);

    return favoritesLoadingAction(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: DataActionType.LOAD_FAVORITES,
        payload: adaptedFavoritesResponseMock,
      });
    });
  });

  it(`should make a correct call to /comments/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const exampleId = 1;
    const reviewsLoadingAction = fetchReviewsById(exampleId);

    apiMock
      .onGet(`/comments/${exampleId}`)
      .reply(200, reviewsMocks);

    return reviewsLoadingAction(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: DataActionType.LOAD_REVIEWS_BY_ID,
        payload: reviewsMocks,
      });
    });
  });

  it(`should make a correct call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const exampleUserData = {email: `user@mail.ru`, password: `12345`};
    const exampleResponse = {response: `response body`};
    const loginAction = login(exampleUserData);

    apiMock
      .onPost(APIRoute.LOGIN)
      .reply(200, exampleResponse);

    return loginAction(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(3);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: UserActionType.REQUIRED_AUTHORIZATION,
        payload: AuthorizationStatus.AUTH,
      });
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: UserActionType.SET_AUTH_INFO,
        payload: exampleResponse,
      });
      expect(dispatch).toHaveBeenNthCalledWith(3, {
        type: RedirectActionType.REDIRECT_TO_ROUTE,
        payload: AppRoute.ROOT,
      });
    });
  });

  it(`should make a correct call to /login with checkAuth action`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const exampleResponse = {response: `response body`};
    const checkAuthAction = checkAuth();

    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(200, exampleResponse);

    return checkAuthAction(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: UserActionType.REQUIRED_AUTHORIZATION,
        payload: AuthorizationStatus.AUTH,
      });
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: UserActionType.SET_AUTH_INFO,
        payload: exampleResponse,
      });
    });
  });

  it(`should make a correct call to /logout`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const exampleResponse = {response: `response body`};
    const logoutAction = logout();

    apiMock
      .onGet(APIRoute.LOGOUT)
      .reply(200, exampleResponse);

    return logoutAction(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: UserActionType.REQUIRED_AUTHORIZATION,
        payload: AuthorizationStatus.NO_AUTH,
      });
    });
  });

  it(`should make a correct call to /comments/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const exampleId = 1;
    const exampleResponse = {response: `response body`};
    const sendCommentAction = sendReview(exampleId, commentToSendMock);

    apiMock
      .onPost(`/comments/${exampleId}`)
      .reply(200, exampleResponse);

    return sendCommentAction(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(3);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: UserActionType.SET_FORM_DISABLED,
        payload: true,
      });
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: UserActionType.SET_FORM_DISABLED,
        payload: false,
      });
      expect(dispatch).toHaveBeenNthCalledWith(3, {
        type: RedirectActionType.REDIRECT_TO_ROUTE,
        payload: `/films/${exampleId}`,
      });
    });
  });

  it(`should make a correct call to /favorite/:id/:status`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const getState = () => {};
    const exampleId = 1;
    const exampleStatus = 1;
    const exampleResponse = {response: `response body`};
    const changeStatusAction = changeFilmFavoriteStatus(exampleId, exampleStatus);

    apiMock
      .onPost(`/favorite/${exampleId}/${exampleStatus}`)
      .reply(200, exampleResponse)
      .onGet(APIRoute.FAVORITE)
      .reply(200, favoritesResponseMock);

    return changeStatusAction(dispatch, getState, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        const favoritesAction = dispatch.mock.calls[0][0];

        expect(favoritesAction).toBeInstanceOf(Function);

        return favoritesAction(dispatch, getState, api)
          .then(() => {
            expect(dispatch).toHaveBeenCalledTimes(2);
            expect(dispatch).toHaveBeenNthCalledWith(2, {
              type: DataActionType.LOAD_FAVORITES,
              payload: adaptedFavoritesResponseMock,
            });
          });
      });
  });
});
