import { ADD_TODO, TOGGLE_TODO } from '../actions';

const initialState = {
    todos: [
        {
            value: "Dummy Todo",
            completed: false
        }
    ]
}

export default (state = initialState, action) => {

    switch (action.type) {
        case ADD_TODO:
            return {
                todos: [...state.todos, action.payload]
            }

        case TOGGLE_TODO:
            return {
                ...state, 
                todos: state.todos.map((todo, id) => action.payload === id ? { ...todo, completed: !todo.completed  } : todo)
            }
       default:
          return state;
    }
}