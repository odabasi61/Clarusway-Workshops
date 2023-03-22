import {
  ADD_TODO,
  CLEAR_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
} from "../types/todoTypes";
// case kısmında 'ADD_TODO' şeklinde olan kısım todotypes dosyasında tırnaklardan çıkarıldı ve buraya bu şekilde import edildi.

const initialState = {
  // todoList: [{ id: 1, text: "Work react redux", completed: false }],
  // todo listimiz başlangıçta boş array oluyor.
  todoList: [], // global state
};

// burada {type, payload} actionun destructure olmuş halidir.
const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        // todolist isimli key oluştur (burada object array oluşturuyoruz.). sonra state içindeki todolisti aç (...state.todolist). id olarak yeni tarih verdik. yani her elemanın ayrı bir id si olacak. text olarak payload dedik. yani inputa yazılan her şey payload olarak text karşılığı olacak. ilk oluşturulan todo completed false olacak.
        todoList: [
          ...state.todoList,
          { id: new Date().getTime(), text: payload, completed: false },
        ],
      };
    case CLEAR_TODO:
      return initialState;
    case TOGGLE_TODO:
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === payload ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case DELETE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter((item) => item.id !== payload),
      };

    default:
      return state;
  }
};
export default todoReducer;
