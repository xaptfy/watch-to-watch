import React from 'react';
import {Router} from 'react-router-dom';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {NotFoundPage} from './not-found-page';

const mockStore = configureStore({});
const store = mockStore({});

describe(`NotFoundPage testing`, () => {

  it(`Component is render correctly`, () => {
    const history = createMemoryHistory();

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <NotFoundPage />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/404/i)).toBeInTheDocument();
    expect(screen.getByText(/Go to main page/i)).toBeInTheDocument();
  });
});
