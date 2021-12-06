export const basicActions = function (actionName) {
  const types = {
    start: actionName,
    progress: actionName + '_INPROGRESS',
    success: actionName + '_SUCCESS',
    failure: actionName + '_FAILURE',
  };

  return {
    types,
    start(payload) {
      return {
        type: types.start,
        payload: payload,
      };
    },
    progress(payload) {
      return {
        type: types.progress,
        payload: payload,
      };
    },
    success(payload) {
      return {
        type: types.success,
        payload: payload,
      };
    },
    failure(payload) {
      return {
        type: types.failure,
        payload: payload,
      };
    },
  };
};
