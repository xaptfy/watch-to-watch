import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as redux from 'react-redux';
import {storeFilledMock} from '../../test-mocks';
import {createAPI} from '../../services/api';
import {AppRoute} from '../../consts';
import {App} from './app';

const api = createAPI(() => {});
const middleware = [thunk.withExtraArgument(api)];
const mockStore = configureStore(middleware);
const store = storeFilledMock;

describe(`Test App routing`, () => {

  it(`When user navigate to /`, () => {
    const history = createMemoryHistory();
    history.push(AppRoute.ROOT);

    render(
        <redux.Provider store={mockStore(store)}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/Play/i)).toBeInTheDocument();
    expect(screen.getByText(/My list/i)).toBeInTheDocument();
    expect(screen.getByText(/What to watch/i)).toBeInTheDocument();
  });

  it(`When user navigate to /login`, () => {
    const history = createMemoryHistory();
    history.push(AppRoute.LOGIN);

    render(
        <redux.Provider store={mockStore(store)}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  });

  it(`When user navigate to /mylist`, () => {
    const history = createMemoryHistory();
    history.push(AppRoute.MY_LIST);

    render(
        <redux.Provider store={mockStore(store)}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/My list/i)).toBeInTheDocument();
  });

  it(`When user navigate to /films/:id and film with this id exists`, () => {
    const history = createMemoryHistory();
    history.push(`/films/1`);

    render(
        <redux.Provider store={mockStore(store)}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/Overview/i)).toBeInTheDocument();
    expect(screen.getByText(/Details/i)).toBeInTheDocument();
    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
    expect(screen.getByText(/More like this/i)).toBeInTheDocument();
  });

  it(`When user navigate to /films/:id and film with this id not exists`, () => {
    const history = createMemoryHistory();
    history.push(`/films/non-existent-id`);

    render(
        <redux.Provider store={mockStore(store)}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/Page not found/i)).toBeInTheDocument();
    expect(screen.getByText(/Go to Main page/i)).toBeInTheDocument();
  });

  it(`When user navigate to /films/:id/review and film with this id exists`, () => {
    const history = createMemoryHistory();
    history.push(`films/1/review`);

    render(
        <redux.Provider store={mockStore(store)}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/Add review/i)).toBeInTheDocument();
    expect(screen.getByText(/Post/i)).toBeInTheDocument();
  });

  it(`When user navigate to /films/:id/review and film with this id not exists`, () => {
    const history = createMemoryHistory();
    history.push(`films/non-existent-id/review`);

    render(
        <redux.Provider store={mockStore(store)}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/Page not found/i)).toBeInTheDocument();
    expect(screen.getByText(/Go to Main page/i)).toBeInTheDocument();
  });

  it(`When user navigate to /player/:id and film with this id exists`, () => {
    const history = createMemoryHistory();
    history.push(`/player/1`);

    render(
        <redux.Provider store={mockStore(store)}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/Full screen/i)).toBeInTheDocument();
    expect(screen.getByText(/Exit/i)).toBeInTheDocument();
  });

  it(`When user navigate to /player/:id and film with this id not exists`, () => {
    const history = createMemoryHistory();
    history.push(`/player/non-existent-id`);

    render(
        <redux.Provider store={mockStore(store)}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/Page not found/i)).toBeInTheDocument();
    expect(screen.getByText(/Go to Main page/i)).toBeInTheDocument();
  });

  it(`When user navigate to unknown route`, () => {
    const history = createMemoryHistory();
    history.push(`/unknown`);

    render(
        <redux.Provider store={mockStore({})}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/Page not found/i)).toBeInTheDocument();
    expect(screen.getByText(/Go to Main page/i)).toBeInTheDocument();
  });
});
