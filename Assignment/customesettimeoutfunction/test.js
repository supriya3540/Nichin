const mySetTimeoutBusy = require("./busytimeOut");
const mySetTimeout = require("./intervalTimeOut");

console.log("Start");

mySetTimeoutBusy(() => {
  console.log("Busy wait timeout executed (2s)");
}, 2000);

mySetTimeout(() => {
  console.log("Interval-based timeout executed (2s)");
}, 2000);

console.log("End");
