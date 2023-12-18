import React from 'react';
import {Router} from 'react-router-dom';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import {createAPI} from '../../services/api';
import * as redux from 'react-redux';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {ShowMoreButton} from './show-more-button';


const api = createAPI(() => {});
const middleware = [thunk.withExtraArgument(api)];
const mockStore = configureStore(middleware);

describe(`Show-more button testing`, () => {

  it(`Component is render correctly`, () => {
    const history = createMemoryHistory();

    const store = mockStore({
      DATA: {
        filmsLimit: 8,
        shownFilmsCount: 16,
      },
    });

    store.dispatch = jest.fn();

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <ShowMoreButton />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByRole(`button`, {textContent: `Show more`})).toBeInTheDocument();
  });

  it(`Component not rendered when limit more of equal than count `, () => {
    const history = createMemoryHistory();

    const store = mockStore({
      DATA: {
        filmsLimit: 16,
        shownFilmsCount: 16,
      },
    });

    store.dispatch = jest.fn();

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <ShowMoreButton />
          </Router>
        </redux.Provider>
    );

    expect(screen.queryByRole(`button`, {textContent: `Show more`})).not.toBeInTheDocument();
  });
});
