export const initialState = () => {
  return {
    success: 'success',
    failure: 'failure',
    isFetching: 'isFetching',
    data: 'data',
    error: 'error',
    sort,
  };
};

export const getStateOfRemoteData = (
  success = 'success',
  failure = 'failure',
  isFetching = 'isFetching',
  data = 'data',
  error = 'error',
  sort,
) => ({
  isFetching(state) {
    return {
      ...state,
      [success]: false,
      [failure]: false,
      [isFetching]: true,
    };
  },
  success(state, action, extras = {}) {
    if ('payload' in action && Array.isArray(action.payload.data)) {
      action.payload.data = action.payload.data;
    }

    if (action && typeof sort === 'function') {
      action.payload.data = sort(action.payload.data);
    }

    return {
      ...state,
      [success]: true,
      [failure]: false,
      [isFetching]: false,
      [data]:
        action && action.payload
          ? action.payload.data
            ? action.payload.data
            : action.payload
          : [],
      ...extras,
    };
  },
  failure(state, action) {
    return {
      ...state,
      [success]: false,
      [failure]: true,
      [isFetching]: false,
      [error]: action.payload,
    };
  },
  initial() {
    return {
      [data]: [],
      [isFetching]: false,
      [success]: false,
      [failure]: false,
      [error]: {},
    };
  },
});

export const getStateOfRemoteDeletion = (
  success = 'success',
  failure = 'failure',
  isFetching = 'isFetching',
  error = 'error',
) =>
  getStateOfRemoteData(
    success,
    failure,
    isFetching,
    'apiSendsNoDataInResponseToDeletion',
    error,
  );
