import { fromJS } from 'immutable';

export default class FilterInteractor {
  defaultState() {
    return fromJS({ current: null, options: [
      {label: 'Ruby', value: 'Ruby'},
      {label: 'JavaScript', value: 'JavaScript'},
      {label: 'Scala', value: 'Scala'}
    ]});
  }

  onSetCurrent(value) {
    return this.state.set('current', value)
  }
}
