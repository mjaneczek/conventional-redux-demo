import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';
import { combineReducers } from 'redux-immutable';
import { createConventionalReduxRootReducer } from 'conventional-redux';

const routeInitialState = fromJS({ location: null });

function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    case LOCATION_CHANGE:
      return state.merge({
        location: action.payload,
      });
    default:
      return state;
  }
}

export default function createReducer() {
  return createConventionalReduxRootReducer({
    route: routeReducer
  }, combineReducers);
}
