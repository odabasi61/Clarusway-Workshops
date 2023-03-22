import {
  ADD_TODO,
  CLEAR_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
} from "../types/todoTypes";

// burada fonksiyonu çağırmanın yanısıra veri aktarımı da olacağı için parametre olarak payload ekledik.
export const addTodo = (payload) => ({ type: ADD_TODO, payload });
export const deleteTodo = (payload) => ({
  type: DELETE_TODO,
  payload: payload,
});
export const toggleTodo = (payload) => ({
  type: TOGGLE_TODO,
  payload: payload,
});
export const clearTodo = () => ({ type: CLEAR_TODO });
