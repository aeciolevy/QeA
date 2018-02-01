/* eslint react/jsx-filename-extension: 0, react/prefer-stateless-function: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import registerServiceWorker from './registerServiceWorker';
// CSS
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
// Components
import App from './App';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__())}
  >
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
