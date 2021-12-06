import {getStateOfRemoteData} from './includes';
import {attemptLoginActions} from '../actions/Login';

const loginState = getStateOfRemoteData(
  'loginSuccess',
  'loginFailure',
  'loginFetching',
  'loginData',
  'loginError',
);

export const loginReducer = (
  state = {
    ...loginState.initial(),
  },
  action = {},
) => {
  switch (action.type) {
    case attemptLoginActions.types.progress:
      return loginState.isFetching(state);

    case attemptLoginActions.types.success:
      return loginState.success(state, action);

    case attemptLoginActions.types.failure:
      return loginState.failure(state, action);

    default:
      return state;
  }
};
