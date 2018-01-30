import React from 'react';

export default (props) =>
  <div className="alert alert-dismissible alert-warning">
    <h4 className="alert-heading">Warning!</h4>
    <p className="mb-0">{props.message}</p>
  </div>
