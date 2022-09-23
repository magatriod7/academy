import { TEST_GET_FAILURE, TEST_GET_REQUEST, TEST_GET_SUCCESS } from "../type";
import { all, call, put, takeEvery, fork } from "redux-saga/effects";
import axios from "axios";

const axiosTestGetSaga = (action) => {
  return axios.get("http://localhost:3001/test");
};
function* testGetSaga(action) {
  try {
    const posts = yield call(axiosTestGetSaga, action.payload);
    yield console.log(posts.data);
    yield put({
      type: TEST_GET_SUCCESS,
      payload: { testInfo: posts.data, test: true },
    }); // 성공 액션 디스패치
  } catch (e) {
    yield put({
      type: TEST_GET_FAILURE,
      error: true,
      payload: { errmsg: e },
    }); // 실패 액션 디스패치
  }
}

function* watchTestGet() {
  yield takeEvery(TEST_GET_REQUEST, testGetSaga);
}

export function* testSaga() {
  yield all([fork(watchTestGet)]);
}
