function mySetTimeoutBusy(callback, delay) {
  const start = Date.now();
  while (Date.now() - start < delay) {}
  callback();
}

module.exports = mySetTimeoutBusy;
