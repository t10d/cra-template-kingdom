type token = string;

function createCache<T>(initialValue: T) {
  let cache = initialValue ?? undefined;

  const setCache = (newValue: NonNullable<T> | undefined) => {
    cache = newValue;
  };

  const getCache = () => cache;

  return { getCache, setCache };
}

const localToken = localStorage.getItem('token');

const cache = createCache<token>(localToken ?? '');

export default cache;
