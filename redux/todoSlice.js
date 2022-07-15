import { createSlice } from "@reduxjs/toolkit";
const { v4: uuidv4 } = require("uuid");

const initialTodos = {
    todos: [
        { id: uuidv4(), title: "Simple Work", description: " Test Simple Work"},
        { id: uuidv4(), title: "Test Work", description: " Test Simple Work"},
    ]
}


const todoSlice = createSlice({
    name: "todos",
    initialState: initialTodos,
    reducers: {
        showTodos: (state) => state,
        addTodo: (state, action) =>{
            state.todos.push(action.payload)
        },
        deleteTodo: (state, action) => {
            const id = action.payload;
            state.todos = state.todos.filter(todo => todo.id !== id)
        }
    }
})

export const { showTodos, addTodo, deleteTodo } = todoSlice.actions
export default todoSlice.reducer