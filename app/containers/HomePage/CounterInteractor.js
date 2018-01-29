export default class CounterInteractor {
  defaultState() {
    return 1;
  }

  doubleAsync() {
    setTimeout(() => { this.dispatch('counter:double') }, 500)
  }

  reset() {
    alert("Reseting the state...");
  }

  onReset() {
    return 1;
  }

  onIncrement() {
    return this.state + 1;
  }

  onDouble() {
    return this.state * 2;
  }
}
