import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import FontFaceObserver from 'fontfaceobserver';
import createHistory from 'history/createBrowserHistory';

import 'sanitize.css/sanitize.css';
import 'react-select/dist/react-select.css';
import './styles/bootstrap.css';
import '!file-loader?name=[name].[ext]!./images/favicon.ico';
import '!file-loader?name=[name].[ext]!./manifest.json';
import '!file-loader?name=[name].[ext]!./404.html';
import 'file-loader?name=[name].[ext]!./.htaccess';

import App from 'containers/App';
import configureStore from './configureStore';

const openSansObserver = new FontFaceObserver('Open Sans', {});

openSansObserver.load().then(() => {
  document.body.classList.add('fontLoaded');
}, () => {
  document.body.classList.remove('fontLoaded');
});

const initialState = {};
const history = createHistory({ basename: '/conventional-redux-demo/' });
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('app');

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>,
    MOUNT_NODE
  );
};

if (module.hot) {
  module.hot.accept(['containers/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render();
  });
}

render();

if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install();
}
