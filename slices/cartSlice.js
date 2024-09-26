import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect'; // Import createSelector for memoization

const initialState = {
    items: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload);
        },
        removeFromCart: (state, action) => {
            let newCart = [...state.items];
            let itemIndex = state.items.findIndex(item => item.id === action.payload.id);
            if (itemIndex >= 0) {
                newCart.splice(itemIndex, 1);
            } else {
                console.log(`Can't remove the item that is not added to the cart!`);
            }
            state.items = newCart;
        },
        emptyCart: (state) => {
            state.items = [];
        },
    },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;

// Selectors
export const selectCartItems = (state) => state.cart.items;

// Memoize the selectCartItemsById selector to avoid unnecessary re-renders
export const selectCartItemsById = createSelector(
    [selectCartItems, (state, id) => id], // Input selectors
    (items, id) => items.filter(item => item.id === id) // Output function
);

// Cart total selector
export const selectCartTotal = (state) => state.cart.items.reduce((total, item) => total + item.price, 0);

export default cartSlice.reducer;
