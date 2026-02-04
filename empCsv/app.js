const fs = require("fs");
const path = require("path");

const csvPath = path.join(__dirname, "employees.csv");
const jsonPath = path.join(__dirname, "employees.json");

function addEmployeeToCSV(emp) {
  const row = `\n${emp.id},${emp.name},${emp.address},${emp.salary}`;
  fs.appendFileSync(csvPath, row, "utf-8");
  console.log("Employee added to CSV file");
}

function findEmployeeFromCSV(id) {
  const data = fs.readFileSync(csvPath, "utf-8");
  const lines = data.split("\n").slice(1);

  for (const line of lines) {
    if (!line.trim()) continue;
    const [eid, name, address, salary] = line.split(",");
    if (Number(eid) === id) {
      const emp = { id: Number(eid), name, address, salary: Number(salary) };
      console.log("Employee Found:", emp);
      return emp;
    }
  }

  console.log("Employee not found");
  return null;
}

function saveCSVToJSON() {
  const data = fs.readFileSync(csvPath, "utf-8");
  const lines = data.split("\n").slice(1);

  const employees = lines
    .filter(line => line.trim() !== "")
    .map(line => {
      const [id, name, address, salary] = line.split(",");
      return { id: Number(id), name, address, salary: Number(salary) };
    });

  fs.writeFileSync(jsonPath, JSON.stringify(employees, null, 2), "utf-8");
  console.log("CSV data saved to employees.json");
}

function readEmployeesFromJSON() {
  const data = fs.readFileSync(jsonPath, "utf-8");
  const employees = JSON.parse(data);
  console.log("Employees from JSON:", employees);
}

const newEmployee = { id: 4, name: "Amit", address: "Tumkur", salary: 50000 };

addEmployeeToCSV(newEmployee);
findEmployeeFromCSV(2);
saveCSVToJSON();
readEmployeesFromJSON();
