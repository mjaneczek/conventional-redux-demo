import React from 'react';

export default (props) =>
  <div className={`card mb-4 ${props.code ? 'bg-dark text-white' : 'bg-light'}`}>
    <div className="card-header">{props.title}</div>
    <div className="card-body">
      {props.children}
    </div>
  </div>
