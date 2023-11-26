import {createSlice} from '@reduxjs/toolkit'

// Create Slice
const userSlice = createSlice({
    name:"user",
    initialState:[],
    reducers:{
        signUpApiCall(state, action){}
    }
})

console.log(userSlice);
export default userSlice.reducer