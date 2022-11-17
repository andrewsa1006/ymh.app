import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    token: "",
    user: {
      username: "",
    },
    cart: [
      {
        id: 1,
        itemName: "Christina P's Perfect Red Lipstick",
        itemDescription: "",
        itemPrice: "$30.00",
        inStock: "true",
        image_uri: "https://ymh-content.s3.amazonaws.com/shop-screenshots/perfect_red1.PNG",
        quantity: 2,
      },

      {
        id: 2,
        itemName: "Fat Sticks T-Shirt",
        itemDescription: "",
        itemPrice: "$33.00",
        inStock: "true",
        image_uri: "https://ymh-content.s3.amazonaws.com/shop-screenshots/fat_sticks1.PNG",
        quantity: 1,
      },

      {
        id: 4,
        itemName: "Two Bears One Cave Tie-Dye",
        itemDescription: "",
        itemPrice: "$37.00",
        inStock: "true",
        image_uri: "https://ymh-content.s3.amazonaws.com/shop-screenshots/two_bears_one_cave_tyedye1.PNG",
        quantity: 1,
      },
    ],
    saveForLater: [],
  },
  reducers: {
    updateUserInformation: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },

    addItemToList: (state, action) => {
      let list = action.payload.list;
      let id = action.payload.item.id;
      let index = state[list].findIndex((item) => item.id === id);
      console.log("list", list);
      console.log("id", id);
      console.log("index", index);

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
  },
});

// Action creators are generated for each case reducer function
export const { updateUserInformation, logout, addItemToList, increaseItemQuantity, decreaseItemQuantity, removeItemFromList } = userSlice.actions;

export default userSlice.reducer;
