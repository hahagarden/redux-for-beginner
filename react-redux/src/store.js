import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

const store = configureStore({ reducer: { counter: counterReducer } }); // useSelector( state => state.counter ) 으로 사용

export default store;
