import {put, takeLatest, call, select} from 'redux-saga/effects';
import {attemptBookingActions} from '../actions/Booging';
import {getMyBookingPath, STATUS_OK} from '../constants/ApiConst';
import {request} from '../includes/ApiRequest';
import {Alert} from 'react-native';

export function* handleBookingRequest(action) {
  try {
    yield put(attemptBookingActions.progress());
    let loginPath = getMyBookingPath();
    let data = action.payload;
    yield console.log('req >>> ', JSON.stringify(data));
    let response = yield request('post', loginPath, data); //call(request, 'POST', loginPath, data);
    yield console.log('Res >>> ', JSON.stringify(response));
    if (response.Status === STATUS_OK) {
      yield put(attemptBookingActions.success(response));
      if (typeof action.payload.extraData === 'function') {
        action.payload.extraData(response.data);
      }
    } else {
      yield put(attemptBookingActions.failure(response));
      alert(response.data.message);
    }
  } catch (error) {
    console.log('api error', error);
    yield put(attemptBookingActions.failure(error));
    if (error.message === 'Request failed with status code 401') {
    } else {
      Alert.alert('Error', error.message);
    }
  }
}

export function* watchBookingRequest() {
  yield takeLatest(attemptBookingActions.types.start, handleBookingRequest);
}
