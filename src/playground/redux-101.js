import { createStore } from "redux";

const store = createStore((state = { count: 0 }, action) => {

  switch (actions.type) {
    case 'INCREMENT' : 
    return {count : state.count + 1 }
    case 'DECREMENT' : 
    return {count : state.count - 1 }
    case 'RESET' : 
    return 
  } 

});

store.dispatch({
  type: "INCREMENT"
});

store.dispatch({
  type: "DECREMENT"
});

console.log(state.getState());
