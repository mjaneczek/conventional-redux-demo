import React from 'react';
import { Helmet } from 'react-helmet';
import { replaceDynamicInteractors } from 'conventional-redux';
import PageHeader from 'components/PageHeader';
import Card from 'components/Card';
import GitHubRepos from './components/GitHubRepos';
import Code from './components/Code';
import GitHubInteractor from './GitHubInteractor';

export default class HomePage extends React.Component {
  componentWillMount() {
    replaceDynamicInteractors({
      github: new GitHubInteractor()
    });
  }

  render() {
    return(
      <div>
        <Helmet>
          <title>Promises handling</title>
        </Helmet>

        <PageHeader>GitHub repos example</PageHeader>

        <Card title="Component">
          <GitHubRepos />
        </Card>

        <Card title="Code" code={true}>
          <Code />
        </Card>
      </div>
    )
  }
}
