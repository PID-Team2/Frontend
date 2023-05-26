import { signin, signup } from "./authApi";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

      export const signInOrSignUp = createAsyncThunk(
        'auth/signInOrSignUp',
        async (data) => {
          try {
            let isRegister = data.email? true: false
            let response = null
            console.log(isRegister)
            if(isRegister) response = await signup(data);
            else response = await signin(data);
            
            console.log("response", response)
            toast.success("Welcome "+(isRegister? '':'back '+response.username)+"!");
            return response;
          } catch (error) {
            // Manejo del error, si es necesario
            toast.error(error.response.data.message || "Unknown error 🥲");

            throw error
          }
        }
      );

const authSlice = createSlice({
    name: 'auth',
    initialState: {
      user: null,
      isLoading: false,
      hasError: false
    },
    reducers: {
      logout: (state) => {
        state.user = null
        console.log("log out")
      }
    },
    extraReducers: (builder) => {
      builder
        .addCase(signInOrSignUp.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(signInOrSignUp.fulfilled, (state, action) => {
          state.isLoading = false;
          state.hasError = false;
          if(action.payload.username)
            state.user = action.payload
          //else state.user = null
          console.log("payload ",action.payload)
        })
        .addCase(signInOrSignUp.rejected, (state, action) => {
          state.isLoading = false;
          state.hasError = true;
          state.user = null;
        });
    },
  });
  export const { logout } = authSlice.actions;
  export const selectAuth = (state) => state.auth;
  export default authSlice.reducer;
  