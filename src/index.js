import React from 'react';
import ReacrDom from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './components/app'
import ErrorBoundry from './components/error-boundry'
import CatalogService from './services/catalog-service'
import { CatalogServiceProvider } from './components/catalog-services-context'
import store from './store'

const catalogService = new CatalogService();

ReacrDom.render(
  <Provider store={store}>
    <ErrorBoundry>
      <CatalogServiceProvider value={catalogService}>
        <Router>
          <App/>
        </Router>
      </CatalogServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);
