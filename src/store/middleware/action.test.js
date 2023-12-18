import {ActionType, redirectToRoute} from "./action";

describe(`Custom middlware actions work correctly`, () => {

  it(`Action 'redirectToRoute' returns correct action with payload`, () => {
    const url = ``;

    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: url,
    };

    expect(redirectToRoute(url)).toEqual(expectedAction);
  });
});
