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
import {Logo} from './logo';

const api = createAPI(() => {});
const middleware = [thunk.withExtraArgument(api)];
const mockStore = configureStore(middleware);

describe(`Logo testing`, () => {

  it(`Component is render correctly`, () => {
    const store = mockStore(storeFilledMock);
    const history = createMemoryHistory();

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <Logo />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByTestId(`logo`)).toBeInTheDocument();
  });

  it(`With prop "centered"`, () => {
    const store = mockStore(storeFilledMock);
    const history = createMemoryHistory();

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <Logo centered />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByTestId(`logo__link`)).toHaveClass(`logo__link--light`);
  });

  it(`With prop "onMainPage"`, () => {
    const store = mockStore(storeFilledMock);
    const history = createMemoryHistory();

    store.dispatch = jest.fn();

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <Logo onMainPage />
          </Router>
        </redux.Provider>
    );

    userEvent.click(screen.getByTestId(`logo__link`));
    expect(store.dispatch).not.toBeCalled();
  });
});
