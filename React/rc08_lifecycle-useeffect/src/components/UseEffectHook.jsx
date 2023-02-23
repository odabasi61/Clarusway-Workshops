import React, { useEffect, useState } from "react";

//?===============================================
//?                USEEFFECT HOOK
//?===============================================
//! UseEffect Hook'u fonksiyonel componenler'te yan etkileri
//! (side effect) gerceklestirmek icin kullanilir.
//! componentDidMount,componentDidUpdate,ve componentWillUnmount
//! metotlarinin bir birlesimi gibi dusunulebilir.

//! useEffect(() => {
//*   /* ComponentDidMount code */
//*      Kodlar
//! }, []);

//! useEffect(() => {
//*   */ ComponentDidMount + componentDidUpdate code */
//! }, [state1, state2]);

//! useEffect(() => {
//?   /* ComponentDidMount code */
//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, []);

//! useEffect(() => {
//*   //* componentDidMount code + componentDidUpdate code */

//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, [state1, state2]); //? Dependency Array

const UseEffectHook = () => {
  const [count, setCount] = useState(0);

  //   useEffect(() => {
  //     //! fetch, async-await ,localStorage, setTimeout, setInterval();
  //     console.log("componentDidMount")
  //     setTimeout(() => alert("Data Fetched"), 1000)
  //   }, []) //? Dependecy array bos

  //   useEffect(() => {
  //     console.log("componentDidMount + componenentDidUpdate")
  //     setTimeout(() => alert("Data Fetched"), 1000)
  //   }, [count]) //? Dependecy array = count state

  const fetchData = () => {
    console.log("Data Fetching");
  };

  useEffect(() => {
    console.log("MOunting");
    const timer = setInterval(fetchData, 1000);
    return () => {
      clearInterval(timer);
      console.log("Unmounting");
    };
  }, []);

  console.log("Rendering");

  return (
    <div className="container text-center">
      <h1 className="text-danger">LIFECYCLE METHODS</h1>
      <h3>COUNT={count}</h3>
      <button className="btn btn-info" onClick={() => setCount(count + 1)}>
        INC
      </button>
    </div>
  );
};

export default UseEffectHook;
