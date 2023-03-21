// const initialState = {
//   counter: 0, //? Global state
// }

// //? Pure js function
// //? Bir dis bagimlilik olmamali
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "INCREASE":
//       return { counter: state.counter + 1 }
//     case "DECREASE":
//       return { counter: state.counter - 1 }
//     case "RESET":
//       return { counter: 0 }
//     default:
//       return state
//   }
// }
// export default reducer

// ---> Reducer herhangi bir yan etkiden etkilenmeyen bir pure js fonksiyonudur. pure js nin bir dış bağımlılığı olmamalı. Mesela bir fetch yapısı ya da dosya oku/yaz işlemleri dışa bağımlıdır. Ya da reducer içinde bir local state olmamalı. Pure luktan kasıt budur.

// reactta tüm reducerlar tek bir dosyada toplanır (store). bu projede 2 adet reducer var ve burada çağırdık. combinereducer ile reducerlar bağlanıyor.
// createstore react tan kalkıyor. o yüzden legacy_createstore olarak çağırdık.
import { legacy_createStore as createStore, combineReducers } from "redux";
import counterReducer from "./reducers/counterReducer";
import todoReducer from "./reducers/todoReducer";

const rootReducer = combineReducers({
  count: counterReducer,
  todo: todoReducer,
});

// burada storu oluşturduk. createstore içine birleşmiş reducer değişkenini yazdık.
export const store = createStore(rootReducer);
