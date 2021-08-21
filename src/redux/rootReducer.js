import { combineReducers } from "redux";
import auth from "./Reducers/auth";

const rootReducer = combineReducers({
  auth,
});

export default rootReducer;
