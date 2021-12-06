import {put, takeLatest, call, select} from 'redux-saga/effects';
import {attemptprofileActions} from '../actions/userProfile';
import {getProfileDetailsPath, STATUS_OK} from '../constants/ApiConst';
import {request} from '../includes/ApiRequest';
import {Alert} from 'react-native';

export function* handleProfileRequest(action) {
  try {
    yield put(attemptprofileActions.progress());
    let loginPath = getProfileDetailsPath();
    let data = action.payload;
    yield console.log('req >>> ', JSON.stringify(data));
    let response = yield request('post', loginPath, data); //call(request, 'POST', loginPath, data);
    yield console.log('Res >>> ', JSON.stringify(response));
    if (response.Status === STATUS_OK) {
      yield put(attemptprofileActions.success(response));
      if (typeof action.payload.extraData === 'function') {
        action.payload.extraData(response.data);
      }
    } else {
      yield put(attemptprofileActions.failure(response));
      alert(response.data.message);
    }
  } catch (error) {
    console.log('api error', error);
    yield put(attemptprofileActions.failure(error));
    if (error.message === 'Request failed with status code 401') {
    } else {
      Alert.alert('Error', error.message);
    }
  }
}

export function* watchProfileRequest() {
  yield takeLatest(attemptprofileActions.types.start, handleProfileRequest);
}
