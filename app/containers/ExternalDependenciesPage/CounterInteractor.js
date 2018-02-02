export default class CounterInteractor {
  defaultState() {
    return 1;
  }

  externalDependencies() {
    return [
      { on: 'cleaner:restart', call: this.onReset }
    ]
  }

  onIncrement() {
    return this.state + 1;
  }

  onReset() {
    return 1;
  }
}
