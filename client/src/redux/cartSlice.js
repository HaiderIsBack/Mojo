import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            if(newItem){
                const existingItem = state.items.find(item => item.id === newItem.id);
                state.totalQuantity++;
                if(!existingItem){
                    state.items.push({
                        id: newItem.id,
                        name: newItem.name,
                        price: newItem.price,
                        quantity: 1,
                        imageUrl: newItem.imageUrl,
                        totalPrice: newItem.price
                    });
                }else{
                    existingItem.quantity++;
                    existingItem.totalPrice += newItem.price;
                }
                state.totalPrice += newItem.price;
            }
        },
        addItemByQuantity: (state, action) => {
            const { newItem, quantity } = action.payload;
            if(newItem){
                const existingItem = state.items.find(item => item.id === newItem.id);
                state.totalQuantity += quantity;
                if(!existingItem){
                    state.items.push({
                        id: newItem.id,
                        name: newItem.name,
                        price: newItem.price,
                        quantity,
                        imageUrl: newItem.imageUrl,
                        totalPrice: newItem.price * quantity
                    });
                }else{
                    existingItem.quantity += quantity;
                    existingItem.totalPrice += newItem.price * quantity;
                }
                state.totalPrice += newItem.price * quantity;
            }
        },
        removeItem: (state, action) => {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            if(existingItem){
                state.totalQuantity--;
                state.totalPrice -= existingItem.price;
                if(existingItem.quantity === 1){
                    state.items = state.items.filter(item => item.id !== id);
                }else{
                    existingItem.quantity--;
                    existingItem.totalPrice -= existingItem.price;
                }
            }
        },
        clearCart: (state) => {
            state.items = [];
            state.totalPrice = 0;
            state.totalQuantity = 0;
        }
    }
});

export const { addItem, addItemByQuantity, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;