import Event from "./components/1-events/Event";
import Counter from "./components/2-classComponent/Counter";
import UseStateCounter from "./components/3-useStateHook/UseStateCounter";
import UseStateObject from "./components/3-useStateHook/UseStateObject";

function App() {
  return (
    <div className="App">
      <Event />
      <Counter />
      <UseStateCounter />
      <UseStateObject />
    </div>
  );
}

export default App;
