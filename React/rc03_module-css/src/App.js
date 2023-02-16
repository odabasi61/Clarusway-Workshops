import Card from "./components/card/Card";
import data from "./utils/data";

function App() {
  return (
    <>
      {data.map(({ id, language, img, btnName }) => (
        <Card key={id} lang={language} img={img} btn={btnName} />
      ))}
    </>
  );
}

export default App;
