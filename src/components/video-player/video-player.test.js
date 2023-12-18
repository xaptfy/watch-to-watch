import React from 'react';
import {Router} from 'react-router-dom';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import {createAPI} from '../../services/api';
import * as redux from 'react-redux';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {storeFilledMock} from '../../test-mocks';
import {MemoizedVideoPlayer} from './video-player';

const api = createAPI(() => {});
const middleware = [thunk.withExtraArgument(api)];
const mockStore = configureStore(middleware);

describe(`Comment form testing`, () => {
  beforeAll(() => {
    window.HTMLMediaElement.prototype.play = () => {};
    window.HTMLMediaElement.prototype.load = () => {};
  });

  it(`Component with correct data is render correctly`, () => {
    const history = createMemoryHistory();
    const store = mockStore(storeFilledMock);
    const exampleId = 1;
    const ref = jest.fn();

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <MemoizedVideoPlayer id={exampleId} videoPlayerRef={ref}/>
          </Router>
        </redux.Provider>
    );

    expect(screen.getByTestId(`video-player`)).toBeInTheDocument();
  });

  it(`Component with uncorrect data render Not-found page`, () => {
    const history = createMemoryHistory();
    const store = mockStore(storeFilledMock);
    const exampleId = `uncorrectId`;
    const ref = jest.fn();

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <MemoizedVideoPlayer id={exampleId} videoPlayerRef={ref} />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/Page not found/i)).toBeInTheDocument();
  });

  it(`Component with prop onPlayerPage have a correct class`, () => {
    const history = createMemoryHistory();
    const store = mockStore(storeFilledMock);
    const exampleId = 1;
    const ref = jest.fn();
    const correctClass = `player__video`;

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <MemoizedVideoPlayer id={exampleId} videoPlayerRef={ref} onPlayerPage />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByTestId(`video-player`)).toHaveClass(correctClass);
  });
});

