import { createContext } from "react";

const TodoContext=createContext();

const TodoProvider=({children})=>{
    const [state, dispatch] = React.useReducer(reducer, initialState);

    const value = {
      todoList: state.todoList,
      addTodoItem: (todoItemLabel) => {
        dispatch({ type: actions.ADD_TODO_ITEM, todoItemLabel });
      },
      removeTodoItem: (todoItemId) => {
        dispatch({ type: actions.REMOVE_TODO_ITEM, todoItemId });
      },
      markAsCompleted: (todoItemId) => {
        dispatch({ type: actions.TOGGLE_COMPLETED, todoItemId });
      }
    };
}

export {}