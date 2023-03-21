import React from "react";

const Header = ({ user }) => {
  console.log("Render => Header Componenti");
  return (
    <div className="text-danger text-center">Header Componenti {user}</div>
  );
};

export default Header;
