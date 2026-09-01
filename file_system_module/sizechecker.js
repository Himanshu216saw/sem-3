import fs from 'fs'

const MAX_FILE_SIZE = 500 * 1024; // 500KB in bytes

function checkFileSize(filePath) {
    fs.stat(filePath, (err, stats) => {
        if (err) {
            console.log("Error reading file:", err.message);
            return;
        }

        const fileSize = stats.size;

        if (fileSize > MAX_FILE_SIZE) {
            console.log(" File size exceed - File size:", Math.round(fileSize / 1024), "KB");
        } else {
            console.log(" Successfully - File size:", Math.round(fileSize / 1024), "KB");
            performCRUD(filePath);
        }
    });
}

// CRUD Operations
function performCRUD(filePath) {
    // CREATE - Read existing file content
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            console.log("Error reading file:", err.message);
            return;
        }
        console.log("\n READ Operation - File content:");
        console.log(data);

        // UPDATE - Append content to file
        const newContent = "\n--- Updated at " + new Date().toLocaleString() + " ---";
        fs.appendFile(filePath, newContent, (err) => {
            if (err) {
                console.log("Error updating file:", err.message);
                return;
            }
            console.log("\n UPDATE Operation - Content appended successfully");
        });
    });
}

// Check file size
checkFileSize("notes.txt");