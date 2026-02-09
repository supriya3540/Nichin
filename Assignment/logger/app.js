const { log } = require("./logger");

let i = 0;
setInterval(() => {
  log("Test log " + i++);
}, 10);
