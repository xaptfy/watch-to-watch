import React from 'react';
import {Router} from 'react-router-dom';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import {createAPI} from '../../services/api';
import * as redux from 'react-redux';
import userEvent from '@testing-library/user-event';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {PlayMovieButton} from './play-movie-button';

const api = createAPI(() => {});
const middleware = [thunk.withExtraArgument(api)];
const mockStore = configureStore(middleware);
const store = mockStore({});

describe(`Play-movie button testing`, () => {

  it(`Component is render correctly`, () => {
    const history = createMemoryHistory();
    const exampleId = 1;

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <PlayMovieButton id={exampleId}/>
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/Play/i)).toBeInTheDocument();
  });

  it(`Component causes dispatch when button is clicked`, () => {
    const history = createMemoryHistory();
    const exampleId = 1;

    store.dispatch = jest.fn();

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <PlayMovieButton id={exampleId} />
          </Router>
        </redux.Provider>
    );

    userEvent.click(screen.getByTestId(`play-button`));
    expect(store.dispatch).toBeCalled();
  });
});

