import {getStateOfRemoteData} from './includes';
import {attemptUserRegisterActions} from '../actions/UserRegister';

const UserRegisterState = getStateOfRemoteData(
  'UserRegisterSuccess',
  'UserRegisterFailure',
  'UserRegisterFetching',
  'UserRegisterData',
  'UserRegisterError',
);

export const UserRegisterReducer = (
  state = {
    ...UserRegisterState.initial(),
  },
  action = {},
) => {
  switch (action.type) {
    case attemptUserRegisterActions.types.progress:
      state.UserRegisterData = [];
      return UserRegisterState.isFetching(state);

    case attemptUserRegisterActions.types.success:
      return UserRegisterState.success(state, action);

    case attemptUserRegisterActions.types.failure:
      return UserRegisterState.failure(state, action);

    default:
      return state;
  }
};
