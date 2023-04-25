import { getStateOfRemoteData } from "./includes";

import { attemptBookingDetailsActions } from "../actions/BookinDetails";

const bookingDetailsState = getStateOfRemoteData(
  "bookingDetailsSuccess",
  "bookingDetailsFailure",
  "bookingDetailsFetching",
  "bookingDetailsData",
  "bookingDetailsError"
);

export const bookingDetailsReducer = (
  state = {
    ...bookingDetailsState.initial(),
  },
  action = {}
) => {
  switch (action.type) {
    case attemptBookingDetailsActions.types.progress:
      state.bookingDetailsData = [];
      return bookingDetailsState.isFetching(state);

    case attemptBookingDetailsActions.types.success:
      return bookingDetailsState.success(state, action);

    case attemptBookingDetailsActions.types.failure:
      return bookingDetailsState.failure(state, action);

    default:
      return state;
  }
};
