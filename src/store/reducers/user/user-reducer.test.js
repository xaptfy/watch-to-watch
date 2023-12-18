import {user} from './user-reducer';
import {ActionType} from './action';
import {storeInitialMock} from '../../../test-mocks';
import {AuthorizationStatus} from '../../../consts';

describe(`User-reducer works correctly`, () => {

  it(`without parameters should return initial state`, () => {
    const initialState = storeInitialMock.USER;
    expect(user(undefined, {}))
      .toEqual(initialState);
  });

  it(`should update authorizationStatus by the received value`, () => {
    const status = AuthorizationStatus.NO_AUTH;

    const state = {
      authorizationStatus: AuthorizationStatus.UNKNOWN,
    };

    const action = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };

    expect(user(state, action))
      .toEqual({authorizationStatus: status});
  });

  it(`should update authInfo by the received value`, () => {
    const status = AuthorizationStatus.NO_AUTH;

    const state = {
      authorizationStatus: AuthorizationStatus.UNKNOWN,
    };

    const action = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };

    expect(user(state, action))
      .toEqual({authorizationStatus: status});
  });

  it(`should update errorMessage by the received value`, () => {
    const message = `message`;

    const state = {
      errorMessage: null,
    };

    const action = {
      type: ActionType.SET_ERROR_MESSAGE,
      payload: message,
    };

    expect(user(state, action))
      .toEqual({errorMessage: message});
  });

  it(`should update isFormDisabled by the received value`, () => {
    const status = true;

    const state = {
      isFormDisabled: false,
    };

    const action = {
      type: ActionType.SET_FORM_DISABLED,
      payload: status,
    };

    expect(user(state, action))
      .toEqual({isFormDisabled: status});
  });
});
