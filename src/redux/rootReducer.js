import { combineReducers } from "redux";
import auth from "./Reducers/auth";
import postReducer from "./Reducers/post";

const rootReducer = combineReducers({
  auth,
  postReducer
});

export default rootReducer;
