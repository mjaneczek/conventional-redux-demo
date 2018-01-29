import React from 'react';
import Highlight from 'react-highlight';
import 'highlight.js/styles/agate.css';

export default () => <Highlight className='javascript' dangerousInnerHTML={true}>
  {codeSnippet}
</Highlight>

const codeSnippet = `// class style component
class Counter extends React.Component {
  render () {
    return (
      <div>
        <h3>Current value: {this.p('counter')}</h3>

        <button onClick={() => this.d('counter:increment')}>
          Increment
        </button>

        <button onClick={() => this.d('counter:doubleAsync')}>
          Double (Async)
        </button>

        <button onClick={() => this.d('counter:reset')}>
          Reset
        </button>
      </div>
    )
  }
}

// functional style component (the equivalent)
const Counter = (p,d) => (<div>
  <h3>Current value: {p('counter')}</h3>

  <button onClick={() => d('counter:increment')}>
    Increment
  </button>

  <button onClick={() => d('counter:doubleAsync')}>
    Double (Async)
  </button>

  <button onClick={() => d('counter:reset')}>
    Reset
  </button>
</div>)

// connect method
export default connectInteractors(Counter, ['counter']);

// interactor
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
}`
