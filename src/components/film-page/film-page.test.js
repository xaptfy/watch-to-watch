import React from 'react';
import {MemoryRouter, Route} from 'react-router-dom';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import {render, screen} from '@testing-library/react';
import {storeFilledMock, filmsMocks} from '../../test-mocks';
import {AppRoute, AuthorizationStatus} from '../../consts';
import thunk from 'redux-thunk';
import {createAPI} from '../../services/api';
import {FilmPage} from './film-page';

const api = createAPI(() => {});
const middleware = [thunk.withExtraArgument(api)];
const mockStore = configureStore(middleware);

describe(`Film page testing`, () => {

  it(`Component with correct data is render correctly`, () => {
    const store = mockStore(storeFilledMock);
    const correctId = 1;

    render(
        <redux.Provider store={store}>
          <MemoryRouter initialEntries={[`/films/${correctId}`]}>
            <Route path={AppRoute.FILM_INFO}>
              <FilmPage />
            </Route>
          </MemoryRouter>
        </redux.Provider>
    );

    expect(screen.getByText(/2019 What to watch Ltd/i)).toBeInTheDocument();
    expect(screen.getByText(/WTW/i)).toBeInTheDocument();
  });

  it(`Component with uncorrect data is render Not Found`, () => {
    const store = mockStore(storeFilledMock);
    const uncorrectId = `uncorrect-id`;

    render(
        <redux.Provider store={store}>
          <MemoryRouter initialEntries={[`/films/${uncorrectId}`]}>
            <Route path={AppRoute.FILM_INFO}>
              <FilmPage />
            </Route>
          </MemoryRouter>
        </redux.Provider>
    );

    expect(screen.getByText(/Page not found/i)).toBeInTheDocument();
    expect(screen.getByText(/Go to Main page/i)).toBeInTheDocument();
  });

  it(`When data is in loading component render loading screen`, () => {
    const store = mockStore({
      DATA: {
        films: filmsMocks,
        isFilmsLoaded: false,
      },
      USER: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      },
    });
    const correctId = 1;

    render(
        <redux.Provider store={store}>
          <MemoryRouter initialEntries={[`/films/${correctId}`]}>
            <Route path={AppRoute.FILM_INFO}>
              <FilmPage />
            </Route>
          </MemoryRouter>
        </redux.Provider>
    );

    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });
});
