import {createReducer} from '@reduxjs/toolkit';
import {AuthorizationStatus} from '../../../consts';
import {requireAuthorization, setAuthInfo, setErrorMessage, setFormDisabled} from './action';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  authInfo: {},
  errorMessage: null,
  isFormDisabled: false,
};

const user = createReducer(initialState, (builder) => {
  builder.addCase(requireAuthorization, (state, action) => {
    state.authorizationStatus = action.payload;
  });
  builder.addCase(setAuthInfo, (state, action) => {
    state.authInfo = action.payload;
  });
  builder.addCase(setErrorMessage, (state, action) => {
    state.errorMessage = action.payload;
  });
  builder.addCase(setFormDisabled, (state, action) => {
    state.isFormDisabled = action.payload;
  });
});

export {user};
