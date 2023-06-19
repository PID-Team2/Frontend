import { getAllUsers } from "./usersApi";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

      export const getUsers = createAsyncThunk(
        'users/getUsers',
        async () => {
          try {
            const response = await getAllUsers();
            return response;
          } catch (error) {
            toast.error(error.response.data.message || "Unknown error getting users 🥲", {position: "bottom-center", hideProgressBar: true, autoClose: 2000});
            throw error
          }
        }
      );

      const initialState = {
        users: [],
        status: 'idle',
        error: null,
      }

const usersSlice = createSlice({
    name: 'users',
    initialState: initialState,
    
    extraReducers: (builder) => {
      builder
      .addCase(getUsers.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.users = action.payload
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
    },
  });
  export default usersSlice.reducer

  export const selectAllUsers = (state) => state.users
  
  export const selectuserById = (state, userId) => state.users.users.find((user) => user.id == userId)
  
  