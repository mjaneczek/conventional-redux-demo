import React from 'react';
import { Link } from 'react-router-dom';

export default () => <div className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
  <div className="container">
    <Link to="/" className="navbar-brand">Conventional-Redux.js</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">Basic examples</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/promises-handling">Promises handling</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/computed-reducers">Computed Reducers</Link>
        </li>
      </ul>
      <ul className="nav navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link" href="https://github.com/mjaneczek/conventional-redux" target="_blank">GitHub</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://mjaneczek.github.io" target="_blank">Author</a>
        </li>
      </ul>
    </div>
  </div>
</div>