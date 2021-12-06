import {put, takeLatest, call, select} from 'redux-saga/effects';
import {attemptCompletBookingActions} from '../actions/CompletedBooking';
import {getCompletedBookingPath, STATUS_OK} from '../constants/ApiConst';
import {request} from '../includes/ApiRequest';
import {Alert} from 'react-native';

export function* handlecBookingRequest(action) {
  try {
    yield put(attemptCompletBookingActions.progress());
    let loginPath = getCompletedBookingPath();
    let data = action.payload;
    yield console.log('req >>> ', JSON.stringify(data));
    let response = yield request('post', loginPath, data); //call(request, 'POST', loginPath, data);
    yield console.log('Res >>> ', JSON.stringify(response));
    if (response.Status === STATUS_OK) {
      yield put(attemptCompletBookingActions.success(response));
      if (typeof action.payload.extraData === 'function') {
        action.payload.extraData(response.data);
      }
    } else {
      yield put(attemptCompletBookingActions.failure(response));
      alert(response.data.message);
    }
  } catch (error) {
    console.log('api error', error);
    yield put(attemptCompletBookingActions.failure(error));
    if (error.message === 'Request failed with status code 401') {
    } else {
      Alert.alert('Error', error.message);
    }
  }
}

export function* watchCBookingRequest() {
  yield takeLatest(
    attemptCompletBookingActions.types.start,
    handlecBookingRequest,
  );
}
