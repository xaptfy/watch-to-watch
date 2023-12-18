import React from 'react';
import {MemoryRouter, Route} from 'react-router-dom';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import {render, screen} from '@testing-library/react';
import {storeFilledMock} from '../../test-mocks';
import {AddReviewPage} from './add-review-page';
import {AppRoute} from '../../consts';

const mockStore = configureStore({});

describe(`Add-review page testing`, () => {

  it(`Component with correct data is render correctly`, () => {
    const store = mockStore(storeFilledMock);
    const correctId = 1;

    render(
        <redux.Provider store={store}>
          <MemoryRouter initialEntries={[`/films/${correctId}/review`]}>
            <Route path={AppRoute.FILM_ADD_REVIEW}>
              <AddReviewPage />
            </Route>
          </MemoryRouter>
        </redux.Provider>
    );

    expect(screen.getByText(/Add review/i)).toBeInTheDocument();
    expect(screen.getByText(/WTW/i)).toBeInTheDocument();
  });

  it(`Component with uncorrect data is render Not Found`, () => {
    const store = mockStore(storeFilledMock);
    const uncorrectId = `uncorrect-id`;

    render(
        <redux.Provider store={store}>
          <MemoryRouter initialEntries={[`/films/${uncorrectId}/review`]}>
            <Route path={AppRoute.FILM_ADD_REVIEW}>
              <AddReviewPage />
            </Route>
          </MemoryRouter>
        </redux.Provider>
    );

    expect(screen.getByText(/Page not found/i)).toBeInTheDocument();
    expect(screen.getByText(/Go to Main page/i)).toBeInTheDocument();
  });
});
