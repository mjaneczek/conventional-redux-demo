import React from 'react';

export default () => <div className="container">
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
