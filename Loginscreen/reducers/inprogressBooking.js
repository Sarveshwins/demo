import {getStateOfRemoteData} from './includes';
import {attemptinprogressBookingActions} from '../actions/inprogressBooking';

const inproressbookingState = getStateOfRemoteData(
  'inbookingSuccess',
  'inbookingFailure',
  'inbookingFetching',
  'inbookingData',
  'inbookingError',
);

export const inprogressbookingReducer = (
  state = {
    ...inproressbookingState.initial(),
  },
  action = {},
) => {
  switch (action.type) {
    case attemptinprogressBookingActions.types.progress:
      state.inbookingData = [];
      return inproressbookingState.isFetching(state);

    case attemptinprogressBookingActions.types.success:
      return inproressbookingState.success(state, action);

    case attemptinprogressBookingActions.types.failure:
      return inproressbookingState.failure(state, action);

    default:
      return state;
  }
};
