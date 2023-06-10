import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        name:'',
        email:''
    },
    reducers:{
        registerUser:(state,action) =>{
            const {name,email} = action.payload
            state.name = name
            state.email = email
        }
    }
})

export const {registerUser} = userSlice.actions

export default userSlice.reducer