import React from 'react';
import {Router} from 'react-router-dom';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import {render, screen} from '@testing-library/react';
import {storeFilledMock, storeInitialMock} from '../../test-mocks';
import {createMemoryHistory} from 'history';
import thunk from 'redux-thunk';
import {createAPI} from '../../services/api';
import {MyListPage} from './my-list-page';

const api = createAPI(() => {});
const middleware = [thunk.withExtraArgument(api)];
const mockStore = configureStore(middleware);

describe(`My-list page testing`, () => {

  it(`Component is render correctly`, () => {
    const store = mockStore(storeFilledMock);
    const history = createMemoryHistory();

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <MyListPage />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/My list/i)).toBeInTheDocument();
    expect(screen.getByText(/2019 What to watch Ltd/i)).toBeInTheDocument();
  });

  it(`When data is in loading component render loading screen`, () => {
    const store = mockStore(storeInitialMock);
    const history = createMemoryHistory();

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <MyListPage />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });
});
