import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

// göndereceğimiz stateleri burada loginprovider sarmallayıcısı içinde oluşturduk.

//! 1) Creating Context
export const LoginContext = createContext();

//! 2) Provider
const LoginProvider = ({ children }) => {
  // props.children
  const [user, setUser] = useState({ email: "", password: "" });
  const values = { user, setUser };
  // obje sayısı fazla ise key yapılıp da gönderilebilir. buradaki gibi. user ve setuser values ismiyle gönderildi.
  return (
    <LoginContext.Provider value={values}>{children}</LoginContext.Provider>
  );
};

// ! 3) Consuming
// uselogincontext hook olduğu için burada use ile başlamak zorunda. burada usecontext içinde logincontext bilgilerini döndürüyoruz. mesela navbarda user ve setuser bilgilerini çekerken kullandık.
export const useLoginContext = () => {
  return useContext(LoginContext);
};

export default LoginProvider;
