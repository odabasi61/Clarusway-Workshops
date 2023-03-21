import { ADD_TODO } from "../types/todoTypes";

// burada fonksiyonu çağırmanın yanısıra veri aktarımı da olacağı için parametre olarak payload ekledik.
export const addTodo = (payload) => ({ type: ADD_TODO, payload });
