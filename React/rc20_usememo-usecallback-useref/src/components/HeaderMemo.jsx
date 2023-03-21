import React, { memo } from "react";

//arrow func larda 1.kullanım
// const HeaderMemo = memo(({user}) => {
//   console.log("Render => HeaderMemo componenti")
//   return <div className="text-center text-success">HeaderMemo Componenti : {user}</div>;
// });

// export default HeaderMemo;

// memo 2.kullanım
const HeaderMemo = ({ count }) => {
  console.log("Render => HeaderMemo componenti");
  return (
    <div className="text-center text-success">
      HeaderMemo Componenti : {count}
    </div>
  );
};

export default memo(HeaderMemo);
