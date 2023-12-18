import React from 'react';
import {Router} from 'react-router-dom';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import {createAPI} from '../../services/api';
import * as redux from 'react-redux';
import userEvent from '@testing-library/user-event';
import {fireEvent, render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {CommentForm} from './comments-form';


const api = createAPI(() => {});
const middleware = [thunk.withExtraArgument(api)];
const mockStore = configureStore(middleware);

describe(`Comment form testing`, () => {

  it(`Component is render correctly`, () => {
    const history = createMemoryHistory();
    const exampleId = 1;
    const store = mockStore({
      USER: {
        errorMessage: null,
      },
    });

    store.dispatch = jest.fn();

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <CommentForm id={exampleId}/>
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/Post/i)).toBeInTheDocument();
    userEvent.type(screen.getByTestId(`add-review-textarea`), `Checking text-area`);
    expect(screen.getByDisplayValue(/Checking text-area/i)).toBeInTheDocument();
  });

  it(`Component submit data when submit-btn is clicked`, () => {
    const history = createMemoryHistory();
    const exampleId = 1;

    const store = mockStore({
      USER: {
        errorMessage: null,
      },
    });

    store.dispatch = jest.fn();

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <CommentForm id={exampleId} />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/Post/i)).toBeInTheDocument();
    userEvent.type(screen.getByTestId(`add-review-textarea`), `Checking text-area`);
    expect(screen.getByDisplayValue(/Checking text-area/i)).toBeInTheDocument();
    fireEvent.submit(screen.getByTestId(`add-review-form`));
    expect(store.dispatch).toBeCalled();
    const action = store.dispatch.mock.calls[0][0];
    expect(action).toBeInstanceOf(Function);
  });
});

