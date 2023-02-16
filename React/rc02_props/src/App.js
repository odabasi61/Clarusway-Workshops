import Person from "./components/Person";
import data from "./data";

function App() {
  return (
    // aşağıda jsx içerisinde js kodu yazabilmek için süslü parantes açmalıyız. map metodunda olduğu gibi
    <div className="app">
      {data.map((item) => (
        <Person name={item.name} img={item.img} tel={item.tel} />
      ))}
    </div>
  );
}

export default App;
