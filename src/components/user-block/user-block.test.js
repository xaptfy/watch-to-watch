import React from 'react';
import {Router} from 'react-router-dom';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {createMemoryHistory} from 'history';
import thunk from 'redux-thunk';
import {createAPI} from '../../services/api';
import {AuthorizationStatus} from '../../consts';
import {UserBlock} from './user-block';

const api = createAPI(() => {});
const middleware = [thunk.withExtraArgument(api)];
const mockStore = configureStore(middleware);

describe(`User block testing`, () => {

  it(`Component is render correctly when user is not autorized`, () => {
    const history = createMemoryHistory();
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.UNKNOWN,
        authInfo: {},
      },
    });

    store.dispatch = jest.fn();

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <UserBlock />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByTestId(`user-block-link`)).toBeInTheDocument();
    userEvent.click(screen.getByTestId(`user-block-link`));
    expect(store.dispatch).toBeCalled();
  });

  it(`Component is render correctly when user is autorized`, () => {
    const history = createMemoryHistory();
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
        authInfo: {
          [`avatar_url`]: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/3.jpg`,
          email: `user@mail.ru`,
          id: 1,
          name: `UserOne`,
        },
      },
    });

    store.dispatch = jest.fn();

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <UserBlock />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByTestId(`user-block-avatar`)).toBeInTheDocument();
  });
});
