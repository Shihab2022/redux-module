import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import counterSlice from './features/counterSlice'
import CustomLogger from './middleware/logger'
import todoSlice from './features/todoSlice'

export const store = configureStore({
    reducer: {

        counter: counterSlice,
        todos: todoSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(CustomLogger),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch