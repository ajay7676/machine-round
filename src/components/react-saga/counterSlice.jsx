import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
   name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    incrementAsync: () => {
      // This will be handled by Saga
    },
    dcrement: (state) => {
      state.value -= 1;
    },
  },
});

export const {increment , incrementAsync , dcrement} = counterSlice.actions;

export default counterSlice.reducer;
