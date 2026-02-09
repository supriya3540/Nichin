const fs = require("fs");
const path = require("path");

const inputFile = path.join(__dirname, "data.csv");
const outputFile = path.join(__dirname, "data.json");

function csvToJson(csv) {
  const lines = csv.trim().split("\n");
  const headers = lines[0].split(",");

  const result = [];

  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(",");
    const obj = {};

    headers.forEach((header, index) => {
      obj[header.trim()] = values[index]?.trim();
    });

    result.push(obj);
  }

  return result;
}

fs.readFile(inputFile, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading CSV file:", err.message);
    return;
  }

  const jsonData = csvToJson(data);

  fs.writeFile(outputFile, JSON.stringify(jsonData, null, 2), (err) => {
    if (err) {
      console.error("Error writing JSON file:", err.message);
      return;
    }
    console.log("CSV successfully converted to JSON!");
  });
});
