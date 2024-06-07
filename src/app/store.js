import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../app/modules/exampleModule/counterSlice";
import authReducer from "./modules/auth/authSlice";
import groupsReducer from "./modules/groupsManagment/groupsSlice";
import playerReducer from "./modules/codeGame/playerSlice";
import usersReducer from "./modules/auth/usersSlice";
import projectsReducer from "./modules/groupsManagment/projectSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    groups: groupsReducer,
    player: playerReducer,
    users: usersReducer,
    projects: projectsReducer,
  },
});
