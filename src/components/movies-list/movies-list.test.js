import React from 'react';
import {Router} from 'react-router-dom';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import {render, screen} from '@testing-library/react';
import {storeFilledMock} from '../../test-mocks';
import {createMemoryHistory} from 'history';
import {MoviesList} from './movies-list';

const mockStore = configureStore({});

describe(`More-like-this testing`, () => {

  it(`Component is render correctly`, () => {
    const store = mockStore(storeFilledMock);
    const history = createMemoryHistory();

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <MoviesList />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByTestId(`movies-list`)).toBeInTheDocument();
  });
});
