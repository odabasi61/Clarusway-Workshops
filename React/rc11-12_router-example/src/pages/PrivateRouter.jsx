import { Navigate, Outlet } from "react-router-dom";

//? Bu kisim gercekte Global State'lerde tutulur. (Context API, Redux, Mobx)
//! const isSigned = userContext(jwt)

const isSigned = true;

const PrivateRouter = () => {
  return <div>{isSigned ? <Outlet /> : <Navigate to="/login" />}</div>;
};

export default PrivateRouter;
