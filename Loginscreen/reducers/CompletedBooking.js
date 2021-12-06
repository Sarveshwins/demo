import {getStateOfRemoteData} from './includes';
import {attemptCompletBookingActions} from '../actions/CompletedBooking';

const completbookingState = getStateOfRemoteData(
  'CbookingSuccess',
  'CbookingFailure',
  'CbookingFetching',
  'CbookingData',
  'CbookingError',
);

export const completebookingReducer = (
  state = {
    ...completbookingState.initial(),
  },
  action = {},
) => {
  switch (action.type) {
    case attemptCompletBookingActions.types.progress:
      state.CbookingData = [];
      return completbookingState.isFetching(state);

    case attemptCompletBookingActions.types.success:
      return completbookingState.success(state, action);

    case attemptCompletBookingActions.types.failure:
      return completbookingState.failure(state, action);

    default:
      return state;
  }
};
