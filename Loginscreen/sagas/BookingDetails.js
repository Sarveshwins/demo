import { put, takeLatest, call, select } from "redux-saga/effects";
import { getBookingDetails, STATUS_OK } from "../constants/ApiConst";
import { request } from "../includes/ApiRequest";
import { Alert } from "react-native";
import { attemptBookingDetailsActions } from "../actions/BookinDetails";

export function* handleBookingDetailsRequest(action) {
  try {
    yield put(attemptBookingDetailsActions.progress());
    let path = getBookingDetails();
    let data = action.payload;
    yield console.log("req >>> ", JSON.stringify(data));
    let response = yield request("post", path, data); //call(request, 'POST', loginPath, data);
    yield console.log("Res >>> ", JSON.stringify(response));
    if (response.Status === STATUS_OK) {
      yield put(attemptBookingDetailsActions.success(response));
      if (typeof action.payload.extraData === "function") {
        action.payload.extraData(response.data);
      }
    } else {
      yield put(attemptBookingDetailsActions.failure(response));
      alert(response.data.message);
    }
  } catch (error) {
    console.log("api error", error);
    yield put(attemptBookingDetailsActions.failure(error));
    if (error.message === "Request failed with status code 401") {
    } else {
      Alert.alert("Error", error.message);
    }
  }
}

export function* watchBookingDetailsRequest() {
  yield takeLatest(
    attemptBookingDetailsActions.types.start,
    handleBookingDetailsRequest
  );
}
