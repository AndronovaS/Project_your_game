/** @format */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { createStore } from 'redux';
import rootReducer from './redux/reducers/rootReducer';
import initState from './redux/initState';
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(rootReducer, initState, composeWithDevTools())


ReactDOM.render(
  <React.StrictMode>

    <Router>
        <Provider store={store}>
      <App />
    </Provider>
    </Router>

  
  </React.StrictMode>,
  document.getElementById('root')
);
