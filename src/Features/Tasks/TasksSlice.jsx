import { createSlice } from "@reduxjs/toolkit";

// Load tasks from localStorage
const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

const initialState = {
  task: savedTasks,
};

export const taskReducer = createSlice({
  name: "task",
  initialState,
  reducers: {
    addData(state, action) {
      const taskText = action.payload.trim();
      const isDuplicate = state.task.some(
        (t) => t.text.toLowerCase() === taskText.toLowerCase(),
      );
      if (!taskText || isDuplicate) return;

      state.task.push({ text: taskText, completed: false });
    },
    checkData(state, action) {
      const index = action.payload;
      if (state.task[index]) {
        state.task[index].completed = !state.task[index].completed;
      }
    },
    deleteData(state, action) {
      state.task = state.task.filter((_, index) => index !== action.payload);
    },
  },
});

export const { addData, deleteData, checkData } = taskReducer.actions;
