import React, { memo } from "react";

const ClearButton = ({ handleClear }) => {
  console.log("Render => ClearBtn component ");
  return (
    <div>
      ClearButton
      <button className="btn btn-success m-4" onClick={handleClear}>
        Clear Button
      </button>
    </div>
  );
};

export default memo(ClearButton);
