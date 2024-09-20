import { configureStore } from '@reduxjs/toolkit'
import cart_slice from './CartSlice'
import AuthSlice from './AuthSlice'



const store = configureStore({
    devTools: true,
    reducer: {
        cart: cart_slice,
        Auth: AuthSlice
    }
})

export default store