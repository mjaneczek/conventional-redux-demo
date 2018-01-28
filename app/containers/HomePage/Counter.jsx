import React from 'react';
import { connectInteractors } from 'conventional-redux';

class Counter extends React.Component {
  render () {
    return (
      <div>
        <h3>Current value: {this.p('counter')}</h3>

        <button className="btn btn-primary" onClick={() => this.d('counter:increment')}>
          Increment
        </button>

        <button className="btn btn-danger" onClick={() => this.d('counter:doubleAsync')}>
          Double (Async)
        </button>
      </div>
    )
  }
}

export default connectInteractors(Counter, ['counter']);
