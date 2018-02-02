export default
`// component
const Counters = (p,d) => <div>
  <div>
    <h3>Counter A: {p('counter_a')}</h3>

    <button onClick={() => d('counter_a:increment')}>
      Increment
    </button>
  </div>

  <div>
    <h3>Counter B: {p('counter_b')}</h3>

    <button onClick={() => d('counter_b:increment')}>
      Increment
    </button>
  </div>

  <div>
    <h3>Options</h3>

    <button onClick={() => d('cleaner:restart')}>
      Restart all
    </button>
  </div>
</div>

// connect method
export default connectInteractors(Counters, ['counter_a', 'counter_b', 'cleaner']);

// interactors
class CounterInteractor {
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

class CleanerInteractor {
  restart() {
    alert("Reseting the counters...");
  }

  onRestart() {
    return this.state;
  }
}`
