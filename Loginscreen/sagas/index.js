/* eslint-disable prettier/prettier */
import {all} from 'redux-saga/effects';
import {watchLoginRequest} from './Login';
import {watchBookingRequest} from './Booging';
import {watchProfileRequest} from './userProfile';
import {watchCBookingRequest} from './CompletedBooking';
import {watchinBookingRequest} from './inprogressBooking';
import {watchUserRegisterRequest} from './UserRegister';

function* rootSaga() {
  yield all([
    watchLoginRequest(),
    watchBookingRequest(),
    watchProfileRequest(),
    watchCBookingRequest(),
    watchinBookingRequest(),
    watchUserRegisterRequest(),
  ]);
}

export default rootSaga;
