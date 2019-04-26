import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'; //create Store first
import { Provider } from 'react-redux'; //wrap with Provider
import reducer from "./reducers";

import './index.css';
import App from './App';

const store = createStore(reducer);

ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>, document.getElementById('root'));