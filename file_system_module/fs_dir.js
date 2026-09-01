const fs = require("fs");

// Create a directory
fs.mkdir("./myFolder/myFolder1/myFolder2/my", { recursive: true }, (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Directory created successfully");

  // Create a file inside the directory
  fs.writeFile("./myFolder/script.js", "hello", (err) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log("File created successfully");

    // Read the file
    fs.readFile("./myFolder/script.js", "utf8", (err, data) => {
      if (err) {
        console.log(err);
        return;
      }

      console.log("File content:", data);
    });
  });
});
