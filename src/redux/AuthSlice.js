import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    isLoggedin: false,
    userdata: null
}
const Auth_slice = createSlice({
    name: 'Auth_slice',
    initialState,
    reducers: {
        setisLoggedin: (state, actions) => {
            state.isLoggedin = actions.payload.isLoggedin;
            state.userdata = actions.payload.isLoggedin;
        }
    }
})


export const { setisLoggedin } = Auth_slice.actions
export default Auth_slice.reducer;