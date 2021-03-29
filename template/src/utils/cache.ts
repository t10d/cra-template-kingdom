function createCache<T>(initialValue: T) {
  let cache = initialValue ?? undefined;

  const setCache = (newValue: NonNullable<T> | undefined) => {
    cache = newValue;
  };

  const getCache = () => cache;

  return { getCache, setCache };
}

type token = string;

const cache = createCache<token>('');

export default cache;
