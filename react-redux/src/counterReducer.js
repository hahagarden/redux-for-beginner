import { createAction, createReducer } from "@reduxjs/toolkit";

export const increase = createAction("increase");
export const decrease = createAction("decrease");
export const setDefault = createAction("setDefault");

const counterReducer = createReducer(0, {
  [increase]: (state, action) => state + 1,
  [decrease]: (state, action) => state - 1,
  [setDefault]: (state, action) => action.payload,
});

export default counterReducer;
