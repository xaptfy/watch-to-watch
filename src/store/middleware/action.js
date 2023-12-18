import {createAction} from '@reduxjs/toolkit';

const ActionType = {
  REDIRECT_TO_ROUTE: `route/redirectToRoute`,
};

const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (route) => {
  return {
    payload: route,
  };
});

export {
  ActionType,
  redirectToRoute,
};
