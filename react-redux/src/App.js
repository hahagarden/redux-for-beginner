import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease, setDefault } from "./counterReducer";

function App() {
  const counter = useSelector((state) => state);
  const dispatch = useDispatch();

  const onAddClick = () => {
    dispatch(increase());
  };

  const onMinusClick = () => {
    dispatch(decrease());
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
