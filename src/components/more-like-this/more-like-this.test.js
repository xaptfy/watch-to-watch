import React from 'react';
import {Router} from 'react-router-dom';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import {render, screen} from '@testing-library/react';
import {storeFilledMock} from '../../test-mocks';
import {createMemoryHistory} from 'history';
import thunk from 'redux-thunk';
import {createAPI} from '../../services/api';
import {MoreLikeThis} from './more-like-this';

const api = createAPI(() => {});
const middleware = [thunk.withExtraArgument(api)];
const mockStore = configureStore(middleware);

describe(`More-like-this testing`, () => {

  it(`Component is render correctly`, () => {
    const store = mockStore(storeFilledMock);
    const history = createMemoryHistory();
    const exampleGenre = `Adventure`;
    const exampleId = 3;

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <MoreLikeThis genre={exampleGenre} selectedFilmId={exampleId} />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByTestId(`like-this`)).toBeInTheDocument();
  });
});


