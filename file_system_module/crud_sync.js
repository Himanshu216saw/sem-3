const fs = require("fs");

// 1. Create
fs.writeFileSync("notes.txt", "Created using sync CRUD\n");

// 2. Update
fs.appendFileSync("notes.txt", "Updated using appendFileSync\n");

// 3. Read
const data = fs.readFileSync("notes.txt", "utf8");
console.log("Read Data:", data);

// 4. Delete
fs.rmSync("notes.txt");
console.log("File deleted successfully: notes.txt");