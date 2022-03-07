import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const abort = new AbortController();
    async function getData() {
      try {
        let response = await fetch(url, { signal: abort.signal });
        if (!response.ok) {
          throw Error("someting wrong");
        }
        response = await response.json();
        setData(response);
        setLoading(false);
      } catch (err) {
        if (err.name === 'AbortError') {
          console.log('aborted')
        }
        else {
          setLoading(false);
          setError(err.message);
        }
      }
    }

    getData();
  }, [url]);
  return { data, isLoading, error };
};

export default useFetch;
