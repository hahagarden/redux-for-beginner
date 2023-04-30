export const increase = () => {
  return {
    type: "increase",
  };
};

export const decrease = () => {
  return {
    type: "decrease",
  };
};

export const setDefault = (num) => {
  return {
    type: "setDefault",
    payload: num,
  };
};

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "increase":
      return state + 1;

    case "decrease":
      return state - 1;

    case "setDefault":
      return action.payload;

    default:
      return state;
  }
};

export default counterReducer;
