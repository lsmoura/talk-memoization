function arrayEquals(arr0, arr1) {
  if (arr0 === arr1) return true;
  if (!Array.isArray(arr0) || !Array.isArray(arr1)) return false;
  if (arr0.length !== arr1.length) return false;
  for (let i = 0; i < arr0.length; i++) {
    if (arr0[i] !== arr1[i]) return false;
  }
  return true;
}

function memoize(fn) {
  let memoizedArgs = null;
  let memoizedResult = null;
  return function(...args) {
    if (!arrayEquals(args, memoizedArgs)) {
      memoizedResult = fn(...args);
      memoizedArgs = args;
    }

    return memoizedResult;
  };
}

export default memoize;
