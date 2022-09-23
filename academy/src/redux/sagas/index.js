import { all, call, delay, fork, put, takeEvery } from "redux-saga/effects";
import { testSaga } from "./testSaga";

// export function* helloSaga() {
//   console.log("Hello Saga!");
// }

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([fork(testSaga)]);
}
