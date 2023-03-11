import { Outlet, Navigate } from "react-router-dom"
import { useLoginContext } from "../context/LoginProvider"

const PrivateRouter = () => {
  //? Consuming
  const { user } = useLoginContext()

  return user?.email && user?.password ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRouter
