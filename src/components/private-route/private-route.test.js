import React from 'react';
import {Router, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import {AuthorizationStatus} from '../../consts';
import {PrivateRoute} from './private-route';

const mockStore = configureStore({});
let history;

describe(`PrivateRouter`, () => {
  beforeEach(() => {
    history = createMemoryHistory();
    history.push(`/private-route`);
  });

  it(`should render LoadingScreen when authorizationStatus UNKNOWN`, () => {
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.UNKNOWN,
      }
    });

    store.dispatch = jest.fn();

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <Route exact path="/login"><p>Public Route</p></Route>
            <PrivateRoute
              exact
              path="/private-route"
              render={() => (<p>Private Route</p>)}
            />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
    expect(screen.queryByText(/private-route Route/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Public Route/i)).not.toBeInTheDocument();
  });

  it(`should render component on public route, when user is not authorized`, () => {
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      }
    });

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <PrivateRoute
              exact
              path="/private-route"
              render={() => (<p>Private Route</p>)}
            />
            <Route exact path="/login"><p>Public Route</p></Route>
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/Public Route/i)).toBeInTheDocument();
    expect(screen.queryByText(/Private Route/i)).not.toBeInTheDocument();
  });

  it(`should render component on private route, when user authorized`, () => {
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
      }
    });

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <PrivateRoute
              exact
              path="/private-route"
              render={() => (<p>Private Route</p>)}
            />
            <Route exact path="/login"><p>Public Route</p></Route>
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/Private Route/i)).toBeInTheDocument();
    expect(screen.queryByText(/Public Route/i)).not.toBeInTheDocument();
  });
});
