import {put, takeLatest, call, select} from 'redux-saga/effects';
import {attemptUserRegisterActions} from '../actions/userProfile';
import {getRegisterUser, STATUS_OK} from '../constants/ApiConst';
import {request} from '../includes/ApiRequest';
import {Alert} from 'react-native';

export function* handleUserRegisterRequest(action) {
  try {
    yield put(attemptUserRegisterActions.progress());
    let Path = getRegisterUser();
    let data = action.payload;
    yield console.log('req >>> ', JSON.stringify(data));
    let response = yield request('post', Path, data); //call(request, 'POST', loginPath, data);
    yield console.log('Res >>> ', JSON.stringify(response));
    if (response.Status === STATUS_OK) {
      yield put(attemptUserRegisterActions.success(response));
      if (typeof action.payload.extraData === 'function') {
        action.payload.extraData(response);
      }
    } else {
      yield put(attemptUserRegisterActions.failure(response));
      alert(response.data.message);
    }
  } catch (error) {
    console.log('api error', error);
    yield put(attemptUserRegisterActions.failure(error));
    if (error.message === 'Request failed with status code 401') {
    } else {
      Alert.alert('Error', error.message);
    }
  }
}

export function* watchUserRegisterRequest() {
  yield takeLatest(attemptUserRegisterActions.types.start, handleUserRegisterRequest);
}
