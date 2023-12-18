import React from 'react';
import {Router} from 'react-router-dom';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {oneFilmMock} from '../../test-mocks';
import {createMemoryHistory} from 'history';
import {Tabs} from './tabs';

const mockStore = configureStore({});

describe(`Genres list testing`, () => {

  it(`Component is render correctly`, () => {
    const store = mockStore({});
    const history = createMemoryHistory();

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <Tabs film={oneFilmMock} />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByTestId(`tabs-nav`)).toBeInTheDocument();
    expect(screen.getByText(/Overview/i)).toBeInTheDocument();
    expect(screen.getByText(/Details/i)).toBeInTheDocument();
    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
  });

  it(`Change tabs work correctly`, () => {
    const history = createMemoryHistory();
    const store = mockStore({});

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <Tabs film={oneFilmMock} />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByTestId(`item-overview`)).toHaveClass(`movie-nav__item--active`);
    userEvent.click(screen.getByText(`Details`));
    expect(screen.getByTestId(`item-details`)).toHaveClass(`movie-nav__item--active`);
  });
});

