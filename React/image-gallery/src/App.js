import Header from "./components/Header";
import Content from "./components/Content";
import data from "./data";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        {data.map(({ photographer, src: { large } }) => (
          <Content photo={photographer} img={large} />
        ))}
      </div>
    </div>
  );
}

export default App;
