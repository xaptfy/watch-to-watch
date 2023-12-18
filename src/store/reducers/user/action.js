import {createAction} from '@reduxjs/toolkit';

const ActionType = {
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  SET_AUTH_INFO: `user/setAuthenticationInfo`,
  SET_FORM_DISABLED: `user/setFormDisabled`,
  SET_ERROR_MESSAGE: `user/setErrorMessage`,
};

const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => {
  return {
    payload: status,
  };
});

const setAuthInfo = createAction(ActionType.SET_AUTH_INFO, (info) => {
  return {
    payload: info,
  };
});

const setFormDisabled = createAction(ActionType.SET_FORM_DISABLED, (status) => {
  return {
    payload: status,
  };
});

const setErrorMessage = createAction(ActionType.SET_ERROR_MESSAGE, (errorMessage) => {
  return {
    payload: errorMessage,
  };
});

export {
  ActionType,
  requireAuthorization,
  setAuthInfo,
  setFormDisabled,
  setErrorMessage,
};
