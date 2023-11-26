import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/UserSlice'

// Create ReduxStore
const reduxStore = configureStore({
    reducer: {
        users: userSlice
    }
})

export default reduxStore