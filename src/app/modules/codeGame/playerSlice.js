import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { createPlayer, getAllPlayers, updatePlayer, deletePlayer } from './playerApi';
import { toast } from "react-toastify";

const initialState = {
  players: [],
  status: 'idle',
  error: null,
}

export const getPlayers = createAsyncThunk('player/getPlayers',
    async (user) => {
        try {
          const response = await getAllPlayers(user);
          
          //("response", response)
          return response;
        } catch (error) {
          // Manejo del error, si es necesario
          toast.error(error.response.data.message || "Unknown error getting players 🥲", {position: "bottom-center", hideProgressBar: true, autoClose: 2000});
    
          throw error
        }
    }
)


export const addNewPlayer = createAsyncThunk(
  'player/addNewPlayer',
  async (data) => {
    try {
      const response = await createPlayer(data);
      
      toast.success("Player created successfully!", {position: "bottom-center", hideProgressBar: true, autoClose: 2000});
      return response;
    } catch (error) {
      // Manejo del error, si es necesario
      toast.error(error.response.data.message || "Unknown error 🥲", {position: "bottom-center", hideProgressBar: true, autoClose: 2000});

      throw error
    }
  }
)
export const editPlayer = createAsyncThunk(
  'player/editPlayer',
  async (data) => {
    try {
      const response = await updatePlayer(data);
      
      toast.success("Player updated successfully!", {position: "bottom-center", hideProgressBar: true, autoClose: 2000});
      return response;
    } catch (error) {
      // Manejo del error, si es necesario
      toast.error(error.response.data.message || "Unknown error 🥲", {position: "bottom-center", hideProgressBar: true, autoClose: 2000});

      throw error
    }
  }
)

export const erasePlayer = createAsyncThunk(
  'player/erasePlayer',
  async (data) => {
    try {
      const response = await deletePlayer(data);

      toast.success("Player deleted successfully!", { position: "bottom-center", hideProgressBar: true, autoClose: 2000 });
      return response;
    } catch (error) {
      // Manejo del error, si es necesario
      toast.error(error.response.data.message || "Unknown error 🥲", {position: "bottom-center", hideProgressBar: true, autoClose: 2000 });

      throw error
    }
  }
)

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    
  },
  extraReducers(builder) {
    builder
      .addCase(getPlayers.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(getPlayers.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.players = action.payload
      })
      .addCase(getPlayers.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(addNewPlayer.fulfilled, (state, action) => {
        state.players.push(action.payload)
      })
      .addCase(editPlayer.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(editPlayer.fulfilled, (state, action) => {
        const idx = state.players.findIndex(it => it.id == action.payload.id)
        state.players[idx] = action.payload
        state.status = 'succeeded'
      })
      .addCase(editPlayer.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(erasePlayer.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(erasePlayer.fulfilled, (state, action) => {
        const idx = state.players.findIndex(it => it.id == action.payload.player.id)
        state.players.splice(idx, 1)
        state.status = 'succeeded'
        //console.log(action.payload.group.id)
      })
      .addCase(erasePlayer.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export const {  } = playerSlice.actions

export default playerSlice.reducer

export const selectAll = (state) => state.player

export const selectPlayerById = (state, playerId) => state.player.players.find((player) => player.id == playerId)
