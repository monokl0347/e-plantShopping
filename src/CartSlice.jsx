import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // stores cart items with quantity
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const plant = action.payload;
      const existing = state.items.find(item => item.name === plant.name);
      if (existing) {
        existing.quantity += 1; // increment if already in cart
      } else {
        state.items.push({ ...plant, quantity: 1 }); // add new with quantity 1
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload.name);
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const item = state.items.find(item => item.name === name);
      if (item) {
        item.quantity = quantity;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
