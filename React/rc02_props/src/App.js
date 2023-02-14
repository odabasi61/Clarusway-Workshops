import Person from "./components/Person";
import data from "./data";

function App() {
  return (
    // aşağıda jsx içerisinde js kodu yazabilmek için süslü parantes açmalıyız. map metodunda olduğu gibi
    <div>
      <Person
        name="Jason"
        img="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg"
        tel="999 222 333"
      />
      <Person
        name="Hasan"
        img="https://cdn.pixabay.com/photo/2017/02/04/12/25/man-2037255_960_720.jpg"
        tel="999 222 333"
      />
      <Person
        name="Ahmet"
        img="https://cdn.pixabay.com/photo/2015/01/08/18/26/man-593333_960_720.jpg"
        tel="999 222 333"
      />
      {data.map((item) => (
        <Person name={item.name} img={item.img} tel={item.tel} />
      ))}
    </div>
  );
}

export default App;
