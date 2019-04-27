import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'; //create Store first
import { Provider } from 'react-redux'; //wrap with Provider
import reducer from "./reducers";
import TodoList from './components/TodoList';

import './index.css';

const store = createStore(reducer);

function App() {
    return (
      <div className="App">
        <h1>Redux Todo App</h1>
        <TodoList />
      </div>
      );
    }

ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>, document.getElementById('root'));