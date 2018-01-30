import React from 'react';
import { Helmet } from 'react-helmet';
import { replaceDynamicInteractors } from 'conventional-redux';
import PageHeader from 'components/PageHeader';
import Card from 'components/Card';

export default class DynamicInteractorsPage extends React.Component {
  componentWillMount() {
    replaceDynamicInteractors({

    });
  }

  render() {
    return(
      <div>
        <Helmet>
          <title>Dynamic Interactors</title>
        </Helmet>

        <PageHeader>IDK example - dynamic interactors</PageHeader>
      </div>
    )
  }
}
