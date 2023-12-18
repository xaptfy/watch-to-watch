import React from 'react';
import {Router} from 'react-router-dom';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {FilmDetailsTab} from './film-details-tab';
import {oneFilmMock} from '../../test-mocks';

const mockStore = configureStore({});
const store = mockStore({});

describe(`Film-Details tab testing`, () => {

  it(`Component is render correctly`, () => {
    const history = createMemoryHistory();

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <FilmDetailsTab film={oneFilmMock}/>
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/Director/i)).toBeInTheDocument();
    expect(screen.getByText(/Starring/i)).toBeInTheDocument();
    expect(screen.getByText(/Run Time/i)).toBeInTheDocument();
    expect(screen.getByText(/Genre/i)).toBeInTheDocument();
    expect(screen.getByText(/Released/i)).toBeInTheDocument();
  });
});

