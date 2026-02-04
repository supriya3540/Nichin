import fs from 'fs';
const content="An apple a day keeps the doctor away.";
fs.writeFileSync('apple.txt',content);
console.log("File created successfully.");   
//asynchronous way
fs.writeFile('apple.txt',content,(err)=>{
    if(err) {
        console.error("Error writing file:",err);}
    else {
        console.log("File written successfully.");} });
fs.appendFile('apple.txt',"f no apple go to doctor" ,(err)=>{
    if(err) {
        console.error("Error appending to file:",err);} 
    else {
        console.log("Content appended successfully.");} });
const data=fs.readFileSync('apple.txt','utf8');
console.log("File content (synchronous):",data);        