//* JSX'de stillendirme farklı şekillerde yapılabilir.
//* 1-) Harici CSS sayfalari ile (index.css, app.css v.b)
//* 2-) Inline stillendirme ile (style = {{color:"red"}})
//* 3- )Local veya global degiskenler ile.

//! NOTLAR:
//* Stillendirme icin property-value(object) yapisi kullanilir.
//* property isimlerinde camelCase kullanimalidir.
//* class isimleri icin className kullanilir.
//* Material UI, Styled Component, Sass, Bootstrap v.b harici kutuphaneler kullanilabilir.

// localden aldığımız resimleri import etmemiz gerekiyor buradaki zürafa resmi gibi
// ancak public klasöründe olsaydı import etmeden yani eski yöntemle erişilebilir

import giraffe from "./img/giraffe.jpg";
import "./Content.css";

const Content = () => {
  // local variable
  const pStyle = {
    fontFamily: "Tahoma",
    fontSize: "1.5rem",
    lineHeight: "1.5",
    color: "orangered",
  };

  const imgStyle = {
    display: "block",
    margin: "1rem auto",
    width: "400px",
  };

  return (
    //jsx
    <div className="content-div">
      {/* inline styling */}
      <h2 style={{ color: "red", backgroundColor: "dodgerblue" }}>
        react content
      </h2>
      {/* local or global variable */}
      <p style={pStyle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        voluptatem.
      </p>
      <img
        style={imgStyle}
        src="https://cdn.pixabay.com/photo/2022/03/11/10/55/couple-7061929_960_720.jpg"
        alt="nice pic"
      />
      <img style={imgStyle} src={giraffe} alt="giraffe" />

      {/* outline styling */}
      <p className="par">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nihil
        voluptate culpa quia nesciunt necessitatibus beatae veniam delectus
        praesentium vel.
      </p>
      <p className="par">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nihil
        voluptate culpa quia nesciunt necessitatibus beatae veniam delectus
        praesentium vel.
      </p>
    </div>
  );
};

export default Content;
