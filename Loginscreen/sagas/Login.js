import {put, takeLatest, call, select} from 'redux-saga/effects';
import {attemptLoginActions} from '../actions/Login';
import {getLoginPath, STATUS_OK} from '../constants/ApiConst';
import {request} from '../includes/ApiRequest';
import {Alert} from 'react-native';

export function* handleLoginRequest(action) {
  try {
    yield put(attemptLoginActions.progress());
    let loginPath = getLoginPath();
    let data = action.payload;
    yield console.log('req >>> ', JSON.stringify(data));
    let response = yield request('post', loginPath, data); //call(request, 'POST', loginPath, data);
    yield console.log('Res >>> ', JSON.stringify(response));
    if (response.data.status === true) {
      yield put(attemptLoginActions.success(response));
      if (typeof action.payload.extraData === 'function') {
        action.payload.extraData(response.data);
      }
    } else {
      yield put(attemptLoginActions.failure(response));
      alert(response.data.message);
    }
  } catch (error) {
    yield put(attemptLoginActions.failure(error));
    if (error.message === '203') {
      Alert.alert('Email or password is wrong');
    } else {
      Alert.alert('Error', error.message);
    }
  }
}

export function* watchLoginRequest() {
  yield takeLatest(attemptLoginActions.types.start, handleLoginRequest);
}
