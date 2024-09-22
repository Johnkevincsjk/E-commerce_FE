import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    isLoggedin: null,
    userdata: null
}
const Auth_slice = createSlice({
    name: 'Auth_slice',
    initialState,
    reducers: {
        setisLoggedin: (state, actions) => {
            state.isLoggedin = actions.payload;

        }
    }
})


export const { setisLoggedin } = Auth_slice.actions
export default Auth_slice.reducer;