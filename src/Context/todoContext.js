import { createContext, useContext } from "react";

    export const TodoContext = createContext({
    todos: [{
        id: 1,
        todo: "message",
        checkedStatus: false,
    }],

    addedTodo: (todo) => {},
    editedTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    checkedTodo: (id) => {}
}
);

export const TodoProvider = TodoContext.Provider
export const useTodo = () => {
    return useContext(TodoContext)
}