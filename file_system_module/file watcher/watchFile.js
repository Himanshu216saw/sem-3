const fs = require('fs');

const filePath = '../content.txt';

fs.watchFile(filePath, { interval: 1000 }, (curr, prev) => {
  if (curr.mtimeMs !== prev.mtimeMs) {
    console.log('File changed');
    console.log('Previous:', prev.mtimeMs);
    console.log('Current:', curr.mtimeMs);
  }
});

setTimeout(() => {
  fs.unwatchFile(filePath);
  console.log('File watching closed');
}, 5000);