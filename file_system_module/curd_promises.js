const fs = require("fs");
const fsPromises = require("fs/promises");

// ------------------- Sync CRUD -------------------
function syncCrud() {
  const fileName = "notes_sync.txt";

  // Create
  fs.writeFileSync(fileName, "Hello from sync\n");
  console.log("Sync: file created");

  // Update
  fs.appendFileSync(fileName, "Updated using sync\n");
  console.log("Sync: file updated");

  // Read
  const data = fs.readFileSync(fileName, "utf8");
  console.log("Sync: read data\n", data);

  // Delete
  fs.rmSync(fileName);
  console.log("Sync: file deleted successfully:", fileName);
}

// ------------------- Async CRUD -------------------
async function asyncCrud() {
  const fileName = "notes_async.txt";

  // Create
  await fsPromises.writeFile(fileName, "Hello from async\n");
  console.log("Async: file created");

  // Update
  await fsPromises.appendFile(fileName, "Updated using async\n");
  console.log("Async: file updated");

  // Read
  const data = await fsPromises.readFile(fileName, "utf8");
  console.log("Async: read data\n", data);

  // Delete
  await fsPromises.rm(fileName);
  console.log("Async: file deleted successfully:", fileName);
}

// Run both
syncCrud();
asyncCrud().catch((err) => {
  console.error("Async error:", err);
});