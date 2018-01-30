import React from 'react';

export default (props) =>
  <div className="list-group-item list-group-item-action flex-column align-items-start">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">{props.name}</h5>
      <small className="text-muted">{props.tag}</small>
    </div>
    <p className="mb-1">{props.description}</p>
  </div>
