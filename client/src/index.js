import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
    BrowserRouter,
} from 'react-router-dom';
import configureStore from './store';

import './index.css';
import App from './containers/app';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
 <Provider store={configureStore()}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
 </Provider>,
 document.getElementById('root')
);

serviceWorker.unregister();
