function removeFirst<T, Rest extends readonly unknown[]>(
  arr: [T, ...Rest]
): Rest {
  const [, ...rest] = arr;
  return rest;
}

// const arr: [number, number, string]
const arr = removeFirst([1, 2, 3, "foo"]);
