import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Header from "./components/Header";
import HeaderMemo from "./components/HeaderMemo";
import TaxComp from "./components/TaxComp";
import UseRefComp from "./components/UseRefComp";
import axios from "axios";
import Card from "./components/Card";
import ClearButton from "./components/ClearButton";

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState("anthony");
  const [taxDataState, setTaxDataState] = useState({ taxRate: 0.18, ship: 25 }); //ilk oluşumda referansını tanımlıyor ve o referans sabit kalıyor
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const taxData = { taxRate: 0.18, ship: 25 }; //her render bellekteki refereansı değşiyor

  const taxData1 = useRef({ taxRate: 0.18, ship: 25 });
  console.log(taxData1); //hafızada referansı sabit ama kendisi değişebilir olan verileri tanımlamak istiyorsak

  const getData = async () => {
    const { data } = await axios.get("https://dummyjson.com/products");
    // console.log(data)
    setData(data.products);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredData = data.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  const filteredMemoData = useMemo(() => {
    console.log("useMemo çalıştı");
    return data.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [data, search]); //refereansı sabitlemiş oluyor ve hesapmlanın sonucunu belleğe alıyor

  // const calculation = expensiveCalculation(count)

  const calculationMemo = useMemo(
    () => expensiveCalculationMemo(count),
    [count]
  );

  const handleClear = () => {
    setSearch("");
    setUser("anthony");
  };

  const handleClearCallback = useCallback(() => {
    setSearch("");
    setUser("anthony");
  }, []); //fonksiyonun kendisini memoized ediyor. bellekte tutuyor

  return (
    <div className="container mt-2">
      <div>
        <Header />
      </div>
      <hr />
      <div className="">
        <p className="text-center">Count : {count}</p>
        <button
          className="btn btn-danger d-flex mx-auto"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
      </div>
      <button
        className="btn btn-danger d-flex mx-auto"
        onClick={() => setUser("sabata")}
      >
        Change User
      </button>
      <hr />
      {/* <HeaderMemo user={user} /> */}
      <HeaderMemo count={count} />
      <hr />
      {/* <TaxComp taxData={taxData} /> */}
      {/* <TaxComp taxData={taxDataState} /> */}
      {/* <TaxComp taxData={taxData1} /> */}

      <hr />
      {/* <UseRefComp /> */}
      <hr />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input type="text" value={search} onChange={handleSearch} />
      </div>
      {/* <Card data={filteredData} /> */}
      {/* <Card data={filteredMemoData} /> */}
      <hr />
      {/* <p>Expensive Calculation : {calculation}</p> */}
      <p>Expensive Calculation Memo : {calculationMemo}</p>
      <hr />
      {/* <ClearButton handleClear={handleClear} /> */}
      <ClearButton handleClear={handleClearCallback} />
    </div>
  );
}

export default App;

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 10000000000; i++) {
    num += 1;
  }
  console.log("Calculating completed...");
  return num;
};

const expensiveCalculationMemo = (num) => {
  console.log("Calculating Memo...");
  for (let i = 0; i < 10000000; i++) {
    num += 1;
  }
  console.log("Calculating memo completed...");
  return num;
};

//!  React'in useCallback Hook'unu React'in useMemo Hook'u ile karıştırmayalım. useCallback, işlevleri hafızaya almak için kullanılırken, useMemo, değerleri hafızaya almak için kullanılır.

//!  React'in useCallback Hook'unu React'in memo API'si ile karıştırmayalım. useCallback, işlevleri not almak için kullanılırken, React memo, yeniden oluşturmaları önlemek için React bileşenlerini sarmak için kullanılır.

//!  React'in useRef Hook'unu React'in useState hooku ile karıştırmayalım. useRef, component’in tekrar render olmasını tetiklemez, useState, bir değişken değiştiğinde useState component’in tekrar render olmasını tetikler.
