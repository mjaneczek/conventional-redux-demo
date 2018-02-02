import React from 'react';
import { Helmet } from 'react-helmet';
import { replaceDynamicInteractors } from 'conventional-redux';
import { connectInteractors } from 'conventional-redux';
import PageHeader from 'components/PageHeader';
import Card from 'components/Card';
import GitHubRepos from './components/GitHubRepos';
import GitHubInteractor from './GitHubInteractor';
import FilterInteractor from './FilterInteractor';

class ComputedReducersPage extends React.Component {
  componentWillMount() {
    replaceDynamicInteractors({
      github: new GitHubInteractor(),
      filter: new FilterInteractor()
    });

    this.d('github:fetch');
  }

  render() {
    return(
      <div>
        <Helmet>
          <title>Computed Reducers</title>
        </Helmet>

        <PageHeader>Language filter example</PageHeader>

        <Card title="Component">
          <GitHubRepos />
        </Card>
      </div>
    )
  }
}

export default connectInteractors(ComputedReducersPage, ['github']);
