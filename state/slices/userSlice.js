import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    token: "",
    user: {
      username: "",
    },
    cart: [],
    saveForLater: [],
    viewShowInfo: {},
  },
  reducers: {
    updateUserInformation: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      AsyncStorage.setItem("user", JSON.stringify({ user: action.payload.user, token: action.payload.token }));
    },

    addItemToList: (state, action) => {
      let list = action.payload.list;
      let id = action.payload.item.id;
      let index = state[list].findIndex((item) => item.id === id);

      if (index >= 0) {
        state[list][index].quantity++;
      } else state[list].push(action.payload.item);
    },

    decreaseItemQuantity: (state, action) => {
      let index = state.cart.findIndex((item) => item.id === action.payload.item.id);
      state.cart[index].quantity--;
      if (state.cart[index].quantity < 1) {
        state.cart[index].quantity = 1;
      }
    },

    increaseItemQuantity: (state, action) => {
      let index = state.cart.findIndex((item) => item.id === action.payload.item.id);
      state.cart[index].quantity++;
    },

    logout: (state) => {
      state.user = { username: "" };
      state.token = "";
    },

    removeItemFromList: (state, action) => {
      let index = state[action.payload.list].findIndex((item) => item.id === action.payload.item.id);
      state[action.payload.list].splice(index, 1);
    },

    setShowInfo: (state, action) => {
      state.viewShowInfo = action.payload.show;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateUserInformation, logout, addItemToList, increaseItemQuantity, decreaseItemQuantity, removeItemFromList, setShowInfo } =
  userSlice.actions;

export default userSlice.reducer;
