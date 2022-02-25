import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    async function getData() {
      try {
        let response = await fetch(url);
        if (!response.ok) {
          throw Error("someting wrong");
        }
        response = await response.json();
        setData(response);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    }

    getData();
  }, [url]);
  return { data, isLoading, error };
};

export default useFetch;
