import React from 'react';
import { connectInteractors } from 'conventional-redux';

const footer = () => <div className="container">
  <div className="card bg-light">
    <div className="card-header">Current State</div>
    <div className="card-body">
      <pre>
        <code>
          {formattedCurrentState()}
        </code>
      </pre>
    </div>
  </div>
</div>

const formattedCurrentState = () => JSON.stringify(window.store.getState().toJS(), null, 2)

export default connectInteractors(footer, ['counter', 'route']);
