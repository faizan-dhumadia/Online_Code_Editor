import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
// import counterSlice from './counterSlice'
export const store = configureStore({
    reducer: {
        user: userSlice,
    },
})