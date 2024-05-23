import { useContext,createContext } from "react";

const TodoContext = createContext({
    todos:[
        {id:1, todo:"Learn React", completed:false},
    ],
    addTodo : (todo) => {},
    updateTodo : (id,todo) => {},
    deleteTodo : (id) => {},
    toggleComplete : (id) => {},

});

export const useTodo = () => {
  return useContext(TodoContext);
}

export const Todoprovider = TodoContext.Provider;




