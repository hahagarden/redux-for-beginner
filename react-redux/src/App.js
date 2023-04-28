import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, minus, setDefault } from "./counterSlice";

function App() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const onAddClick = () => {
    dispatch(add());
  };

  const onMinusClick = () => {
    dispatch(minus());
  };

  const onSetDefaultClick = () => {
    dispatch(setDefault(0));
  }; // payload 0

  return (
    <div>
      <button onClick={onAddClick}>add</button>
      <span>{counter}</span>
      <button onClick={onMinusClick}>minus</button>
      <button onClick={onSetDefaultClick}>reset</button>
    </div>
  );
}

export default App;
