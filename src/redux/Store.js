import { configureStore } from '@reduxjs/toolkit'
import cart_slice from './CartSlice'



const store = configureStore({
    devTools: true,
    reducer: {
        cart: cart_slice
    }
})

export default store