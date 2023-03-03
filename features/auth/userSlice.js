// userSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { registerUser, userLogin } from "./authSlice";

let userToken;

if (typeof window !== "undefined") {
  userToken = localStorage.getItem("userToken")
    ? localStorage.getItem("userToken")
    : null;
}

const initialState = {
  loading: false,
  userInfo: null,
  userToken,
  error: null,
  success: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("userToken"); // deletes token from storage
      state.loading = false;
      state.userInfo = null;
      state.userToken = null;
      state.error = null;
    },
  },
  extraReducers: {
    // userLogin reducer ...
    // registerUser reducer ...
    // getUserDetails reducer ...
  },
});
// export actions
export const { logout } = userSlice.actions;
export default userSlice.reducer;
