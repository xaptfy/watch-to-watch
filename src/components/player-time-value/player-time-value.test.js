import React from 'react';
import {Router} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {PlayerTimeValue} from './player-time-value';

describe(`Player time value testing`, () => {

  it(`Component is render correctly and returned data in correct format`, () => {
    const history = createMemoryHistory();
    const exampleTimeInSec = 1000;
    const expected = /^([01]?\d|2[0-3]):([0-5]\d):([0-5]\d)$/i;

    render(
        <Router history={history}>
          <PlayerTimeValue timeElapsed={exampleTimeInSec} />
        </Router>
    );

    expect(screen.getByTestId(`time-value`)).toBeInTheDocument();
    expect(screen.getByTestId(`time-value`).textContent).toEqual(expect.stringMatching(expected));
  });
});
