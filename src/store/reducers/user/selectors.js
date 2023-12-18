const selectAuthStatus = (state) => state.USER.authorizationStatus;
const selectAuthInfo = (state) => state.USER.authInfo;
const selectErrorMessage = (state) => state.USER.errorMessage;
const selectFormDisabled = (state) => state.USER.isFormDisabled;

export {
  selectAuthStatus,
  selectAuthInfo,
  selectErrorMessage,
  selectFormDisabled,
};
