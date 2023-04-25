const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const reducer = (state = 0, action) => {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "MINUS":
      return state - 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

const onAddClick = () => {
  store.dispatch({ type: "ADD" });
};

const onMinusClick = () => {
  store.dispatch({ type: "MINUS" });
};

const onChange = () => {
  number.innerText = store.getState();
};

store.subscribe(onChange);

number.innerText = store.getState();
add.addEventListener("click", onAddClick);
minus.addEventListener("click", onMinusClick);
