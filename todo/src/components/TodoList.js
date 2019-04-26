import React from 'react';
import {connect} from 'react-redux';
import {addTodo, toggleTodo} from '../actions';

import Todo from './Todo';

class TodoList extends React.Component {
   state = {
      value: '',
      completed: false
   }

   handleChange = e => {
      this.setState({value: e.target.value})
   }

   addTodo = e => {
      e.preventDefault();
      this.props.addTodo(this.state)
   }

   toggleTodo = (e, id) => {
       e.preventDefault();
       console.log('toggled');
      this.props.toggleTodo(id)
   }

   render() {
      return (
         <div>
            <form>
               <input onChange={this.handleChange} placeholder="Enter a task"></input>
               <button onClick={this.addTodo}>Add Todo</button>
            </form>

            <div className="todoList">
               {this.props.todos.map((todo, id) => (
                  <div
                    key={id} 
                    onClick={e => this.toggleTodo(e, id)} 
                    className={`todo ${todo.completed === true ? 'completed' : '' }`}
                  >
                    Todo: {todo.value}
                  </div>
               ))}
            </div>
         </div>
      )
   }
}

const mapStateToProps = state => {
   return {
      todos: state.todos
   }
}

export default connect(mapStateToProps, {addTodo, toggleTodo})(TodoList);