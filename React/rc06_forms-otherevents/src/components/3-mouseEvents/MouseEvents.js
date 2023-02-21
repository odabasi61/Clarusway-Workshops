import { useState } from "react";

const MouseEvent = () => {
  //? let visible = false
  const [visible, setVisible] = useState(false);
  const [toggle, setToggle] = useState(false);

  const [coordX, setCoordX] = useState();
  const [coordY, setCoordY] = useState();

  console.log(toggle);

  const handleDoubleClick = (e) => {
    setToggle(!toggle);
    // console.log(toggle) //? State'in guncellenmis degeri burada gorulemeyebilir.Cunku react'da state'ler toplu bir sekilde ve async olarak guncellenir.

    toggle
      ? (e.target.className = "bg-success text-light w-50 p-4 my-4")
      : (e.target.className = "bg-danger text-light w-50 p-4 my-4");
  };

  //? mouseMove event
  const handleMouseMove = (e) => {
    // setCoordX(e.nativeEvent.offsetX) //! Göreceli
    // setCoordY(e.nativeEvent.offsetY)
    setCoordX(e.pageX);
    setCoordY(e.pageY);
  };

  return (
    <div className="container text-center d-flex flex-column align-items-center mt-4">
      <h2 className="text-danger">MOUSE EVENTS</h2>

      <div
        id="todo-1"
        className="bg-success text-light w-50 p-4"
        onMouseOver={() => setVisible(true)}
        onMouseOut={() => setVisible(false)}
      >
        todo item 1
      </div>

      {/* Conditional Rendering */}
      {visible && <div>Mouse Events</div>}

      <div
        id="todo-2"
        className="bg-success text-light w-50 p-4 mt-4"
        onDoubleClick={handleDoubleClick}
      >
        todo item 2
      </div>

      <div
        id="todo-3"
        className="bg-success text-light w-50 p-4 my-4"
        onMouseMove={handleMouseMove}
      >
        todo item 3
      </div>

      <p>X and Y</p>
      <p className="text-danger fw-bold">
        {coordX} {coordY}
      </p>
    </div>
  );
};

export default MouseEvent;
