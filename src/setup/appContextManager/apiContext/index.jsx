import React, { createContext, useState } from "react";
import Response from "../../api/Response";
import axios from "axios";
import { APIFetch } from "../../api/apiConfig";
import Error from "../../api/error";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const apiContext = createContext(null);

function ApiProvider({ children }) {
  const [getPending, setGetPending] = useState(false);
  const [getAllPending, setGetAllPending] = useState(false);

  const [postPending, setPostPending] = useState(false);
  const [deletePending, setDeletePending] = useState(false);
  const [putPending, setPutPending] = useState(false);
  const [patchPending, setPatchPending] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const _errorHandler = (error) => {
    if (error?.response?.status == 401) {
      localStorage.removeItem("_token")
      localStorage.removeItem("_auth")
      navigate(`/`);
      return;
    } else if (error?.message == "Network Error") {
      toast.info("لطفا اتصال خود را به اینترنت بررسی کنید");
      return;
    } else if (error?.response?.status.toString().startsWith("5")) {
      toast.info("ایراد سرور");
      return;
    }
    return new Error(error);
  };

  const getApi = async (
    URL,
    callbackResponse = () => {},
    callbackErorr = () => {},
    hasLoading = true
  ) => {
    setGetPending(hasLoading);

    const api = APIFetch();
    await api
      .get(URL)
      .then((res) => {
        const response = new Response(res);
        callbackResponse(response);
      })
      .catch((err) => {
   
        const error = _errorHandler(err);
        error && callbackErorr(error);
      })
      .finally(() => {
        setGetPending(false);
      });
  };

  const getAllApi = async (
    URLS,
    callbackResponse = () => {},
    callbackErorr = () => {},
    hasLoading = true
  ) => {
    setGetAllPending(hasLoading);
    const api = APIFetch();
    await axios
      .all(URLS.map((endpoint) => api.get(endpoint)))
      .then((res) => {
        var responseList = [];
        res.forEach(element => {
          responseList.push(new Response(element))
        });
        callbackResponse(responseList);
      })
      .catch((err) => {
        const error = _errorHandler(err);
        error && callbackErorr(error);
      })
      .finally(() => {
        setGetAllPending(false);
      });
  };

  const postApi = async (
    URL,
    body,
    callbackResponse = () => {},
    callbackErorr = () => {},
    hasLoading = true
  ) => {
    setPostPending(hasLoading);
    const api = APIFetch();
    await api
      .post(URL, body)
      .then((res) => {
        const response = new Response(res);
        callbackResponse(response);
      })
      .catch((err) => {

        const error = _errorHandler(err);
        error && callbackErorr(error);
      })
      .finally(() => {
        setPostPending(false);
      });
  };

  const deleteApi = async (
    URL,
    callbackResponse = () => {},
    callbackErorr = () => {},
    hasLoading = true
  ) => {
    setDeletePending(hasLoading);
    const api = APIFetch();
    await api
      .delete(URL)
      .then((res) => {
        const response = new Response(res);
        callbackResponse(response);
      })
      .catch((err) => {
        const error = _errorHandler(err);
        error && callbackErorr(error);
      })
      .finally(() => {
        setDeletePending(false);
      });
  };

  const putApi = async (
    URL,
    body,
    callbackResponse = () => {},
    callbackErorr = () => {},
    hasLoading = true
  ) => {
    setPutPending(hasLoading);
    const api = APIFetch();
    await api
      .put(URL, body)
      .then((res) => {
        const response = new Response(res);
        callbackResponse(response);
      })
      .catch((err) => {
        const error = _errorHandler(err);
        error && callbackErorr(error);
      })
      .finally(() => {
        setPutPending(false);
      });
  };

  const patchApi = async (
    URL,
    body,
    callbackResponse = () => {},
    callbackErorr = () => {},
    hasLoading = true
  ) => {
    setPatchPending(hasLoading);
    const api = APIFetch();
    await api
      .patch(URL, body)
      .then((res) => {
        const response = new Response(res);
        callbackResponse(response);
      })
      .catch((err) => {
        const error = _errorHandler(err);
        error && callbackErorr(error);
      })
      .finally(() => {
        setPostPending(false);
      });
  };

  return (
    <apiContext.Provider
      value={{
        getPending: getPending,
        postPending: postPending,
        deletePending: deletePending,
        patchPending: patchPending,
        putPending: putPending,
        getAllPending : getAllPending,
        
        setGetPending,
        setPostPending,
        setDeletePending,
        setPutPending,
        setPatchPending,

        getApi,
        getAllApi,
        postApi,
        deleteApi,
        putApi,
        patchApi,
      }}
    >
      {children}
    </apiContext.Provider>
  );
}

export default ApiProvider;
