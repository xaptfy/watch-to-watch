import {
  ActionType,
  requireAuthorization,
  setAuthInfo,
  setFormDisabled,
  setErrorMessage,
} from './action';

describe(`User-reducer actions work correctly`, () => {

  it(`Action 'requireAuthorization' returns correct action with payload`, () => {
    const status = `status`;

    const expectedAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };

    expect(requireAuthorization(status)).toEqual(expectedAction);
  });

  it(`Action 'setAuthInfo' returns correct action with payload`, () => {
    const info = {};

    const expectedAction = {
      type: ActionType.SET_AUTH_INFO,
      payload: info,
    };

    expect(setAuthInfo(info)).toEqual(expectedAction);
  });

  it(`Action 'setFormDisabled' returns correct action with payload`, () => {
    const status = true;

    const expectedAction = {
      type: ActionType.SET_FORM_DISABLED,
      payload: status,
    };

    expect(setFormDisabled(status)).toEqual(expectedAction);
  });

  it(`Action 'setErrorMessage' returns correct action with payload`, () => {
    const message = ``;

    const expectedAction = {
      type: ActionType.SET_ERROR_MESSAGE,
      payload: message,
    };

    expect(setErrorMessage(message)).toEqual(expectedAction);
  });
});
