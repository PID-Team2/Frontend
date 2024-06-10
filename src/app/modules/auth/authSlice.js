import { signin, signup, getUser } from "./authApi";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

      export const signInOrSignUp = createAsyncThunk(
        'auth/signInOrSignUp',
        async (data) => {
          try {
            let isRegister = data.email? true: false
            let response = null
            
            if(isRegister) response = await signup(data);
            else response = await signin(data);
            
            toast.success("Bienvenido "+(isRegister? '':'a StackOverFlowUCI '+response.username)+"!", 
            {position: "bottom-center", hideProgressBar: true, autoClose: 2000});
            return response;
          } catch (error) {
            // Manejo del error, si es necesario
            toast.error(error.response.data.message || "Unknown error 🥲", {position: "bottom-center", hideProgressBar: true, autoClose: 2000});

            throw error
          }
        }
      );
      export const getUserData = createAsyncThunk(
        'auth/getUser',
        async (id) => {
          try {
            const response = await getUser(id);
            return response;
          } catch (error) {
            throw error
          }
        }
      );

const authSlice = createSlice({
    name: 'auth',
    initialState: {
      user: null,
      isLoading: false,
      hasError: false,
      profile: null 
    },
    reducers: {
      logout: (state) => {
        state.user = null
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
          else state.user = {}
        })
        .addCase(signInOrSignUp.rejected, (state, action) => {
          state.isLoading = false;
          state.hasError = true;
          state.user = null;
        })
        .addCase(getUserData.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(getUserData.fulfilled, (state, action) => {
          state.isLoading = false;
          state.hasError = false;
          state.profile = action.payload
        })
        .addCase(getUserData.rejected, (state, action) => {
          state.isLoading = false;
          state.hasError = true;
          state.profile = null;
        })
    },
  });
  export const { logout } = authSlice.actions;
  export const selectAuth = (state) => state.auth;
  export default authSlice.reducer;
  