//* ==================== HOOKS ===============================
//! Hook'lar fonksiyonel component'ler icerisinde state'leri kullanmamiza
//! olanak saglayan ozel fonksiyonlardir.
//! React 16.8 versiyonu ile gelmistir ve geldikten sonra Class-componentler'in
//! kullanimi cok azaltmistir.

//? React'ta useState(), useEffect(), useContext() gibi bir cok built-in
//? Hook bulunmaktadir. Ayrica custom hook tanimlamak da mumkundur.

//* Hook Kullanim Kurallari:
//* 1. İlk olarak import edilmeliler. import { useState } from "react";
//* 2. Hook'lar ust seviyede kullanilmalidir. Yani Hook'lar bir
//*    dongunun, kosul cumleciginin ve icice fonksiyonlarin icerisinde
//*    kullanilmamalidir.
//* 3. Hook'lar sadece React Fonksiyonel componentleri icerisinde cagrilmalidir.
//*    Normal Javascript fonksiyonlari icerisinde cagrilmamalidir
//*    (Custom hook'lar icerisinde bir hook cagrilabilir)
//?    https://reactjs.org/docs/hooks-rules.html
//* =============================================================

import { useState } from "react";

const UseStateCounter = () => {
  // hooklar component içinde en üstte yani burada olmalı
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("counter cannot be less than zero");
    }
  };

  return (
    <div className="container-fluid mt-5">
      <div className="container text-center mt-4">
        <h2 className="text-danger">useState Counter</h2>
        <h1 className="display-4">Count: {count}</h1>
        <div className="container d-flex justify-content-center gap-3">
          <button onClick={increase} className="btn btn-success">
            Increase
          </button>
          <button onClick={() => setCount(0)} className="btn btn-danger">
            Reset
          </button>
          <button onClick={decrement} className="btn btn-warning">
            Decrease
          </button>

          {/* <button onClick={() => count > 0 ? setCount(count - 1) : alert("counter cannot be less tham zero")} className="btn btn-warning">
            Decrease
          </button> */}

          {/* <button
            onClick={() => setCount(count - 1)}
            className="btn btn-warning"
          >
            Decrease
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default UseStateCounter;
