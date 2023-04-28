import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 }, // not primitive value
  reducers: {
    add: (state) => {
      state.value++;
    },
    minus: (state, action) => {
      state.value--;
    },
    setDefault: (state, action) => {
      state.value = action.payload;
    },
  },
}); // counterSlice has reducer and actions like below

export const { add, minus, setDefault } = counterSlice.actions; // actionCreator: (payload) => { type: name/actionCreator, payload }

export default counterSlice.reducer;
