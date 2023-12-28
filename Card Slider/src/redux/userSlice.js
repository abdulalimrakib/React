import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    data: {},
  },
  reducers: {
    configUserData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { configUserData } = userSlice.actions;
export default userSlice.reducer;
