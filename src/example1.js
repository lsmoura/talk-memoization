import fibb from "./fibonacci";
import ttime from "./ttime";
import memoize from "./memoize";

const memoizedFibb = memoize(fibb);

ttime(() => {
  console.log('40 => ', memoizedFibb(40));
});

ttime(() => {
  console.log('40 => ', memoizedFibb(40));
});

ttime(() => {
  console.log('41 => ', memoizedFibb(41));
});

ttime(() => {
  console.log('40 => ', memoizedFibb(40));
});
