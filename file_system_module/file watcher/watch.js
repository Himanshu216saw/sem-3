const fs = require('fs');   //common js

const filePath = '../content.txt';
const watcher = fs.watch(filePath, (eventType, filename) => {
  console.log('Event:', eventType);
  console.log('Filename:', filename);
});

setTimeout(() => {
  watcher.close();
  console.log('File watching closed');
}, 5000);