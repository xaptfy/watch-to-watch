import React from 'react';
import {Router} from 'react-router-dom';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import {createAPI} from '../../services/api';
import * as redux from 'react-redux';
import userEvent from '@testing-library/user-event';
import {fireEvent, render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {AuthorizationStatus} from '../../consts';
import {SignInPage} from './sign-in-page';

const api = createAPI(() => {});
const middleware = [thunk.withExtraArgument(api)];
const mockStore = configureStore(middleware);

describe(`Sign-in page testing`, () => {

  it(`Component is render correctly`, () => {
    const history = createMemoryHistory();
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.UNKNOWN,
      }
    });

    store.dispatch = jest.fn();

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <SignInPage />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByRole(`heading`, {textContenht: `Sign in`})).toBeInTheDocument();
    expect(screen.getByText(/2019 What to watch Ltd/i)).toBeInTheDocument();
    userEvent.type(screen.getByTestId(`user-email`), `checking@email`);
    expect(screen.getByDisplayValue(/checking@email/i)).toBeInTheDocument();
    userEvent.type(screen.getByTestId(`user-password`), `checkingpassword`);
    expect(screen.getByDisplayValue(/checkingpassword/i)).toBeInTheDocument();
    expect(screen.getByRole(`button`, {textContenht: `Sign in`})).toBeInTheDocument();
  });

  it(`Component submit data when Sign-in-btn is clicked`, () => {
    const history = createMemoryHistory();

    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.UNKNOWN,
      }
    });

    store.dispatch = jest.fn();

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <SignInPage />
          </Router>
        </redux.Provider>
    );

    userEvent.type(screen.getByTestId(`user-email`), `checking@email.ru`);
    userEvent.type(screen.getByTestId(`user-password`), `checkingpassword`);
    fireEvent.submit(screen.getByTestId(`sign-in-form`));
    expect(store.dispatch).toBeCalled();
    const action = store.dispatch.mock.calls[0][0];
    expect(action).toBeInstanceOf(Function);
  });

  it(`Component shows error when authorizationStatus is error`, () => {
    const history = createMemoryHistory();

    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.ERROR,
      }
    });

    store.dispatch = jest.fn();

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <SignInPage />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/Please try again/i)).toBeInTheDocument();
  });
});
