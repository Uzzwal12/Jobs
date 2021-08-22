import { createSelector } from "reselect";

export const getMemoizedUserData = createSelector(
  (state) => state.auth,
  (authState) => {
    const {
      userLogin,
      error,
      userLoginSuccess,
      userSignUpSuccess,
      userSignUp,
      validEmail,
      forgotPasswordLoader,
      forgotPasswordValidUserData,
      changePasswordLoader,
      passwordChangeSuccess,
      changedPasswordUserData
    } = authState;

    return {
      userLogin,
      error,
      userSignUpSuccess,
      userLoginSuccess,
      userSignUp,
      validEmail,
      forgotPasswordLoader,
      forgotPasswordValidUserData,
      changePasswordLoader,
      passwordChangeSuccess,
      changedPasswordUserData
    };
  }
);
