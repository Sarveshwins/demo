import { getStateOfRemoteData } from "./includes";
import { attemptOtpActions } from "../actions/OtpScreen";

const OtpState = getStateOfRemoteData(
  "OtpSuccess",
  "OtpFailure",
  "OtpFetching",
  "OtpData",
  "OtpError"
);

export const OtpScreenReducer = (
  state = {
    ...OtpState.initial(),
  },
  action = {}
) => {
  switch (action.type) {
    case attemptOtpActions.types.progress:
      state.OtpData = [];
      return OtpState.isFetching(state);

    case attemptOtpActions.types.success:
      return OtpState.success(state, action);

    case attemptOtpActions.types.failure:
      return OtpState.failure(state, action);

    default:
      return state;
  }
};
