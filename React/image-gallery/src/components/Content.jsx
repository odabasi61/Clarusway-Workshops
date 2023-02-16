const Content = ({ photo, img }) => {
  return (
    <div className="card">
      <div className="image">
        <img src={img} alt="" />
      </div>
      <p className="author">{photo}</p>
    </div>
  );
};

export default Content;
