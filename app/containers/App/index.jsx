import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage';
import PromisesHandlingPage from 'containers/PromisesHandlingPage';
import ComputedReducersPage from 'containers/ComputedReducersPage';

import Header from 'components/Header';
import Footer from 'components/Footer';

export default () => <div>
  <Helmet defaultTitle="Conventional-Redux.js" titleTemplate="%s | Conventional-Redux.js">
    <meta name="description" content="Conventional-Redux.js usage examples." />
  </Helmet>

  <Header />

  <div className="container">
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/promises-handling" component={PromisesHandlingPage} />
      <Route path="/computed-reducers" component={ComputedReducersPage} />
    </Switch>
  </div>

  <Footer />
</div>
