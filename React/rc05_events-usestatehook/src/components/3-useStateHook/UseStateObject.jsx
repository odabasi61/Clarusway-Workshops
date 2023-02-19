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

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Ahmet",
    surname: "CAN",
    salary: 10000,
  });

  const [isUpperCase, setIsUpperCase] = useState(false);

  const handleNameToggle = () => {
    setIsUpperCase(!isUpperCase);
    setPerson({
      name: isUpperCase ? person.name.toLowerCase() : person.name.toUpperCase(),
      salary: person.salary,
      surname: isUpperCase
        ? person.surname.toLowerCase()
        : person.surname.toUpperCase(),
    });
  };

  const handleSalaryIncrease = () => {
    setPerson({ ...person, salary: person.salary + 500 });
  };

  const handleSalaryDecrease = () => {
    if (person.salary > 0) {
      setPerson({ ...person, salary: person.salary - 500 });
    }
  };

  return (
    <div className="container text-center mt-5">
      <h2 className="text-danger">Use State Object</h2>
      <h3 className="display-4">
        {person.name} {person.surname}
      </h3>
      <h1 className="display-4">Salary: {person.salary}</h1>
      <div className="container d-flex justify-content-center gap-3">
        <button onClick={handleSalaryIncrease} className="btn btn-success">
          Inc. Salary
        </button>
        <button onClick={handleNameToggle} className="btn btn-danger">
          Toggle
        </button>
        <button onClick={handleSalaryDecrease} className="btn btn-warning">
          Dec. Salary
        </button>
      </div>
    </div>
  );
};

export default UseStateObject;
