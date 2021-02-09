function ttime(fn) {
  console.time();
  fn();
  console.timeEnd();
}

export default ttime;