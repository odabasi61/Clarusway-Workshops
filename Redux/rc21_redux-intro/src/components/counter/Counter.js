import "./Counter.css";
import { useDispatch, useSelector } from "react-redux";
import { dec, inc, reset } from "../../redux/actions/counterAction";

//! Reducer'lara key olarak isim atamasi yapilmazsa bu sekilde cagrilabilriler.
//? const counter = useSelector((state) => state.counterReducer.counter)
//? const todoList = useSelector((state) => state.todoReducer.todoList)

const Counter = () => {
  // usedispatch hooku çağırmasak butondaki işlemleri yapamayız. burda bu hooka dispatch isimli değişken tanımladık
  const dispatch = useDispatch();
  // alt satırdaki çağırma ilk reducer tek dosya olduğu zamandan.
  // const counter = useSelector((state) => state.counter)
  // const counter = useSelector((state) => state.count.counter)
  const { counter } = useSelector((state) => state.count);
  // burada da useselector hooku ile counter global statini çağırdık. bunu çağırmazsak yaptığımız değişiklikler ekrana gelmez. burada süslü içinde olmasının sebebi destructure olmasdır. destructure olamamış hali üst satırdadır. state içindeki count içindeki counterı al. index.js de reducerları birleştirirken count keyini oluşturduk.

  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1>counter: {counter}</h1>
      <div>
        <button
          className="counter-button positive"
          // onClick={() => dispatch({ type: "INCREASE" })} bu normal kullanımı. alttaki kullanımı ise dispatch içindeki parametrenin fonksiyon olmasıdır. actions klasöründe bunu oluşturup buraya import ettik.
          onClick={() => dispatch(inc())}
        >
          increase
        </button>
        <button
          className="counter-button zero"
          // onClick={() => dispatch({ type: "RESET" })}
          onClick={() => dispatch(reset())}
        >
          reset
        </button>
        <button
          className="counter-button negative"
          // onClick={() => dispatch({ type: "DECREASE" })}
          onClick={() => counter > 0 && dispatch(dec())}
        >
          decrease
        </button>
      </div>
    </div>
  );
};

export default Counter;
