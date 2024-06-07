import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  createProject,
  getAllProjects,
  updateProject,
  getProject,
  deleteProject,
} from "./projectApi";
import { toast } from "react-toastify";

const initialState = {
  projects: [],
  status: "idle",
  error: null,
};

export const getProjects = createAsyncThunk(
  "projects/getProjects",
  async (user) => {
    try {
      const response = await getAllProjects(user);

      return response;
    } catch (error) {
      // Manejo del error, si es necesario
      toast.error(
        error.response.data.message || "Unknown error getting projects 🥲",
        { position: "bottom-center", hideProgressBar: true, autoClose: 2000 }
      );

      throw error;
    }
  }
);
export const getProjectData = createAsyncThunk(
  "projects/getProject",
  async (id) => {
    try {
      const response = await getProject(id);

      return response;
    } catch (error) {
      // Manejo del error, si es necesario
      toast.error(
        error.response.data.message || "Unknown error getting project 🥲",
        { position: "bottom-center", hideProgressBar: true, autoClose: 2000 }
      );

      throw error;
    }
  }
);

export const addNewProject = createAsyncThunk(
  "projects/addNewProject",
  async (data) => {
    try {
      const response = await createProject(data);

      toast.success("Project created successfully!", {
        position: "bottom-center",
        hideProgressBar: true,
        autoClose: 2000,
      });
      console.log(response);
      return response;
    } catch (error) {
      // Manejo del error, si es necesario
      toast.error(error.response.data.message || "Unknown error 🥲", {
        position: "bottom-center",
        hideProgressBar: true,
        autoClose: 2000,
      });

      throw error;
    }
  }
);
export const editProject = createAsyncThunk(
  "projects/editProject",
  async (data) => {
    try {
      const response = await updateProject(data);

      toast.success("Project updated successfully!", {
        position: "bottom-center",
        hideProgressBar: true,
        autoClose: 2000,
      });
      return response;
    } catch (error) {
      // Manejo del error, si es necesario
      toast.error(error.response.data.message || "Unknown error 🥲", {
        position: "bottom-center",
        hideProgressBar: true,
        autoClose: 2000,
      });

      throw error;
    }
  }
);

export const eraseProject = createAsyncThunk(
  "projects/eraseProject",
  async (data) => {
    try {
      const response = await deleteProject(data);

      toast.success("Project deleted successfully!", {
        position: "bottom-center",
        hideProgressBar: true,
        autoClose: 2000,
      });
      return response;
    } catch (error) {
      // Manejo del error, si es necesario
      toast.error(error.response.data.message || "Unknown error 🥲", {
        position: "bottom-center",
        hideProgressBar: true,
        autoClose: 2000,
      });

      throw error;
    }
  }
);
const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getProjects.pending, (state, action) => {
        console.log("loading");
        state.status = "loading";
      })
      .addCase(getProjects.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log(action.payload);
        state.projects = action.payload;
      })
      .addCase(getProjects.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNewProject.fulfilled, (state, action) => {
        state.projects = action.payload;
      })
      .addCase(editProject.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(editProject.fulfilled, (state, action) => {
        const idx = state.projects.findIndex(
          (it) => it.id == action.payload.id
        );
        state.projects[idx] = action.payload;
        state.status = "succeeded";
        console.log(action.payload);
      })
      .addCase(editProject.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(eraseProject.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(eraseProject.fulfilled, (state, action) => {
        const idx = state.projects.findIndex(
          (it) => it.id == action.payload.project.id
        );
        state.projects.splice(idx, 1);
        state.status = "succeeded";
        console.log(action.payload.project.id);
      })
      .addCase(eraseProject.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default projectSlice.reducer;

export const selectAllProjects = (state) => state.projects;

export const selectProjectsByGroupId = (state, groupId) =>
  state.projects.projects.find((project) => project.groupId == groupId);

export const selectProjectById = (state, projectId) =>
  state.projects.projects.find((project) => project.id == projectId);
