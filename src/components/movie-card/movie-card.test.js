import React from 'react';
import {Router} from 'react-router-dom';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {storeFilledMock, oneFilmMock} from '../../test-mocks';
import {createMemoryHistory} from 'history';
import thunk from 'redux-thunk';
import {createAPI} from '../../services/api';
import {MovieCard} from './movie-card';

const api = createAPI(() => {});
const middleware = [thunk.withExtraArgument(api)];
const mockStore = configureStore(middleware);

describe(`Movie card testing`, () => {

  it(`Component is render correctly`, () => {
    const store = mockStore(storeFilledMock);
    const history = createMemoryHistory();

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <MovieCard film={oneFilmMock} />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByTestId(`movie-card`)).toBeInTheDocument();
  });

  it(`When user click on component`, () => {
    const store = mockStore(storeFilledMock);
    const history = createMemoryHistory();

    store.dispatch = jest.fn();

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <MovieCard film={oneFilmMock} />
          </Router>
        </redux.Provider>
    );

    userEvent.click(screen.getByTestId(`movie-card`));
    expect(store.dispatch).toBeCalled();
  });
});
