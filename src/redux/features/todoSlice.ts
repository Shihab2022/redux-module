import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit"
export type TTodo = {
    title: string,
    id: string,
    description: string,
    isCompleted?: boolean
}
type TInitialState = {
    todos: TTodo[]
}
const initialState: TInitialState = {
    todos: []
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<TTodo>) => {
            state.todos.push({ ...action.payload, isCompleted: false })
        },
        removeToDo: (state, action: PayloadAction<string>) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        updateStatus: (state, action: PayloadAction<string>) => {
            const todo = state.todos.find(t => t.id === action.payload)
            todo!.isCompleted = !todo?.isCompleted

            state.todos = state.todos.sort((a, b) => (a.isCompleted === b.isCompleted ? 0 : a.isCompleted ? 1 : -1));

        }
    }
})

export const { addTodo, removeToDo, updateStatus } = todoSlice.actions

export default todoSlice.reducer