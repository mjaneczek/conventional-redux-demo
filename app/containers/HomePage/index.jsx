import React from 'react';
import Counter from './CounterFunctional';
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

        <div className="card bg-light mt-4 mb-4">
          <div className="card-header">Component</div>
          <div className="card-body">

            <Counter />

          </div>
        </div>

        <div className="card bg-dark text-white">
          <div className="card-header">Code</div>
          <div className="card-body">

            <Highlight className='javascript' dangerousInnerHTML={true}>
              {`// class style component
class Counter extends React.Component {
  render () {
    return (
      <div>
        <h3>Current value: {this.p('counter')}</h3>

        <button className="btn btn-primary mr-2" onClick={() => this.d('counter:increment')}>
          Increment
        </button>

        <button className="btn btn-danger mr-2" onClick={() => this.d('counter:doubleAsync')}>
          Double (Async)
        </button>

        <button className="btn btn-warning mr-2" onClick={() => this.d('counter:reset')}>
          Reset
        </button>
      </div>
    )
  }
}

// functional style component (the equivalent)
const Counter = (p,d) => (<div>
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
</div>)

// connect method
export default connectInteractors(Counter, ['counter']);

// interactor
export default class CounterInteractor {
  defaultState() {
    return 1;
  }

  doubleAsync() {
    setTimeout(() => { this.dispatch('counter:double') }, 500)
  }

  reset() {
    alert("Reseting the state...");
  }

  onReset() {
    return 1;
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
