import { put } from "redux-saga/effects";
import { sendRequest } from "../../utils";
import {
  userSignUpFailure,
  userSignUpSuccess,
  userLoginSuccess,
  userLoginFailure,
} from "../Actions/auth";
const url = process.env.REACT_APP_BASE_URL;

// export function* userSignUpSaga({payload}) {
//   try {
//     const userSignUp = gql`
//       mutation fields($name:String!,$email:String!, $password:String!){
//         createUser(
//           name: $name
//           email: $email
//           password: $password
//         ){
//           _id
//           name
//           email
//         }
//       }
//     `
//       const result = yield client.mutate({
//         mutation: userSignUp,
//         variables: payload
//       })
//       yield put(userSignUpSuccess(result))
//   } catch (error) {
//     const errorString = error.graphQLErrors[0].message
//     yield put(userSignUpFailure(errorString))

//   }
// }

export function* userLoginSaga({ payload }) {
  try {
    const config = {
      method: "post",
      url: `${url}auth/login`,
      headers: {
        "Content-Type": "application/json",
      },
      data: payload,
    };
    const result = yield sendRequest(config);
    console.log("Result", result);
    yield put(userLoginSuccess(result.data));
  } catch (error) {
    const errorString = error.message;
    yield put(userLoginFailure(errorString));
  }
}
