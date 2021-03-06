import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage';
import PromisesHandlingPage from 'containers/PromisesHandlingPage';
import ExternalDependenciesPage from 'containers/ExternalDependenciesPage';
import ComputedActionsPage from 'containers/ComputedActionsPage';
import DynamicInteractorsPage from 'containers/DynamicInteractorsPage';

import Header from 'components/Header';
import Footer from 'components/Footer';

export default () => <div>
  <Helmet defaultTitle="Conventional-Redux.js" titleTemplate="%s | Conventional-Redux.js">
    <meta name="description" content="Conventional-Redux.js usage examples." />
  </Helmet>

  <Header />

  <div className="container mb-4">
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/promises-handling" component={PromisesHandlingPage} />
      <Route path="/external-dependencies" component={ExternalDependenciesPage} />
      <Route path="/computed-actions" component={ComputedActionsPage} />
      <Route path="/dynamic-interactors" component={DynamicInteractorsPage} />
    </Switch>
  </div>

  <Footer />
</div>
