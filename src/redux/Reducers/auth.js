import { userActions } from "../actionTypes";

const initialState = {
  userSignUpLoader: false,
  error: "",
  userSignUp: {},
  userLogin: {},
  userLoginSuccess: false,
  userSignUpSuccess: false,
  userLoginLoader: false,
  validEmail: false,
  forgotPasswordLoader: false,
  forgotPasswordValidUserData: {},
};

export default function UserAuthentication(state = initialState, action) {
  const { payload, type } = action;

  switch (type) {
    case userActions.USER_SIGN_UP_INITIATE:
      return {
        ...state,
        userSignUpLoader: true,
      };

    case userActions.USER_SIGN_UP_SUCCESS:
      return {
        ...state,
        userSignUpLoader: false,
        userSignUp: payload,
        userSignUpSuccess: true,
      };
    case userActions.USER_SIGN_UP_FAILURE:
      return {
        ...state,
        userSignUpLoader: false,
        error: payload,
      };

    case userActions.USER_LOGIN_INITIATE:
      return {
        ...state,
        userLoginLoader: true,
      };

    case userActions.USER_LOGIN_SUCCESS:
      return {
        ...state,
        userLoginLoader: false,
        userLogin: payload,
        userLoginSuccess: true,
      };

    case userActions.USER_LOGIN_FAILURE:
      return {
        ...state,
        userLoginLoader: false,
        error: payload,
      };

    case userActions.FORGOT_PASSWORD_INITIATE:
      return {
        ...state,
        forgotPasswordLoader: true,
      };

    case userActions.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        forgotPasswordLoader: false,
        validEmail: true,
        forgotPasswordValidUserData: payload,
      };

    case userActions.FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
        forgotPasswordLoader: false,
        validEmail: false,
        error: payload,
      };

    default:
      return state;
  }
}
