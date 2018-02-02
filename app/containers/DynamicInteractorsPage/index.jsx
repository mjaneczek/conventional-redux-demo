import React from 'react';
import { Helmet } from 'react-helmet';
import { replaceDynamicInteractors } from 'conventional-redux';
import PageHeader from 'components/PageHeader';
import Card from 'components/Card';
import Code from 'components/Code';

export default class DynamicInteractorsPage extends React.Component {
  componentWillMount() {
    replaceDynamicInteractors({});
  }


  render() {
    return(
      <div>
        <Helmet>
          <title>Static vs dynamic interactors</title>
        </Helmet>

        <PageHeader>Static vs dynamic interactors</PageHeader>

        <h4>You can define a set of global interactors in your configureStore method.</h4>
        <Code code={staticInteractorsSnippet()} />

        <h4 className="mt-4">Each page can define a route based dynamic interactors.</h4>
        <Code code={dynamicInteractorsSnippet()} />

        <h4 className="mt-4">This page registers no dynamic interactors. Only external reducers (route) and static interactors (route_counter) are available. Check out footer on different pages to see how it works.</h4>

      </div>
    )
  }
}

function staticInteractorsSnippet() {
  return `// static interactors setup
registerInteractors({
  route_counter: new RouteCounterInteractor()
});`
}

function dynamicInteractorsSnippet() {
  return `// dynamic interactors setup (example from home page)
replaceDynamicInteractors({
  counter: new CounterInteractor()
});`
}
