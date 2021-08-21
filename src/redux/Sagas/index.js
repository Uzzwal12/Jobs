import { takeLatest } from "redux-saga/effects";
import { userActions } from "../actionTypes";

import { userLoginSaga } from "./auth";

export default function* watcherSaga() {
  // ---------------------------------------User---------------------------------------------//
  yield takeLatest(userActions.USER_LOGIN_INITIATE, userLoginSaga);
}
