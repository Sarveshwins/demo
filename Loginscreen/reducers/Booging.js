import {getStateOfRemoteData} from './includes';
import {attemptBookingActions} from '../actions/Booging';

const bookingState = getStateOfRemoteData(
  'bookingSuccess',
  'bookingFailure',
  'bookingFetching',
  'bookingData',
  'bookingError',
);

export const bookingReducer = (
  state = {
    ...bookingState.initial(),
  },
  action = {},
) => {
  switch (action.type) {
    case attemptBookingActions.types.progress:
      state.bookingData = [];
      return bookingState.isFetching(state);

    case attemptBookingActions.types.success:
      return bookingState.success(state, action);

    case attemptBookingActions.types.failure:
      return bookingState.failure(state, action);

    default:
      return state;
  }
};
