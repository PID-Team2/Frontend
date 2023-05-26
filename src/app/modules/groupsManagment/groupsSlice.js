import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { createGroup, getGroup, updateGroup, getAllGroups, addUserToGroup } from './groupsApi'
import { toast } from "react-toastify";

const initialState = {
  groups: [],
  status: 'idle',
  error: null,
}

export const getGroups = createAsyncThunk('groups/getGroups',
    async (user) => {
        try {
          const response = await getAllGroups(user);
          
          return response;
        } catch (error) {
          // Manejo del error, si es necesario
          toast.error(error.response.data.message || "Unknown error getting groups 🥲", {position: "bottom-center"});
    
          throw error
        }
    }
)
export const getGroupData = createAsyncThunk('groups/getGroup',
    async (id) => {
        try {
          const response = await getGroup(id);
          
          return response;
        } catch (error) {
          // Manejo del error, si es necesario
          toast.error(error.response.data.message || "Unknown error getting group 🥲", {position: "bottom-center"});
    
          throw error
        }
    }
)

export const addNewGroup = createAsyncThunk(
  'groups/addNewGroup',
  async (data) => {
    try {
      const response = await createGroup(data);
      
      toast.success("Group created successfully!", {position: "bottom-center"});
      return response;
    } catch (error) {
      // Manejo del error, si es necesario
      toast.error(error.response.data.message || "Unknown error 🥲", {position: "bottom-center"});

      throw error
    }
  }
)

const groupSlice = createSlice({
  name: 'groups',
  initialState,
  reducers: {
    
  },
  extraReducers(builder) {
    builder
      .addCase(getGroups.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(getGroups.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.groups = action.payload
      })
      .addCase(getGroups.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(addNewGroup.fulfilled, (state, action) => {
        state.groups.push(action.payload)
      })
  },
})

export const {  } = groupSlice.actions

export default groupSlice.reducer

export const selectAllGroups = (state) => state.groups

export const selectgroupById = (state, groupId) => state.groups.groups.find((group) => group.id == groupId)
