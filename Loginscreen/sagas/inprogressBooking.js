import {put, takeLatest, call, select} from 'redux-saga/effects';
import {attemptinprogressBookingActions} from '../actions/inprogressBooking';
import {getinprogressBookingPath, STATUS_OK} from '../constants/ApiConst';
import {request} from '../includes/ApiRequest';
import {Alert} from 'react-native';

export function* handleinBookingRequest(action) {
  try {
    yield put(attemptinprogressBookingActions.progress());
    let loginPath = getinprogressBookingPath();
    let data = action.payload;
    yield console.log('req >>> ', JSON.stringify(data));
    let response = yield request('post', loginPath, data); //call(request, 'POST', loginPath, data);
    yield console.log('Res >>> ', JSON.stringify(response));
    if (response.Status === STATUS_OK) {
      yield put(attemptinprogressBookingActions.success(response));
      if (typeof action.payload.extraData === 'function') {
        action.payload.extraData(response.data);
      }
    } else {
      yield put(attemptinprogressBookingActions.failure(response));
      alert(response.data.message);
    }
  } catch (error) {
    console.log('api error', error);
    yield put(attemptinprogressBookingActions.failure(error));
    if (error.message === 'Request failed with status code 401') {
    } else {
      Alert.alert('Error', error.message);
    }
  }
}

export function* watchinBookingRequest() {
  yield takeLatest(
    attemptinprogressBookingActions.types.start,
    handleinBookingRequest,
  );
}
