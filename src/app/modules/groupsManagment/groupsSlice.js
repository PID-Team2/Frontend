import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { createGroup, getGroup, updateGroup, getAllGroups, addUserToGroup, deleteGroup } from './groupsApi'
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
      toast.error(error.response.data.message || "Unknown error getting groups 🥲", { position: "bottom-center", hideProgressBar: true, autoClose: 2000});

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
      toast.error(error.response.data.message || "Unknown error getting group 🥲", { position: "bottom-center", hideProgressBar: true, autoClose: 2000 });

      throw error
    }
  }
)

export const addNewGroup = createAsyncThunk(
  'groups/addNewGroup',
  async (data) => {
    try {
      const response = await createGroup(data);

      toast.success("Group created successfully!", { position: "bottom-center", hideProgressBar: true, autoClose: 2000 });
      return response;
    } catch (error) {
      // Manejo del error, si es necesario
      toast.error(error.response.data.message || "Unknown error 🥲", { position: "bottom-center", hideProgressBar: true, autoClose: 2000 });

      throw error
    }
  }
)
export const editGroup = createAsyncThunk(
  'groups/editGroup',
  async (data) => {
    try {
      const response = await updateGroup(data);

      toast.success("Group updated successfully!", { position: "bottom-center", hideProgressBar: true, autoClose: 2000 });
      return response;
    } catch (error) {
      // Manejo del error, si es necesario
      toast.error(error.response.data.message || "Unknown error 🥲", { position: "bottom-center", hideProgressBar: true, autoClose: 2000 });

      throw error
    }
  }
)
export const inviteUser = createAsyncThunk(
  'groups/inviteUser',
  async (data) => {
    try {
      const response = await addUserToGroup(data);

      toast.success("User added successfully!", { position: "bottom-center", hideProgressBar: true, autoClose: 2000 });
      return response;
    } catch (error) {
      // Manejo del error, si es necesario
      toast.error(error.response.data.message || "Unknown error 🥲", { position: "bottom-center", hideProgressBar: true, autoClose: 2000 });

      throw error
    }
  }
)

export const eraseGroup = createAsyncThunk(
  'groups/eraseGroup',
  async (data) => {
    try {
      const response = await deleteGroup(data);

      toast.success("Group deleted successfully!", { position: "bottom-center", hideProgressBar: true, autoClose: 2000 });
      return response;
    } catch (error) {
      // Manejo del error, si es necesario
      toast.error(error.response.data.message || "Unknown error 🥲", { position: "bottom-center", hideProgressBar: true, autoClose: 2000 });

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
      .addCase(editGroup.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(editGroup.fulfilled, (state, action) => {
        const idx = state.groups.findIndex(it => it.id == action.payload.id)
        state.groups[idx] = action.payload
        state.status = 'succeeded'
      })
      .addCase(editGroup.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(eraseGroup.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(eraseGroup.fulfilled, (state, action) => {
        const idx = state.groups.findIndex(it => it.id == action.payload.group.id)
        state.groups.splice(idx, 1)
        state.status = 'succeeded'
        console.log(action.payload.group.id)
      })
      .addCase(eraseGroup.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(inviteUser.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(inviteUser.fulfilled, (state, action) => {
        const idx = state.groups.findIndex(it => it.id == action.payload.groupId)
        state.groups[idx].users.push(action.payload.user)
        //console.log(action.payload)
        state.status = 'succeeded'
      })
      .addCase(inviteUser.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export default groupSlice.reducer

export const selectAllGroups = (state) => state.groups

export const selectgroupById = (state, groupId) => state.groups.groups.find((group) => group.id == groupId)
