import React from 'react';
import {Router} from 'react-router-dom';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {FilmReviewsTab} from './film-reviews-tab';
import {reviewsMocks} from '../../test-mocks';

const mockStore = configureStore({});
const store = mockStore({
  DATA: {
    reviewsForSelectedFilm: reviewsMocks,
    isReviewsLoaded: true,
  },
});

describe(`Film-Reviews tab testing`, () => {

  it(`Component is render correctly`, () => {
    const history = createMemoryHistory();

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <FilmReviewsTab />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByTestId(`reviews`)).toBeInTheDocument();
  });
});
