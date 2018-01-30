import React from 'react';

export default (props) =>
  <input className="form-control form-control-sm"
    onChange={e => props.onChange(e.target.value)}
    value={props.value} 
    onKeyPress={(e) => {(e.key === 'Enter' ? props.onEnter() : null)}} 
    type="text"
  />
