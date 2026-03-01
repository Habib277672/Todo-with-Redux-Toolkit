import { configureStore } from "@reduxjs/toolkit";
import { taskReducer } from "./Features/Tasks/TasksSlice";

export const store = configureStore({
  reducer: {
    taskReducer: taskReducer.reducer,
  },
});

// Subscribe to store changes and save to localStorage
store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("tasks", JSON.stringify(state.taskReducer.task));
});
