import { TEST_GET_FAILURE, TEST_GET_REQUEST, TEST_GET_SUCCESS } from "../type";

const initialState = {
  testInfo: [],
  test: false,
  errmsg: "",
};

export default function testReducer(state = initialState, action) {
  switch (action.type) {
    case TEST_GET_REQUEST:
      return {
        ...state,
        testInfo: {},
        errmsg: "",
      };
    case TEST_GET_SUCCESS:
      return {
        ...state,
        testInfo: action.payload.testInfo,
        errmsg: "",
      };
    case TEST_GET_FAILURE:
      return {
        ...state,
        errmsg: action.payload.errmsg,
      };
    default:
      return state;
  }
}
