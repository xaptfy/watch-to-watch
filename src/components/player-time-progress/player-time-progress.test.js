import React from 'react';
import {Router} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {PlayerTimeProgress} from './player-time-progress';

describe(`Player progress testing`, () => {

  it(`Component is render correctly and returned data in correct format`, () => {
    const history = createMemoryHistory();
    const exampleTimeProgress = 54;
    const expected = /54%/i;

    render(
        <Router history={history}>
          <PlayerTimeProgress progressPercent={exampleTimeProgress} />
        </Router>
    );

    expect(screen.getByTestId(`progress`)).toBeInTheDocument();
    expect(screen.getByTestId(`progress-toggler`).style.left).toEqual(expect.stringMatching(expected));
  });
});
