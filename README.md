# JavaScript & Node.js Mini Projects 🚀

This repository contains a collection of mini projects and lab exercises built using **HTML, CSS, JavaScript (Vanilla JS)** and **Node.js (fs module)**.  
These projects demonstrate core concepts like **DOM Manipulation, Higher Order Functions (map, filter, reduce), File Handling with fs, CSV to JSON conversion**, and basic UI interactions.

---

## 📁 Projects Included

### 1️⃣ Employee Management App (DOM Manipulation)
**Tech Stack:** HTML, CSS, JavaScript  
**Features:**
- Display list of employees in a table  
- Add new employee  
- Update existing employee  
- Delete employee  
- Render employee records dynamically using DOM  
- No jQuery (pure Vanilla JS)

**Concepts Used:**
- DOM APIs (`getElementById`, `addEventListener`)  
- Event handling  
- Dynamic table rendering  

---

### 2️⃣ Higher Order Functions Demo (map, dictionary, table rendering)
**Tech Stack:** HTML, JavaScript  
**Features:**
- Convert string arrays to uppercase using `map()`  
- Store transformed data in a dictionary (JS object)  
- Render employee objects as HTML table rows using `map()`  
- One-page UI demo

**Concepts Used:**
- Higher Order Functions (`map`)  
- Functional programming basics  
- Object (dictionary) usage  
- DOM manipulation  

---

### 3️⃣ Calculator App (UI + JavaScript)
**Tech Stack:** HTML, CSS, JavaScript  
**Features:**
- Takes two numbers from the user  
- Supports basic operations (Add, Subtract, Multiply, Divide)  
- Displays result using `alert()` dialog  

**Concepts Used:**
- Form inputs  
- Event handling  
- Basic JavaScript logic  
- UI interaction  

---

### 4️⃣ Node.js File Handling Project (CSV → JSON)
**Tech Stack:** Node.js, fs module  
**Files:**
- `employees.csv` – stores employee records in CSV format  
- `employees.json` – stores employee records in JSON format  
- `app.js` – Node.js program

**Features:**
- Add a new employee record to an existing CSV file  
- Find an employee from the CSV file  
- Convert CSV data into JSON format and store in `employees.json`  
- Read employee data from `employees.json`  

**Concepts Used:**
- Node.js `fs` module  
- File read/write operations  
- CSV parsing  
- JSON serialization (`JSON.stringify`, `JSON.parse`)  

---

## ▶️ How to Run the Projects

### Frontend Projects (HTML + JS)
1. Open the `.html` file in a browser  
2. Use the UI buttons to interact with the app  

### Node.js Project
1. Make sure Node.js is installed  
2. Create `employees.csv` in the same folder as `app.js`  
3. Run the program:
   ```bash
   node app.js
