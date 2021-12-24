import { put, takeLatest, call, select } from "redux-saga/effects";
import { attemptOtpActions } from "../actions/OtpScreen";
import { getOtp, STATUS_OK } from "../constants/ApiConst";
import { request } from "../includes/ApiRequest";
import { Alert } from "react-native";

export function* handleOtpRequest(action) {
  try {
    yield put(attemptOtpActions.progress());
    let Path = getOtp();
    let data = action.payload;
    yield console.log("req >>> ", JSON.stringify(data));
    let response = yield request("post", Path, data); //call(request, 'POST', loginPath, data);
    yield console.log("Res >>> ", JSON.stringify(response));
    if (response.data.status === true) {
      yield put(attemptOtpActions.success(response));
      if (typeof action.payload.extraData === "function") {
        action.payload.extraData(response.data);
      }
    } else {
      yield put(attemptOtpActions.failure(response));
      alert(response.data.message);
    }
  } catch (error) {
    console.log("api error", error);
    yield put(attemptOtpActions.failure(error));
    if (error.message === "Request failed with status code 401") {
    } else {
      Alert.alert("Error", error.message);
    }
  }
}

export function* watchOtpRequest() {
  yield takeLatest(attemptOtpActions.types.start, handleOtpRequest);
}
