import "./App.css";
import Counter from "./components/counter/Counter";
import Todo from "./components/todo/Todo";
// import { legacy_createStore as createStore } from "redux"
// import reducer from "./redux"
import { Provider } from "react-redux";
import { store } from "./redux";

function App() {
  //? bu storu kullanmaya gerek kalmadı. çünkü index.js de diğer reducerları birleştirip orada yeni store oluşturduk. yukarıdaki importlar da bu yüzden yorumda.
  // const store = createStore(reducer)

  return (
    <div className="app">
      {/* Store ile tum uygulamayi sarmaladik */}
      <Provider store={store}>
        <Counter />
        <Todo />
      </Provider>
    </div>
  );
}

export default App;
