import React from 'react';
import { Helmet } from 'react-helmet';
import { replaceDynamicInteractors } from 'conventional-redux';
import PageHeader from 'components/PageHeader';
import Card from 'components/Card';
import Code from 'components/Code';
import Counter from './components/Counter';
import CounterInteractor from './CounterInteractor';
import snippet from './snippet';

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

        <PageHeader>Counter example</PageHeader>

        <Card title="Component">
          <Counter />
        </Card>

        <Card title="Code" code={true}>
          <Code code={snippet} />
        </Card>
      </div>
    )
  }
}
