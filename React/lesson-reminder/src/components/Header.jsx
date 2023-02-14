import cw from "../img/cw.png";

const Header = () => {
  return (
    <div className="header">
      <div className="image-div">
        <img src={cw} alt="clarusway logo" />
      </div>
      <h2>Clarusway</h2>
    </div>
  );
};

export default Header;
