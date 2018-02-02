import React from 'react';
import { connectInteractors } from 'conventional-redux';

const Counters = (p,d) => <div className="row">
  <div className="col-md-4">
    <h3>Counter A: {p('counter_a')}</h3>

    <button className="btn btn-primary" onClick={() => d('counter_a:increment')}>
      Increment
    </button>
  </div>

  <div className="col-md-4">
    <h3>Counter B: {p('counter_b')}</h3>

    <button className="btn btn-primary" onClick={() => d('counter_b:increment')}>
      Increment
    </button>
  </div>

  <div className="col-md-4">
    <h3>Options</h3>

    <button className="btn btn-warning" onClick={() => d('cleaner:restart')}>
      Restart all
    </button>
  </div>
</div>

export default connectInteractors(Counters, ['counter_a', 'counter_b', 'cleaner']);
