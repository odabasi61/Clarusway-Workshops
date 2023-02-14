import { data } from "./data";
import Header from "./components/Header";
import Lesson from "./components/Lesson";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="lesson">
        <h1
          style={{
            marginTop: "0",
            textAlign: "center",
            padding: "1rem 0",
            color: "white",
            fontFamily: "Rubik Vinyl",
          }}
        >
          Lesson Reminder
        </h1>
        <div className="lesson-card">
          {data.map(({ name, time, image }) => (
            <Lesson name={name} time={time} image={image} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
