import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import { routerMiddleware } from 'react-router-redux';
import { conventionalReduxMiddleware, setRecreateReducerFunction, registerInteractors } from 'conventional-redux'
import RouteCounterInteractor from './RouteCounterInteractor';
import createReducer from './reducers';
import logger from 'utils/reduxLogger'

export default function configureStore(initialState = {}, history) {
  const middlewares = [
    routerMiddleware(history),
    conventionalReduxMiddleware,
    logger
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
  ];

  const store = createStore(
    createReducer(),
    fromJS(initialState),
    compose(...enhancers)
  );

  // only for debug purpose!
  window.store = store;

  // conventional redux config - registering static interactors
  registerInteractors({
    route_counter: new RouteCounterInteractor()
  });

  // conventional redux config - function to recreate reducer (using to replace dynamic interactors)
  setRecreateReducerFunction(() => store.replaceReducer(createReducer()));

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(createReducer());
    });
  }

  return store;
}
