import React from 'react';
import { Helmet } from 'react-helmet';
import { replaceDynamicInteractors } from 'conventional-redux';
import PageHeader from 'components/PageHeader';
import Card from 'components/Card';

export default class HomePage extends React.Component {
  componentWillMount() {
    replaceDynamicInteractors({

    });
  }

  render() {
    return(
      <div>
        <Helmet>
          <title>Computed Reducers</title>
        </Helmet>

        <PageHeader>IDK example</PageHeader>
      </div>
    )
  }
}
