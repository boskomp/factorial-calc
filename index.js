var factorial = function (n) {
  if (n >= 0) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
  } else {
    return NaN;
  }
};
module.exports = factorial;
