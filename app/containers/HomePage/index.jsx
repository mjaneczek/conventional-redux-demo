import React from 'react';
import Counter from './Counter';
import CounterInteractor from './CounterInteractor';
import { Helmet } from 'react-helmet';
import { replaceDynamicInteractors } from "conventional-redux";

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
        <Counter />
      </div>
    );
  }
}
