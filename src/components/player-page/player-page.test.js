import React from 'react';
import {MemoryRouter, Route} from 'react-router-dom';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import {render, screen} from '@testing-library/react';
import {storeFilledMock, storeInitialMock} from '../../test-mocks';
import {AppRoute} from '../../consts';
import {PlayerPage} from './player-page';

const mockStore = configureStore({});

describe(`Player page testing`, () => {

  it(`Component with correct data is render correctly`, () => {
    const store = mockStore(storeFilledMock);
    const correctId = 1;

    render(
        <redux.Provider store={store}>
          <MemoryRouter initialEntries={[`/player/${correctId}`]}>
            <Route path={AppRoute.FILM_PLAYER}>
              <PlayerPage />
            </Route>
          </MemoryRouter>
        </redux.Provider>
    );

    expect(screen.getByText(/Transpotting/i)).toBeInTheDocument();
    expect(screen.getByText(/Full screen/i)).toBeInTheDocument();
  });

  it(`Component render Loading screen when data is in loading`, () => {
    const store = mockStore(storeInitialMock);
    const correctId = 1;

    store.dispatch = jest.fn();

    render(
        <redux.Provider store={store}>
          <MemoryRouter initialEntries={[`/player/${correctId}`]}>
            <Route path={AppRoute.FILM_PLAYER}>
              <PlayerPage />
            </Route>
          </MemoryRouter>
        </redux.Provider>
    );

    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
    expect(store.dispatch).toBeCalled();
  });
});
