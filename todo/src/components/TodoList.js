import React from 'react';
import {connect} from 'react-redux';
import {addTodo, toggleTodo} from '../actions';

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
      if (this.state.value !== '') {
          this.props.addTodo(this.state);
          this.setState({value: ''})
        } else {
            return;
        }
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
               <input onChange={this.handleChange} placeholder="Enter A Task!"></input>
               <button onClick={this.addTodo}>Add Task</button>
            </form>

            <div className="todoList">
            <h2>TASK TO DO: </h2>
               {this.props.todos.map((todo, id) => (
                  <div
                    key={id} 
                    onClick={e => this.toggleTodo(e, id)} 
                    className={`todo ${todo.completed === true ? 'completed' : '' }`}
                  >
                    Task: {todo.value}
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