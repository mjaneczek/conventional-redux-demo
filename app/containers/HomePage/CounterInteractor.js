export default class CounterInteractor {
  defaultState() {
    return 0;
  }

  doubleAsync() {
    setTimeout(() => { this.dispatch('counter:double') }, 500)
  }

  reset() {
    alert("Reseting the state...");
  }

  onReset() {
    return 0;
  }

  onIncrement() {
    return this.state + 1;
  }

  onDouble() {
    return this.state * 2;
  }

  onDoubleAsync() {
    return this.state;
  }
}
