import React from 'react';
import { connectInteractors } from 'conventional-redux';

const Counter = (p,d) => <div>
  <h3>Current value: {p('counter')}</h3>

  <button className="btn btn-primary mr-2" onClick={() => d('counter:increment')}>
    Increment
  </button>

  <button className="btn btn-danger mr-2" onClick={() => d('counter:doubleAsync')}>
    Double (Async)
  </button>

  <button className="btn btn-warning mr-2" onClick={() => d('counter:reset')}>
    Reset
  </button>
</div>

export default connectInteractors(Counter, ['counter']);
