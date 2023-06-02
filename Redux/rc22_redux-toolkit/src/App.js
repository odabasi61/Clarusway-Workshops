import AppRouter from "./router/AppRouter";
import { Provider } from "react-redux";
import store from "./app/store";

// provider sarmalı ile store u her yere aktarabiliyoruz.

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
