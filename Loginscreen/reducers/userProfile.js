import {getStateOfRemoteData} from './includes';
import {attemptprofileActions} from '../actions/userProfile';

const userprofileState = getStateOfRemoteData(
  'userSuccess',
  'userFailure',
  'userFetching',
  'userData',
  'userError',
);

export const userProfileReducer = (
  state = {
    ...userprofileState.initial(),
  },
  action = {},
) => {
  switch (action.type) {
    case attemptprofileActions.types.progress:
      state.bookingData = [];
      return userprofileState.isFetching(state);

    case attemptprofileActions.types.success:
      return userprofileState.success(state, action);

    case attemptprofileActions.types.failure:
      return userprofileState.failure(state, action);

    default:
      return state;
  }
};
