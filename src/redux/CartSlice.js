import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const cart_slice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addTocart: (state, actions) => {
            state.push(actions.payload)

        },
        removeFromCart: (state, actions) => {
            const delete_cart = actions.payload
            return state.filter((data, index) => index !== delete_cart)
        }
    }
})

export default cart_slice.reducer

export const { addTocart, removeFromCart } = cart_slice.actions