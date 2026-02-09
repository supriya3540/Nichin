function mySetTimeout(callback, delay) {
  const start = Date.now();
  const timer = setInterval(() => {
    if (Date.now() - start >= delay) {
      clearInterval(timer);
      callback();
    }
  }, 10);
}

module.exports = mySetTimeout;
