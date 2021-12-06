import {applyMiddleware, compose, createStore} from 'redux';
import {fromJS} from 'immutable';
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers';
import logger from 'redux-logger';
import sagas from '../sagas';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();
function configureStore(initialState = fromJS({})) {
  const middlewares = [sagaMiddleware, logger];
  const enhancers = [applyMiddleware(...middlewares, thunk)];
  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
      : compose;
  console.log('typeof window', typeof window);
  // Extensions
  // const composeEnhancers = compose;
  const store = createStore(
    reducers,
    composeWithDevTools(composeEnhancers(...enhancers)),
  );

  sagaMiddleware.run(sagas, store.dispatch);

  return store;
}

export default configureStore;
