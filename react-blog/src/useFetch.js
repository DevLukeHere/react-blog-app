import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    fetch(url, { signal: abortCont.signal })
      .then(respond => {
        if (!respond.ok) {
          throw Error("Failed to fetch data from resource!");
        }
        return respond.json()
      })
      .then(data => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch(err => {
        if (err.name === 'AbortError'){
          console.log('fetch aborted')
        } else {
          setIsPending(false);
          setError(err.message);
        }
      })
    
      return () => abortCont.abort();
  }, [url]);

  return { data, isPending, error }
}

export default useFetch