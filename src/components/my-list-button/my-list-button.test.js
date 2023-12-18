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
import {MyListButton} from './my-list-button';

const api = createAPI(() => {});
const middleware = [thunk.withExtraArgument(api)];
const mockStore = configureStore(middleware);

describe(`My-list-button testing`, () => {

  it(`Component is render correctly`, () => {
    const store = mockStore(storeFilledMock);
    const history = createMemoryHistory();
    const exampleId = 1;

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <MyListButton id={exampleId} />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByTestId(`my-list-button`)).toBeInTheDocument();
  });

  it(`When film is not in favorites list`, () => {
    const store = mockStore({
      DATA: {
        favorites: [],
      },
    });
    const history = createMemoryHistory();
    const exampleId = 1;

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <MyListButton id={exampleId} />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByTestId(`not-in-favorite`)).toBeInTheDocument();
  });

  it(`When user click on button`, () => {
    const store = mockStore(storeFilledMock);
    const history = createMemoryHistory();
    const exampleId = 1;

    store.dispatch = jest.fn();

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <MyListButton id={exampleId} />
          </Router>
        </redux.Provider>
    );

    userEvent.click(screen.getByTestId(`my-list-button`));
    expect(store.dispatch).toBeCalled();
  });
});
