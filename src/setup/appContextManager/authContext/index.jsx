import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";
import { APIFetch } from "../../api/apiConfig";
import { loginURL, LogoutURL } from "../../api/apiRoutes";
import useSessionStorage from "../../hooks/useSessionStorage";
import Response from "../../api/Response";

export const AuthContext = createContext(null);
export const InitailAuthParams = {
  hasAuth: false,
  access_token: null,
  fullname: null,
  userId: null,
  expiresIn : null,
  role: null
};
export const HomeUrl = "/";

const AuthServiceProvider = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [auth , setAuth] = useLocalStorage( "_auth", InitailAuthParams);
  const [token,setToken] = useLocalStorage("_token",null)

  const login = async (body, callbackResponse = () => {}, callbackError=()=>{}) => {
    setLoading(true);
   
    const api = APIFetch();
    await api
      .post(loginURL, body)
      .then((res) => {  
        const response = new Response(res);
        localStorage.setItem("_token",response.result.token);
        const {fullName , userId ,expiresIn} = response.result;
        setAuth({
          hasAuth:true,
          fullName : fullName,
          userId : userId,
          expiresIn : expiresIn,
          role : body.role
        })
        callbackResponse(response);
        setLoading(false);
      })
      .catch((err) => {
        console.warn(err);
        const response = new Response(err?.response);
        callbackError(response);
        setLoading(false);
      });
  };

  
  const logOut = async (callbackResponse = () => {},callbackError=()=>{}) => {
    setLoading(true);
    const api =  APIFetch();
    await api
      .delete(LogoutURL)
      .then((res) => {
        const response = new Response(res);
        setAuth({ hasAuth: false });
        localStorage.removeItem("_token");
        callbackResponse(response);
        setLoading(false);
      })
      .catch((err) => {
        const response = new Response(err?.response);
        callbackError(response)
        setLoading(false);
      });
  };

  const goHome = (role) => {
    navigate("/"+role);
  };

  const goLogin = ()=>{
    navigate("/")
  }
  return (
    <AuthContext.Provider
      value={{
        hasAuth: auth.hasAuth,
        token: auth.access_token,
        loading: loading,
        user: auth,
        login,
        logOut,
        goHome,
        goLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthServiceProvider;
