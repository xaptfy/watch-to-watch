import React from 'react';
import {Router} from 'react-router-dom';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Review} from './review';
import {oneReviewMock} from '../../test-mocks';

const mockStore = configureStore({});
const store = mockStore({});

describe(`Review testing`, () => {

  it(`Component is render correctly`, () => {
    const history = createMemoryHistory();

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <Review review={oneReviewMock}/>
          </Router>
        </redux.Provider>
    );

    expect(screen.getByTestId(`review`)).toBeInTheDocument();
    expect(screen.getByTestId(`review__quote`)).toBeInTheDocument();
  });
});
