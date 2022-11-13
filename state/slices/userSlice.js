import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    token: "",
    user: {
      username: "test",
    },
  },
  reducers: {
    updateUserInformation: (state, action) => {
      state.user = action.user;
      state.token = action.token;
    },
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateUserInformation, increment, decrement, incrementByAmount } = userSlice.actions;

export default userSlice.reducer;
