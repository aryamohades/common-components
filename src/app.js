/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import '@babel/polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
// import FontFaceObserver from 'fontfaceobserver';
import 'sanitize.css/sanitize.css';

// Import root app
import App from 'containers/App';

// Load the favicon and the .htaccess file
import '!file-loader?name=[name].[ext]!./images/favicon.ico';
import 'file-loader?name=.htaccess!./.htaccess'; // eslint-disable-line import/extensions

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCheckSquare,
  faCoffee,
  faChevronRight,
  faBacon,
  faFilter,
} from '@fortawesome/free-solid-svg-icons';

library.add(faCheckSquare, faCoffee, faChevronRight, faBacon, faFilter);

// Observe loading of Open Sans (to remove open sans, remove the <link> tag in
// the index.html file and this observer)
// const openSansObserver = new FontFaceObserver('Open Sans', {});

// When Open Sans is loaded, add a font-family using Open Sans to the body
// openSansObserver.load().then(() => {
//   document.body.classList.add('fontLoaded');
// });

const MOUNT_NODE = document.getElementById('app');

const render = () => {
  ReactDOM.render(<App />, MOUNT_NODE);
};

if (module.hot) {
  // Hot reloadable React components
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['containers/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render();
  });
}

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}

render();
