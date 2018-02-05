import { createLogger } from 'redux-logger'

export default createLogger({
  stateTransformer: (state) => {
    const newState = {};
    const stateObj = state.toObject();

    for (const i of Object.keys(stateObj)) {
      if(stateObj[i] && stateObj[i].toJS) {
        newState[i] = stateObj[i].toJS();
      } else {
        newState[i] = stateObj[i];
      }
    }

    return newState;
  }
});
