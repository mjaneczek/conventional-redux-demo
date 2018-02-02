import React from 'react';
import { Helmet } from 'react-helmet';
import { replaceDynamicInteractors } from 'conventional-redux';
import PageHeader from 'components/PageHeader';
import Card from 'components/Card';
import Code from 'components/Code';
import Counters from './components/Counters';
import CounterInteractor from './CounterInteractor';
import CleanerInteractor from './CleanerInteractor';
import snippet from './snippet';

export default class ExternalDependenciesPage extends React.Component {
  componentWillMount() {
    replaceDynamicInteractors({
      counter_a: new CounterInteractor(),
      counter_b: new CounterInteractor(),
      cleaner: new CleanerInteractor()
    });
  }

  render() {
    return(
      <div>
        <Helmet>
          <title>External Dependencies</title>
        </Helmet>

        <PageHeader>Counters example</PageHeader>

        <Card title="Component">
          <Counters />
        </Card>

        <Card title="Code" code={true}>
          <Code code={snippet} />
        </Card>
      </div>
    )
  }
}
