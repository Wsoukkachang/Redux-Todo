import React from 'react';
import './App.css';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <form>
          <input placeholder="Enter a Task"></input>
          <button>Add Task</button>
        </form>

        <div className="todoList"></div>
      </div>
    )
  }
}