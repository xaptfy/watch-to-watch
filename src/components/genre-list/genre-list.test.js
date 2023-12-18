import React from 'react';
import {Router} from 'react-router-dom';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {storeFilledMock} from '../../test-mocks';
import {createMemoryHistory} from 'history';
import thunk from 'redux-thunk';
import {createAPI} from '../../services/api';
import {GenreList} from './genre-list';

const api = createAPI(() => {});
const middleware = [thunk.withExtraArgument(api)];
const mockStore = configureStore(middleware);

describe(`Genres list testing`, () => {

  it(`Component is render correctly`, () => {
    const store = mockStore(storeFilledMock);
    const history = createMemoryHistory();

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <GenreList />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/All genres/i)).toBeInTheDocument();
  });

  it(`Change genre work correctly`, () => {
    const history = createMemoryHistory();
    const store = mockStore(storeFilledMock);

    store.dispatch = jest.fn();

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <GenreList />
          </Router>
        </redux.Provider>
    );

    userEvent.click(screen.getByText(`GenreOne`));
    expect(store.dispatch).toBeCalled();
  });
});

