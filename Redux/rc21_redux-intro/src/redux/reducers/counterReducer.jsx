import { DECREASE, INCREASE, RESET } from "../types/counterTypes";

const initialState = {
  counter: 0, //? bu bizim global statimiz. bu initialstate olmazsa reducer çalışmaz.
};

//? Pure js function oluyor
//? reducerda bir dis bagimlilik olmamali
// action, butondan gelen istektir
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return { counter: state.counter + 1 };
    case DECREASE:
      return { counter: state.counter - 1 };
    case RESET:
      return { counter: 0 };
    default:
      return state;
  }
};
export default counterReducer;
