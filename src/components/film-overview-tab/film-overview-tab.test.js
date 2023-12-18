import React from 'react';
import {Router} from 'react-router-dom';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {FilmOverviewTab} from './film-overview-tab';
import {oneFilmMock} from '../../test-mocks';

const mockStore = configureStore({});
const store = mockStore({});

describe(`Film-Overview tab testing`, () => {

  it(`Component is render correctly`, () => {
    const history = createMemoryHistory();

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <FilmOverviewTab film={oneFilmMock}/>
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/Director/i)).toBeInTheDocument();
    expect(screen.getByText(/Starring/i)).toBeInTheDocument();
  });
});
