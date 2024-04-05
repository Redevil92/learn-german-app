import axios from "../plugins/axios/axiosConfig";
import { useState, useCallback } from "react";

const useHttp = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = useCallback(
    async (
      url: string,
      params: any,
      { handleSuccessResponse: Function, handleErrorResponse: Function }
    ) => {
      setLoading(true);
      try {
        const response = await axios(url, params);
        if (response.data.status >= 200 && response.data.status < 400) {
          if (handleSuccessResponse) {
            const transformedData = handleSuccessResponse(data);
            setData(transformedData);
          }
        } else {
          throw new Error("Request Error!");
        }
      } catch (error) {
        setError(error.message || error);
        handleErrorResponse && handleErrorResponse(error);
      }
      setLoading(false);
    },
    []
  );

  return {
    loading: loading,
    error: error,
    data: data,
    getData: getData,
  };
};

export default useHttp;
