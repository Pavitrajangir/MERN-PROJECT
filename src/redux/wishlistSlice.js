import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const itemExists = state.wishlist.find((item) => item.id === action.payload.id);
      if (!itemExists) {
        state.wishlist.push(action.payload);
        localStorage.setItem("wishlist", JSON.stringify(state.wishlist)); // Persist wishlist
      }
    },
    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter((item) => item.id !== action.payload);
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist)); // Update storage
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
