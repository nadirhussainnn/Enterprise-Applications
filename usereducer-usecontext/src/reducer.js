
import { ADD_TO_DO, actions, initialState } from "./actions"

const todoReducer=(state=initialState,action) => {

    switch (action.type) {
        case actions.ADD_TO_DO:
            return {
                todos: [...state.todos,{
                    id:new Date().getMilliseconds,
                    label:'Go on Walk',
                    complete: false
                }]
            }
        case actions.REMOVE_TO_DO:
            return state.todos.filter(todo=>todo.id !== action.id);
        
        case actions.TOGGLE_COMPLETED:
            const updatedTodoList = state.todoList.map((todoItem) =>
            todoItem.id === action.todoItemId
              ? { ...todoItem, completed: !todoItem.completed }
              : todoItem
          );
          return { todoList: updatedTodoList };
          
        default:
            return state;
    }

}