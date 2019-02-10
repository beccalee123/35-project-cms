import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Reset from './reset.scss';
import Style from './style.scss';

import CMS from './components/cms/cms.js';

import createStore from './store/';
const store = createStore();

/**
 * App function
 * Renders the page with all provided components
 * @returns a fully rendered page
 */
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <CMS />
      </BrowserRouter>
    </Provider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
