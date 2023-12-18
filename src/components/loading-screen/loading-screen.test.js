import React from 'react';
import {Router} from 'react-router-dom';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {LoadingScreen} from './loading-screen';

const mockStore = configureStore({});
const store = mockStore({});

describe(`Loading screen testing`, () => {

  it(`Component is render correctly`, () => {
    const history = createMemoryHistory();

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <LoadingScreen />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });
});
