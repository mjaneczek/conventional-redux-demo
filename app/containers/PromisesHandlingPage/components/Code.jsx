import React from 'react';
import Highlight from 'react-highlight';
import 'highlight.js/styles/agate.css';

export default () => <Highlight className='javascript' dangerousInnerHTML={true}>
  {codeSnippet}
</Highlight>

const codeSnippet = `// component
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
