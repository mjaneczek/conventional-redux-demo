import React from 'react';
import Counter from './Counter';
import CounterInteractor from './CounterInteractor';
import Highlight from 'react-highlight';
import { Helmet } from 'react-helmet';
import { replaceDynamicInteractors } from "conventional-redux";
import 'highlight.js/styles/agate.css';

export default class HomePage extends React.Component {
  componentWillMount() {
    replaceDynamicInteractors({
      counter: new CounterInteractor()
    });
  }

  render() {
    return(
      <div>
        <Helmet>
          <title>Basic usage</title>
        </Helmet>

        <h1>Counter example - class component</h1>

        <div className="card bg-light mb-4">
          <div className="card-header">Component</div>
          <div className="card-body">

            <Counter />

          </div>
        </div>

        <div className="card bg-dark text-white">
          <div className="card-header">Code</div>
          <div className="card-body">

            <Highlight className='javascript' dangerousInnerHTML={true}>
              {`
// component
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

// interactor
export default class CounterInteractor {
  defaultState() {
    return 0;
  }

  doubleAsync() {
    setTimeout(() => { this.dispatch('counter:double') }, 500)
  }

  onIncrement() {
    return this.state + 1;
  }

  onDouble() {
    return this.state * 2;
  }
}

          `}
        </Highlight>

      </div>
    </div>

  </div>
    );
  }
}
