import courses from "../data";

const Courses = () => {
  return (
    <div className="container text-center p-4">
      <h1>OUR COURSES</h1>
      <div className="row justify-content-center gap-4 align-items-center mt-4">
        {courses.map((course) => {
          const { id, img, name, text } = course;
          return (
            <div className="col d-flex justify-content-center" key={id}>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={img}
                  style={{ width: "50%" }}
                  className="card-img-top m-auto"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{name}</h5>
                  <p className="card-text">{text}</p>
                  <button className="btn btn-danger">Detail</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Courses;
